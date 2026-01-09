import { FAQItem, Category } from './types';

// Imports de conteúdo Markdown (Vite ?raw import)
import introSST from './content/articles/intro-sst.md?raw';
import pgr from './content/articles/pgr.md?raw';
import pgrtr from './content/articles/pgrtr.md?raw';
import pcmso from './content/articles/pcmso.md?raw';
import ltcat from './content/articles/ltcat.md?raw';
import ppp from './content/articles/ppp.md?raw';
import cat from './content/articles/cat.md?raw';
import aposentadoriaEspecial from './content/articles/aposentadoria-especial.md?raw';
import aposentadoriaInvalidez from './content/articles/aposentadoria-invalidez.md?raw';
import esocialSST from './content/articles/esocial-sst.md?raw';
import ecacGuia from './content/articles/ecac-guia.md?raw';

export const FAQ_DATA: FAQItem[] = [
  // --- SST (Segurança e Saúde do Trabalho) ---
  {
    id: 'intro-sst',
    question: 'Medicina Ocupacional e Segurança do Trabalho',
    category: Category.SST,
    date: '01 Jan 2026',
    tags: ['Medicina Ocupacional', 'Segurança do Trabalho', 'Conceitos'],
    answer: 'Entenda as diferenças e a complementariedade entre Medicina e Segurança do Trabalho.',
    content: introSST
  },
  {
    id: 'pgr',
    question: 'PGR - Programa de Gerenciamento de Riscos (NR-01)',
    category: Category.SST,
    date: '02 Jan 2026',
    tags: ['PGR', 'GRO', 'NR-01', 'Riscos Ocupacionais'],
    answer: 'Tudo sobre o novo programa de gestão de riscos que substituiu o PPRA.',
    content: pgr
  },
  {
    id: 'pgrtr',
    question: 'PGRTR - Gerenciamento de Riscos Rurais (NR-31)',
    category: Category.SST,
    date: '03 Jan 2026',
    tags: ['PGRTR', 'NR-31', 'Rural', 'Agro'],
    answer: 'Especificidades da gestão de riscos no trabalho rural.',
    content: pgrtr
  },
  {
    id: 'pcmso',
    question: 'PCMSO - Controle Médico de Saúde Ocupacional (NR-07)',
    category: Category.SST,
    date: '04 Jan 2026',
    tags: ['PCMSO', 'NR-07', 'Exames', 'ASO'],
    answer: 'Diretrizes para o monitoramento da saúde dos trabalhadores.',
    content: pcmso
  },

  // --- PREVIDENCIÁRIO ---
  {
    id: 'ltcat',
    question: 'LTCAT - Laudo Técnico das Condições Ambientais',
    category: Category.PREVIDENCIARIO,
    date: '05 Jan 2026',
    tags: ['LTCAT', 'Laudo', 'Insalubridade', 'Aposentadoria'],
    answer: 'O laudo técnico essencial para comprovação de aposentadoria especial.',
    content: ltcat
  },
  {
    id: 'ppp',
    question: 'PPP - Perfil Profissiográfico Previdenciário',
    category: Category.PREVIDENCIARIO,
    date: '06 Jan 2026',
    tags: ['PPP', 'Histórico Laboral', 'INSS'],
    answer: 'O documento histórico do trabalhador exigido pelo INSS.',
    content: ppp
  },
  {
    id: 'cat',
    question: 'CAT - Comunicação de Acidente de Trabalho',
    category: Category.PREVIDENCIARIO,
    date: '07 Jan 2026',
    tags: ['CAT', 'Acidente', 'S-2210'],
    answer: 'Prazos, tipos e obrigatoriedade da emissão da CAT.',
    content: cat
  },
  {
    id: 'aposentadoria-especial',
    question: 'Aposentadoria Especial (Regras Atuais)',
    category: Category.PREVIDENCIARIO,
    date: '08 Jan 2026',
    tags: ['Aposentadoria Especial', 'INSS', 'Reforma'],
    answer: 'Requisitos e novas regras para aposentadoria especial em 2026.',
    content: aposentadoriaEspecial
  },
  {
    id: 'aposentadoria-invalidez',
    question: 'Aposentadoria por Incapacidade Permanente',
    category: Category.PREVIDENCIARIO,
    date: '09 Jan 2026',
    tags: ['Invalidez', 'Incapacidade', 'Auxílio Doença'],
    answer: 'A antiga aposentadoria por invalidez: critérios e cálculo pós-reforma.',
    content: aposentadoriaInvalidez
  },

  // --- ESOCIAL E GOVERNO ---
  {
    id: 'esocial-sst',
    question: 'Eventos de SST no eSocial (S-2210, S-2220, S-2240)',
    category: Category.ESOCIAL,
    date: '10 Jan 2026',
    tags: ['eSocial', 'S-2210', 'S-2220', 'S-2240', 'Obrigações'],
    answer: 'Resumo dos eventos de SST que devem ser enviados ao eSocial.',
    content: esocialSST
  },
  {
    id: 'ecac-guia',
    question: 'Guia de Acesso ao e-CAC',
    category: Category.ESOCIAL,
    date: '11 Jan 2026',
    tags: ['e-CAC', 'Receita Federal', 'DCTFWeb'],
    answer: 'Como acessar e utilizar o portal e-CAC para verificar pendências.',
    content: ecacGuia
  }
];
