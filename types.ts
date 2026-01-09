export enum Category {
  SIGO_W3 = 'Sigo W3',
  SIGO_WEB = 'Sigo Web',
  PROCESSOS = 'Processos',
  ESCALA = 'Ponto',
  INSTITUCIONAL = 'Institucional'
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

