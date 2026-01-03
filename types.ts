export enum Category {
  COLETIVO = 'Coletivo',
  GERAL = 'Geral',
  RH = 'Capital Humano',
  TI = 'Tecnologia',
  VENDAS = 'Estratégia & Vendas',
  FINANCEIRO = 'Governança Financeira'
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: Category;
  tags: string[];
  content?: string;
  imageUrl?: string; // Nova propriedade para estética visual
  date?: string;     // Para listagem estilo K-News
}

export interface SearchResult {
  answer: string;
  isAiGenerated: boolean;
}