import { FAQItem, Category } from './types';
import catalog from './src/data/catalog.json';
import { ARTICLE_CONTENT_MAP } from './src/data/mapping';

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
    id: 'tratativa-protocolo-wise',
    question: 'Tratativa e Abertura de Protocolos',
    answer: 'Guia completo sobre a correta abertura e condução de protocolos no sistema W-GSC. Ideal para novos colaboradores do suporte técnico.',
    category: Category.SUPORTE,
    tags: ['Protocolo', 'Atendimento'],
    content: () => import('./src/content/processos-internos/GuiaAberturaProtocolos')
  },
  {
    id: 'feedback-cliente-24h',
    question: 'Política de Feedback Contínuo',
    answer: 'Guia sobre a importância e prática do feedback contínuo ao cliente a cada 24 horas.',
    category: Category.SUPORTE,
    tags: ['Feedback', 'Cliente', 'Processos'],
    content: () => import('./src/content/processos-internos/PoliticaFeedback')
  },
  {
    id: 'fluxograma-atendimento-wise',
    question: 'Fluxograma de Atendimento Técnico',
    answer: 'Passo a passo visual de como realizar um atendimento, desde a triagem até a solução.',
    category: Category.SUPORTE,
    tags: ['Fluxograma', 'Atendimento', 'Processos'],
    content: () => import('./src/content/processos-internos/FluxogramaAtendimento')
  },
  {
    id: 'script-atendimento-wise',
    question: 'Scripts de Atendimento',
    answer: 'Guia prático de scripts para atendimento telefônico e via chat, com orientações de conduta.',
    category: Category.SUPORTE,
    tags: ['Script', 'Atendimento', 'Comunicação'],
    content: () => import('./src/content/processos-internos/ScriptsAtendimento')
  },
  {
    id: 'contatos-internos-wise',
    question: 'Contatos Internos Wise System',
    answer: 'Lista atualizada de ramais, e-mails e contatos dos setores internos.',
    category: Category.SUPORTE,
    tags: ['Contatos', 'Ramais', 'Interno'],
    content: () => import('./src/content/processos-internos/ContatosInternos')
  },
  {
    id: 'estrutura-operacao-suporte',
    question: 'Estrutura da Operação de Suporte',
    answer: 'Descrição detalhada dos níveis (N1, N2) e responsabilidades da equipe.',
    category: Category.SUPORTE,
    tags: ['Estrutura', 'Organograma', 'Processos'],
    content: () => import('./src/content/processos-internos/EstruturaSuporte')
  }
]);
