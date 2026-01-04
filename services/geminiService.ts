
import { GoogleGenAI } from "@google/genai";
import { FAQ_DATA } from '../constants';
import { FAQItem } from '../types';

export const askGemini = async (userQuestion: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const queryTerms = userQuestion.toLowerCase().split(' ').filter(t => t.length > 3);
    const relevantArticles = FAQ_DATA.filter(item => {
      const content = (item.question + ' ' + item.tags.join(' ')).toLowerCase();
      return queryTerms.some(term => content.includes(term));
    });

    const finalContext = relevantArticles.length > 0 ? relevantArticles : FAQ_DATA.slice(0, 3);
    const contextString = finalContext.map((item: FAQItem) => 
      `TÍTULO: ${item.question}\nDOC: ${item.answer}\nDETALHES: ${item.content || ''}`
    ).join('\n---\n');

    const systemInstruction = `
      Você é a Inteligência Editorial da TeamWiki. Sua voz é erudita, técnica e minimalista.
      Responda SEMPRE em Português do Brasil de alto padrão.
      
      PRINCÍPIOS DE RESPOSTA:
      1. Siga o estilo de escrita da revista The Economist: direto, inteligente e sem jargões desnecessários.
      2. Baseie-se ESTRITAMENTE no CONTEXTO abaixo.
      3. Se a informação não existir, responda: "Esta diretriz ainda não foi catalogada em nossa biblioteca de governança."
      4. Use formatação limpa (Markdown) se necessário.
      
      CONTEXTO:
      ${contextString}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuestion,
      config: {
        systemInstruction,
        temperature: 0.2,
      }
    });

    return response.text || "Lamento, houve uma interrupção na transmissão do conhecimento.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "O cérebro editorial está indisponível no momento.";
  }
};
