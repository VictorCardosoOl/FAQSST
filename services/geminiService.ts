import { GoogleGenAI } from "@google/genai";
import { FAQ_DATA } from '../constants';
import { FAQItem } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askGemini = async (userQuestion: string): Promise<string> => {
  try {
    const contextString = FAQ_DATA.map((item: FAQItem) => 
      `Q: ${item.question}\nA: ${item.answer}`
    ).join('\n---\n');

    const systemPrompt = `
      Você é o curador oficial da base de conhecimento da TeamWiki.
      Responda de forma extremamente elegante, profissional e concisa.
      Use o contexto abaixo para responder. Se não souber, oriente a procurar o gestor.
      Base: ${contextString}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuestion,
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.2,
      }
    });

    return response.text || "Sem resposta disponível.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Falha na conexão com a inteligência editorial.";
  }
};