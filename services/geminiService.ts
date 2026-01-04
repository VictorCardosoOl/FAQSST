
import { GoogleGenAI } from "@google/genai";
import { FAQ_DATA } from '../constants';
import { FAQItem } from '../types';

export const askGemini = async (userQuestion: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    // RAG Simplificado: Filtragem de contexto por relevância de palavras-chave
    const queryTerms = userQuestion.toLowerCase().split(' ').filter(t => t.length > 3);
    const relevantArticles = FAQ_DATA.filter(item => {
      const content = (item.question + ' ' + item.tags.join(' ')).toLowerCase();
      return queryTerms.some(term => content.includes(term));
    });

    // Se não encontrar nada específico, envia os 3 mais importantes como base
    const finalContext = relevantArticles.length > 0 ? relevantArticles : FAQ_DATA.slice(0, 3);

    const contextString = finalContext.map((item: FAQItem) => 
      `ARTIGO: ${item.question}\nRESUMO: ${item.answer}`
    ).join('\n---\n');

    const systemInstruction = `
      Você é o Curador de Conhecimento da TeamWiki.
      Sua personalidade é: Elegante, Precisa e Profissional.
      
      INSTRUÇÕES:
      1. Use APENAS o contexto fornecido abaixo para responder.
      2. Se a resposta não estiver no contexto, peça gentilmente para o usuário contatar o gestor do módulo.
      3. Mantenha as respostas curtas (máximo 3 parágrafos) e use um tom editorial.
      
      CONTEXTO:
      ${contextString}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuestion,
      config: {
        systemInstruction,
        temperature: 0.3,
      }
    });

    return response.text || "Lamento, não consegui processar essa informação no momento.";
  } catch (error) {
    console.error("Gemini Critical Error:", error);
    return "Falha na conexão com o cérebro editorial.";
  }
};
