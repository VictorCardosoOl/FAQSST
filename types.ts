export enum Category {
  SST = 'Saúde e Segurança',
  PREVIDENCIARIO = 'Previdenciário',
  ESOCIAL = 'eSocial e Governo'
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

