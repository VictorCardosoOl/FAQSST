import { GoogleGenAI } from "@google/genai";
import { FAQ_DATA } from '../constants';
import { FAQItem } from '../types';

// Initialize Gemini Client
// WARNING: In a production app, never expose API keys in the frontend code.
// Ideally, use a backend proxy. For this demo, we use the env variable directly as instructed.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askGemini = async (userQuestion: string): Promise<string> => {
  try {
    // 1. Prepare context from our constant data
    const contextString = FAQ_DATA.map((item: FAQItem) => 
      `Q: ${item.question}\nA: ${item.answer}`
    ).join('\n---\n');

    const systemPrompt = `
      Você é um assistente útil de FAQ para uma pequena empresa chamada "TeamWiki".
      Sua tarefa é responder dúvidas dos colaboradores baseando-se ESTRITAMENTE na base de conhecimento fornecida abaixo.
      
      Regras:
      1. Se a resposta estiver no contexto, responda de forma clara, amigável e direta em Português do Brasil.
      2. Se a resposta NÃO estiver no contexto, diga educadamente que não encontrou essa informação na base de dados atual e sugira contatar o gestor.
      3. Não invente informações.
      4. Tente ser conciso.

      Base de Conhecimento (Contexto):
      ${contextString}
    `;

    // 2. Call the API
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userQuestion,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.3, // Low temperature for factual consistency
      }
    });

    return response.text || "Desculpe, não consegui processar sua solicitação no momento.";

  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Ocorreu um erro ao tentar contatar o assistente inteligente. Por favor, tente novamente mais tarde.";
  }
};