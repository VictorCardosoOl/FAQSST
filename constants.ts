
import { FAQItem, Category } from './types';

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'tratativa-protocolo',
    question: 'A Arte da Tratativa de Protocolos',
    category: Category.COLETIVO,
    date: '12 Out 2024',
    tags: ['Protocolo', 'Processos', 'Operação'],
    imageUrl: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=1600&q=90',
    answer: 'Um manifesto sobre a excelência operacional na abertura e condução de atendimentos no sistema W-GSC.',
    content: `## O Rigor Operacional\n\nO atendimento não se inicia na fala, mas no registro. Ao acolher um cliente, a materialização da sua necessidade no sistema **W-GSC** é o primeiro ato de respeito à sua jornada.\n\n> O protocolo não é um número; é a representação digital da confiança do cliente em nossa marca.\n\nNossa metodologia exige que cada interação seja documentada com precisão cirúrgica.`
  },
  {
    id: 'feedback-24h',
    question: 'A Estética do Feedback Contínuo',
    category: Category.COLETIVO,
    date: '15 Out 2024',
    tags: ['Comunicação', 'Feedback', 'Luxo'],
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=90',
    answer: 'Por que o silêncio é o maior inimigo da experiência do usuário.',
    content: `## O Valor da Informação\n\nEm um mundo de incertezas, a atualização constante é o maior luxo que podemos oferecer.\n\n> Silêncio é ausência de cuidado. Informação é presença de valor.`
  },
  {
    id: 'politica-ferias',
    question: 'Manual de Concessão de Férias',
    category: Category.RH,
    date: '05 Jan 2025',
    tags: ['RH', 'Benefícios', 'Legal'],
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=90',
    answer: 'Diretrizes para solicitação e aprovação de períodos de descanso remunerado.',
    content: `## Ciclo de Descanso\n\nAcreditamos que o alto desempenho exige desconexão profunda. O processo de férias deve ser iniciado com 60 dias de antecedência.\n\n> Descanso não é ócio; é manutenção preventiva do talento.\n\n### Regras de Ouro\n1. Verifique o saldo no portal do colaborador.\n2. Alinhe com seu par direto para cobertura de tarefas.\n3. Registre a solicitação no sistema HR-Core.`
  },
  {
    id: 'reembolso-despesas',
    question: 'Governança de Reembolso de Despesas',
    category: Category.FINANCEIRO,
    date: '10 Jan 2025',
    tags: ['Financeiro', 'Compliance', 'Custos'],
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=90',
    answer: 'Procedimento padrão para prestação de contas de viagens e despesas operacionais.',
    content: `## Integridade Financeira\n\nCada real investido deve estar alinhado à estratégia de crescimento da companhia. O reembolso é processado quinzenalmente.\n\n> Compliance não é burocracia; é a proteção do patrimônio coletivo.\n\n### Documentação Necessária\n* Notas fiscais originais (não aceitamos recibos simples).\n* Justificativa vinculada ao projeto ou cliente.\n* Aprovação do gestor de centro de custo.`
  },
  {
    id: 'configuracao-vpn',
    question: 'Configuração de VPN Corporativa',
    category: Category.TI,
    date: '22 Out 2024',
    tags: ['Segurança', 'Remoto', 'VPN'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=90',
    answer: 'Guia passo a passo para estabelecer uma conexão segura.',
    content: `## Segurança Distribuída\n\nA VPN é o túnel que protege nossos segredos comerciais.\n\n> Conexão sem segurança é convite para vulnerabilidade.`
  }
];
