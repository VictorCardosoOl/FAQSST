
/**
 * O serviço de IA (Gemini) foi descontinuado neste projeto para garantir
 * segurança de dados e focar em uma experiência puramente consultiva.
 * 
 * Future implementation: Use a BFF (Backend-for-Frontend) to secure API keys.
 */
export const askGemini = async (query: string) => {
  console.warn("AI Service is disabled.");
  return null;
};
