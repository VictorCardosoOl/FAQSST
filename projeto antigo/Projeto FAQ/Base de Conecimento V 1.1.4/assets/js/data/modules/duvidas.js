const Duvidas = {
  id: 'duvidas',
  title: 'Informações',
  description: 'Este módulo tem como objetivo a retirada de duvidas.',
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
    <g fill="currentColor">
        <path d="M18.748 12.816c-1.74.067-3.313.688-4.154 1.53a1 1 0 1 1-1.414-1.415c1.297-1.297 3.409-2.033 5.49-2.114c2.095-.081 4.382.492 5.984 2.094a1 1 0 0 1-1.415 1.414c-1.09-1.091-2.764-1.577-4.491-1.51Z"/>
        <path fill-rule="evenodd" d="M27.384 28.936A12.948 12.948 0 0 1 19 32c-7.18 0-13-5.82-13-13S11.82 6 19 6s13 5.82 13 13c0 3.195-1.152 6.12-3.064 8.384L31.144 27l10.284 10.284c.763.763.763 2 0 2.762l-1.382 1.382c-.763.763-2 .763-2.762 0L27 31.144l.384-2.208ZM30 19c0 6.075-4.925 11-11 11S8 25.075 8 19S12.925 8 19 8s11 4.925 11 11Zm7.249 16.933l-6.785-6.785l-1.12.195l-.196 1.121l6.805 6.805l1.296-1.336Zm.118 2.75l1.298 1.298l1.316-1.316l-1.318-1.318l-1.296 1.336Z" clip-rule="evenodd"/>
    </g>
</svg>`,
  topics: [

    {

      id: 'guia-painel-de-chamada-sigo-web',
      title: 'Guia de Utilização do Painel de Chamada no Sigo Web',
      description: 'Passo a passo completo para configurar e operar o Painel de Chamada, desde a criação do link até a chamada do funcionário pelo médico no consultório.',
      group: 'Processos',
      tags: ['eSocial', 'Funcionalidades'],
      content: `
  <div class="welcome-banner-chamada">
    <h1>Olá! Bem-vindo ao Guia do Painel de Chamada!</h1>
    <p>Este material foi criado para te ajudar a entender o fluxo de atendimento e como utilizar nosso painel de chamada de forma simples e eficiente.</p>
  </div>

  <section class="process-overview">
    <h2>Como Funciona o Fluxo?</h2>
    <p>O processo envolve três etapas principais: a criação do painel, a configuração do atendimento pela recepção e a chamada final pelo médico. Vamos detalhar cada uma delas a seguir.</p>
  </section>

  <section class="step-by-step-guide">
    <h2>Passo a Passo da Operação</h2>
    
    <div class="step-card">
      <h3 class="step-title">Passo 1: Criar o Link do Painel de Chamada</h3>
      <div class="step-content">
        <p>O primeiro passo é gerar o link que será exibido na TV ou monitor da sala de espera. Este link é único e persistente.</p>
        
        <h4>Instruções:</h4>
        <ol>
          <li>Acesse o menu: <strong>Atendimento > Criar painel de chamada</strong>.</li>
          <li>Na tela, selecione os locais de atendimento que farão parte deste painel (Ex: Coleta, Consultório, Sala de Espera, etc.).</li>
          <li>Clique no botão <strong>"Gerar Link"</strong> para obter a URL do seu painel.</li>
        </ol>
        
        <div class="image-placeholder-chamada">
          <p>[Caminho para sua imagem: 'menu-criar-painel.png']</p>
          <span>Navegação e seleção dos locais para gerar o link do painel.</span>
        </div>
      </div>
    </div>

    <div class="step-card">
      <h3 class="step-title">Passo 2: Preparar o Atendimento (Recepção)</h3>
      <div class="step-content">
        <p>A recepcionista é responsável por direcionar o funcionário (paciente) para a fila de espera correta, preparando-o para a chamada do médico.</p>
        
        <h4>Instruções:</h4>
        <ul>
          <li>A recepção deve incluir o atendimento em: <strong>Menu > Atendimento > Recepção</strong>, filtrando pela sala de espera desejada.</li>
          <li>Ao editar o atendimento do funcionário, é crucial preencher três campos:</li>
          <li><strong>1. Sala de Espera:</strong> Selecione para qual fila o funcionário será enviado (Ex: Audiometria, Exame médico).</li>
          <li><strong>2. Status:</strong> Mude o status para <strong>"Aguardando Atendimento"</strong>.</li>
          <li><strong>3. Procedimento:</strong> Na aba "Procedimentos", edite o exame e defina o <strong>Local do Atendimento</strong> e o <strong>Profissional Médico</strong> responsável.</li>
        </ul>

        <div class="image-placeholder-chamada">
          <p>[Caminho para sua imagem: 'configuracao-atendimento.png']</p>
          <span>Tela de edição do atendimento, destacando os campos Sala de Espera, Status e a aba Procedimentos.</span>
        </div>

        <div class="image-placeholder-chamada">
          <p>[Caminho para sua imagem: 'edicao-procedimento.png']</p>
          <span>Janela de edição do procedimento, mostrando a seleção da Unidade de Atendimento e do Médico.</span>
        </div>
      </div>
    </div>

    <div class="step-card">
      <h3 class="step-title">Passo 3: Chamar o Funcionário (Consultório)</h3>
      <div class="step-content">
        <p>Após a preparação pela recepção, o funcionário fica visível para o médico, que pode então realizar a chamada para o consultório.</p>
        
        <h4>Instruções para o Médico:</h4>
        <ol>
          <li>O médico acessa seu módulo em: <strong>Menu > Atendimento > Consultório</strong>.</li>
          <li>A lista de funcionários "Aguardando Atendimento" será exibida.</li>
          <li>Selecione o funcionário desejado e clique no botão <strong>"Chamar Funcionário"</strong>.</li>
          <li>Pronto! O nome do funcionário e o local de destino aparecerão instantaneamente no painel de chamada.</li>
        </ol>

        <div class="image-placeholder-chamada">
          <p>[Caminho para sua imagem: 'tela-consultorio-medico.png']</p>
          <span>Tela do consultório do médico, mostrando a lista de pacientes e o botão "Chamar Funcionário".</span>
        </div>
      </div>
    </div>

  </section>

  <section class="important-note">
    <div class="note-card">
      <h3>Observação Importante</h3>
      <p>Independentemente do tipo de usuário no sistema, <strong>somente o perfil de "Médico"</strong> consegue visualizar e chamar os funcionários através do módulo "Consultório". Outros perfis não terão acesso a esta funcionalidade.</p>
    </div>
  </section>

  <style>
    .welcome-banner-chamada {
      background: linear-gradient(135deg, #e3f2fd, #bbdefb);
      color: #1e3a56;
      padding: 30px;
      border-radius: 12px;
      margin-bottom: 35px;
      text-align: center;
      border: 1px solid #90caf9;
    }
    
    .process-overview {
        text-align: center;
        margin-bottom: 30px;
        padding: 0 20px;
    }

    .process-overview h2 {
        color: #333;
        margin-bottom: 10px;
    }
    
    .step-by-step-guide .step-card {
      background: #ffffff;
      padding: 0;
      border-radius: 10px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
      margin-bottom: 30px;
      overflow: hidden;
      border: 1px solid #e0e0e0;
    }
    
    .step-card .step-title {
      background: #f5f7fa;
      padding: 20px 25px;
      margin: 0;
      font-size: 1.3em;
      color: #0d47a1;
      border-bottom: 1px solid #e0e0e0;
    }
    
    .step-card .step-content {
      padding: 25px;
    }
    
    .step-card h4 {
      color: #1976d2;
      margin-top: 20px;
      margin-bottom: 15px;
      border-bottom: 2px solid #e3f2fd;
      padding-bottom: 8px;
    }

    .step-card ol, .step-card ul {
        padding-left: 25px;
        line-height: 1.8;
    }
    
    .image-placeholder-chamada {
      background: #fafafa;
      padding: 30px;
      text-align: center;
      margin: 25px 0 15px 0;
      border: 2px dashed #d0dbe8;
      border-radius: 8px;
    }

    .image-placeholder-chamada p {
        font-weight: bold;
        color: #555;
        margin: 0 0 10px 0;
    }

    .image-placeholder-chamada span {
        font-size: 0.9em;
        color: #777;
    }
    
    .important-note .note-card {
      background: #fff9c4;
      border-left: 5px solid #fbc02d;
      padding: 20px 25px;
      border-radius: 8px;
      margin: 25px 0;
    }

    .note-card h3 {
        color: #795548;
        margin-top: 0;
    }
  </style>
  `
    },
    {
      id: 'prospect-to-company-conversion',
      title: 'Solução para Erro de Duplicidade ao Cadastrar Empresa',
      description: 'Orientações para resolver conflitos quando um Prospect com pedidos não aprovados impede novo cadastro.',
      group: 'Processos',
      tags: ['Cadastros', 'Erro', 'Empresas'],
      content: `
    <div class="issue-header">
      <h1>Prospect → Empresa: Resolução de Conflitos</h1>
      <p>Problema relatado: Erro de duplicidade ao cadastrar empresa com CNPJ existente</p>
    </div>

    <section class="problem-analysis">
      <h2>Análise do Caso</h2>
      <div class="case-card">
        <div class="case-timeline">
          <div class="timeline-step">
            <div class="step-number">1</div>
            <h3>Cadastro Inicial</h3>
            <p>Empresa registrada como <strong>Prospect</strong> com dois pedidos gerados</p>
          </div>
          <div class="timeline-arrow">→</div>
          <div class="timeline-step">
            <div class="step-number">2</div>
            <h3>Pedidos Não Aprovados</h3>
            <p>Nenhum dos pedidos foi aprovado</p>
          </div>
          <div class="timeline-arrow">→</div>
          <div class="timeline-step error">
            <div class="step-number">3</div>
            <h3>Exclusão do Prospect</h3>
            <p>Registro foi excluído no módulo Prospects</p>
          </div>
          <div class="timeline-arrow">→</div>
          <div class="timeline-step error">
            <div class="step-number">4</div>
            <h3>Tentativa de Novo Cadastro</h3>
            <p>Erro de duplicidade ao tentar cadastrar no módulo Empresas</p>
          </div>
        </div>

        <div class="technical-details">
          <h3>Motivo Técnico:</h3>
          <div class="detail-item">
            <div class="detail-icon">!</div>
            <p>O sistema mantém referência do CNPJ mesmo após exclusão do prospect quando há pedidos pendentes</p>
          </div>
          <div class="detail-item">
            <div class="detail-icon">✓</div>
            <p>A migração para Empresas só ocorre após <strong>aprovação</strong> de pelo menos um pedido</p>
          </div>
        </div>
      </div>
    </section>

    <section class="solution-section">
      <h2>Orientações para Resolução</h2>
      <div class="solution-flow">
        <div class="solution-step">
          <div class="step-number">1</div>
          <h3>Restaurar o Prospect</h3>
          <p>Recuperar o cadastro original no módulo Prospects</p>
        </div>
        <div class="solution-arrow">→</div>
        <div class="solution-step">
          <div class="step-number">2</div>
          <h3>Gerenciar Pedidos</h3>
          <p>Ajustar pedidos existentes ou criar novo pedido</p>
        </div>
        <div class="solution-arrow">→</div>
        <div class="solution-step highlight">
          <div class="step-number">3</div>
          <h3>Aprovar Pedido</h3>
          <p>Concluir o processo de aprovação para ativar migração</p>
        </div>
      </div>

      <div class="benefit-box">
        <h3>Vantagens desta Solução:</h3>
        <ul>
          <li>Preserva todos os dados históricos</li>
          <li>Evita necessidade de cadastro manual</li>
          <li>Não requer intervenção técnica no banco de dados</li>
          <li>Seguindo o fluxo natural do sistema</li>
        </ul>
      </div>
    </section>
  
    <style>
      .issue-header {
        background: #e3f2fd;
        color: white;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      .issue-header h1 {
        margin-top: 0;
        font-size: 1.8em;
      }
      .case-card {
        background: white;
        padding: 25px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        margin-top: 20px;
      }
      .case-timeline {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        flex-wrap: wrap;
      }
      .timeline-step {
        background: white;
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        text-align: center;
        min-width: 150px;
        flex: 1;
        margin: 0 5px;
        position: relative;
      }
      .timeline-step.error {
        border-top: 3px solid #f44336;
      }
      .step-number {
        background: #2196F3;
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin: 0 auto 10px;
      }
      .timeline-arrow {
        color: #2196F3;
        font-weight: bold;
        font-size: 1.2em;
      }
      .technical-details {
        background: #f5f5f5;
        padding: 20px;
        border-radius: 8px;
        margin-top: 25px;
      }
      .detail-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 15px;
      }
      .detail-icon {
        background: #2196F3;
        color: white;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin-right: 15px;
        flex-shrink: 0;
      }
      .solution-flow {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 30px 0;
        flex-wrap: wrap;
      }
      .solution-step {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        text-align: center;
        min-width: 180px;
        flex: 1;
        margin: 0 5px;
      }
      .solution-step.highlight {
        background: #e3f2fd;
        border: 2px solid #2196F3;
      }
      .solution-arrow {
        color: #2196F3;
        font-weight: bold;
        font-size: 1.3em;
      }
      .benefit-box {
        background: #e8f5e9;
        padding: 20px;
        border-radius: 8px;
        margin-top: 25px;
      }
      .benefit-box h3 {
        margin-top: 0;
        color: #2e7d32;
      }
      .checklist-card {
        background: white;
        padding: 25px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        margin-top: 20px;
      }
      .checklist-item {
        display: flex;
        align-items: center;
        margin-bottom: 15px;
      }
      .checklist-item input {
        margin-right: 15px;
      }
      h2 {
        color: #2196F3;
        border-bottom: 2px solid #e3f2fd;
        padding-bottom: 8px;
      }
      @media (max-width: 768px) {
        .case-timeline, .solution-flow {
          flex-direction: column;
        }
        .timeline-arrow, .solution-arrow {
          transform: rotate(90deg);
          margin: 15px 0;
        }
      }
    </style>
  `
    },

    {
      id: 'configuracao-servidor-smtp-sigoweb',
      title: 'Configuração do Servidor SMTP - SigoWeb',
      description: 'Guia completo para configuração do servidor SMTP no sistema SigoWeb, incluindo dados necessários, orientações para provedores e configurações específicas para domínios públicos e privados.',
      group: 'Seu computador',
      tags: ['Configurações', 'Funcionaliades'],
      content: `
<div class="welcome-banner">
  <h1>Configuração do Servidor SMTP</h1>
  <p>Este guia técnico orienta sobre a configuração do protocolo SMTP para envio automatizado de e-mails no sistema SigoWeb.</p>
</div>

<section class="core-concepts">
  <h2>1. Importância do SMTP para uma clínica de SST</h2>
  <div class="concept-card">
    <p>O <strong>SMTP (Simple Mail Transportation Protocol)</strong> é um protocolo de rede utilizado para:</p>
    <ul>
      <li>• Encaminhar e disparar e-mails de forma automatizada através de gatilhos ou comandos</li>
      <li>• Enviar um ou centenas de e-mails simultaneamente para diversos destinatários</li>
      <li>• Agilizar o envio de documentos como guias de autorizações, boletos e demonstrativos financeiros</li>
      <li>• Padronizar comunicações com empresas e funcionários</li>
    </ul>
  </div>
</section>

<section class="configuration-steps">
  <h2>2. Criação de um SMTP</h2>
  
  <div class="step-card">
    <h3>Pré-requisitos</h3>
    <ul>
      <li>1/ Conta de e-mail configurada em um provedor compatível</li>
      <li>2/ Liberação da verificação de duas etapas (obrigatório na maioria dos provedores modernos)</li>
      <li>3/ Suporte técnico para configuração de portas e criptografia</li>
    </ul>
  </div>

    </br><h3>Principais provedores de SMTP:</h3>
  <div class="provider-comparison">
    <div class="provider-card">
      <h4>Gmail</h4>
      <ul>
        <li>Verificação de duas etapas obrigatória</li>
        <li>Alta documentação disponível</li>
        <li>Configuração intuitiva</li>
      </ul>
    </div>
    
    <div class="provider-card">
      <h4>Thunderbird</h4>
      <ul>
        <li>Boa documentação</li>
        <li>Suporte limitado</li>
      </ul>
    </div>
    
    <div class="provider-card">
      <h4>Locaweb</h4>
      <ul>
        <li>Utiliza senha única</li>
        <li>Suporte especializado</li>
        <li>Boa documentação</li>
      </ul>
    </div>
  </div>
  
  <h3>Configuração no Sistema SigoWeb</h3>
  <div class="step-by-step">
    <div class="step">
      <h4>Passo 1</h4>
      <p>Acesse o módulo "Configurações Gerais"</p>
    </div>
    
    <div class="step">
      <h4>Passo 2</h4>
      <p>Localize o campo "Servidor SMTP"</p>
    </div>
    
    <div class="step">
      <h4>Passo 3</h4>
      <p>Preencha os dados conforme instruções abaixo</p>
    </div>
  </div>
</section>

<section class="required-data">
  <h2>3. Dados necessários para o preenchimento</h2>
  
  <div class="data-card">
    <h3>Endereço do servidor SMTP</h3>
    <p>Endereço genérico do provedor (ex: smtp.gmail.com, smtplw.com.br)</p>
  </div>
  
  <div class="data-card">
    <h3>Porta SMTP</h3>
    <table class="port-table">
      <tr>
        <th>Porta</th>
        <th>Tecnologia</th>
        <th>Segurança</th>
      </tr>
      <tr>
        <td>25</td>
        <td>Sem criptografia</td>
        <td>Baixa</td>
      </tr>
      <tr>
        <td>465</td>
        <td>SSL</td>
        <td>Média</td>
      </tr>
      <tr>
        <td>587</td>
        <td>TLS/STARTTLS</td>
        <td>Alta (recomendada)</td>
      </tr>
      <tr>
        <td>2525</td>
        <td>Não oficial</td>
        <td>Variável</td>
      </tr>
    </table>
  </div>
  
  <div class="data-card">
    <h3>Credenciais de acesso, exemplo:</h3>
    <ul>
      <li>•	Servidor SMTP: smtp.meuprovedor.com.br </li>
      <li>•	Login SMTP: wisesystem@meuprovedor.com.br</li>
    </ul>
  </div>
  
  <div class="data-card">
    <h3>Configurações de segurança</h3>
    <ul>
      <li>Autenticação obrigatória (normalmente SIM)</li>
      <li>Conexão SSL/TLS (depende da porta utilizada)</li>
    </ul>
  </div>
</section>

<section class="email-providers">
  <h2>4. Orientações para Provedores de E-mail</h2>
  
  <div class="provider-links">
    <h3>Documentação oficial:</h3>
    <ul>
      <li><a href="https://support.microsoft.com/pt-br/office/configura%C3%A7%C3%B5es-pop-imap-e-smtp-para-outlook-com-d088b986-291d-42b8-9564-9c414e2aa040" target="_blank">Configurações SMTP para Outlook/Microsoft</a></li>
      <li><a href="https://support.google.com/a/answer/176600?hl=pt" target="_blank">Configurações SMTP para Google Workspace</a></li>
    </ul>
  </div>
  
  <div class="special-instructions">
    <h3>Configuração Especial para Google</h3>
    <p>Devido à autenticação de dois fatores, é necessário gerar uma senha específica para aplicativos:</p>
    <ol>
      <li>Acesse o <a href="https://support.google.com/accounts/answer/185833?hl=pt-BR" target="_blank">gerador de senhas de app</a></li>
      <li>Selecione "Outro (Nome personalizado)"</li>
      <li>Digite "SigoWeb" como nome do aplicativo</li>
      <li>Use a senha gerada no campo "Senha SMTP" do sistema</li>
    </ol>
  </div>
</section>

<section class="domain-config">
  <h2>4.1 Configuração para Domínios Públicos e Privados</h2>
  
  <div class="config-card">
    <h3>Domínios Públicos (Gmail, Outlook, etc)</h3>
    <ul>
      <li>Seguir configurações padrão do provedor</li>
      <li>Utilizar endereços SMTP genéricos</li>
    </ul>
  </div>
  
  <div class="config-card">
    <h3>Domínios Privados (Empresariais)</h3>
    <ul>
      <li>Servidor SMTP específico (ex: smtp.meuprovedor.com.br)</li>
      <li>Login SMTP completo (ex: wisesystem@meuprovedor.com.br)</li>
      <li>Configurações personalizadas de porta e segurança</li>
    </ul>
    <p class="note">Recomenda-se consultar o suporte técnico do provedor para configurações específicas</p>
  </div>
  
  <h3>Exemplo de Configuração para Domínio Privado:</h3>
  <div class="code-block">
    <p>Endereço SMTP: smtp.meudominio.com.br</p>
    <p>Porta: 587</p>
    <p>Login: sistema@meudominio.com.br</p>
    <p>Requer SSL: Sim</p>
    <p>Requer autenticação: Sim</p>
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
  
  .concept-card, .data-card, .config-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
  }
  
  .provider-comparison {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .provider-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #4CAF50;
  }
  
  .step-by-step {
    display: flex;
    gap: 15px;
    margin: 20px 0;
    flex-wrap: wrap;
  }
  
  .step {
    flex: 1;
    min-width: 200px;
    background: #e8f5e9;
    padding: 15px;
    border-radius: 8px;
    border-left: 4px solid #2E7D32;
  }
  
  .port-table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
  }
  
  .port-table th, .port-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
  
  .port-table th {
    background-color: #f5f5f5;
  }
  
  .provider-links ul {
    list-style-type: none;
    padding: 0;
  }
  
  .provider-links li {
    margin: 10px 0;
  }
  
  .provider-links a {
    color: #1a73e8;
    text-decoration: none;
  }
  
  .provider-links a:hover {
    text-decoration: underline;
  }
  
  .special-instructions {
    background: #fff8e1;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #FFC107;
    margin: 20px 0;
  }
  
  .code-block {
    background: #f5f5f5;
    padding: 20px;
    border-radius: 8px;
    font-family: monospace;
    margin: 15px 0;
  }
  
  .note {
    font-style: italic;
    color: #666;
    margin-top: 10px;
  }
  
  .image-placeholder {
    background: #fafafa;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ddd;
    border-radius: 8px;
    color: #777;
  }
</style>
`
    },

    {
      id: 'processo-solicitacoes-banco-dados',
      title: 'Processo de Solicitações via Banco de Dados',
      description: 'Protocolo completo para solicitações via banco de dados com ênfase na análise prévia, informações obrigatórias e configuração correta de status.',
      group: 'Processos',
      tags: ['Atendimento', 'Protocolo', 'Processo'],
      content: `
    <div class="welcome-banner">
      <h1>Solicitações Técnicas via Banco de Dados</h1>
      <p>Este guia detalha o processo correto para solicitações que exigem intervenção direta no banco de dados, garantindo eficiência e rastreabilidade.</p>
    </div>

    <section class="core-concepts">
      <h2>Análise Prévia Obrigatória</h2>
      <div class="concept-card">
        <p><strong>Requisito fundamental:</strong> Todas as solicitações devem passar por análise técnica completa antes do encaminhamento ao departamento responsável.</p>
        <ul>
          <li>• Realizar diagnóstico completo durante o atendimento</li>
          <li>• Efetuar sondagens técnicas com o cliente para identificar causas-raiz</li>
          <li>• Documentar todas as tentativas de resolução no ambiente local</li>
          <li>• Validar compreensão do cliente sobre o problema antes do encaminhamento</li>
        </ul>
      </div>
    <section class="documents-section">
      <h2>Informações Obrigatórias para Solicitação</h2>
      
      <div class="document-card">
        <h3 class="document-title">Dados Técnicos Essenciais</h3>
        <div class="document-content">
          <p>Toda solicitação enviada por e-mail deve conter:</p>
          <ul>
            <li><strong>Endereço de destino:</strong> suporte@wisesystem.com.br</li>
            <li><strong>Número de protocolo:</strong> Identificador único do atendimento</li>
            <li><strong>Nome do Analista:</strong> Responsável pelo atendimento inicial</li>
            <li><strong>IDs relacionados:</strong> Conjunto completo de identificadores técnicos</li>
          </ul>
          
          <h4>Estrutura Padrão do E-mail:</h4>
          <div class="code-block">
            <p><strong>Assunto:</strong> Solicitação Banco de Dados - [N° Protocolo]</p>
            <p><strong>Corpo:</strong></p>
            <p>• Descrição detalhada da ocorrência<br>
               • IDs envolvidos (listados abaixo)<br>
          </div>
        </div>
      </div>

  <!-- Imagem: Exemplo de tabela de IDs -->
          <div class="image-placeholder">
            <p>[Imagem: Exemplo de e-mail que deve ser enviado a Wise]</p>
          </div>
        </div>
      </div>
    </section>
      <div class="document-card">
        <h3 class="document-title">Identificadores Técnicos (IDs)</h3>
        <div class="document-content">
          <table class="id-table">
            <tr>
              <th>Tipo de Solicitação</th>
              <th>IDs Obrigatórios</th>
            </tr>
            <tr>
              <td><strong>Casos Gerais</strong></td>
              <td>
                <ul>
                  <li>- ID Funcionário</li>
                  <li>- ID Empresa</li>
                  <li>- ID Gerenciamento de Riscos</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Atendimento</strong></td>
              <td>
                <ul>
                  <li>- ID Cliente</li>
                  <li>- ID Funcionário</li>
                  <li>- ID Registro de Admissão</li>
                  <li>- ID Registro de Ocupação</li>
                </ul>
              </td>
            </tr>
          </table>

    <section class="nr-overview">
      <h2>Configuração do Protocolo</h2>
      
      <div class="grid-container">
        <div class="nr-card">
          <h3>Status</h3>
          <p>Aguardando Cliente</p>
          <p class="nr-desc">Status obrigatório para todos os protocolos encaminhados</p>
        </div>
        
        <div class="nr-card">
          <h3>Detalhamento</h3>
          <p>Ocorrência</p>
          <p class="nr-desc">Descrição técnica completa do problema</p>
        </div>
        
        <div class="nr-card">
          <h3>Resolução</h3>
          <p>Solução Proposta</p>
          <p class="nr-desc">Campo deve ser pré-preenchido com ação sugerida</p>
        </div>
        
        <div class="nr-card">
          <h3>Executor</h3>
          <p>Atendente Executor</p>
          <p class="nr-desc">Responsável técnico do departamento destino</p>
        </div>
      </div>

      <!-- Imagem: Configuração de protocolo no sistema -->
      <div class="image-placeholder">
        <p>[Imagem: Captura de tela do w-GSC com campos destacados]</p>
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
      
      .concept-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: 15px 0;
      }
      
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .nr-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-left: 4px solid #2196F3;
      }
      
      .nr-desc {
        font-size: 0.9em;
        color: #555;
        margin-top: 10px;
      }
      
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
      }
      
      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }
      
      .document-content {
        padding: 25px;
      }
      
      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
      }
      
      .id-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .id-table th, .id-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
      }
      
      .id-table th {
        background-color: #f2f2f2;
      }
      
      .code-block {
        background: #f8f8f8;
        border-left: 4px solid #2196F3;
        padding: 15px;
        margin: 15px 0;
        font-family: monospace;
      }
    </style>
  `
    },

    {
      id: 'xml-esocial',
      title: 'XML no Contexto do eSocial - Funcionamento e Geração',
      description: 'Guia completo sobre XML, sua estrutura, funcionamento em Web Services e papel crítico na geração de eventos do eSocial.',
      group: 'Seu computador',
      tags: ['eSocial', 'Evento', 'Webservice'],
      content: `
    <div class="welcome-banner">
      <h1>Entendendo o XML no eSocial</h1>
      <p>Este guia explica a tecnologia XML e seu papel fundamental na comunicação com o sistema eSocial do governo.</p>
    </div>

    <section class="core-concepts">
      <h2>O Que é XML?</h2>
      <div class="concept-card">
        <p>O <strong>XML</strong> (eXtensible Markup Language) é uma linguagem de marcação projetada para:</p>
        <ul>
          <li>• Armazenar e transportar dados de forma estruturada</li>
          <li>• Ser legível tanto por humanos quanto por máquinas</li>
          <li>• Facilitar a troca de informações entre sistemas diferentes</li>
        </ul>
        
        <h4>Características Essenciais:</h4>
        <div class="grid-container">
          <div class="nr-card">
            <h3>Estrutura Hierárquica</h3>
            <p>Dados organizados em formato de árvore com elementos aninhados</p>
          </div>
          
          <div class="nr-card">
            <h3>Personalizável</h3>
            <p>Criação de tags próprias para descrever os dados</p>
          </div>
          
          <div class="nr-card">
            <h3>Compatibilidade</h3>
            <p>Neutralidade de plataforma para integração entre sistemas</p>
          </div>
        </div>
      </div>
    <section class="documents-section">
      <h2>Como o XML Funciona?</h2>
      
      <div class="document-card">
        <h3 class="document-title">Comunicação em Web Services</h3>
        <div class="document-content">
          <p>O XML atua como formato de troca de dados entre sistemas diferentes:</p>
          
          <div class="flow-container">
            <div class="flow-step">
              <h4>1. Requisição (Request)</h4>
              <p>Cliente envia solicitação em XML para web service</p>
              <div class="code-block">
                &lt;request&gt;<br>
                &nbsp;&nbsp;&lt;usuarioID&gt;123&lt;/usuarioID&gt;<br>
                &lt;/request&gt;
              </div>
            </div>
            
            <div class="flow-step">
              <h4>2. Processamento</h4>
              <p>Servidor interpreta e processa a requisição</p>
            </div>
            
            <div class="flow-step">
              <h4>3. Resposta (Response)</h4>
              <p>Servidor retorna dados solicitados em XML</p>
              <div class="code-block">
                &lt;response&gt;<br>
                &nbsp;&nbsp;&lt;usuario&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;id&gt;123&lt;/id&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;nome&gt;Diego Silva&lt;/nome&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;email&gt;diego.silva@example.com&lt;/email&gt;<br>
                &nbsp;&nbsp;&lt;/usuario&gt;<br>
                &lt;/response&gt;
              </div>
            </div>
          </div>
        </div>
      </div>

    <section class="esocial-integration">
      <h2>XML no Contexto do eSocial</h2>
      
      <div class="document-card">
        <h3 class="document-title">Geração Automática de Eventos</h3>
        <div class="document-content">
          <p>Nosso sistema utiliza dados do usuário e do banco de dados para:</p>
          <ul>
            <li>- Preencher automaticamente arquivos XML</li>
            <li>- Seguir rigidamente o layout oficial do governo</li>
            <li>- Garantir conformidade com padrões técnicos específicos</li>
          </ul>
          
          <h4>Padrões Técnicos Obrigatórios:</h4>
          <ul>
            <li>• Especificações definidas pelo município da região</li>
            <li>• Normas técnicas do Comitê Gestor do eSocial</li>
            <li>• Estruturas de validação XSD do governo</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">Comportamento do Sistema na Geração</h3>
        <div class="document-content">
          <p>O processo de geração segue esta lógica:</p>
          
          <div class="step-by-step">
            <div class="step">
              <h4>Passo 1: Identificação de Tags</h4>
              <p>Reconhecimento das tags exigidas pelo layout do evento</p>
            </div>
            
            <div class="step">
              <h4>Passo 2: Verificação de Dados</h4>
              <p>Consulta ao banco de dados para cada tag obrigatória</p>
            </div>
            
            <div class="step">
              <h4>Passo 3: Inserção de Valores</h4>
              <p>Preenchimento da tag quando dado existe</p>
            </div>
            
            <div class="step">
              <h4>Passo 4: Tratamento de Erros</h4>
              <p>Bloqueio da geração para tags obrigatórias sem dados</p>
            </div>
          </div>
          
          <div class="alert-box">
            <h4>Regra Crítica:</h4>
            <p>Tags obrigatórias sem dados correspondentes impedem a geração do evento</p>
          </div>
        </div>
      </div>
    <style>
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      
      .concept-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: 15px 0;
      }
      
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .nr-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-left: 4px solid #2196F3;
      }
      
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
      }
      
      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }
      
      .document-content {
        padding: 25px;
      }
      
      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
      }
      
      .flow-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 20px;
        margin: 20px 0;
      }
      
      .flow-step {
        flex: 1;
        min-width: 250px;
        background: #f8f8f8;
        padding: 15px;
        border-radius: 8px;
        border-left: 4px solid #4CAF50;
      }
      
      .code-block {
        background: #2d2d2d;
        color: #f8f8f2;
        padding: 15px;
        border-radius: 4px;
        font-family: monospace;
        margin: 15px 0;
        overflow-x: auto;
      }
      
      .step-by-step {
        display: flex;
        flex-direction: column;
        gap: 15px;
        margin: 20px 0;
      }
      
      .step {
        background: #e8f5e9;
        padding: 15px;
        border-left: 4px solid #4CAF50;
        border-radius: 4px;
      }
      
      .alert-box {
        background: #ffebee;
        padding: 15px;
        border-left: 4px solid #f44336;
        border-radius: 4px;
        margin: 20px 0;
      }
    </style>
  `
    },
    {
      id: 'assinatura-medica-certificado-a1',
      title: 'Assinatura Digital Médica e Certificado A1: Requisitos Técnicos',
      description: 'Especificações técnicas para registro de assinatura médica em formato BMP e uso do certificado digital A1 para transmissão de eventos.',
      group: 'Seu computador',
      tags: ['Configurações', 'Usuarios'],
      content: `
    <div class="welcome-banner">
      <h1>Configurações de Segurança Digital</h1>
      <p>Este guia detalha os requisitos técnicos para validação de documentos médicos e transmissão de eventos no sistema.</p>
    </div>

    <section class="core-concepts">
      <h2>Requisitos Técnicos para Assinatura Médica no Sigo Web</h2>
      
      <div class="document-card">
        <h3 class="document-title">Especificações da Assinatura Digital</h3>
        <div class="document-content">
          <div class="spec-grid">
            <div class="spec-card">
              <h4>Formato:</h4>
              <p><strong>.BMP</strong> (Bitmap)</p>
              <p>Imagem não comprimida que mantém a autenticidade da assinatura</p>
            </div>
            
            <div class="spec-card">
              <h4>Dimensões</h4>
              <p><strong>276x92 pixels</strong></p>
              <p>Proporção exata de 3:1 (largura:altura)</p>
            </div>
            
            <div class="spec-card">
              <p>Configuração da assinatura médica no perfil do usuário médico dentro do sistema Sigo</p>
            </div>
          </div>
          
          <h4>Fluxo de Implementação:</h4>
          <ol>
            <li>• Captura da assinatura em dispositivo digital</li>
            <li>• Conversão para BMP com resolução exata (276x92px)</li>
            <li>• Upload no cadastro do profissional médico</li>
            <li>• Validação automática pelo sistema</li>
          </ol>
          <div class="alert-box">
            <h4>Restrições Técnicas:</h4>
            <ul>
              <li>• Formatos JPG/PNG são <strong>rejeitados</strong> pelo sistema. Imagens fora do padrão dimensional causam falha na validação</li>
              <li>• Assinaturas digitalizadas devem ter fundo branco e traço preto</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="certificate-section">
      <h2>Certificado Digital A1</h2>
      
      <div class="document-card">
        <h3 class="document-title">Configuração e Funcionalidades</h3>
        <div class="document-content">
          <div class="feature-card">
            <h4>Definição Técnica</h4>
            <p>Certificado digital emitido por Autoridade Certificadora credenciada pela ICP-Brasil, instalado localmente na máquina do usuário.</p>
          </div>
          
          <div class="feature-card">
            <h4>Validade Legal</h4>
            <p>Equivalente à assinatura manuscrita para documentos eletrônicos, com validade jurídica nos termos da MP 2.200-2/2001.</p>
          </div>
          
          <h4>Implementação no Sistema</h4>
          <div class="comparison-table">
            <table>
              <tr>
                <th>Característica</th>
                <th>Certificado A1</th>
                <th>Outros Certificados</th>
              </tr>
              <tr>
                <td><strong>Armazenamento</strong></td>
                <td>Instalado no computador</td>
                <td>Token físico ou nuvem</td>
              </tr>
              <tr>
                <td><strong>Validade</strong></td>
                <td>1 ano</td>
                <td>Até 5 anos</td>
              </tr>
              <tr>
                <td><strong>Transmissão eSocial</strong></td>
                <td>Suportado</td>
                <td>Não suportado na versão Web</td>
              </tr>
            </table>
          </div>
          
          <h4>Eventos Habilitados</h4>
          <ul>
            <li><strong>S-2220:</strong> Monitoramento da Saúde do Trabalhador</li>
            <li><strong>S-2240:</strong> Condições do Ambiente de Trabalho</li>
            <li><strong>S-2221:</strong> Toxicológico</li>
            <li><strong>S-2210:</strong> Comunicação de Acidente de Trabalho</li>
          </ul>
          
          <div class="warning-box">
            <h4>Procedimentos Críticos:</h4>
            <ul>
              <li>• Renovar o certificado com 30 dias de antecedência da expiração</li>
              <li>• ar/importar o certificado ao trocar de máquina</li>
              <li>• Manter backup do arquivo .PFX protegido por senha forte</li>
            </ul>
          </div>
    <section class="integration-section">
      <h2>Integração com Documentos Ocupacionais</h2>
      
      <div class="grid-container">
        <div class="integration-card">
          <h3>ASO Digital</h3>
          <ul>
            <li>Assinatura BMP aplicada automaticamente</li>
            <li>Certificado A1 gera carimbo de tempo RFC 3161</li>
            <li>Validação cruzada com CRM do médico</li>
          </ul>
        </div>
        
        <div class="integration-card">
          <h3>PCMSO Eletrônico</h3>
          <ul>
            <li>Transmissão automatizada via S-2220</li>
            <li>Assinatura digital em todos os exames</li>
            <li>Registro criptografado com hash SHA-256</li>
          </ul>
        </div>
    <style>
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      
      .spec-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin: 20px 0;
      }
      
      .spec-card {
        background: #f8fbff;
        padding: 20px;
        border-radius: 8px;
        border: 1px solid #bbdefb;
      }
      
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
      }
      
      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }
      
      .document-content {
        padding: 25px;
      }
      
      .alert-box {
        border-left: 4px solid #ff9800;
        background-color: #fff8e1;
        padding: 15px;
        margin: 20px 0;
      }
      
      .warning-box {
        border-left: 4px solid #f44336;
        background-color: #ffebee;
        padding: 15px;
        margin: 20px 0;
      }
      
      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
      }
      
      .comparison-table table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .comparison-table th, .comparison-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
      }
      
      .comparison-table th {
        background-color: #f2f2f2;
      }
      
      .integration-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-top: 4px solid #4caf50;
      }
      
      .feature-card {
        background: #e8f5e9;
        padding: 15px;
        border-radius: 6px;
        margin: 15px 0;
      }
    </style>
  `
    },

    {
      id: 'cache-navegador-fundamentos-tecnicos',
      title: 'Cache do Navegador: Fundamentos Técnicos e Operacionais',
      description: 'Guia completo sobre funcionamento, tipos e gerenciamento de cache em navegadores e sistemas computacionais.',
      group: 'Seu computador',
      tags: ['Base'],
      content: `
    <div class="welcome-banner">
      <h1>Entendendo o Cache Computacional</h1>
      <p>Este guia explica o funcionamento técnico dos sistemas de cache e seu impacto no desempenho de aplicações web.</p>
    </div>

    <section class="core-concepts">
      <h2>O Que é Cache?</h2>
      
      <div class="concept-card">
        <p>O <strong>cache</strong> é um mecanismo de armazenamento temporário que acelera o acesso a dados frequentemente utilizados:</p>
        <ul>
          <li>• Armazena cópias locais de recursos (imagens, scripts, credenciais)</li>
          <li>• Reduz a necessidade de novas solicitações ao servidor</li>
          <li>• Melhora significativamente o tempo de resposta do sistema</li>
        </ul>
        
        <div class="technical-note">
          <h4>Definição Técnica:</h4>
          <p>"Cache é um componente que armazena dados temporariamente para futuras requisições, reduzindo o tempo de acesso a informações de alto custo computacional" (Fonte: Mozilla Developer Network)</p>
        </div>
      </div>
    <section class="cache-types">
      <h2>Tipos de Cache</h2>
      
      <div class="grid-container">
        <div class="cache-card">
          <h3>Cache de Navegador</h3>
          <div class="cache-content">
            <ul>
              <li><strong>Localização:</strong> Armazenado localmente no dispositivo</li>
              <li><strong>Conteúdo:</strong> Cookies, senhas, histórico, recursos de sites</li>
              <li><strong>Persistência:</strong> Mantido entre sessões até limpeza manual</li>
              <li><strong>Capacidade:</strong> Tipicamente 50MB-1GB (varia por navegador)</li>
            </ul>
          </div>
        </div>
        
        <div class="cache-card">
          <h3>Cache de Memória (RAM)</h3>
          <div class="cache-content">
            <ul>
              <li><strong>Localização:</strong> Armazenado na memória volátil (RAM)</li>
              <li><strong>Conteúdo:</strong> Dados de aplicativos em execução</li>
              <li><strong>Persistência:</strong> Perdido ao desligar o dispositivo</li>
              <li><strong>Velocidade:</strong> Acesso 100x mais rápido que SSD</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="comparison-table">
        <table>
          <tr>
            <th>Característica</th>
            <th>Cache do Navegador</th>
            <th>Cache de Memória</th>
          </tr>
          <tr>
            <td><strong>Armazenamento</strong></td>
            <td>Disco rígido/SSD</td>
            <td>Memória RAM</td>
          </tr>
          <tr>
            <td><strong>Persistência</strong></td>
            <td>Até limpeza manual</td>
            <td>Apenas durante a sessão</td>
          </tr>
          <tr>
            <td><strong>Finalidade</strong></td>
            <td>Acelerar carregamento de sites</td>
            <td>Acelerar execução de aplicativos</td>
          </tr>
          <tr>
            <td><strong>Capacidade</strong></td>
            <td>MBs a GBs</td>
            <td>GBs</td>
          </tr>
        </table>
      </div>
    </section>


    <section class="performance-section">
      <h2>Impacto no Desempenho</h2>
      
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Redução de Latência</h3>
          <p>Até <strong>90%</strong> menos tempo de carregamento para recursos em cache</p>
        </div>
        
        <div class="stat-card">
          <h3>Economia de Banda</h3>
          <p>Até <strong>60%</strong> menos dados transferidos (Fonte: HTTP Archive)</p>
        </div>
        
        <div class="stat-card">
          <h3>Eficiência de Memória</h3>
          <p>Aplicações usam <strong>30-40%</strong> menos RAM com cache otimizado</p>
        </div>
      </div>
    <style>
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      
      .concept-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: 15px 0;
      }
      
      .technical-note {
        background: #e8f5e9;
        padding: 15px;
        border-left: 4px solid #4caf50;
        margin-top: 15px;
      }
      
      .image-placeholder {
        background: #f5f5f5;
        padding: 50px;
        text-align: center;
        margin: 30px 0;
        border: 2px dashed #ccc;
        border-radius: 5px;
      }
      
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .cache-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-top: 4px solid #2196F3;
      }
      
      .comparison-table table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .comparison-table th, .comparison-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
      }
      
      .comparison-table th {
        background-color: #f2f2f2;
      }
      
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
      }
      
      .document-title {
        background: #f5f5f5;
        padding: 18px;
        margin: 0;
        font-size: 1.2em;
        border-bottom: 1px solid #e0e0e0;
      }
      
      .document-content {
        padding: 25px;
      }
      
      .code-example {
        background: #2d2d2d;
        color: #f8f8f2;
        padding: 15px;
        border-radius: 4px;
        font-family: monospace;
        margin: 15px 0;
        overflow-x: auto;
      }
      
      .warning-box {
        border-left: 4px solid #ff9800;
        background-color: #fff8e1;
        padding: 15px;
        margin: 20px 0;
      }
      
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 15px;
        margin: 20px 0;
      }
      
      .stat-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        text-align: center;
        border-bottom: 4px solid #9c27b0;
      }
      
      .best-practices {
        background: #e3f2fd;
        padding: 20px;
        border-radius: 8px;
        margin-top: 25px;
      }
    </style>
  `
    },
    {
      id: 'nrs-conceitos-basicos',
      title: ' (NRs) - Normas Regulamentadoras',
      description: 'Guia completo sobre as Normas Regulamentadoras (NRs) com foco em SST, abordando NR-1, NR-7, NR-15 e NR-16, seus objetivos, obrigações e impactos para empresas e trabalhadores.',
      group: 'PJ',
      content: `
<div class="welcome-banner">
  <h1>Normas Regulamentadoras (NRs)</h1>
  <p>Este guia apresenta os conceitos fundamentais das principais Normas Regulamentadoras de Segurança e Saúde no Trabalho utilizadas em nosso sistema.</p>
</div>

<section class="core-concepts">
  <h2>O Que São as Normas Regulamentadoras (NRs)?</h2>
  <div class="concept-card">
    <p>As <strong>Normas Regulamentadoras (NR)</strong> são regras que definem o que pessoas jurídicas e físicas devem fazer para manter o bem-estar social, com foco específico na área de Segurança e Saúde no Trabalho (SST).</p>
    <ul>
      <li>• Algumas tratam de regras gerais, como o uso de <strong>Equipamentos de Proteção Individual (EPIs)</strong></li>
      <li>• Outras falam de situações mais específicas, como segurança no uso de máquinas, cuidados com ergonomia ou proteção da saúde do trabalhador</li>
    </ul>
  </div>
<section class="nr-overview">
  <h2>Principais Normas Regulamentadoras (NRs)</h2>
  
  <div class="grid-container">
    <div class="nr-card" onmouseover="this.style.transform='translateY(-5px)';" onmouseout="this.style.transform='translateY(0)';">
      <h3>NR-1</h3>
      <p>(GRO) Gerenciamento de Riscos Ocupacionais</p>
      <p class="nr-desc">Estabelece disposições gerais, o campo de aplicação, termos e definições comuns às Normas Regulamentadoras.</p>
    </div>
    
    <div class="nr-card" onmouseover="this.style.transform='translateY(-5px)';" onmouseout="this.style.transform='translateY(0)';">
      <h3>NR-7</h3>
      <p>Programa de Controle Médico de Saúde Ocupacional (PCMSO)</p>
      <p class="nr-desc">Estabelece diretrizes para o desenvolvimento do PCMSO com objetivo de proteger e preservar a saúde dos empregados.</p>
    </div>
    
    <div class="nr-card" onmouseover="this.style.transform='translateY(-5px)';" onmouseout="this.style.transform='translateY(0)';">
      <h3>NR-15</h3>
      <p>Atividades e Operações Insalubres</p>
      <p class="nr-desc">Estabelece as atividades que devem ser consideradas insalubres, gerando direito ao adicional de insalubridade.</p>
    </div>
    
    <div class="nr-card" onmouseover="this.style.transform='translateY(-5px)';" onmouseout="this.style.transform='translateY(0)';">
      <h3>NR-16</h3>
      <p>Atividades e Operações Perigosas</p>
      <p class="nr-desc">Define o que é periculosidade e como deve ser feito o pagamento do adicional para atividades perigosas.</p>
    </div>
  </div>
</section>

<section class="documents-section">
  <h2>Detalhamento das Principais NRs</h2>
  
  <div class="document-card">
    <h3 class="document-title">NR-1 - (GRO) Gerenciamento de Riscos Ocupacionais</h3>
    <div class="document-content">
      <p>Estabelece as disposições gerais, o campo de aplicação, os termos e as definições comuns às Normas Regulamentadoras relativas à Segurança e Saúde no Trabalho.</p>
      
      <h4>Obrigações da Empresa:</h4>
      <ul>
        <li><strong>Informar trabalhadores</strong> sobre os riscos no local de trabalho e como preveni-los</li>
        <li><strong>Comunicar resultados</strong> de exames médicos e das avaliações ambientais</li>
        <li><strong>Explicar procedimentos</strong> em caso de acidente ou doença relacionada ao trabalho</li>
        <li><strong>Tomar medidas de prevenção</strong>, priorizando:
          <ol>
            <li>Eliminar o risco</li>
            <li>Reduzir o risco com medidas coletivas</li>
            <li>Reduzir o risco com ajustes na organização do trabalho</li>
            <li>Usar equipamentos de proteção individual (EPI)</li>
          </ol>
        </li>
      </ul>
      
      <h4>Deveres do Trabalhador:</h4>
      <ul>
        <li>Seguir as regras de segurança e saúde no trabalho</li>
        <li>Fazer os exames médicos exigidos</li>
        <li>Usar corretamente os EPIs fornecidos pela empresa</li>
        <li>Colaborar para manter o ambiente de trabalho seguro</li>
      </ul>
      
      <h4>Direitos do Trabalhador:</h4>
      <ul>
        <li>Parar o trabalho se houver risco grave e iminente à vida ou à saúde, avisando o superior</li>
        <li>Não ser punido por parar o trabalho nessas situações</li>
        <li>Receber informações, ao ser contratado ou mudar de função, sobre:
          <ul>
            <li>Riscos do trabalho</li>
            <li>Como prevenir acidentes e doenças</li>
            <li>O que fazer em emergências</li>
          </ul>
        </li>
      </ul>
      
      <h4>Gerenciamento de Riscos Ocupacionais (PGR):</h4>
      <p>O <strong>Programa de Gerenciamento de Riscos (PGR)</strong> deve ser implementado através de:</p>
      <ul>
        <li>Aplicação para toda a operação ou apenas para setor/atividade específica</li>
        <li>Integração com sistema de gestão, seguindo todas as regras da NR</li>
        <li>Inclusão ou vinculação a outros planos e programas exigidos pela legislação</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">NR-7 - Programa de Controle Médico de Saúde Ocupacional (PCMSO)</h3>
    <div class="document-content">
      <p>Programa médico obrigatório que acompanha a saúde dos trabalhadores durante todo o vínculo empregatício.</p>
      
      <h4>Diretrizes do PCMSO:</h4>
      <ul>
        <li>Detectar precocemente problemas de saúde ligados ao trabalho</li>
        <li>Identificar se há exposição excessiva a agentes nocivos</li>
        <li>Avaliar se o trabalhador está apto para suas funções</li>
        <li>Acompanhar a saúde de empregados mais vulneráveis</li>
        <li>Apoiar decisões de afastamento e readaptação profissional</li>
        <li>Garantir vacinas recomendadas pelo Ministério da Saúde</li>
      </ul>
      
      <h4>Exames Médicos Obrigatórios:</h4>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Tipo de Exame</th>
              <th>Periodicidade</th>
              <th>Observações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Admissional</strong></td>
              <td>Antes de assumir atividades</td>
              <td>Obrigatório para todos os empregados</td>
            </tr>
            <tr>
              <td><strong>Periódico</strong></td>
              <td>Variável conforme risco</td>
              <td>
                <ul>
                  <li>Exposição a riscos/doenças crônicas: anualmente ou menos (conforme médico)</li>
                  <li>Condições hiperbáricas: seguir prazo do Anexo IV</li>
                  <li>Demais empregados: a cada 2 anos</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Retorno ao trabalho</strong></td>
              <td>Após afastamento ≥ 30 dias</td>
              <td>Realizado antes do retorno, com possibilidade de retorno gradual</td>
            </tr>
            <tr>
              <td><strong>Mudança de risco</strong></td>
              <td>Antes da mudança de função</td>
              <td>Quando houver exposição a novos riscos ocupacionais</td>
            </tr>
            <tr>
              <td><strong>Demissional</strong></td>
              <td>Até 10 dias após fim do contrato</td>
              <td>
                Pode ser dispensado se exame mais recente foi realizado:
                <ul>
                  <li>Há menos de 135 dias (grau de risco 1 e 2)</li>
                  <li>Há menos de 90 dias (grau de risco 3 e 4)</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <h4>Relatório Anual do PCMSO:</h4>
      <p>O médico responsável deve elaborar relatório analítico anual contendo no mínimo:</p>
      <ul>
        <li>Número de exames clínicos realizados</li>
        <li>Número e tipos de exames complementares realizados</li>
        <li>Estatística de resultados anormais, categorizados por tipo de exame e por unidade/setor/função</li>
        <li>Incidência e prevalência de doenças relacionadas ao trabalho</li>
        <li>Informações sobre número e tipo de eventos e doenças informadas nas CAT</li>
        <li>Análise comparativa em relação ao relatório anterior</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">NR-15 - Atividades e Operações Insalubres</h3>
    <div class="document-content">
      <p>Estabelece as atividades que devem ser consideradas insalubres, gerando direito ao adicional de insalubridade aos trabalhadores.</p>
      
      <h4>Atividades Consideradas Insalubres:</h4>
      <ul>
        <li>Exposição a ruído excessivo</li>
        <li>Exposição ao calor ambiente</li>
        <li>Radiações ionizantes e não ionizantes</li>
        <li>Trabalho sob condições hiperbáricas</li>
        <li>Vibrações</li>
        <li>Frio excessivo</li>
        <li>Umidade</li>
        <li>Agentes químicos (incluindo benzeno)</li>
        <li>Poeiras minerais (sílica, asbesto, manganês)</li>
        <li>Agentes biológicos</li>
      </ul>
      
      <h4>Graus de Insalubridade e Adicionais:</h4>
      <ul>
        <li><strong>Insalubridade de Grau Máximo:</strong> adicional de 40% do salário mínimo</li>
        <li><strong>Insalubridade de Grau Médio:</strong> adicional de 20% do salário mínimo</li>
        <li><strong>Insalubridade de Grau Mínimo:</strong> adicional de 10% do salário mínimo</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">NR-16 - Atividades e Operações Perigosas</h3>
    <div class="document-content">
      <p>Estabelece as diretrizes para caracterização de atividades perigosas e o respectivo adicional de periculosidade.</p>
      
      <h4>Características das Atividades Perigosas:</h4>
      <ul>
        <li>Atividades com inflamáveis ou explosivos</li>
        <li>Atividades com energia elétrica</li>
        <li>Atividades de segurança patrimonial armada</li>
        <li>Outras atividades que impliquem risco iminente de vida</li>
      </ul>
      
      <h4>Adicional de Periculosidade:</h4>
      <ul>
        <li>Valor fixo de 30% sobre o salário base do trabalhador</li>
        <li>Não acumulável com adicional de insalubridade</li>
        <li>Não incide sobre outros adicionais</li>
      </ul>
      
      <h4>Responsabilidades:</h4>
      <p>É responsabilidade do empregador a caracterização ou descaracterização da periculosidade, mediante laudo técnico elaborado por Médico do Trabalho ou Engenheiro de Segurança do Trabalho.</p>
    </div>
  </div>
</section>

<section class="links-section">
  <h2>Links Úteis e Referências</h2>
  
  <div class="links-grid">
    <div class="link-card">
      <h4>NR-1 Completa</h4>
      <p>Acesse a versão atualizada da NR-1 no site oficial do governo</p>
      <a href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-01-atualizada-2024-i-1.pdf" target="_blank">Acessar NR-1</a>
    </div>
    
    <div class="link-card">
      <h4>NR-7 Completa</h4>
      <p>Acesse a versão atualizada da NR-7 no site oficial do governo</p>
      <a href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-07-atualizada-2022-1.pdf" target="_blank">Acessar NR-7</a>
    </div>
    
    <div class="link-card">
      <h4>NR-15 Completa</h4>
      <p>Acesse a versão atualizada da NR-15 no site oficial do governo</p>
      <a href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/arquivos/normas-regulamentadoras/nr-15-atualizada-2022.pdf" target="_blank">Acessar NR-15</a>
    </div>
    
    <div class="link-card">
      <h4>NR-16 Completa</h4>
      <p>Acesse a versão atualizada da NR-16 no site oficial do governo</p>
      <a href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/NR16atualizada2024.pdf" target="_blank">Acessar NR-16</a>
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
  
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .nr-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease;
    cursor: pointer;
  }
  
  .nr-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .nr-desc {
    font-size: 0.9em;
    color: #555;
    margin-top: 10px;
  }
  
  .document-card {
    background: white;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }
  
  .document-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .document-title {
    background: #f5f5f5;
    padding: 18px;
    margin: 0;
    font-size: 1.2em;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .document-content {
    padding: 25px;
  }
  
  .document-content h4 {
    color: #2196F3;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  .links-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .link-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #4CAF50;
    transition: transform 0.3s ease;
  }
  
  .link-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .link-card a {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 15px;
    background-color: #4CAF50;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s;
  }
  
  .link-card a:hover {
    background-color: #3e8e41;
  }
  
  .table-container {
    overflow-x: auto;
    margin: 20px 0;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 15px 0;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  tr:hover {
    background-color: #f1f1f1;
  }
  
  ul, ol {
    margin: 10px 0;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
  }
</style>
`
    },

    {
      id: 'entendendo-mundo-juridico',
      title: 'Entendendo o Mundo Jurídico - Naturezas Jurídicas e Aspectos Tributários',
      description: 'Guia completo sobre naturezas jurídicas, tipos de sociedades, criação de CNPJ e obrigações legais para empresas.',
      group: 'PJ',
      content: `
<div class="welcome-banner">
  <h1>Bem-vindo ao Mundo Jurídico Empresarial!</h1>
  <p>Este guia foi criado para ajudar você a compreender os principais conceitos jurídicos e tributários que fundamentam a estruturação de empresas no Brasil.</p>
</div>

<section class="core-concepts">
  <h2>O Que é Natureza Jurídica?</h2>
  <div class="concept-card">
    <p>A <strong>Natureza Jurídica</strong> é como a lei classifica um negócio ou empresa. Ela define aspectos fundamentais como:</p>
    <ul>
      <li><strong>Responsabilidade legal</strong>: Quem é responsável em caso de problemas (dívidas ou acidentes)</li>
      <li><strong>Carga tributária</strong>: Quais impostos a empresa precisa pagar</li>
      <li><strong>Funcionamento operacional</strong>: Como a empresa pode operar de acordo com a lei</li>
    </ul>
    <p>Esses aspectos dependem <strong>diretamente</strong> da natureza jurídica escolhida, que pode ser, por exemplo, uma <strong>empresa individual</strong> ou uma <strong>sociedade</strong>.</p>
  </div>
</section>

<section class="society-types">
  <h2>Tipos de Sociedade</h2>
  
  <div class="grid-container">
    <div class="nr-card">
      <h3>Sociedade Comum</h3>
      <p>Espécie de sociedade <u>despersonificada</u> (não possui personalidade jurídica)</p>
      <p class="nr-desc">Constitui sociedade de fato ou irregular, aplicável a sociedades sem atos constitutivos ou sem registro.</p>
    </div>
    
    <div class="nr-card">
      <h3>Sociedade Simples</h3>
      <p>Formada por duas ou mais pessoas para atividades não empresariais</p>
      <p class="nr-desc">Ligada a trabalhos intelectuais ou profissionais (médicos, nutricionistas, dentistas).</p>
    </div>
    
    <div class="nr-card">
      <h3>Sociedade Limitada</h3>
      <p>Sócios têm responsabilidade limitada ao capital investido</p>
      <p class="nr-desc">Protege o patrimônio pessoal dos sócios em caso de dívidas da empresa.</p>
    </div>
    
    <div class="nr-card">
      <h3>Contribuinte Individual</h3>
      <p>Quem trabalha por conta própria sem vínculo empregatício</p>
      <p class="nr-desc">Tem obrigação de pagar contribuição previdenciária diretamente.</p>
    </div>
    
    <div class="nr-card">
      <h3>Sociedade Comandita Simples</h3>
      <p>Dois tipos de sócios: comanditários e comanditados</p>
      <p class="nr-desc">Comanditários arriscam apenas o valor investido, comanditados têm responsabilidade integral.</p>
    </div>
    
    <div class="nr-card">
      <h3>Sociedade em Nome Coletivo</h3>
      <p>Somente pessoas físicas podem participar</p>
      <p class="nr-desc">Todos os sócios respondem solidária e ilimitadamente pelas obrigações sociais.</p>
    </div>
    
    <div class="nr-card">
      <h3>Sociedade Comandita por Ações</h3>
      <p>Alguns sócios têm responsabilidade limitada (acionistas)</p>
      <p class="nr-desc">Sócio diretor tem responsabilidade ilimitada pelas dívidas da empresa.</p>
    </div>
    
    <div class="nr-card">
      <h3>Sociedade em Conta de Participação</h3>
      <p>Não possui CNPJ próprio</p>
      <p class="nr-desc">Apenas um dos sócios cuida da administração do negócio.</p>
    </div>
  </div>
</section>

<section class="cnpj-section">
  <h2>Criação do CNPJ</h2>
  <div class="document-card">
    <h3 class="document-title">Processo de Criação do CNPJ</h3>
    <div class="document-content">
      <p>Para uma pessoa física realizar a criação de um CNPJ, os seguintes passos devem ser realizados:</p>
      
      <h4>Etapas do Processo:</h4>
      <ol>
        <li><strong>Consulta prévia de viabilidade</strong>: Verificar se as atividades do negócio podem ser realizadas no local escolhido e se o nome empresarial está disponível</li>
        <li><strong>Inscrição no CNPJ</strong>: Fornecer os dados necessários para a inscrição no CNPJ e o registro da empresa</li>
        <li><strong>Licenças municipais</strong>: Obter as licenças necessárias no município onde pretende atuar</li>
      </ol>
      
<section class="obligations-section">
  <h2>Obrigações Legais do Empregador</h2>
  
  <div class="document-card">
    <h3 class="document-title">Obrigações com Colaboradores</h3>
    <div class="document-content">
      <p>Algumas das principais obrigações legais que o empregador possui com os colaboradores são:</p>
      
      <h4>Obrigações Financeiras:</h4>
      <ul>
        <li>Pagamento de salário</li>
        <li>Pagamento de encargos sociais</li>
      </ul>
      
      <h4>Obrigações Legais e Trabalhistas:</h4>
      <ul>
        <li>Cumprimento da CLT</li>
        <li>Emissão de documentos (carteira de trabalho, contrato de trabalho, recibos de pagamento)</li>
        <li>Comunicação de informações sobre direitos</li>
        <li>Segurança e saúde no trabalho</li>
      </ul>
    </div>
  </div>
</section>

<section class="taxes-section">
  <h2>Deduções de Impostos</h2>
  
  <div class="grid-container">
    <div class="nr-card">
      <h3>ISS</h3>
      <p>Imposto Sobre Serviços</p>
      <p class="nr-desc">Tributo municipal cobrado de empresas que prestam serviços. Um dos principais tributos municipais.</p>
    </div>
    
    <div class="nr-card">
      <h3>IR</h3>
      <p>Imposto de Renda</p>
      <p class="nr-desc">Tributação federal cobrada anualmente sobre os ganhos de pessoas físicas ou jurídicas.</p>
    </div>
    
    <div class="nr-card">
      <h3>PIS</h3>
      <p>Programa de Integração Social</p>
      <p class="nr-desc">Promove a integração do empregado na vida e desenvolvimento das empresas, com melhor distribuição de renda.</p>
    </div>
    
    <div class="nr-card">
      <h3>COFINS</h3>
      <p>Contribuição para Financiamento da Seguridade Social</p>
      <p class="nr-desc">Tributo pago por pessoas jurídicas sobre a receita, destinado à saúde, previdência e assistência social.</p>
    </div>
    
    <div class="nr-card">
      <h3>CSLL</h3>
      <p>Contribuição Social sobre Lucro Líquido</p>
      <p class="nr-desc">Tributo federal cobrado sobre o lucro líquido das empresas que operam no Brasil para financiar a Seguridade Social.</p>
    </div>
    
    <div class="nr-card">
      <h3>INSS</h3>
      <p>Instituto Nacional do Seguro Social</p>
      <p class="nr-desc">Responsável pela gestão da Previdência Social, garantindo benefícios como aposentadoria, auxílio-doença e pensão por morte.</p>
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
  
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .nr-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .nr-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .nr-desc {
    font-size: 0.9em;
    color: #555;
    margin-top: 10px;
  }
  
  .document-card {
    background: white;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    overflow: hidden;
  }
  
  .document-title {
    background: #f5f5f5;
    padding: 18px;
    margin: 0;
    font-size: 1.2em;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .document-content {
    padding: 25px;
  }
  
  .document-content h4 {
    color: #2196F3;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
  }
</style>
`
    },

    {
      id: 'sistema-tributario-impacto-notas-fiscais',
      title: 'Sistema Tributário e Seu Impacto Nas Notas Fiscais',
      description: 'Guia completo sobre o sistema tributário brasileiro, tipos de tributos, retenções, deduções, regimes tributários e seu impacto na emissão de notas fiscais.',
      group: 'PJ',
      content: `
<div class="welcome-banner">
  <h1>Entendendo o Sistema Tributário Brasileiro</h1>
  <p>Este guia foi criado para ajudar você a compreender o sistema tributário nacional, seus impactos nas operações empresariais e a correta parametrização para emissão de notas fiscais.</p>
</div>

<section class="core-concepts">
  <h2>O Que é o Sistema Tributário Nacional?</h2>
  <div class="concept-card">
    <p>O <strong>Sistema Tributário Nacional</strong> é o conjunto de regras que organiza como os impostos e outros tributos são criados, cobrados, arrecadados e divididos entre os governos (federal, estadual e municipal).</p>
    <p>Inclui todas as normas relacionadas à cobrança de tributos:</p>
    <ul>
      <li>Constituição Federal</li>
      <li>Leis ordinárias e complementares</li>
      <li>Decretos</li>
      <li>Portarias</li>
      <li>Instruções normativas</li>
    </ul>
  </div>
<section class="tax-overview">
  <h2>Tipos de Tributos</h2>
  
  <div class="grid-container">
    <div class="nr-card">
      <h3>Impostos</h3>
      <p>Carro-chefe da tributação, responsáveis por financiar as atividades do Estado</p>
      <div class="nr-desc">
        <p><strong>Federais:</strong> IRPF, IRPJ, IOF, IPI, II</p>
        <p><strong>Estaduais:</strong> ICMS, IPVA, ITCMD</p>
        <p><strong>Municipais:</strong> ISS, IPTU, ITBI</p>
      </div>
    </div>
    
    <div class="nr-card">
      <h3>Taxas</h3>
      <p>Cobradas quando o governo oferece serviço específico ou faz fiscalização</p>
      <div class="nr-desc">
        <p>Exemplos: Taxa de fiscalização de comércio, emissão de RG/CNH, passaporte</p>
        <p>Pagas apenas por quem utiliza o serviço</p>
      </div>
    </div>
    
    <div class="nr-card">
      <h3>Contribuição de Melhoria</h3>
      <p>Cobrada quando obra pública valoriza imóveis da região</p>
      <div class="nr-desc">
        <p>Exemplo: Asfaltamento de rua (não se aplica a recapeamento)</p>
        <p>Limitada ao valor da valorização obtida</p>
      </div>
    </div>
    
    <div class="nr-card">
      <h3>Empréstimo Compulsório</h3>
      <p>Recurso excepcional em casos especiais (guerra, desastre)</p>
      <div class="nr-desc">
        <p>Exclusivo do governo federal</p>
        <p>Temporário e criado por lei complementar</p>
        <p>Exemplo histórico: 1986, governo Sarney</p>
      </div>
    </div>
    
    <div class="nr-card">
      <h3>Contribuições</h3>
      <p>Tributos com finalidade específica</p>
      <div class="nr-desc">
        <p>Exemplos: COFINS, CSLL, CIDE</p>
        <p>Destinados a saúde, previdência, transporte</p>
      </div>
    </div>
  </div>
</section>

<section class="tax-classification">
  <h2>Classificação dos Tributos</h2>
  
  <div class="document-card">
    <h3 class="document-title">Tributos Diretos e Indiretos</h3>
    <div class="document-content">
      <div class="classification-grid">
        <div class="classification-item">
          <h4>Tributos Diretos</h4>
          <p>Pagos diretamente ao governo por quem tem a obrigação</p>
          <ul>
            <li>IPVA</li>
            <li>IPTU</li>
            <li>IR</li>
            <li>Taxas</li>
            <li>COFINS</li>
            <li>CSLL</li>
          </ul>
        </div>
        
        <div class="classification-item">
          <h4>Tributos Indiretos</h4>
          <p>Embutidos no preço de produtos ou serviços</p>
          <ul>
            <li>ICMS</li>
            <li>IPI</li>
            <li>ISS</li>
            <li>CIDE</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="retention-deduction">
  <h2>Retenções e Deduções Tributárias</h2>
  
  <div class="document-card">
    <h3 class="document-title">Conceitos Fundamentais</h3>
    <div class="document-content">
      <div class="concept-grid">
        <div class="concept-item">
          <h4>Retenção</h4>
          <p>Desconto do imposto diretamente no pagamento, com repasse ao governo</p>
          <ul>
            <li>Ocorre no momento do pagamento</li>
            <li>Feita pelo pagador do serviço/produto</li>
            <li>Entrega direta ao governo</li>
          </ul>
        </div>
        
        <div class="concept-item">
          <h4>Dedução</h4>
          <p>Redução do valor do imposto a pagar mediante despesas permitidas</p>
          <ul>
            <li>Diminui a base de cálculo do imposto</li>
            <li>Despesas com saúde, educação, etc.</li>
            <li>Quanto mais despesas dedutíveis, menor o imposto</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="tax-regimes">
  <h2>Regimes Tributários</h2>
  <div class="document-card">
    <h3 class="document-title">Simples Nacional, Lucro Presumido e Lucro Real</h3>
    <div class="document-content">
      <p>A escolha do regime tributário define como serão calculados os impostos, bem como a aplicação de retenções e deduções em notas fiscais.</p>
      
      <div class="classification-grid">
        <div class="classification-item">
          <h4>Simples Nacional</h4>
          <ul>
            <li>Unifica diversos tributos em uma única guia (DAS).</li>
            <li>Geralmente não há retenção de IR, PIS, COFINS e CSLL na fonte.</li>
            <li>Pode haver retenção de ISS em alguns municípios e INSS em serviços sujeitos à cessão de mão de obra.</li>
            <li>Deduções são limitadas, pois o cálculo é feito sobre a receita bruta.</li>
          </ul>
        </div>
        
        <div class="classification-item">
          <h4>Lucro Presumido</h4>
          <ul>
            <li>Base de cálculo definida por presunção de margem de lucro.</li>
            <li>Sujeito a retenções de IR, PIS, COFINS e CSLL em serviços prestados a pessoas jurídicas.</li>
            <li>ISS retido conforme legislação municipal.</li>
            <li>Deduções não são consideradas diretamente (exceto compensações específicas).</li>
          </ul>
        </div>
        
        <div class="classification-item">
          <h4>Lucro Real</h4>
          <ul>
            <li>Tributação sobre o lucro contábil ajustado por adições e exclusões.</li>
            <li>Sujeito a retenções de IR, PIS, COFINS, CSLL e ISS conforme operações.</li>
            <li>Possibilidade de deduções mais amplas, como despesas operacionais, financeiras e trabalhistas.</li>
            <li>Mais complexo, exige controles contábeis detalhados.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="configuration-section">
  <h2>Parametrização no Sistema</h2>
  
  <div class="document-card">
    <h3 class="document-title">Configuração de Retenções</h3>
    <div class="document-content">
      <p>É fundamental que as retenções e deduções sejam devidamente parametrizadas, pois impactam diretamente no valor cobrado nas notas fiscais.</p>
      
      <h4>Exceção Fiscal</h4>
      <p>Caminho: <strong>Cadastros > Tabelas > Fiscais > Tabela de Códigos de Serviços > Exceção Fiscal</strong></p>
      <p>Necessário informar se determinada unidade não sofrerá retenção de impostos para nenhuma empresa, selecionando o tipo de imposto para o qual não haverá retenção.</p>
      
      <h4>Retenção em Parcelamentos</h4>
      <p>Caminho: <strong>Configurações > Configurações Gerais > Financeiro > Retenção dos Impostos em Parcelamentos</strong></p>
      <p>Definir a forma de retenção dos impostos em títulos parcelados:</p>
      <ul>
        <li><strong>Parcelado:</strong> Impostos divididos proporcionalmente entre as parcelas</li>
        <li><strong>Na 1ª Parcela:</strong> Valor total aplicado na primeira parcela</li>
        <li><strong>Na Última Parcela:</strong> Valor total aplicado na última parcela</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">Configuração de Deduções</h3>
    <div class="document-content">
      <p>Para parametrizar a dedução de impostos de uma empresa específica:</p>
      <p>Caminho: <strong>Cadastros > Empresas > Financeiro > Deduções de Impostos</strong></p>
      
      <p>Informar os dados relacionados à dedução dos seguintes tributos:</p>
      
      <div class="tax-grid">
        <div class="tax-item">
          <h4>ISS</h4>
          <p>Imposto Sobre Serviços</p>
        </div>
        
        <div class="tax-item">
          <h4>IR</h4>
          <p>Imposto de Renda</p>
        </div>
        
        <div class="tax-item">
          <h4>PIS</h4>
          <p>Programa de Integração Social</p>
        </div>
        
        <div class="tax-item">
          <h4>COFINS</h4>
          <p>Contribuição para o Financiamento da Seguridade Social</p>
        </div>
        
        <div class="tax-item">
          <h4>CSLL</h4>
          <p>Contribuição Social sobre o Lucro Líquido</p>
        </div>
        
        <div class="tax-item">
          <h4>INSS</h4>
          <p>Instituto Nacional do Seguro Social</p>
        </div>
      </div>
      
      <div class="alert-box">
        <p>A correta parametrização garante que o sistema considere as deduções de forma adequada durante os processos financeiros e fiscais da empresa, evitando inconsistências na emissão das notas fiscais.</p>
      </div>
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
  
  .concept-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    margin: 15px 0;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .nr-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .nr-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .nr-desc {
    font-size: 0.9em;
    color: #555;
    margin-top: 10px;
  }
  
  .document-card {
    background: white;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    overflow: hidden;
  }
  
  .document-title {
    background: #f5f5f5;
    padding: 18px;
    margin: 0;
    font-size: 1.2em;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .document-content {
    padding: 25px;
  }
  
  .document-content h4 {
    color: #2196F3;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  .classification-grid, .concept-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
  }
  
  .classification-item, .concept-item {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #4CAF50;
  }
  
  .tax-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
    margin: 20px 0;
  }
  
  .tax-item {
    background: #e8f5e9;
    padding: 15px;
    border-radius: 6px;
    text-align: center;
    transition: transform 0.2s ease;
  }
  
  .tax-item:hover {
    transform: scale(1.05);
    background: #c8e6c9;
  }
  
  .alert-box {
    border-left: 4px solid #ff9800;
    background-color: #fff8e1;
    padding: 15px;
    margin: 20px 0;
  }
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
  }
</style>
`
    },

    {
      id: 'regimes-tributarios-retencoes-deducoes',
      title: 'Mais sobre: Regimes Tributários: Simples Nacional, Lucro Presumido e Lucro Real — Retenções, Deduções e Migrações',
      description:
        'Guia completo e prático sobre quando há retenção e como funcionam deduções/créditos em cada regime (Simples, Presumido e Real), com exemplos, cenários especiais, ISS/ICMS-ST, CPRB, mudanças de regime e modelos de declaração.',
      group: 'PJ',
      content: `
  <div class="welcome-banner">
    <h1>Regimes Tributários — Retenção, Dedução/Créditos e Migrações</h1>
    <p>Este guia foi preparado para uso no atendimento e apoio consultivo: explica, de forma objetiva e com exemplos, quando ocorre <strong>retenção na fonte</strong> (IRRF, CSLL/PIS/COFINS e INSS/CPRB), como funcionam <strong>deduções e créditos</strong>, e o que muda quando a empresa <strong>troca de regime</strong> (Simples, Lucro Presumido, Lucro Real).</p>
  </div>

  <section class="shortcuts-section">
    <h2>Visão Geral Rápida</h2>
    <div class="shortcut-grid">
      <div class="shortcut-card">
        <div class="shortcut-header">
          <h3>O que é retenção na fonte?</h3>
        </div>
        <p>É quando o <strong>tomador</strong> do serviço (ou comprador) <em>desconta tributos</em> de um pagamento ao fornecedor, recolhendo-os ao Fisco. Pode atingir: <strong>IRRF</strong> (serviços profissionais), <strong>CSLL/PIS/COFINS</strong> (regra dos 4,65% em certos serviços), e <strong>INSS</strong> (11% ou 3,5% em cessão de mão de obra/empreitada, conforme o caso). ISS e ICMS podem ter retenções/substituição conforme legislação local/estadual.</p>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header">
          <h3>O que são deduções/créditos?</h3>
        </div>
        <p>“Deduções” aqui significam, em linhas gerais, <strong>despesas dedutíveis</strong> do lucro (Lucro Real) e <strong>créditos</strong> (PIS/COFINS no regime não cumulativo do Lucro Real) que reduzem a base/valor devido. No Lucro Presumido há <em>percentuais de presunção</em> da base; no Simples, a apuração é unificada via DAS (com poucas exceções fora do DAS).</p>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header">
          <h3>Resumo por Regime</h3>
        </div>
        <ul>
          <li><strong>Simples:</strong> em regra, <em>não</em> sofre retenção de CSLL/PIS/COFINS; pode haver <strong>IRRF (alguns casos)</strong> e <strong>INSS</strong> se houver cessão de mão de obra/empreitada; ISS pode ser retido por regra municipal.</li>
          <li><strong>Presumido:</strong> pode sofrer <strong>retenção 4,65%</strong> (CSLL/PIS/COFINS) em certos serviços; <strong>IRRF</strong> (ex.: 1,5% serviços profissionais); <strong>INSS 11%</strong> em cessão de mão de obra/empreitada (ou 3,5% se CPRB aplicada a quem for desonerado).</li>
          <li><strong>Real:</strong> idem ao Presumido nas retenções; diferença central está na <strong>apuração do IRPJ/CSLL</strong> (lucro contábil ajustado) e no <strong>PIS/COFINS não cumulativos</strong> (créditos).</li>
        </ul>
      </div>
    </div>
    <div class="warning-box">
      <h4>Importante</h4>
      <p>Retenções federais (IR, CSLL, PIS, COFINS) têm <strong>hipóteses de dispensa</strong> e <strong>alíquotas/códigos DARF</strong> específicos. No caso do <strong>Simples</strong>, é usual exigir do prestador a <strong>declaração de optante</strong> para <em>dispensa</em> de retenção de CSLL/PIS/COFINS.</p>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Simples Nacional — Regras, Retenção, Deduções</h2>
    <div class="shortcut-grid">
      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Enquadramento & Limites</h3></div>
        <ul>
          <li>ME até R$ 360 mil/ano; EPP até R$ <strong>4,8 milhões/ano</strong> (com sublimites para ICMS/ISS conforme Estado).</li>
          <li>Vedado a atividades específicas e a quem ultrapassa limites (efeitos variam: mês seguinte ou ano seguinte conforme excesso).</li>
        </ul>
        <p><em>Observação:</em> ao ultrapassar limites, pode haver exclusão com efeitos distintos (até 20% vs. acima de 20% do teto) e possível manutenção apenas do DAS federal, com recolhimento de ICMS/ISS fora do Simples, conforme sublimite/regra vigente.</p>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Retenções mais comuns no Simples</h3></div>
        <ul>
          <li><strong>CSLL/PIS/COFINS (4,65%)</strong>: <u>em regra, dispensadas</u> quando o <strong>prestador</strong> é optante pelo Simples, mediante <strong>declaração de optante</strong> apresentada ao tomador.</li>
          <li><strong>IRRF</strong>: há hipóteses de retenção (ex.: serviços profissionais listados pelo RIR/Regulamento do IR). Alguns entes dispensam quando prestador é Simples; confirme na sua política/ente pagador.</li>
          <li><strong>INSS (retenção 11%)</strong> em <strong>cessão de mão de obra/empreitada</strong> (serviços típicos: limpeza, conservação, manutenção, construção, apoio administrativo, call center, TI com cessão de pessoal etc.). Para empresas <strong>desoneradas (CPRB)</strong>, a retenção previdenciária pode ser <strong>3,5%</strong> nos períodos de desoneração previstos em lei.</li>
          <li><strong>ISS</strong>: pode haver retenção na fonte por legislação municipal (ex.: tomador responsável), inclusive com exigência de RPS/Nota fiscal com destaque.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Deduções/Créditos no Simples</h3></div>
        <p>A apuração é por <strong>DAS unificado</strong> (IRPJ/CSLL/PIS/COFINS/CPP e, quando devido, ICMS/ISS), segundo <strong>anexos e faixas</strong> da LC 123. Não há <strong>créditos de PIS/COFINS</strong> a tomar (regra do Simples não adota o regime não cumulativo). Deduções de base (como no Lucro Real) <u>não</u> se aplicam.</p>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Exemplos de atendimento (Simples)</h3></div>
        <ul>
          <li><strong>Prestador Simples → Tomador privado:</strong> cliente solicita retenção 4,65%. <em>Ação</em>: pedir a <strong>declaração de optante</strong> e <em>não reter</em> CSLL/PIS/COFINS. Avaliar se há <strong>IRRF</strong> (serviço profissional) e se há <strong>INSS 11%/3,5%</strong> (cessão de mão de obra/empreitada). Verificar <strong>ISS retido</strong> pela prefeitura.</li>
          <li><strong>Prestador Simples → Órgão público:</strong> a Administração costuma <em>reter</em> (IR + CSLL/PIS/COFINS) salvo <strong>dispensa</strong> comprovada para optante (apresentar modelo de declaração). <em>Confirmar rotina do órgão.</em></li>
        </ul>
      </div>
    </div>
    <div class="warning-box">
      <h4>Checklist Simples (Tomador)</h4>
      <ol>
        <li>Prestador é <strong>Simples</strong>? Solicitar <strong>declaração de optante</strong> atualizada.</li>
        <li>Serviço envolve <strong>cessão de mão de obra/empreitada</strong>? Se sim: avaliar <strong>INSS 11%</strong> (ou <strong>3,5%</strong> quando CPRB for aplicável ao prestador).</li>
        <li>Serviço é <strong>profissional</strong> (lista do IRRF)? Avaliar <strong>IRRF</strong>.</li>
        <li>Legislação municipal exige <strong>ISS retido</strong>? Aplicar regras locais.</li>
      </ol>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Lucro Presumido — Regras, Retenção, Deduções</h2>
    <div class="shortcut-grid">
      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Como funciona</h3></div>
        <ul>
          <li>Base de IRPJ/CSLL por <strong>percentuais de presunção</strong> sobre a receita (ex.: <strong>IRPJ: 8% comércio/indústria; 32% serviços</strong> em geral). Para CSLL: <strong>12%</strong> (comércio/indústria) e <strong>32%</strong> (serviços) — há especificidades por atividade.</li>
          <li><strong>PIS/COFINS cumulativos</strong> (em regra): <strong>PIS 0,65%</strong> e <strong>COFINS 3%</strong> sobre a receita, sem créditos.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Retenções comuns no Presumido</h3></div>
        <ul>
          <li><strong>CSLL/PIS/COFINS (4,65%)</strong> retidos pelo tomador em <strong>determinados serviços</strong> (base: valor bruto). Há hipóteses de <em>dispensa</em> e exceções na IN aplicável.</li>
          <li><strong>IRRF</strong> em serviços profissionais (alíquota típica <strong>1,5%</strong>), com códigos DARF próprios.</li>
          <li><strong>INSS 11%</strong> (ou <strong>3,5%</strong> quando aplicável a desoneração/CPRB) em <strong>cessão de mão de obra/empreitada</strong> listadas na IN previdenciária (ex.: limpeza, manutenção, construção, apoio administrativo, alguns serviços de TI com alocação, etc.).</li>
          <li><strong>ISS retido</strong> conforme regras do município do tomador.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Deduções</h3></div>
        <p>Não há dedução de despesas para reduzir base presumida (salvo regras específicas). Em compensações federais, as <strong>retenções sofridas</strong> (IRRF e CSRF 4,65%) normalmente podem ser <strong>compensadas</strong> com tributos de mesma espécie na apuração.</p>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Exemplo (Presumido)</h3></div>
        <p>Serviço de consultoria (PJ no Presumido) emite NF de R$ 100.000,00:</p>
        <ul>
          <li>Tomador retém <strong>4,65%</strong> (R$ 4.650,00) de CSLL/PIS/COFINS e <strong>IRRF 1,5%</strong> (R$ 1.500,00), se caracterizado como serviço profissional.</li>
          <li>Se for <strong>cessão de mão de obra</strong>, tomador retém <strong>INSS 11%</strong> (R$ 11.000,00) — ou <strong>3.500,00</strong> se o prestador estiver sob CPRB com retenção reduzida.</li>
          <li>Município pode reter <strong>ISS</strong> (ex.: 5%).</li>
          <li>Prestador compensa retenções conforme espécie/códigos na apuração.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Lucro Real — Regras, Retenção, Deduções/Créditos</h2>
    <div class="shortcut-grid">
      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Como funciona</h3></div>
        <ul>
          <li><strong>IRPJ/CSLL</strong> apurados sobre o <strong>lucro contábil ajustado</strong> por adições/exclusões (regras fiscais).</li>
          <li><strong>PIS/COFINS não cumulativos</strong>: alíquotas <strong>1,65%</strong> (PIS) e <strong>7,6%</strong> (COFINS) com <strong>créditos</strong> sobre insumos, energia, aluguéis, depreciação, etc., conforme hipóteses legais.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Retenções comuns no Real</h3></div>
        <ul>
          <li><strong>CSLL/PIS/COFINS (4,65%)</strong> na fonte em serviços abrangidos.</li>
          <li><strong>IRRF</strong> (ex.: 1,5% serviços profissionais).</li>
          <li><strong>INSS 11%/3,5%</strong> em cessão de mão de obra/empreitada.</li>
          <li><strong>ISS retido</strong> conforme legislação municipal.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Deduções/Créditos (Real)</h3></div>
        <ul>
          <li><strong>Despesas dedutíveis</strong> (IRPJ/CSLL) conforme regras de dedutibilidade.</li>
          <li><strong>Créditos de PIS/COFINS</strong> sobre <em>insumos</em> e demais hipóteses legais (não cumulativo), reduzindo o valor a pagar.</li>
          <li>Retenções sofridas (IRRF e 4,65%) podem ser <strong>compensadas</strong> na apuração do tributo correspondente.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Exemplo (Real)</h3></div>
        <p>Prestadora de serviços de engenharia (Lucro Real) fatura R$ 200.000,00:</p>
        <ul>
          <li>Tomador retém <strong>4,65%</strong> (R$ 9.300,00) e, se serviço profissional, <strong>IRRF 1,5%</strong> (R$ 3.000,00).</li>
          <li>Se caracterizar <strong>cessão de mão de obra</strong>, reter <strong>INSS 11%</strong> (R$ 22.000,00) — ou <strong>R$ 7.000,00</strong> se CPRB com retenção reduzida.</li>
          <li>Prestadora aproveita <strong>créditos de PIS/COFINS</strong> sobre insumos pertinentes e compensa as retenções.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Retenções — Detalhamento Rápido (Operacional)</h2>
    <div class="shortcut-grid">

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>CSLL/PIS/COFINS (4,65%)</h3></div>
        <ul>
          <li>Aplicável a <strong>pagamentos por PJ a PJ</strong> pela prestação de determinados <strong>serviços</strong>.</li>
          <li><strong>Base</strong>: valor bruto da NF (serviço).</li>
          <li><strong>Rateio</strong>: CSLL 1%, PIS 0,65%, COFINS 3%.</li>
          <li><strong>Dispensa</strong>: prestador <strong>Simples</strong> (com declaração), valores muito pequenos (regra dos R$ 10,00 a reter), imunes/isentas conforme IN, e outras hipóteses específicas.</li>
          <li><strong>Comprovação</strong>: guardar <strong>declaração do Simples</strong> do prestador no dossiê do pagamento.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>IRRF (Serviços Profissionais)</h3></div>
        <ul>
          <li>Geralmente <strong>1,5%</strong> sobre o serviço para atividades de natureza profissional (advocacia, consultoria, auditoria, engenharia, etc.), conforme lista do Regulamento do IR.</li>
          <li><strong>Exceções/dispensas</strong>: há hipóteses na legislação e em rotinas dos entes públicos/privados; atenção a códigos DARF.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>INSS 11% (ou 3,5% CPRB)</h3></div>
        <ul>
          <li>Quando houver <strong>cessão de mão de obra/empreitada</strong> nos serviços listados (limpeza, conservação, manutenção, construção, apoio administrativo, digitação/digitalização, preparo de dados, vigilância presencial etc.).</li>
          <li><strong>Base</strong>: valor bruto da NF, com hipóteses de exclusão de materiais/equipamentos quando expressamente destacadas e aceitas pela norma.</li>
          <li><strong>Redução para 3,5%</strong>: quando o prestador estiver <strong>desonerado (CPRB)</strong> nos períodos em que a lei definir.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>ISS/ICMS — Substituição/Retenções</h3></div>
        <ul>
          <li><strong>ISS</strong>: inúmeras capitais exigem <strong>retenção</strong> pelo tomador para determinados serviços e/ou quando prestador é de outro município.</li>
          <li><strong>ICMS-ST</strong>: regime de substituição tributária (antecipação/retido na fonte) por produto/NCM e convênios; <strong>independe do regime de IRPJ/CSLL</strong>.</li>
        </ul>
      </div>

    </div>
    <div class="warning-box">
      <h4>Boas Práticas</h4>
      <ul>
        <li>Sempre conferir <strong>natureza do serviço</strong> x listas de retenção (IRRF/INSS) e hipóteses da IN de CSRF (4,65%).</li>
        <li>Guardar <strong>declarações e evidências</strong> (optante do Simples, imunidade/isenção, CPRB, etc.).</li>
        <li>Usar <strong>códigos DARF/GPS</strong> corretos e observar <strong>mínimos de retenção</strong>.</li>
      </ul>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Migração entre Regimes — Efeitos Práticos</h2>
    <div class="shortcut-grid">
      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Quando e como trocar</h3></div>
        <ul>
          <li><strong>Simples → Presumido/Real</strong>: por excesso de receita, vedação ou por opção estratégica. Efeitos variam conforme o momento e o percentual do excesso (até 20% vs. acima de 20%).</li>
          <li><strong>Presumido ↔ Real</strong>: opção/anualidade (a opção vale para <strong>todo o ano-calendário</strong>), respeitados requisitos legais (ex.: obrigatoriedade do Real em alguns setores, como instituições financeiras).</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>O que muda na prática</h3></div>
        <ul>
          <li><strong>Retenções</strong>: continuam existindo; no Simples tende a haver <em>dispensa</em> de 4,65% (com declaração). No Presumido/Real, 4,65% é comum. IRRF/INSS dependem da natureza do serviço.</li>
          <li><strong>PIS/COFINS</strong>: no Real (não cumulativo) surgem <strong>créditos</strong> relevantes; no Presumido são cumulativos (0,65%/3%) e <strong>sem créditos</strong>; no Simples é via DAS.</li>
          <li><strong>IRPJ/CSLL</strong>: no Presumido usa-se <strong>percentuais</strong> de presunção; no Real, <strong>lucro contábil ajustado</strong>.</li>
          <li><strong>Compliance</strong>: maior complexidade no Real (EFD-Contribuições com créditos, LALUR/LACS, controles de insumo, etc.).</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Exemplo de migração</h3></div>
        <p>Empresa de serviços (consultoria) ultrapassou R$ 4,8 mi em 18% no ano (até 20%).</p>
        <ul>
          <li>Permanece no Simples até <strong>31/12</strong>, mas ficará <strong>excluída</strong> no ano seguinte e precisará optar por Presumido ou Real.</li>
          <li>Ao migrar para Presumido, passará a <strong>sofrer retenção 4,65%</strong> (salvo exceções) e possivelmente <strong>IRRF</strong> em serviços profissionais; avaliar <strong>INSS 11%/3,5%</strong> se houver cessão de mão de obra.</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Documentos/rotinas ao migrar</h3></div>
        <ul>
          <li>Atualizar <strong>cadastros</strong> junto a clientes (informar novo regime para reter/dispensar o que couber).</li>
          <li>Revisar contratos para <strong>preço líquido</strong> x <strong>bruto</strong>, prevendo retenções.</li>
          <li>Adequar a <strong>escrituração</strong> (EFD-Contribuições, créditos no Real, etc.).</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Modelos & Tabelas Úteis</h2>
    <div class="shortcut-grid">

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Modelo — Declaração de Optante (Dispensa 4,65%)</h3></div>
        <p>“Declaramos, para fins do art. aplicável, que a <strong>[Razão Social • CNPJ]</strong> é <strong>optante pelo Simples Nacional</strong> na data deste documento e, por isso, encontra-se <strong>dispensada da retenção na fonte</strong> de CSLL, PIS/Pasep e COFINS, nos termos da legislação. Comprometemo-nos a comunicar imediatamente qualquer alteração de nosso enquadramento.”</p>
        <p class="note">Anexar: comprovante de opção (Portal do Simples) quando solicitado. Arquivar no dossiê do pagamento.</p>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Tabela-guia (resumo operacional)</h3></div>
        <table style="width:100%; border-collapse:collapse; font-size:0.95em;">
          <thead>
            <tr>
              <th style="text-align:left; border-bottom:1px solid #ddd;">Tributo</th>
              <th style="text-align:left; border-bottom:1px solid #ddd;">Quando reter</th>
              <th style="text-align:left; border-bottom:1px solid #ddd;">Alíquota/base</th>
              <th style="text-align:left; border-bottom:1px solid #ddd;">Observações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>CSLL/PIS/COFINS</td>
              <td>Serviços a PJ (lista da IN)</td>
              <td>4,65% sobre valor do serviço</td>
              <td>Dispensa p/ prestador Simples (com declaração) e outras hipóteses; mínimo a reter; códigos DARF específicos.</td>
            </tr>
            <tr>
              <td>IRRF</td>
              <td>Serviços de natureza profissional</td>
              <td>Ex.: 1,5% sobre serviço</td>
              <td>Ver lista do RIR; exceções; códigos DARF.</td>
            </tr>
            <tr>
              <td>INSS</td>
              <td>Cessão de mão de obra/empreitada</td>
              <td>11% (ou 3,5% CPRB)</td>
              <td>Serviços listados na IN previdenciária; exclusões de materiais/equipamentos conforme regra.</td>
            </tr>
            <tr>
              <td>ISS</td>
              <td>Conforme lei municipal</td>
              <td>Alíquota local</td>
              <td>Tomador pode ser responsável; atenção a retenções de prestadores de fora do município.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Percentuais (Presunção)</h3></div>
        <ul>
          <li><strong>IRPJ (exemplos usuais):</strong> 8% (comércio/indústria), 32% (serviços em geral).</li>
          <li><strong>CSLL (exemplos usuais):</strong> 12% (comércio/indústria), 32% (serviços em geral).</li>
          <li><strong>PIS/COFINS (Presumido):</strong> 0,65% / 3% — <em>cumulativos</em> (sem créditos).</li>
          <li><strong>PIS/COFINS (Real):</strong> 1,65% / 7,6% — <em>não cumulativos</em> (com créditos).</li>
        </ul>
      </div>

      <div class="shortcut-card">
        <div class="shortcut-header"><h3>Erros comuns</h3></div>
        <ul>
          <li>Reter 4,65% de prestador <strong>Simples</strong> sem checar a <strong>declaração de dispensa</strong>.</li>
          <li>Não reter <strong>INSS</strong> quando há <strong>cessão de mão de obra</strong> claramente configurada no contrato/execução.</li>
          <li>Aplicar <strong>IRRF</strong> fora dos serviços profissionais de fato (ou usar código DARF incorreto).</li>
          <li>Deixar de compensar retenções já sofridas na apuração do tributo correspondente.</li>
        </ul>
      </div>

    </div>
    <div class="warning-box">
      <h4>Observação Final</h4>
      <p>Em caso de dúvida sobre a natureza do serviço, peça o <strong>contrato</strong> e/ou descreva a execução para checar o <strong>enquadramento em listas de retenção</strong> (IRRF/INSS) e nas hipóteses da IN 4,65%. Para pendências, envolva o time fiscal/contábil.</p>
    </div>
  </section>

  <section class="shortcuts-section">
    <h2>Referências Legais (para consulta)</h2>
    <div class="shortcut-grid">
      <div class="shortcut-card full-width">
        <div class="shortcut-header"><h3>Principais diplomas</h3></div>
        <ul>
          <li><strong>LC 123/2006</strong> (Simples Nacional) e <strong>Resolução CGSN 140/2018</strong> (procedimentos, exclusões, prazos, sublimites).</li>
          <li><strong>Lei 10.637/2002</strong> e <strong>Lei 10.833/2003</strong> (PIS/COFINS, não cumulativo, e regras da retenção 4,65%).</li>
          <li><strong>IN SRF 459/2004</strong> e <strong>IN RFB 1.234/2012</strong> (retenções CSLL/PIS/COFINS/IR na fonte, dispensa para Simples, mínimos, DARF).</li>
          <li><strong>Lei 8.212/1991 art. 31</strong> e <strong>IN RFB 971/2009</strong> (retenção de <strong>INSS</strong> em cessão de mão de obra/empreitada); regras de <strong>CPRB</strong> (Lei 12.546/2011 e atos correlatos) para <strong>retenção 3,5%</strong> quando aplicável.</li>
          <li><strong>RIR/2018 (Decreto 9.580/2018)</strong> (IRRF serviços profissionais).</li>
          <li><strong>Legislação municipal</strong> (ISS retido) e convênios/legislação estadual (ICMS-ST).</li>
        </ul>
      </div>
    </div>
  </section>

  <style>
    .welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; }
    .shortcuts-section { margin-bottom: 24px; }
    .shortcut-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin: 25px 0; }
    .shortcut-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-left: 4px solid #2196F3; position: relative; }
    .shortcut-card.full-width { grid-column: 1 / -1; }
    .shortcut-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
    .shortcut-header h3 { margin: 0; color: #2196F3; font-size: 1.2em; }
    .note { font-size: 0.9em; color: #777; font-style: italic; margin-top: 10px; }
    .warning-box { border-left: 4px solid #ff9800; background-color: #fff8e1; padding: 15px; margin: 20px 0; }
    .warning-box h4 { margin-top: 0; color: #ff9800; }
    table th, table td { padding: 8px 6px; }
  </style>

  <script>
    // Mantém o mesmo comportamento visual do seu artigo de atalhos (feedback ao clicar em botões/copiar etc.)
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
  `,
    },
    {
      id: 'tutorial-instalacao-sigoplugin-drives',
      title: 'Tutorial de Instalação do SigoPlugin® e Drives',
      description: 'Guia completo para instalação de drives de biometria e SigoPlugin® para utilização de leitura biométrica e assinatura digital do médico.',
      group: 'Tutoriais',
      tags: ['Instalação', 'SigoPlugin', 'Biometria', 'Drives', 'Java', 'Wise System'],
      content: `
<div class="welcome-banner">
  <h1>Tutorial de Instalação de Drives/Plugin</h1>
  <p>Guia passo a passo para a instalação do SigoPlugin® e dos drivers de biometria para utilização no sistema Wise System.</p>
</div>

<section class="core-concepts">
<button onclick="window.open('https://www.wisesystem.com.br/suporte/desktop/', '_blank')" style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; margin-left: 10px;">Acessar Suporte Desktop</button>

<button onclick="window.open('https://wisesystem.com.br/sigoweb/upload/SigoPlugin.exe', '_blank')" style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; margin-left: 10px;">Download Sigo Plugin</button>

 <button onclick="window.open('https://www.java.com/pt-BR/download/manual.jsp', '_blank')" style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; margin-left: 10px;">Download Java</button>
<section class="core-concepts">
  <h2>1. Introdução</h2>
  <p>Se você pretende utilizar o computador para realizar "Leitura Biométrica" e "Assinatura Digital do Médico", é necessário instalar o Java, o driver específico do seu leitor e o "Sigo Plugin".</p>
  <p>Por outro lado, se a sua intenção é utilizar o computador apenas para a "Assinatura Digital do Médico", será suficiente instalar apenas o "Sigo Plugin".</p>

  <h3>Leitores Biométricos Compatíveis</h3>
  <p>Atualmente, o sistema é compatível apenas com os seguintes modelos de leitores biométricos:</p>
  <ul>
    <li>Futronic FS80/88</li>
    <li>Digital Persona U4500</li>
  </ul>
  <div class="note-box">
    <strong>Importante:</strong> Certifique-se de instalar os drivers corretos para garantir o funcionamento adequado. O Sigo Plugin funcionará apenas em máquinas 64 bits. Verificar a compatibilidade do Sigo Plugin com o sistema operacional que esta recebendo o aplicativo, ele deve ter arquitetura x86, Não funciona na x32 nem em arquitetura arm.

  </div>
</section>

  <h2>2. Downloads</h2>

  <h3>2.1. Drivers de Leitores Biométricos e SigoPlugin</h3>
  <p>Primeiramente, acesse a página de suporte da Wise System, onde você encontrará os drivers dos leitores biométricos.</p>
  <ul>
    <li> <button onclick="window.open('https://www.wisesystem.com.br/suporte/desktop/', '_blank')" style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; margin-left: 10px;">Acessar Suporte Desktop</button></li>
    <li>Na seção Biometria, baixe o driver compatível com seu leitor. (Se não possuir leitor biométrico, ignore esta etapa.)</li>
  </ul>
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_1.png">
  </div>
  <p>Baixe o Sigo Plugin no link abaixo:</p>
  <ul>
   <button onclick="window.open('https://wisesystem.com.br/sigoweb/upload/SigoPlugin.exe', '_blank')" style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; margin-left: 10px;">Download Sigo Plugin</button>
  </ul>

  <h3>2.2. Java</h3>
  <p>Em seguida, baixe o Java, pois o Sigo Plugin utiliza alguns de seus recursos para funcionar corretamente. Recomenda-se a instalação da versão 64 bits.</p>
  <ul>
    <button onclick="window.open('https://www.java.com/pt-BR/download/manual.jsp', '_blank')" style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; margin-left: 10px;">Download Java</button>
  </ul>
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_2.png">
  </div>
  <div class="note-box">
    <strong>Atenção ao Java:</strong> Se você usa navegadores de 32 e 64 bits de forma intercambiável, será necessário instalar o Java de 32 e 64 bits para ter o plug-in Java em ambos os navegadores. Após instalar o Java, talvez seja necessário reiniciar seu browser para ativá-lo.
  </div>
</section>

---

<section class="core-concepts">
  <h2>3. Instalações</h2>

  <h3>3.1. Instalação de Dependências</h3>
  <ol>
    <li>Instale o Java (versão 64 bits).</li>
    <li>Em seguida, instale o driver correspondente ao seu leitor biométrico, baixado no item 2. (Se não possuir um leitor biométrico, ignore esta etapa.)</li>
  </ol>

  <h3>3.2. Extração e Instalação do Sigo Plugin (e DRIVE SDK)</h3>
  <p>Para instalar o Sigo Plugin, siga os passos abaixo:</p>
  <ol>
    <li>Selecione o executável Sigo Plugin, clique com o botão direito do mouse e selecione a opção "Executar como Administrador".</li>
    <li>Ao abrir o SigoPlugin, será exibida a opção para selecionar o idioma e, em seguida, a tela de requisitos. O SigoPlugin exige o Griaule FingerPrint instalado. Clique em Instalar para iniciar a instalação desses requisitos.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_3.png">
    </div>
    <li>Em seguida, clique em Avançar para prosseguir a Instalação do DRIVE SDK. Na tela de boas-vindas do Assistente de Instalação do Fingerprint SDK 2009, clique em "Avançar".</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_4.png">
    </div>
    <li>Aceite os termos do "Contrato Geral de Uso de Licença de Software" marcando "Eu aceito os termos do Contrato" e clique em "Avançar".</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_5.png">
    </div>
    <li>Aceite novamente os termos do "Acordo Específico de Licença de Uso de Software", marcando "Eu aceito os termos do Contrato" e clique em "Avançar".</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_6.png">
    </div>
    <li>Na tela de Informação sobre o Fingerprint SDK 2009, clique em "Avançar" para prosseguir com a instalação.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_7.png">
    </div>
    <li>Na tela "Escolha a Pasta de destino", é recomendado manter o padrão que já vem selecionado e clique em "Avançar".</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_8.png">
    </div>
    <li>Na tela "Selecionar a Pasta do Menu Iniciar", mantenha o padrão e clique em "Avançar" para prosseguir e criar o atalho.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_9.png">
    </div>
    <li>Na tela "Pronto para Instalar", clique em "Instalar" para começar a instalação do DRIVE SDK e aguarde.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_10.png">
    </div>
    <li>Durante a instalação, se for questionado sobre o FingerCap USB Driver, clique em "NÃO" para não baixá-lo.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_11.png">
    </div>
    <li>Se aparecer a mensagem de aviso sobre o Java Runtime Environment 1.4 ou superior, clique em "OK" para prosseguir.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_12.png">
    </div>
    <li>Na tela "Finalizando o Assistente de Instalação de Fingerprint SDK 2009", selecione a opção "Não, eu vou reiniciar o computador depois" e clique em "Concluir" para finalizar a instalação do DRIVE SDK.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_13.png">
    </div>
  </ol>

  <h3>3.3. Instalação do SigoPlugin®</h3>
  <ol>
    <li>Após a conclusão da instalação do DRIVE SDK, o instalador do SigoPlugin® deve abrir automaticamente. Clique em "Avançar".</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_14.png">
    </div>
    <li>Na tela "Pronto para instalar o programa", clique em "Instalar" para iniciar a instalação.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_15.png">
    </div>
    <li>Ao finalizar a instalação, clique em "Concluir".</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_16.png">
    </div>
    <li>Por fim, após realizar a instalação do SIGO Puglin, automaticamente será aberto a página da extensão do Sigo.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/Screenshot_17.png">
    </div>
  </ol>

  <h3>3.4. Pós-Instalação e Observações (Imagens de Alerta)</h3>
  <p>As seguintes imagens estão presentes no documento como alertas ou passos de limpeza após a instalação, detalhando o processo que deve ser ignorado/excluído:</p>
  <ol start="18">
    <li>O ícone do instalador "Instalar o FingerCap" na área de trabalho.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/18 para frente 25/Screenshot_18.png">
    </div>
    <li>Tela de seleção do idioma do instalador do FingerCap.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/18 para frente 25/Screenshot_19.png">
    </div>
    <li>Tela de Atenção sobre o FingerCap substituir drivers.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/18 para frente 25/Screenshot_20.png">
    </div>
    <li>Tela de boas-vindas do assistente de instalação do Griaule FingerCap USB Driver.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/18 para frente 25/Screenshot_21.png">
    </div>
    <li>Tela do Contrato de Licença de Uso do FingerCap.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/18 para frente 25/Screenshot_22.png">
    </div>
    <li>Tela de Informação do FingerCap, alertando para desconectar o leitor.</li>
    <div class="image-placeholder">
     <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/18 para frente 25/Screenshot_23.png">
    </div>
    <li>Tela Pronto para Instalar do FingerCap.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/18 para frente 25/Screenshot_24.png">
    </div>
    <li>Tela Finalizando o Assistente de Instalação do Griaule FingerCap USB Driver.</li>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/DuvidaseOrientações/Instalação sigo plugin/18 para frente 25/Screenshot_25.png">
    </div>
  </ol>
  <p>Instrução Final: Após finalizar a instalação, vá até a área de trabalho e exclua o atalho do aplicativo FingerCap.</p>

<div class="note-box" style="text-align: center;">
  <p>Para baixar o documento original, clique no botão abaixo.</p>
  <a href="https://wisesystem.com.br/sigoweb/tutorial/tutorial-de-instalacao-sigoplugin-e-drives.pdf" class="download-button" style="display: inline-block; background-color: #0d47a1; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; margin-top: 20px;" target="_blank">
    Baixar Documento Direcionado ao Cliente (PDF)
  </a>
</div>

<style>
  .welcome-banner {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
  }

  .core-concepts h1, .core-concepts h2 {
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

  .image-placeholder {
    background: #f5f5f5;
    padding: 50px 10px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
    font-style: italic;
    color: #666;
  }

  /* Adicionado para diferenciar subtítulos */
  .core-concepts h3 {
    color: #1565c0; /* Um tom de azul um pouco mais claro */
    margin-top: 25px;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 5px;
  }
</style>
`
    },





  ]
};
