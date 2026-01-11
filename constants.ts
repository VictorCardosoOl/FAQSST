import { FAQItem, Category } from './types';

// Imports de conteúdo Markdown (Dynamic imports for Lazy Loading)

export const FAQ_DATA: FAQItem[] = [
  // --- SST (Segurança e Saúde do Trabalho) ---
  {
    id: 'intro-sst',
    question: 'Medicina Ocupacional e Segurança do Trabalho',
    category: Category.SST,
    date: '01 Jan 2026',
    tags: ['Medicina Ocupacional', 'Segurança do Trabalho', 'Conceitos'],
    answer: 'Entenda as diferenças e a complementariedade entre Medicina e Segurança do Trabalho.',
    content: () => import('./content/articles/intro-sst.md?raw')
  },
  {
    id: 'pgr',
    question: 'PGR - Programa de Gerenciamento de Riscos (NR-01)',
    category: Category.SST,
    date: '02 Jan 2026',
    tags: ['PGR', 'GRO', 'NR-01', 'Riscos Ocupacionais'],
    answer: 'Tudo sobre o novo programa de gestão de riscos que substituiu o PPRA.',
    content: () => import('./content/articles/pgr.md?raw')
  },
  {
    id: 'pgrtr',
    question: 'PGRTR - Gerenciamento de Riscos Rurais (NR-31)',
    category: Category.SST,
    date: '03 Jan 2026',
    tags: ['PGRTR', 'NR-31', 'Rural', 'Agro'],
    answer: 'Especificidades da gestão de riscos no trabalho rural.',
    content: () => import('./content/articles/pgrtr.md?raw')
  },
  {
    id: 'pcmso',
    question: 'PCMSO - Controle Médico de Saúde Ocupacional (NR-07)',
    category: Category.SST,
    date: '04 Jan 2026',
    tags: ['PCMSO', 'NR-07', 'Exames', 'ASO'],
    answer: 'Diretrizes para o monitoramento da saúde dos trabalhadores.',
    content: () => import('./content/articles/pcmso.md?raw')
  },

  // --- PREVIDENCIÁRIO ---
  {
    id: 'ltcat',
    question: 'LTCAT - Laudo Técnico das Condições Ambientais',
    category: Category.PREVIDENCIARIO,
    date: '05 Jan 2026',
    tags: ['LTCAT', 'Laudo', 'Insalubridade', 'Aposentadoria'],
    answer: 'O laudo técnico essencial para comprovação de aposentadoria especial.',
    content: () => import('./content/articles/ltcat.md?raw')
  },
  {
    id: 'ppp',
    question: 'PPP - Perfil Profissiográfico Previdenciário',
    category: Category.PREVIDENCIARIO,
    date: '06 Jan 2026',
    tags: ['PPP', 'Histórico Laboral', 'INSS'],
    answer: 'O documento histórico do trabalhador exigido pelo INSS.',
    content: () => import('./content/articles/ppp.md?raw')
  },
  {
    id: 'cat',
    question: 'CAT - Comunicação de Acidente de Trabalho',
    category: Category.PREVIDENCIARIO,
    date: '07 Jan 2026',
    tags: ['CAT', 'Acidente', 'S-2210'],
    answer: 'Prazos, tipos e obrigatoriedade da emissão da CAT.',
    content: () => import('./content/articles/cat.md?raw')
  },
  {
    id: 'aposentadoria-especial',
    question: 'Aposentadoria Especial (Regras Atuais)',
    category: Category.PREVIDENCIARIO,
    date: '08 Jan 2026',
    tags: ['Aposentadoria Especial', 'INSS', 'Reforma'],
    answer: 'Requisitos e novas regras para aposentadoria especial em 2026.',
    content: () => import('./content/articles/aposentadoria-especial.md?raw')
  },
  {
    id: 'aposentadoria-invalidez',
    question: 'Aposentadoria por Incapacidade Permanente',
    category: Category.PREVIDENCIARIO,
    date: '09 Jan 2026',
    tags: ['Invalidez', 'Incapacidade', 'Auxílio Doença'],
    answer: 'A antiga aposentadoria por invalidez: critérios e cálculo pós-reforma.',
    content: () => import('./content/articles/aposentadoria-invalidez.md?raw')
  },

  // --- ESOCIAL E GOVERNO ---
  {
    id: 'esocial-sst',
    question: 'Eventos de SST no eSocial (S-2210, S-2220, S-2240)',
    category: Category.ESOCIAL,
    date: '10 Jan 2026',
    tags: ['eSocial', 'S-2210', 'S-2220', 'S-2240', 'Obrigações'],
    answer: 'Resumo dos eventos de SST que devem ser enviados ao eSocial.',
    content: () => import('./content/articles/esocial-sst.md?raw')
  },
  {
    id: 'ecac-guia',
    question: 'Guia de Acesso ao e-CAC',
    category: Category.ESOCIAL,
    date: '11 Jan 2026',
    tags: ['e-CAC', 'Receita Federal', 'DCTFWeb'],
    answer: 'Como acessar e utilizar o portal e-CAC para verificar pendências.',
    content: () => import('./content/articles/ecac-guia.md?raw')
  }
];
