import { Category, FAQItem } from './types';

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'tratativa-protocolo-wise',
    category: Category.COLETIVO,
    date: '12 Out 2024',
    imageUrl: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=1200&q=80',
    question: 'A Arte da Tratativa de Protocolos',
    answer: 'Um manifesto sobre a excelência operacional na abertura e condução de atendimentos no sistema W-GSC.',
    tags: ['Protocolo', 'Excelência', 'Processos'],
    content: `
      <div class="welcome-banner">
        <h1>O Rigor Operacional</h1>
        <p>Abertura e condução de protocolos sob uma nova ótica de responsabilidade.</p>
      </div>

      <section>
        <h2>A Gênese do Atendimento</h2>
        <p>O atendimento não se inicia na fala, mas no registro. Ao acolher um cliente, a materialização da sua necessidade no sistema <strong>W-GSC</strong> é o primeiro ato de respeito à sua jornada.</p>
        <div class="note-box">
          O protocolo não é um número; é a representação digital da confiança do cliente em nossa marca.
        </div>
      </section>

      <section>
        <h2>Pilares Obrigatórios</h2>
        <ul class="blue-bullets">
          <li><strong>Identidade:</strong> Vínculo irrefutável entre Cliente e Supervisor.</li>
          <li><strong>Contextualização:</strong> A narrativa clara do problema.</li>
          <li><strong>Rastreabilidade:</strong> Histórico imaculado de todas as tentativas e êxitos.</li>
        </ul>
      </section>

      <div class="code-block">
        [ESTRUTURA DE DADOS]
        Empresa: xxxxxx ID: 000
        Status: EM ANÁLISE CRÍTICA
        Responsável: AGENTE SUPORTE
      </div>
    `
  },
  {
    id: 'feedback-cliente-24h',
    category: Category.COLETIVO,
    date: '15 Out 2024',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    question: 'A Estética do Feedback Contínuo',
    answer: 'Por que o silêncio é o maior inimigo da experiência do usuário e como o feedback a cada 24h resolve isso.',
    tags: ['Comunicação', 'Feedback', 'Luxo'],
    content: `
      <div class="welcome-banner">
        <h1>O Valor da Informação</h1>
        <p>Em um mundo de incertezas, a atualização constante é o maior luxo que podemos oferecer.</p>
      </div>
      <p>Manter o cliente informado não é apenas um processo, é uma filosofia de transparência. Recomendamos o toque humano a cada ciclo solar (24h), garantindo que o cliente sinta-se assistido, nunca esquecido.</p>
    `
  },
  {
    id: 'script-atendimento',
    category: Category.COLETIVO,
    date: '20 Out 2024',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    question: 'Script e Etiqueta de Atendimento',
    answer: 'Diretrizes para uma comunicação humanizada, refinada e focada na resolução imediata.',
    tags: ['Etiqueta', 'Script', 'Acolhimento'],
    content: `
      <div class="welcome-banner">
        <h1>Humanidade na Voz</h1>
        <p>Diretrizes para um diálogo que transcende o técnico e alcança o empático.</p>
      </div>
      <h2>Etiqueta Fundamental</h2>
      <p>Atender até o terceiro toque não é apenas agilidade, é prontidão. Sorrir com a voz não é técnica, é disposição para o outro.</p>
    `
  }
];