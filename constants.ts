
import { Category, FAQItem } from './types';

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'tratativa-protocolo-wise',
    category: Category.COLETIVO,
    date: '12 Out 2024',
    imageUrl: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=1600&q=90',
    question: 'A Arte da Tratativa de Protocolos',
    answer: 'Um manifesto sobre a excelência operacional na abertura e condução de atendimentos no sistema W-GSC.',
    tags: ['Protocolo', 'Processos', 'Operação'],
    content: `
      <h2>O Rigor Operacional</h2>
      <p>O atendimento não se inicia na fala, mas no registro. Ao acolher um cliente, a materialização da sua necessidade no sistema <strong>W-GSC</strong> é o primeiro ato de respeito à sua jornada.</p>
      <blockquote>O protocolo não é um número; é a representação digital da confiança do cliente em nossa marca.</blockquote>
      <p>Nossa metodologia exige que cada interação seja documentada com precisão cirúrgica, garantindo que o próximo agente tenha clareza absoluta do histórico.</p>
    `
  },
  {
    id: 'feedback-cliente-24h',
    category: Category.COLETIVO,
    date: '15 Out 2024',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=90',
    question: 'A Estética do Feedback Contínuo',
    answer: 'Por que o silêncio é o maior inimigo da experiência do usuário e como o feedback a cada 24h resolve isso.',
    tags: ['Comunicação', 'Feedback', 'Luxo'],
    content: `
      <h2>O Valor da Informação</h2>
      <p>Em um mundo de incertezas, a atualização constante é o maior luxo que podemos oferecer aos nossos parceiros.</p>
      <p>Manter o cliente informado não é apenas um processo, é uma filosofia de transparência. Recomendamos o toque humano a cada ciclo solar (24h), garantindo que o cliente sinta-se assistido, nunca esquecido.</p>
      <blockquote>Silêncio é ausência de cuidado. Informação é presença de valor.</blockquote>
    `
  },
  {
    id: 'script-atendimento',
    category: Category.COLETIVO,
    date: '20 Out 2024',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=90',
    question: 'Script e Etiqueta de Atendimento',
    answer: 'Diretrizes para uma comunicação humanizada, refinada e focada na resolução imediata.',
    tags: ['Etiqueta', 'Script', 'Acolhimento'],
    content: `
      <h2>Humanidade na Voz</h2>
      <p>Atender até o terceiro toque não é apenas agilidade, é prontidão. Sorrir com a voz não é técnica, é disposição genuína para o outro.</p>
      <p>O script TeamWiki serve como bússola, não como gesso. A elegância reside em adaptar o protocolo à necessidade específica do interlocutor sem perder a autoridade técnica.</p>
    `
  }
];
