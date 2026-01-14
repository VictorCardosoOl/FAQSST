export enum Category {
  SST = 'Saúde e Segurança',
  PREVIDENCIARIO = 'Previdenciário',
  ESOCIAL = 'eSocial e Governo',
  SUPORTE = 'Suporte e Processos Internos',
  FINANCEIRO = 'Financeiro e Faturamento'
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: Category;
  tags: string[];
  content?: any;
  date?: string;
  searchText?: string;
}

