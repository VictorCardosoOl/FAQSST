
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
  /**
   * User personal notes stored in LocalStorage.
   * This field is injected at runtime.
   */
  notes?: string; 
}

export interface SearchResult {
  answer: string;
  isAiGenerated: boolean;
}
