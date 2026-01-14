import { FAQItem, Category } from './types';
import catalog from './data/catalog.json';
import { ARTICLE_CONTENT_MAP } from './data/mapping';

// Converts the JSON catalog + Lazy Load Map into the application's FAQItem format
export const FAQ_DATA: FAQItem[] = (catalog.map((item: any) => ({
  id: item.id,
  question: item.question,
  answer: item.answer,
  category: item.category as Category,
  date: item.date,
  searchText: item.searchText,
  tags: item.tags || [],
  content: ARTICLE_CONTENT_MAP[item.id]
})) as FAQItem[]).concat([










  {
    id: 'esocial-guia-completo',
    question: 'eSocial: Guia Completo',
    answer: 'Tudo sobre a plataforma federal: Histórico, Cronograma de Fases, Simplificado (S-1.0) e Impactos.',
    category: Category.ESOCIAL,
    tags: ['eSocial', 'Governo', 'Cronograma'],
    content: () => import('./content/esocial/GuiaESocial')
  },
  {
    id: 'eventos-sst-esocial',
    question: 'Eventos de SST (S-2210, S-2220, S-2240)',
    answer: 'Detalhes técnicos, prazos e multas dos eventos de Saúde e Segurança no Trabalho.',
    category: Category.ESOCIAL,
    tags: ['S-2210', 'S-2220', 'S-2240', 'SST'],
    content: () => import('./content/esocial/EventosSST')
  },
  {
    id: 'ecac-esocial-advanced-guide',
    question: 'e-CAC e Procuração Eletrônica',
    answer: 'Como utilizar o portal e-CAC para gerenciar procurações e permitir o envio de eventos pela Wise System.',
    category: Category.ESOCIAL,
    tags: ['e-CAC', 'Procuração', 'Certificado'],
    content: () => import('./content/esocial/ECAC_eSocial')
  },



  {
    id: 'introducao-sst-novos-funcionarios',
    question: 'Introdução à SST e Normas Regulamentadoras',
    answer: 'Conceitos básicos de Saúde e Segurança e resumo das principais NRs (01, 05, 07, 15, 16, 17, 35).',
    category: Category.SST,
    tags: ['SST', 'NR', 'Introdução'],
    content: () => import('./content/gerenciamento-de-riscos/IntroducaoSST')
  },

  {
    id: 'diferenca-li-lp',
    question: 'Diferença entre LI (Insalubridade) e LP (Periculosidade)',
    answer: 'Comparativo completo: riscos, adicionais e quando solicitar cada laudo.',
    category: Category.SST,
    tags: ['Insalubridade', 'Periculosidade', 'Laudo'],
    content: () => import('./content/gerenciamento-de-riscos/LaudosInsalubridadePericulosidade')
  },

]);
