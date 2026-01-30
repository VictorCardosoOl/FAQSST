import { GoogleGenAI } from "@google/genai";
import { FAQ_DATA } from '../constants';
import { FAQItem } from '../types';

/**
 * Interface para a resposta processada
 */
interface GeminiServiceResponse {
  success: boolean;
  data?: string;
  error?: string;
}

/**
 * Serviço de Inteligência Artificial para consulta contextual.
 * Utiliza o SDK oficial @google/genai com o modelo gemini-3-flash-preview.
 */
export const askGemini = async (userQuestion: string): Promise<string> => {
  // Validação preliminar de segurança e integridade
  if (!process.env.API_KEY) {
    console.error("API_KEY ausente no ambiente.");
    return "Configuração de sistema incompleta. Contate o administrador.";
  }

  if (!userQuestion || typeof userQuestion !== 'string' || userQuestion.trim().length < 3) {
    return "Por favor, elabore uma pergunta mais detalhada.";
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    // Busca vetorial simulada (Keyword matching otimizado)
    const sanitizedQuery = userQuestion.toLowerCase().trim();
    const queryTerms = sanitizedQuery.split(' ').filter(t => t.length > 3);
    
    // Algoritmo de relevância simples
    const relevantArticles = FAQ_DATA.filter(item => {
      const searchableContent = `${item.question} ${item.tags.join(' ')} ${item.category}`.toLowerCase();
      return queryTerms.some(term => searchableContent.includes(term));
    });

    // Fallback inteligente: se não encontrar exato, usa os mais recentes ou gerais
    const finalContext = relevantArticles.length > 0 
      ? relevantArticles 
      : FAQ_DATA.slice(0, 4); // Aumentado contexto para 4 itens

    const contextString = finalContext.map((item: FAQItem) => 
      `CTX_ID: ${item.id}\nTÍTULO: ${item.question}\nCATEGORIA: ${item.category}\nRESUMO: ${item.answer}\nCONTEÚDO_COMPLETO: ${item.content || ''}`
    ).join('\n---\n');

    const systemInstruction = `
      Você é o Assistente Virtual Oficial da TeamWiki, focado em eficiência operacional.
      
      DIRETRIZES ESTRITAS:
      1. Sua base de verdade é EXCLUSIVAMENTE o "CONTEXTO" fornecido abaixo.
      2. Se a resposta estiver no contexto, responda de forma direta, polida e em Português do Brasil.
      3. Se a resposta NÃO estiver no contexto, responda: "Esta informação não consta na minha base de conhecimento atual. Por favor, verifique com o gestor da área."
      4. Mantenha o tom profissional, conciso e útil para uma equipe pequena de alta performance.
      5. Não invente políticas ou regras que não estejam escritas.
      
      CONTEXTO DA EMPRESA:
      ${contextString}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userQuestion,
      config: {
        systemInstruction,
        temperature: 0.1, // Reduzido para minimizar alucinações
        maxOutputTokens: 300,
      }
    });

    return response.text?.trim() || "Não foi possível processar sua solicitação no momento.";

  } catch (error) {
    console.error("Erro na comunicação com Gemini API:", error);
    return "Serviço temporariamente indisponível. Tente novamente em instantes.";
  }
};