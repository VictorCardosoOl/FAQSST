
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
  date?: string;
}

export interface SearchResult {
  answer: string;
  isAiGenerated: boolean;
}
