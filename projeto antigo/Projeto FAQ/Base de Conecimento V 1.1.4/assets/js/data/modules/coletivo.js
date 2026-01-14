const Coletivo = {

  id: 'coletivo',
  title: 'Coletivo',
  description: 'Módulo destinado ao tratamento de questões internas relacionadas ao suporte.',
  icon: `<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87m-4-12a4 4 0 0 1 0 7.75"/>
  </g>
</svg>`,
  topics: [
    {
      id: 'tratativa-protocolo-wise',
      title: 'Tratativa e Abertura de Protocolos',
      description: 'Guia completo sobre a correta abertura e condução de protocolos no sistema W-GSC. Ideal para novos colaboradores do suporte técnico.',
      group: 'Processos',
      tags: ['Protocolo', 'Atendimento'],
      content: `
  <div class="welcome-banner">
    <h1>Guia de Abertura e Tratativa de Protocolos</h1>
    <p>Este guia foi criado para padronizar o processo de atendimento através de protocolos, garantindo organização, responsabilidade e um retorno claro ao cliente.</p>
  </div>

  <section class="core-concepts">
    <h2> 1. Início da Abertura</h2>
    <p><strong>Ao atender um cliente:</strong> deve-se abrir um protocolo imediatamente no sistema <strong>W-GSC</strong>, detalhando a dúvida ou problema no campo de ocorrência.</p>
    <div class="note-box">
      <strong>Importante:</strong> O protocolo é de responsabilidade do agente que o abriu. Esse agente deve manter o cliente atualizado diariamente (máximo duas vezes ao dia) mesmo que não haja solução definitiva. Sempre agende o retorno no sistema.
    </div>
  </section>

  <section class="core-concepts">
    <h2>2. Campos Obrigatórios</h2>
    <p>Os seguintes campos devem ser corretamente preenchidos no momento da abertura do protocolo:</p>
    <ul>
      <li><strong>- Cliente/Empresa</strong></li>
      <li><strong>- Nome do Supervisor Sigo</strong></li>
      <li><strong>- Ocorrência:</strong> Classifique conforme o tipo de solicitação.</li>
      <li><strong>- Atendente – Abertura</strong></li>
      <li><strong>- Detalhamento da ocorrência:</strong> Todas as informações fornecidas pelo cliente.</li>
      <li><strong>- Meio de contato:</strong> (telefone, WhatsApp, e-mail, site)</li>
      <li><strong>- Resolução:</strong> O que foi feito/testado, com datas e nomes.</li>
      <li><strong>- Status</strong></li>
      <li><strong>- Atendente Executor:</strong> Se houver repasse.</li>
      <li><strong>- Aguardando</strong></li>
      <li><strong>- Retorno</strong></li>
      <li><strong>- Encerramento:</strong> Somente após contato com o cliente.</li>
    </ul>
    <div class="note-box">
      <strong>Dica:</strong> Quando o cliente não for claro, faça as perguntas certas (abertas e fechadas) para levantar as informações corretamente.
    </div>
  </section>
  <section class="core-concepts">
    <h2> Como estruturar o Protocolo</h2>
    <p>O corpo do protocolo deve conter:</p>
    <ul>
      <li><strong>Dúvida ou questão:</strong> Tudo o que o cliente relatou.</li>
      <li><strong>Campos de resolução:</strong> Ações tomadas, análises, datas e quem executou.</li>
    </ul>
    <h3>Modelo de Preenchimento do protocolo:</h3>
      <div class="code-block">
          
            <p>
            Empresa: xxxxxx ID: 000<br>
            Funcionário: xxxxxx ID: 000<br>
            O que ocorreu: [Descrição detalhada]<br>
            "Se houver necessidade de análise do desenvolvimento do caso, devemos implementar na planilha e disponibilizar o caminho no protocolo. 
          Fornecendo, assim, o caminho da pasta:<br> W:\\Transfer\\_x\\Exemplo"</p>
          </div>
        <div class="image-placeholder">
     <p>[Imagem: Layout de tabela de IDs com exemplos preenchidos]</p>
  </div>
  <section class="core-concepts">

  <h2>Resolução enviada ao cliente:</h2>
<p><strong>Wise System – Suporte, (Seu nome). Bom dia, Sr.(a) xxxx, tudo bem?<br>
Sobre o chamado de protocolo nº xxxx, informamos que (Situação)<br>
Se ainda precisar de algo, conte com a gente, estaremos por aqui para ajudar no que for necessário. Ah, e se puder deixar sua opinião sobre o atendimento, ficaremos muito gratos! Sua avaliação é essencial para seguirmos melhorando sempre.

Um ótimo dia pra você! "</strong></p>
          </div>
    <h2>3. Encaminhamento e Níveis</h2>
    <p>Após análise inicial (N1), se não houver solução:</p>
    <ul>
      <li>Consultar o N2 para orientação.</li>
      <li>Se necessário, registrar tarefa na aba <strong>Evoluções e Tarefas</strong> atribuindo ao N2.</li>
      <li>Comunicar verbalmente e registrar <strong>data/motivo/departamento ou pessoa encaminhada</strong>.</li>
    </ul>
    <div class="note-box">
      <strong>Importante:</strong> Mesmo que o caso seja transferido para o N2 ou Desenvolvimento, o protocolo segue sob responsabilidade de quem abriu.
    </div>
  </section>


  <section class="core-concepts">
    <strong><h2>4. Qualidade das Informações</h2></strong>
    <p><strong>Informações incompletas podem gerar:</strong></p>
    <ul>
      <li>1. Erros de interpretação e conclusões incorretas.</li>
      <li>2. Retrabalho e atrasos na solução.</li>
      <li>3. Dificuldade na reprodução de testes e análises.</li>
    </ul>
    <div class="note-box">
      <strong>Recomendação:</strong> Seja minucioso! Preencha o protocolo com todas as informações relevantes para que qualquer analista consiga entender e dar continuidade.
    </div>
  </section>
  <style>
    .welcome-banner {
      background: #e3f2fd;
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 30px;
      text-align: center;
    }

    .code-block {
        background: #f8f8f8;
        border-left: 4px solid #2196F3;
        padding: 20px;
        margin: 20px 0;
        font-family: monospace;
        font-size: 0.95em;
        
      }

      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
      }

    .core-concepts h2 {
      color: #0d47a1;
      margin-top: 40px;
    }

    .core-concepts ul {
      margin: 20px 0;
      padding-left: 20px;
    }

    .core-concepts li {
      margin-bottom: 8px;
      color: #333;
      font-size: 0.95em;
    }

    .note-box {
      background: #f0f4f8;
      padding: 15px;
      border-left: 4px solid #90caf9;
      margin-top: 20px;
      border-radius: 5px;
      font-size: 0.9em;
      color: #333;
    }
  </style>
`,



    },

    {
      id: 'feedback-cliente-24h',
      title: 'Feedback ao Cliente a Cada 24 Horas',
      description: 'Guia sobre a importância e prática do feedback contínuo ao cliente, mantendo transparência e fortalecendo a relação de confiança.',
      group: 'Processos',
      tags: ['Feedback', 'Cliente', 'Comunicação'],
      content: `
  <div class="welcome-banner">
    <h1>Feedback Contínuo ao Cliente</h1>
    <p>Manter o cliente informado sobre o andamento de sua solicitação é uma prática essencial para garantir transparência e fortalecer a relação de confiança.</p>
  </div>

  <section class="core-concepts">
    <h2>1. Periodicidade do Feedback</h2>
    <p>Recomenda-se que seja realizado um <strong>feedback a cada 24 horas</strong>, mesmo que não haja uma atualização definitiva sobre a solução.</p>
    <div class="note-box">
      <strong>Importante:</strong> Esse contato demonstra comprometimento, organização e cuidado com a experiência do cliente.
    </div>
  </section>

  <section class="core-concepts">
    <h2>2. Boas Práticas ao Atualizar o Cliente</h2>
    <p>Ao atualizar o cliente, é importante seguir estas diretrizes:</p>
    <ul>
      <li><strong>Ser claro e objetivo:</strong> Comunique o status atual de forma simples, evitando termos técnicos desnecessários.</li>
      <li><strong>Reforçar o acompanhamento:</strong> Mostre que o caso continua em análise ou execução, e que a empresa está atenta à necessidade do cliente.</li>
      <li><strong>Transmitir segurança:</strong> Utilize uma linguagem empática, que passe confiança e profissionalismo.</li>
      <li><strong>Evitar o silêncio:</strong> Mesmo sem novidades relevantes, informe que o processo está em andamento. Isso evita insegurança e possíveis reclamações.</li>
    </ul>
  </section>

  <section class="core-concepts">
    <h2>3. Registro dos Contatos</h2>
    <p>Anote cada feedback enviado em nossa plataforma <strong>w-GSC</strong> para manter o histórico atualizado e facilitar consultas futuras.</p>
  </section>

  <section class="core-concepts">
    <h2>4. Benefícios do Feedback Contínuo</h2>
    <p>Essa prática não apenas mantém o cliente informado, mas também:</p>
    <ul>
      <li>Contribui para reduzir a ansiedade do cliente.</li>
      <li>Minimiza insatisfações.</li>
      <li>Melhora a percepção da qualidade do atendimento.</li>
    </ul>
  </section>

  <style>
    .welcome-banner {
      background: #e3f2fd;
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 30px;
      text-align: center;
    }

    .core-concepts h2 {
      color: #0d47a1;
      margin-top: 40px;
    }

    .core-concepts ul {
      margin: 20px 0;
      padding-left: 20px;
    }

    .core-concepts li {
      margin-bottom: 8px;
      color: #333;
      font-size: 0.95em;
    }

    .note-box {
      background: #f0f4f8;
      padding: 15px;
      border-left: 4px solid #90caf9;
      margin-top: 20px;
      border-radius: 5px;
      font-size: 0.9em;
      color: #333;
    }
  </style>
`
    },

    //Victor Verificar o Topico abaixo
    {
      id: 'fluxograma-atendimento-wise',
      title: 'Fluxograma de Atendimento Técnico - Wise System',
      description: 'Processo detalhado com etapas decisórias, orientações e encaminhamentos para suporte técnico.',
      group: 'Processos',
      tags: ['Atendimento', 'Operação', 'Processos'],
      content: `
<div class="welcome-banner">
  <h1 class="text-2xl font-bold text-sky-800">Fluxograma de Atendimento Técnico</h1>
  <p class="text-base text-sky-600">Passo a passo de como realizar um atendimento</p>
</div>

<div class="flow-container space-y-6 mt-6">
  <div class="step bg-slate-100 border-l-4 border-sky-600 rounded-xl p-4 shadow-sm">
    <strong>1. Cliente entra em contato</strong>
    <p class="text-sm text-slate-700">O atendimento é iniciado via telefone, chat ou e-mail.</p>
  </div>

  <div class="step bg-white border-l-4 border-sky-600 rounded-xl p-4 shadow-sm">
    <strong>2. Verificar se a empresa é cliente Wise System</strong>
    <p class="text-sm text-slate-700">- Sim: gerar protocolo de atendimento<br>- Não: informar que o suporte é exclusivo para contratantes do software</p>
  </div>

  <div class="step bg-slate-50 border-l-4 border-sky-600 rounded-xl p-4 shadow-sm">
    <strong>3. Classificar o tipo de problema</strong>
    <p class="text-sm text-slate-700">Diferenciar se trata-se de <span class="font-medium">dúvida</span> ou <span class="font-medium">erro técnico</span>.</p>
  </div>

  <div class="step bg-white border-l-4 border-emerald-500 rounded-xl p-4 shadow-sm">
    <strong>4A. Se for dúvida:</strong>
    <ul class="text-sm text-slate-700 list-disc ml-4">
      <li>Entender a dúvida do cliente</li>
      <li>Orientar de forma clara e objetiva</li>
      <li>Finalizar protocolo com registro de atendimento</li>
    </ul>
  </div>

  <div class="step bg-white border-l-4 border-yellow-500 rounded-xl p-4 shadow-sm">
    <strong>4B. Se for erro técnico:</strong>
    <ul class="text-sm text-slate-700 list-disc ml-4">
      <li>Tentar reproduzir a falha junto ao cliente</li>
      <li>Analisar a possível causa</li>
      <li>Teve solução no N1?
        <ul class="list-disc ml-6">
          <li>Sim: orientar o cliente e encerrar o protocolo</li>
          <li>Não: encaminhar ao N2 (nível técnico especializado)</li>
        </ul>
      </li>
    </ul>
  </div>

  <div class="step bg-slate-50 border-l-4 border-sky-600 rounded-xl p-4 shadow-sm">
    <strong>5. N2 analisou a falha</strong>
    <p class="text-sm text-slate-700">Caso resolva, retorna o atendimento para o N1 finalizar com o cliente. Se não resolver, registrar pendência para desenvolvimento.</p>
  </div>

  <div class="step bg-white border-l-4 border-emerald-500 rounded-xl p-4 shadow-sm">
    <strong>6. Encerramento do protocolo</strong>
    <p class="text-sm text-slate-700">Sempre encerrar com cordialidade, verificando se há mais dúvidas. Registrar toda a tratativa no w-GSC (ferramenta usada para registros de chamados na Wise System)</p>
  </div>
</div>

<style>
.flow-container {
  max-width: 800px;
  margin: auto;
}
.step {
  transition: all 0.3s ease;
}
.step:hover {
  background-color: #f1f5f9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
}
</style>
` },


    // Operação
   {
      id: 'script-atendimento-wise',
      title: 'Script de Atendimento ao Cliente',
      description: 'Guia prático e humanizado para novos colaboradores do suporte técnico da Wise System. Este conteúdo aborda boas práticas, orientações de conduta, linguagem e procedimentos durante atendimentos telefônicos e via chat.',
      group: 'Operação Suporte',
      tags: ['Atendimento', 'Script'],
      content: `
<div class="welcome-banner">
  <h1>Script de Atendimento - Wise System</h1>
  <p>Este guia foi desenvolvido para acolher e orientar novos colaboradores da equipe de suporte da Wise System. O atendimento ao cliente é a nossa principal vitrine, e por isso, deve ser conduzido com profissionalismo, empatia e clareza.</p>
</div>

<section class="core-concepts">
  <h2>1. Princípios Fundamentais</h2>
  <div class="note-box">
    <strong>Dica essencial:</strong> O sucesso de um bom atendimento começa na intenção genuína de ajudar. Quando você realmente se importa, a solução aparece com mais naturalidade.
  </div>
  <ul class="checklist">
    <li><strong>Atenda até o 3º toque:</strong> Evite transmitir desatenção.</li>
    <li><strong>Evite "quem fala?":</strong> Prefira: "Por gentileza, qual o seu nome?"</li>
    <li><strong>Chame o cliente pelo nome:</strong> precedido sempre de Sr. ou Sra.</li>
    <li><strong>Mantenha tom de voz moderado:</strong> Nem alto, nem baixo.</li>
    <li><strong>Evite termos técnicos e gírias:</strong> Clareza é essencial.</li>
    <li><strong>Seja cordial mesmo com clientes difíceis:</strong> autocontrole é chave.</li>
  </ul>
</section>

<section class="core-concepts">
  <h2>2. Comunicação Eficaz</h2>
  <p>Estudos mostram que no telefone, 93% da comunicação não depende das palavras. Sua voz precisa carregar confiança e empatia. </p>
  <div class="note-box">
    <strong>Lembre-se:</strong> Um sorriso na voz transmite entusiasmo e proximidade.
  </div>
</section>

<section class="core-concepts">
  <h2>3. Scripts Telefônicos</h2>
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
  <div class="note-box">
    <strong>Boas práticas:</strong> Sempre inicie o protocolo no WGSC ao atender.
  </div>
</section>

<section class="core-concepts">
  <h2>4. Etapas do Atendimento Telefônico</h2>
  <div class="grid-container">
    <div class="shortcut-card full">
      <code>Passo a passo</code>
      <p>
        • Confirme nome e empresa do cliente<br>
        • Solicite anotação do número de protocolo<br>
        • Pergunte em que pode ajudar<br>
        • Registre tudo de forma clara<br>
        • Utilize o acesso remoto se necessário<br>
        • Se houver espera, informe o cliente a cada minuto<br>
        • Explique o que foi feito e confirme a solução<br>
        • Encerramento cordial com agradecimento e abertura para novas dúvidas
      </p>
    </div>
  </div>
</section>

<section class="core-concepts">
  <h2>5. Atendimento via Chat</h2>
  <p>O atendimento por chat exige escrita profissional e empática.</p>
  <div class="note-box">
    <strong>Boas práticas:</strong> Nunca use abreviações, gírias ou emojis. Respeite a gramática.
  </div>
  <div class="grid-container">
    <div class="shortcut-card full">
      <code>Script base</code>
      <p>
        • Bom dia, Sr. João<br>
        • Tudo bem com o(a) senhor(a)?<br>
        • Poderia, por gentileza, anotar o número do protocolo?<br>
        • Em que posso ajudá-lo?<br>
        • Obrigado por aguardar! Já identifiquei o ocorrido.<br>
        • Posso ajudá-lo em algo mais?<br>
        • A Wise System agradece seu contato. Tenha um ótimo dia!
      </p>
    </div>
  </div>
</section>

<section class="core-concepts">
  <h2>6. Situações Especiais</h2>
  <div class="grid-container">
    <div class="shortcut-card">
      <code>Cliente bloqueado</code>
      <p>Sr. João, ao tentar abrir o protocolo, consta que sua empresa possui pendências administrativas. Poderia verificar com o financeiro?</p>
    </div>
    <div class="shortcut-card">
      <code>Sem acesso ao sistema</code>
      <p>Sr. João, eu realmente preciso abrir o atendimento no sistema para poder ajudá-lo. Me desculpe!</p>
    </div>
    <div class="shortcut-card">
      <code>Todos os atendentes ocupados</code>
      <p>Sr. João, bom dia! No momento, todos os nossos atendentes estão em atendimento. Por favor, aguarde um momento que logo será atendido.</p>
    </div>
  </div>
</section>

<section class="core-concepts">
  <h2>7. Transferência de Atendimento</h2>
  <div class="grid-container">
    <div class="shortcut-card">
      <code>1. Procedimento para transferência</code>
      <p>
        <strong>Se for referente a um chamado já aberto:</strong><br>
        • Verificar qual seria a dúvida / problema<br>
        • Verificar se o analista está disponível<br>
        • Se sim, transferir; se não, dar continuidade<br><br>
        <strong>Se o cliente exigir falar apenas com aquele analista:</strong><br>
        • Verificar situação do analista<br>
        • Se ocupado, informar ao cliente<br>
        • Marcar horário para retorno
      </p>
    </div>
    <div class="shortcut-card">
      <code>2. Perguntas antes da transferência</code>
      <p>
        • Qual seria a dúvida/problema específico?<br>
        • Obter informações de funcionário e empresa<br>
        • Confirmar se é um caso de teste<br>
        • Orientar sobre possível queda de ligação<br>
        • Garantir que cliente tenha número do protocolo
      </p>
    </div>
    <div class="shortcut-card">
      <code>3. Informações para repasse</code>
      <p>
        • Dados obtidos dos questionamentos<br>
        • Nome e empresa do cliente<br>
        • Número do protocolo (se houver)<br>
        • Natureza do problema/dúvida<br>
        • Ações já realizadas (se aplicável)<br>
        • Histórico relevante do atendimento
      </p>
    </div>
    <div class="shortcut-card full">
      <code>Insatisfação com atendimento</code>
      <p>
        <strong>Se for referente a insatisfação com o atendimento inicial:</strong><br>
        • Deve-se passar a informação ao superior do suporte<br>
        • Verificar o motivo da situação ocorrida<br>
        • Tomar as medidas necessárias para resolução<br>
        • Manter registro detalhado do ocorrido
      </p>
    </div>
  </div>
  <div class="note-box">
    <strong>Importante:</strong> A transferência deve ser feita de forma organizada, garantindo que o próximo analista tenha todas as informações necessárias para dar continuidade ao atendimento sem que o cliente precise repetir toda a situação.
  </div>
</section>

<section class="core-concepts">
  <h2>8. Orientações Complementares</h2>
  <ul class="checklist">
    <li>Evite abreviações como "vc", "q", "td".</li>
    <li>Use pontuação e acentuação corretamente.</li>
    <li>Comece sempre com letra maiúscula.</li>
    <li>Se estiver em dúvida, pergunte ou pesquise.</li>
    <li>Descumprir essas orientações pode resultar em advertência.</li>
  </ul>
</section>

<section class="core-concepts">
  <h2>9. Revisão Rápida</h2>
  <ul class="checklist">
    <li>✔ Tenha a intenção de ajudar.</li>
    <li>✔ Tom de voz moderado.</li>
    <li>✔ Não deixe o cliente esperando.</li>
    <li>✔ Sorria com a voz.</li>
  </ul>
  <div class="note-box">
    <strong>Reflexão final:</strong> Podemos oferecer a melhor tecnologia, mas se o atendimento for ruim, colocamos tudo a perder.
  </div>
</section>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  .core-concepts h2 {
    color: #0d47a1;
    margin-top: 40px;
  }
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  .shortcut-card {
    background: #ffffff;
    border-left: 4px solid #2196F3;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  .shortcut-card.full {
    grid-column: 1 / -1;
  }
  .shortcut-card code {
    display: block;
    font-weight: bold;
    color: #1565c0;
    margin-bottom: 8px;
    font-size: 0.95em;
  }
  .shortcut-card p {
    font-size: 0.95em;
    color: #333;
  }
  .note-box {
    background: #f0f4f8;
    padding: 15px;
    border-left: 4px solid #90caf9;
    margin-top: 20px;
    border-radius: 5px;
    font-size: 0.9em;
    color: #333;
  }
  .checklist li {
    margin-bottom: 8px;
    font-size: 0.95em;
  }
</style>
`
    },
    
    {
      id: 'contatos-internos-wise',
      title: 'Contatos Internos - Wise System',
      description: 'Lista atualizada de ramais, e-mails e contatos dos setores internos da Wise System.',
      group: 'Operação Suporte',
      tags: ['Atendimento', 'Operação'],
      content: `<div class="welcome-banner">
    <h1 class="text-2xl font-bold text-sky-800">Contatos Internos</h1>
    <p class="text-base text-sky-700">Consulte abaixo os ramais, e-mails e formas de contato com os setores da Wise System.</p>
  </div>

  <section class="contact-section">
    <h2 class="text-xl font-semibold text-sky-700 mb-2">Ramais Internos</h2>
    <div class="grid-container">
      <div class="contact-card">
        <h3>Comercial</h3>
        <p><strong>Ramal:</strong> 218</p>
      </div>
      <div class="contact-card">
        <h3>Financeiro</h3>
        <p><strong>Ramal:</strong> 222</p>
      </div>
      <div class="contact-card">
        <h3>Desenvolvimento</h3>
        <p><strong>Ramal:</strong> 230</p>
      </div>
      <div class="contact-card">
        <h3>Recepção</h3>
        <p><strong>Ramal:</strong> 200</p>
      </div>
    </div>
  </section>

  <section class="contact-section">
    <h2 class="text-xl font-semibold text-sky-700 mt-8 mb-2">Contatos por E-mail</h2>
    <div class="grid-container">
      <div class="contact-card">
        <h3>Comercial</h3>
        <p><strong>E-mail:</strong> <a href="mailto:comercial@wisesystem.com.br" class="text-blue-600 underline">comercial@wisesystem.com.br</a></p>
      </div>
      <div class="contact-card">
        <h3>Financeiro</h3>
        <p><strong>E-mail:</strong> <a href="mailto:financeiro@wisesystem.com.br" class="text-blue-600 underline">financeiro@wisesystem.com.br</a></p>
      </div>
      <div class="contact-card">
        <h3>Relacionamento</h3>
        <p><strong>E-mail:</strong> <a href="mailto:relacionamento@wisesystem.com.br" class="text-blue-600 underline">relacionamento@wisesystem.com.br</a></p>
      </div>
      <div class="contact-card">
        <h3>Suporte</h3>
        <p><strong>E-mail:</strong> <a href="mailto:suporte@wisesystem.com.br" class="text-blue-600 underline">suporte@wisesystem.com.br</a></p>
      </div>
    </div>
  </section>

  <section class="contact-section">
    <h2 class="text-xl font-semibold text-sky-700 mt-8 mb-2">WhatsApp para Atendimento</h2>
      <div class="contact-card">
      <p><strong>Comercial</strong> <a href="https://wa.me/5511977444017" target="_blank" class="text-blue-600 underline">11 97744-4017</a></p>
    </div>
    <div class="contact-card">
      <p><strong>Financeiro:</strong> <a href="https://wa.me/5511917211256" target="_blank" class="text-blue-600 underline">11 91721-1256</a></p>
    </div>
     <div class="contact-card">
      <p><strong>Relacionamento:</strong> <a href="https://wa.me/1122954137" target="_blank" class="text-blue-600 underline">11 2295-4137</a></p>
    </div>
    <div class="contact-card">
      <p><strong>Suporte:</strong> <a href="https://wa.me/1126091029" target="_blank" class="text-blue-600 underline">11 2609-1029</a></p>
    </div>
  </section>

  <style>
    .welcome-banner {
      background: #e3f2fd;
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 30px;
      text-align: center;
    }

    .contact-section {
      margin: 30px 0;
    }

    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
    }

    .contact-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      border-left: 4px solid #2196F3;
    }

    .contact-card h3 {
      margin-top: 0;
      font-weight: 600;
      color: #0d47a1;
    }

    .contact-card p {
      margin: 6px 0;
      font-size: 0.95em;
      color: #333;
    }

    .contact-card a {
      color: #1976d2;
    }
  </style>
  `
    },

    {
      id: 'estrutura-operacao-suporte',
      title: 'Estrutura e Ocupações da Operação do Suporte',
      description: 'Descrição detalhada dos níveis e estágios da operação de suporte, incluindo responsabilidades e fluxos de trabalho.',
      group: 'Operação Suporte',
      tags: ['Operação', 'Processos'],
      content: `
<div class="welcome-banner">
  <h1>Estrutura da Operação de Suporte</h1>
  <p>Este guia detalha a organização hierárquica e as responsabilidades de cada nível da equipe de suporte.</p>
</div>

<section class="structure-overview">
  <h2 style="color: #1a5276;">Visão Geral da Estrutura</h2>
  
  <div class="structure-card">
    <p>A operação de suporte é organizada em três níveis principais:</p>
    <ul class="blue-bullets">
      <li><strong>Relacionamento</strong>: Coordenação geral e gestão de processos</li>
      <li><strong>Nível 1 (N1)</strong>: Suporte direto ao cliente dividido em dois estágios</li>
      <li><strong>Nível 2 (N2)</strong>: Suporte técnico avançado e desenvolvimento</li>
    </ul>
  </div>
</section>

<section class="relationship-section">
  <h2 style="color: #1a5276; border-bottom: 2px solid #3498db; padding-bottom: 8px;">Relacionamento</h2>
  
  <div class="role-card">
    <h3 style="color: #2874a6;">Responsabilidades Principais</h3>
    <div class="responsibilities">
      <ul class="blue-bullets">
        <li>Agendamentos e reuniões com clientes</li>
        <li>Monitoramento da equipe e acompanhamento de casos críticos</li>
        <li>Registro de sugestões de melhorias</li>
        <li>Tratativa de e-mails e redirecionamentos</li>
        <li>Alteração e cadastro de supervisores Sigo</li>
        <li>Organização do suporte e gestão de processos</li>
        <li>Elaboração de documentações</li>
      </ul>
    </div>
  </div>
</section>

<section class="level-section">
  <h2 style="color: #1a5276; border-bottom: 2px solid #3498db; padding-bottom: 8px;">Nível 1 (N1)</h2>
  <p>Departamento dividido em 2 estágios com responsabilidades complementares:</p>
  
  <div class="stage-container">
    <div class="stage-card">
      <h3 style="color: #2874a6;">Estágio 1</h3>
      <div class="responsibilities">
        <ul class="blue-bullets">
          <li>Suporte direto aos clientes</li>
          <li>Análise de casos em até 1h</li>
          <li>Coleta de dados para tratativas</li>
          <li>Feedbacks aos clientes</li>
          <li>Direcionamento de casos financeiros, comerciais e de faturamento para o Estágio 2</li>
          <li>Elaboração de documentações</li>
        </ul>
      </div>
    </div>
    
    <div class="stage-card">
      <h3 style="color: #2874a6;">Estágio 2</h3>
      <div class="responsibilities">
        <ul class="blue-bullets">
          <li>Suporte direto aos clientes</li>
          <li>Análise de casos em até 2h</li>
          <li>Acompanhamento de reuniões operacionais</li>
          <li>Inclusão de casos na planilha mediante autorização</li>
          <li>Suporte exclusivo em migrações e homologações bancárias/NFSe</li>
          <li>Ministração de treinamentos</li>
          <li>Registro de sugestões de melhorias</li>
          <li>Tratativa de e-mails e redirecionamentos</li>
          <li>Elaboração de documentações</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="level-section">
  <h2 style="color: #1a5276; border-bottom: 2px solid #3498db; padding-bottom: 8px;">Nível 2 (N2)</h2>
  
  <div class="role-card">
    <h3 style="color: #2874a6;">Responsabilidades Técnicas</h3>
    <div class="responsibilities">
      <ul class="blue-bullets">
        <li>Desenvolvimento de relatórios e estrutura do dashboard</li>
        <li>Análise de casos avançados na planilha de Controle de Correção de Erros</li>
        <li>Redirecionamento de erros para a equipe de desenvolvimento</li>
        <li>Estruturação de queries para banco de dados</li>
        <li>Processos relacionados a migração</li>
        <li>Tratativa de implantação do W3 server</li>
        <li>Tratativa de erros por banco de dados no W3</li>
        <li>Testes de sistema</li>
        <li>Acompanhamento de casos críticos com administração das empresas</li>
        <li>Participação em reuniões técnicas sobre software</li>
        <li>Homologações bancárias e de NFSe</li>
        <li>Tratativas de sugestões de melhorias</li>
        <li>Auxílio na elaboração de documentações</li>
      </ul>
    </div>
  </div>
  
  <div class="workflow-card">
    <h3 style="color: #2874a6;">Fluxo de Atendimento N2</h3>
    <ol class="blue-numbers">
      <li>Recebimento de casos complexos do N1</li>
      <li>Análise técnica detalhada</li>
      <li>Desenvolvimento de soluções ou relatórios</li>
      <li>Coordenação com equipe de desenvolvimento quando necessário</li>
      <li>Testes e validação de soluções</li>
      <li>Documentação do processo</li>
      <li>Feedback ao N1 e cliente</li>
    </ol>
  </div>
</section>

<style>
  .welcome-banner {
    background: #eaf2f8;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
    border-left: 5px solid #2874a6;
  }
  
  .structure-card, .role-card, .workflow-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
    border-left: 4px solid #3498db;
  }
  
  .stage-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 25px;
    margin: 25px 0;
  }
  
  .stage-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #3498db;
  }
  
  .blue-bullets {
    list-style: none;
    padding-left: 20px;
  }
  
  .blue-bullets li {
    margin-bottom: 12px;
    padding-left: 25px;
    position: relative;
    line-height: 1.5;
  }
  
  .blue-bullets li:before {
    content: "•";
    color: #2874a6;
    font-size: 1.4em;
    position: absolute;
    left: 0;
    top: -3px;
  }
  
  .blue-numbers {
    list-style: none;
    counter-reset: blue-counter;
    padding-left: 0;
  }
  
  .blue-numbers li {
    counter-increment: blue-counter;
    margin-bottom: 15px;
    padding-left: 35px;
    position: relative;
  }
  
  .blue-numbers li:before {
    content: counter(blue-counter);
    background-color: #2874a6;
    color: white;
    font-size: 0.9em;
    font-weight: bold;
    position: absolute;
    left: 0;
    top: 0;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .responsibilities {
    margin-top: 15px;
  }
  
  .workflow-card {
    margin-top: 25px;
    background-color: #f8f9fc;
    border-left: 4px solid #1a5276;
  }
</style>
`
    },



    {
      id: 'atalhos-sincro-mensagens-rapidas',
      title: 'Atalhos Sincro - Mensagens Rápidas',
      description: 'Manual completo de atalhos e mensagens padronizadas para agilizar o atendimento ao cliente na ferramenta Sincro da Wise System.',
      group: 'Atendimento e Suporte',
      content: `
<div class="welcome-banner">
  <h1>Manual de Atalhos Sincro - Mensagens Rápidas</h1>
  <p>A fim de facilitar o processo de escrita e comunicação com o cliente, o Sincro disponibiliza um sistema de mensagens automáticas que, ao digitar um 'atalho', permite que determinadas frases padrão sejam encaminhadas sem a necessidade de escrever a frase completa. Recomendamos o uso deste recurso para otimizar o processo de escrita.</p>
</div>

<section class="shortcuts-section">
  <h2>Início da Conversa</h2>
  
  <div class="shortcut-grid">
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/saudação</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Wise System, Suporte, Bom dia! Espero que esteja bem! Em que podemos ajudar?')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Wise System, Suporte, Bom dia! Espero que esteja bem! Em que podemos ajudar?</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/farei</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Farei o possível para ajudar!')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Farei o possível para ajudar!</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/protocolo</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Verifiquei internamente e, por não haver atendimentos anteriores referentes a esta questão, este atendimento gerou o protocolo --.')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Verifiquei internamente e, por não haver atendimentos anteriores referentes a esta questão, este atendimento gerou o protocolo --.</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/dispo</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Claro, estou à disposição. Qual seria a outra questão?')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Claro, estou à disposição. Qual seria a outra questão?</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/ocupa</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Seu contato é muito importante para nós! No momento todos os nossos agentes estão em atendimento! Peço gentilmente que aguarde um momento, em breve iremos atendê-lo(a).')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Seu contato é muito importante para nós! No momento todos os nossos agentes estão em atendimento! Peço gentilmente que aguarde um momento, em breve iremos atendê-lo(a).</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/outra</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Claro, estou à disposição. Qual seria a outra questão?')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Claro, estou à disposição. Qual seria a outra questão?</p>
    </div>
  </div>
  
  <div class="warning-box">
    <h4>Observação Importante</h4>
    <p>Antes de gerar um protocolo, verifique se há um chamado em aberto no WGSC com outro analista. Em caso de dúvida sobre a natureza da solicitação (erro ou não), consulte outro analista mais experiente.</p>
  </div>
</section>

<section class="shortcuts-section">
  <h2>Meio da Conversa</h2>
  
  <div class="shortcut-grid">
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/momento</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Um momento por gentileza, vou verificar internamente.')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Um momento por gentileza, vou verificar internamente.</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/obrigado</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Obrigado por aguardar.')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Obrigado por aguardar.</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/agrade</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Agradeço a compreensão, após verificar internamente, ...')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Agradeço a compreensão, após verificar internamente, ...</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/desculpa</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Peço desculpas pela demora.')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Peço desculpas pela demora.</p>
    </div>
  </div>
</section>

<section class="shortcuts-section">
  <h2>Encerramento</h2>
  
  <div class="shortcut-grid">
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/ajudo</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('No momento, ajudo em algo mais?')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>No momento, ajudo em algo mais?</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/duvida</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('O senhor ficou com alguma dúvida quanto à questão?')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>O senhor ficou com alguma dúvida quanto à questão?</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/disponha</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Disponha, qualquer dúvida, estamos à disposição! A Wise System agradece seu contato, tenha um ótimo dia!')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Disponha, qualquer dúvida, estamos à disposição! A Wise System agradece seu contato, tenha um ótimo dia!</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/retor</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Wise System - Suporte, (SEU NOME). Referente ao chamado com protocolo nº xxxx, que se refere ao caso (DETALHAR O CASO) o mesmo já foi corrigido e atualizado. 

Qualquer dúvida, estamos à disposição!')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Wise System - Suporte, (SEU NOME). Referente ao chamado com protocolo nº xxxx, que se refere ao caso (DETALHAR O CASO) o mesmo já foi corrigido e atualizado.<br>
Qualquer dúvida, estamos à disposição! </p>
    </div>
  </div>
</section>

<section class="anydesk-section">
  <h2>Mensagens para Cenários de Acesso AnyDesk</h2>
  
  <div class="shortcut-grid">
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/anydesk</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Por favor, poderia me enviar o acesso AnyDesk?')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Por favor, poderia me enviar o acesso AnyDesk?</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/solici</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Solicitei o acesso AnyDesk.')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Solicitei o acesso AnyDesk.</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/informação</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('*Informações transmitidas através do acesso remoto.*')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>*Informações transmitidas através do acesso remoto.*</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/finalizado</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Finalizado via AnyDesk, qualquer dúvida estaremos à disposição! A Wise System agradece o seu contato, tenha uma ótima tarde!')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Finalizado via AnyDesk, qualquer dúvida estaremos à disposição! A Wise System agradece o seu contato, tenha uma ótima tarde!</p>
      <p class="note">(Se for via ligação, utilize: "Finalizado via ligação")</p>
    </div>
  </div>
  
  <div class="warning-box">
    <h4>Procedimento para Acesso Remoto</h4>
    <p>Sempre registre no Bloco de Notas em seguida informe na conversa com o cliente o que foi feito durante o acesso remoto: problema identificado e solução aplicada, no atalho "Informação". Esse procedimento garante histórico claro caso o cliente retorne com o mesmo problema.</p>
  </div>
</section>

<section class="pesquisa-section">
  <h2>Pesquisa de Satisfação</h2>
  
  <div class="shortcut-card full-width">
    <div class="shortcut-header">
      <h3>/pesquisa</h3>
      <button class="copy-btn" onclick="navigator.clipboard.writeText('A sua satisfação é a nossa prioridade! Por isso, com a finalização do seu Protocolo de Atendimento, você receberá uma pesquisa em seu e-mail. Sua opinião é fundamental para que possamos avaliar nosso atendimento e melhorar continuamente nossos serviços. Se puder avaliar neste momento o atendimento que recebeu, ficaremos imensamente gratos! Agradecemos pela confiança e por escolher a Wise System como parceira em soluções tecnológicas.')">
        <span class="copy-icon"></span> Copiar
      </button>
    </div>
    <p>A sua satisfação é a nossa prioridade! Por isso, com a finalização do seu Protocolo de Atendimento, você receberá uma pesquisa em seu e-mail. Sua opinião é fundamental para que possamos avaliar nosso atendimento e melhorar continuamente nossos serviços. Se puder avaliar neste momento o atendimento que recebeu, ficaremos imensamente gratos! Agradecemos pela confiança e por escolher a Wise System como parceira em soluções tecnológicas.</p>
  </div>
</section>

<section class="situacoes-adversas-section">
  <h2>Mensagens para Situações Adversas</h2>
  
  <div class="shortcut-grid">
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/por falta</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Prezado(a) Supervisor Sigo, por falta de comunicação este atendimento será encerrado. Peço a gentileza que envie uma nova mensagem para iniciar um novo atendimento. A Wise System agradece o seu contato, tenha um ótimo dia!')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Prezado(a) Supervisor Sigo, por falta de comunicação este atendimento será encerrado. Peço a gentileza que envie uma nova mensagem para iniciar um novo atendimento. A Wise System agradece o seu contato, tenha um ótimo dia!</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/supervisor</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Agradecemos por entrar em contato com o Suporte Técnico da Wise System. Verificamos que o suporte é exclusivo para os usuários cadastrados como Supervisor Sigo [Nome do Usuário] e Suplente Sigo [Nome do Usuário]. Sugerimos entrar em contato com esses usuários para que possam encaminhar sua solicitação.')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Agradecemos por entrar em contato com o Suporte Técnico da Wise System. Verificamos que o suporte é exclusivo para os usuários cadastrados como Supervisor Sigo [Nome do Usuário] e Suplente Sigo [Nome do Usuário]. Sugerimos entrar em contato com esses usuários para que possam encaminhar sua solicitação.</p>
    </div>
    
    <div class="shortcut-card">
      <div class="shortcut-header">
        <h3>/fina</h3>
        <button class="copy-btn" onclick="navigator.clipboard.writeText('Sr. [ ], ao tentar abrir o protocolo de atendimento em nosso sistema, consta que sua empresa está com pendência administrativa. Poderia, por gentileza, verificar essa situação com seu departamento financeiro?')">
          <span class="copy-icon"></span> Copiar
        </button>
      </div>
      <p>Sr.[], ao tentar abrir o protocolo de atendimento em nosso sistema, consta que sua empresa está com uma pendência administrativa. Poderia, por gentileza, verificar essa situação com o nosso departamento financeiro pelo número (11) 91721-1256?
    </div>
  </div>
</section>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }
  
  .shortcut-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .shortcut-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    position: relative;
  }
  
  .shortcut-card.full-width {
    grid-column: 1 / -1;
  }
  
  .shortcut-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .shortcut-header h3 {
    margin: 0;
    color: #2196F3;
    font-size: 1.2em;
  }
  
  .copy-btn {
    background: #f5f5f5;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: all 0.3s ease;
  }
  
  .copy-btn:hover {
    background: #e3f2fd;
    border-color: #2196F3;
  }
  
  .copy-btn:active {
    transform: scale(0.95);
  }
  
  .note {
    font-size: 0.9em;
    color: #777;
    font-style: italic;
    margin-top: 10px;
  }
  
  .warning-box {
    border-left: 4px solid #ff9800;
    background-color: #fff8e1;
    padding: 15px;
    margin: 20px 0;
  }
  
  .warning-box h4 {
    margin-top: 0;
    color: #ff9800;
  }
</style>

<script>
// Função para mostrar feedback visual ao copiar
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('copy-btn') || e.target.closest('.copy-btn')) {
    const btn = e.target.classList.contains('copy-btn') ? e.target : e.target.closest('.copy-btn');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '✓ Copiado!';
    btn.style.background = '#4caf50';
    btn.style.color = 'white';
    btn.style.borderColor = '#4caf50';
    
    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      btn.style.color = '';
      btn.style.borderColor = '';
    }, 2000);
  }
});
</script>
`
    },

   







  ],
}