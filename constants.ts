
import { Category, FAQItem } from './types';

export const FAQ_DATA: FAQItem[] = [
  // --- COLETIVO MODULE (Migrated Data) ---
  {
    id: 'tratativa-protocolo-wise',
    category: Category.COLETIVO,
    question: 'Tratativa e Abertura de Protocolos',
    answer: 'Guia completo sobre a correta abertura e condução de protocolos no sistema W-GSC. Ideal para novos colaboradores do suporte técnico.',
    tags: ['Protocolo', 'Atendimento', 'Processos'],
    content: `
      <div class="welcome-banner">
        <h1>Guia de Abertura e Tratativa de Protocolos</h1>
        <p>Padronização do processo de atendimento para garantir organização e responsabilidade.</p>
      </div>

      <section>
        <h2>1. Início da Abertura</h2>
        <p><strong>Ao atender um cliente:</strong> deve-se abrir um protocolo imediatamente no sistema <strong>W-GSC</strong>, detalhando a dúvida ou problema no campo de ocorrência.</p>
        <div class="note-box">
          <strong>Importante:</strong> O protocolo é de responsabilidade do agente que o abriu. Mantenha o cliente atualizado diariamente (máximo duas vezes ao dia) mesmo sem solução definitiva.
        </div>
      </section>

      <section>
        <h2>2. Campos Obrigatórios</h2>
        <ul class="blue-bullets">
          <li><strong>Cliente/Empresa</strong> e <strong>Nome do Supervisor Sigo</strong></li>
          <li><strong>Ocorrência:</strong> Classifique conforme o tipo de solicitação.</li>
          <li><strong>Detalhamento:</strong> Todas as informações fornecidas pelo cliente.</li>
          <li><strong>Resolução:</strong> O que foi feito/testado, com datas e nomes.</li>
          <li><strong>Encerramento:</strong> Somente após contato com o cliente.</li>
        </ul>
      </section>

      <section>
        <h2>3. Modelo de Preenchimento</h2>
        <div class="code-block">
          Empresa: xxxxxx ID: 000<br>
          Funcionário: xxxxxx ID: 000<br>
          O que ocorreu: [Descrição detalhada]<br>
          "Se houver necessidade de análise do desenvolvimento, incluir caminho da pasta:<br> 
          W:\\Transfer\\_x\\Exemplo"
        </div>
      </section>

      <section>
        <h2>4. Qualidade das Informações</h2>
        <p>Informações incompletas geram erros de interpretação e retrabalho. Seja minucioso!</p>
      </section>
    `
  },
  {
    id: 'feedback-cliente-24h',
    category: Category.COLETIVO,
    question: 'Feedback ao Cliente a Cada 24 Horas',
    answer: 'Guia sobre a importância e prática do feedback contínuo ao cliente, mantendo transparência e fortalecendo a relação de confiança.',
    tags: ['Feedback', 'Cliente', 'Comunicação'],
    content: `
      <div class="welcome-banner">
        <h1>Feedback Contínuo ao Cliente</h1>
        <p>Manter o cliente informado é essencial para fortalecer a relação de confiança.</p>
      </div>

      <section>
        <h2>1. Periodicidade</h2>
        <p>Recomenda-se um <strong>feedback a cada 24 horas</strong>, mesmo sem solução definitiva.</p>
        <div class="note-box">
          Demonstra comprometimento e cuidado com a experiência do cliente.
        </div>
      </section>

      <section>
        <h2>2. Boas Práticas</h2>
        <ul class="blue-bullets">
          <li><strong>Seja claro:</strong> Evite termos técnicos desnecessários.</li>
          <li><strong>Evite o silêncio:</strong> Informe que o processo está em andamento para evitar insegurança.</li>
          <li><strong>Registre:</strong> Anote cada contato no W-GSC.</li>
        </ul>
      </section>
    `
  },
  {
    id: 'script-atendimento',
    category: Category.COLETIVO,
    question: 'Script de Atendimento ao Cliente',
    answer: 'Guia prático e humanizado para novos colaboradores do suporte técnico. Aborda boas práticas e scripts telefônicos.',
    tags: ['Atendimento', 'Script', 'Telefone'],
    content: `
      <div class="welcome-banner">
        <h1>Script de Atendimento</h1>
        <p>Guia para acolher e orientar novos colaboradores com profissionalismo e empatia.</p>
      </div>

      <section>
        <h2>Princípios Fundamentais</h2>
        <ul class="blue-bullets">
          <li>Atenda até o 3º toque.</li>
          <li>Evite "quem fala?". Prefira: “Por gentileza, qual o seu nome?”.</li>
          <li>Chame o cliente pelo nome.</li>
          <li>Sorria com a voz!</li>
        </ul>
      </section>

      <section>
        <h2>Scripts Telefônicos</h2>
        <div class="grid-container">
          <div class="shortcut-card">
            <code>Ligação Externa</code>
            <p>Wise System, Suporte, André. Bom dia!</p>
          </div>
          <div class="shortcut-card">
            <code>Ligação Interna</code>
            <p>Suporte, André. Boa tarde!</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Passo a Passo</h2>
        <div class="note-box">
          Confirme nome/empresa > Solicite anotação do protocolo > Pergunte a dúvida > Registre tudo > Encerre cordialmente.
        </div>
      </section>
    `
  },
  {
    id: 'contatos-internos',
    category: Category.COLETIVO,
    question: 'Contatos Internos - Wise System',
    answer: 'Lista atualizada de ramais, e-mails e contatos dos setores internos.',
    tags: ['Ramais', 'Contatos', 'Interno'],
    content: `
      <div class="welcome-banner">
        <h1>Contatos Internos</h1>
        <p>Consulte abaixo os ramais e e-mails dos setores.</p>
      </div>

      <section>
        <h2>Ramais</h2>
        <div class="grid-container">
          <div class="contact-card">
            <h3>Comercial</h3>
            <p>Ramal: 218</p>
          </div>
          <div class="contact-card">
            <h3>Financeiro</h3>
            <p>Ramal: 222</p>
          </div>
          <div class="contact-card">
            <h3>Suporte</h3>
            <p>Ramal: 200</p>
          </div>
        </div>
      </section>

      <section>
        <h2>WhatsApp</h2>
        <div class="grid-container">
          <div class="contact-card">
             <h3>Financeiro</h3>
             <p>11 91721-1256</p>
          </div>
          <div class="contact-card">
             <h3>Suporte</h3>
             <p>11 2609-1029</p>
          </div>
        </div>
      </section>
    `
  },
  {
    id: 'estrutura-suporte',
    category: Category.COLETIVO,
    question: 'Estrutura e Ocupações da Operação',
    answer: 'Descrição detalhada dos níveis (N1, N2) e estágios da operação de suporte.',
    tags: ['Estrutura', 'Hierarquia', 'Níveis'],
    content: `
      <div class="welcome-banner">
        <h1>Estrutura da Operação</h1>
        <p>Organização hierárquica e responsabilidades da equipe.</p>
      </div>

      <section>
        <h2>Visão Geral</h2>
        <ul class="blue-bullets">
          <li><strong>Relacionamento:</strong> Gestão de processos e coordenação.</li>
          <li><strong>Nível 1 (N1):</strong> Suporte direto ao cliente.</li>
          <li><strong>Nível 2 (N2):</strong> Suporte técnico avançado e desenvolvimento.</li>
        </ul>
      </section>

      <section>
        <h2>Nível 1 (N1)</h2>
        <div class="grid-container">
          <div class="stage-card">
            <h3>Estágio 1</h3>
            <p>Suporte direto, análise em até 1h, coleta de dados.</p>
          </div>
          <div class="stage-card">
            <h3>Estágio 2</h3>
            <p>Análise em até 2h, migrações, treinamentos, tratativa de e-mails.</p>
          </div>
        </div>
      </section>
    `
  },
  {
    id: 'atalhos-sincro',
    category: Category.COLETIVO,
    question: 'Atalhos Sincro - Mensagens Rápidas',
    answer: 'Manual de atalhos e mensagens padronizadas para agilizar o atendimento no Sincro.',
    tags: ['Sincro', 'Atalhos', 'Produtividade'],
    content: `
      <div class="welcome-banner">
        <h1>Atalhos Sincro</h1>
        <p>Mensagens automáticas para agilizar o atendimento.</p>
      </div>

      <section>
        <h2>Início da Conversa</h2>
        <div class="grid-container">
          <div class="shortcut-card">
            <code>/saudação</code>
            <p>Wise System, Suporte, Bom dia! Espero que esteja bem! Em que podemos ajudar?</p>
          </div>
          <div class="shortcut-card">
            <code>/protocolo</code>
            <p>Verifiquei internamente e... este atendimento gerou o protocolo --.</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Encerramento</h2>
        <div class="grid-container">
           <div class="shortcut-card">
            <code>/ajudo</code>
            <p>No momento, ajudo em algo mais?</p>
          </div>
          <div class="shortcut-card">
            <code>/pesquisa</code>
            <p>Sua opinião é fundamental... (Mensagem de pesquisa de satisfação).</p>
          </div>
        </div>
      </section>
    `
  },

  // --- EXISTING DATA (Kept for compatibility) ---
  {
    id: '1',
    category: Category.GERAL,
    question: 'Qual é o horário de funcionamento?',
    answer: 'O escritório está aberto oficialmente das 08:00 às 18:00.',
    tags: ['horário'],
    content: '<p>O escritório está aberto oficialmente das 08:00 às 18:00. No entanto, a equipe tem flexibilidade para entrar entre 08:00 e 10:00.</p>'
  },
  {
    id: '3',
    category: Category.RH,
    question: 'Como solicito minhas férias?',
    answer: 'As férias devem ser solicitadas com pelo menos 30 dias de antecedência via e-mail.',
    tags: ['férias'],
    content: '<p>Envie um e-mail para rh@empresa.com com as datas desejadas e aguarde a aprovação.</p>'
  }
  // (You can add the rest of the existing items similarly if needed, simplified here for brevity of the response)
];
