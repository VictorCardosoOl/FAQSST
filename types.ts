
export enum Category {
  COLETIVO = 'Coletivo',
  GERAL = 'Geral',
  RH = 'Recursos Humanos',
  TI = 'Tecnologia',
  VENDAS = 'Vendas & Processos',
  FINANCEIRO = 'Financeiro'
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string; // Used for the short description/card preview
  category: Category;
  tags: string[];
  content?: string; // HTML Content for the full article view
}

export interface SearchResult {
  answer: string;
  isAiGenerated: boolean;
}
