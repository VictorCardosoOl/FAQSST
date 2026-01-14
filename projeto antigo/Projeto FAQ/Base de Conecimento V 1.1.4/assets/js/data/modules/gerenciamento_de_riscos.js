 const gerenciamentoderiscos =
{
  id: 'gerenciamento-de-riscos',
  title: 'Gerenciamento de Riscos',
  description: 'Este módulo aborda aspectos relacionados ao PGR, PCMSO, LTCAT, LI, LP e outros documentos ligados à saúde e segurança do trabalho.',
  icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path fill="currentColor" fill-rule="evenodd" d="M3.5 13.5v-12H8v2.75C8 5.216 8.784 6 9.75 6h3.375a.76.76 0 0 0 .063-.003A.75.75 0 0 0 14 5.25v-.774a1 1 0 0 0-.282-.695L10.363.305A1 1 0 0 0 9.643 0H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h4.25a.75.75 0 0 0 0-1.5H3.5Zm8.828-9L9.5 1.57v2.68c0 .138.112.25.25.25h2.578ZM10 15.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm3-2a.75.75 0 0 1-.75-.75V11h-1.5a.75.75 0 0 1 0-1.5h1.5V8a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-.75.75Z" clip-rule="evenodd"/>
</svg>`,


  topics: [
    {

      id: 'introducao-sst-novos-funcionarios',
      title: 'Introdução à Saúde e Segurança no Trabalho',
      description: 'Guia sobre SST, NRs, PGR, PCMSO, LTCAT e outros documentos ocupacionais para integração de novos colaboradores.',
      group: 'Gerenciamento de Riscos',
      tags: ['Introdução'],
      content: `
  <div class="welcome-banner">
    <h1>Bem-vindo à Área de SST!</h1>
    <p>Este guia foi criado para ajudar você a compreender os principais conceitos de Saúde e Segurança no Trabalho que utilizamos diariamente em nosso sistema.</p>
  </div>

  <section class="core-concepts">
    <h2>O Que é Saúde e Segurança no Trabalho (SST)?</h2>
    <div class="concept-card">
      <p>É um conjunto de <strong>Normas Regulamentadoras (NRs)</strong> estabelecidas pelo Ministério do Trabalho que visam:</p>
      <ul>
        <li>Minimizar ou eliminar riscos no ambiente de trabalho</li>
        <li>Reduzir custos com acidentes e afastamentos</li>
        <li>Promover saúde e qualidade de vida aos colaboradores</li>
        <li>Cumprir exigências legais e previdenciárias</li>
      </ul>
    </div>

  <section class="nr-overview">
    <h2>Principais Normas Regulamentadoras (NRs)</h2>
    
    <div class="grid-container">
      <div class="nr-card">
        <h3>NR-1</h3>
        <p>Disposições Gerais e Gerenciamento de Riscos Ocupacionais (PGR)</p>
        <p class="nr-desc">Estabelece os requisitos básicos para a implementação do PGR em todas as empresas.</p>
      </div>
      
      <div class="nr-card">
        <h3>NR-5</h3>
        <p>Comissão Interna de Prevenção de Acidentes (CIPA)</p>
        <p class="nr-desc">Regulamenta a formação e atuação da CIPA nas empresas.</p>
      </div>
      
      <div class="nr-card">
        <h3>NR-7</h3>
        <p>Programa de Controle Médico de Saúde Ocupacional (PCMSO)</p>
        <p class="nr-desc">Define os exames médicos obrigatórios e seu período de realização.</p>
      </div>
      
      <div class="nr-card">
        <h3>NR-15</h3>
        <p>Atividades e Operações Insalubres (LI - Laudo de Insalubridade)</p>
        <p class="nr-desc">Lista as atividades que conferem direito ao adicional de insalubridade.</p>
      </div>
      
      <div class="nr-card">
        <h3>NR-16</h3>
        <p>Atividades e Operações Perigosas (LP - Laudo de Periculosidade)</p>
        <p class="nr-desc">Regulamenta o adicional de periculosidade para atividades de risco.</p>
      </div>
      
      <div class="nr-card">
        <h3>NR-17</h3>
        <p>Ergonomia</p>
        <p class="nr-desc">Estabelece parâmetros para adaptação do trabalho às características do trabalhador.</p>
      </div>
      
      <div class="nr-card">
        <h3>NR-35</h3>
        <p>Trabalho em Altura</p>
        <p class="nr-desc">Define os requisitos para trabalho em altura acima de 2 metros.</p>
      </div>
    </div>
  </section>

  <section class="documents-section">
    <h2>Documentos Ocupacionais no Sistema Sigo</h2>
    
    <div class="document-card">
      <h3 class="document-title">PGR (NR-1) - Programa de Gerenciamento de Riscos</h3>
      <div class="document-content">
        <p>Documento técnico obrigatório para todas as empresas, conforme estabelecido pela NR-1.</p>
        
        <h4>Características Técnicas:</h4>
        <ul>
          <li><strong>Periodicidade:</strong> Anual, com revisões sempre que houver mudanças nos processos</li>
          <li><strong>Responsável Técnico:</strong> Engenheiro de Segurança do Trabalho ou Técnico em Segurança do Trabalho</li>
          <li><strong>Conteúdo Mínimo:</strong> Identificação de riscos, medidas de controle, cronograma de ações</li>
          <li><strong>Validade:</strong> 1 ano, podendo ser prorrogado por igual período se não houver alterações significativas</li>
        </ul>
        
        <h4>Fluxo no Sistema:</h4>
        <ol>
          <li>Cadastro inicial de setores e funções</li>
          <li>Identificação automática de riscos associados</li>
          <li>Plano de ação com prazos e responsáveis</li>
          <li>Assinatura digital do responsável técnico</li>
        </ol>
      
    <div class="document-card">
      <h3 class="document-title">PCMSO (NR-7) - Programa de Controle Médico de Saúde Ocupacional</h3>
      <div class="document-content">
        <p>Programa médico obrigatório que acompanha a saúde dos trabalhadores durante todo o vínculo empregatício.</p>
        
        <h4>Detalhes Importantes:</h4>
        <ul>
          <li><strong>Exames Obrigatórios:</strong> Admissional, periódico, de retorno ao trabalho, de mudança de função e demissional</li>
          <li><strong>Periodicidade:</strong> Varia conforme o risco (6 meses para alto risco, 12 meses para demais casos)</li>
          <li><strong>Documento Gerado:</strong> ASO (Atestado de Saúde Ocupacional) para cada exame realizado</li>
          <li><strong>Armazenamento:</strong> Os resultados devem ser mantidos por no mínimo 20 anos</li>
        </ul>
        
        <h4>Dados no Sistema:</h4>
        <p>Todos os exames são registrados no sistema com data, tipo, resultado e restrições identificadas.</p>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">LTCAT - Laudo Técnico das Condições Ambientais de Trabalho</h3>
      <div class="document-content">
        <p>Documento técnico exigido pelo INSS para comprovação de exposição a agentes nocivos.</p>
        
        <h4>Informações Relevantes:</h4>
        <ul>
          <li><strong>Finalidade Principal:</strong> Base para concessão de aposentadoria especial</li>
          <li><strong>Validade:</strong> 5 anos, podendo ser antecipada em caso de mudanças significativas</li>
          <li><strong>Conteúdo:</strong> Descrição detalhada das atividades, agentes nocivos, níveis de exposição e medidas de controle</li>
          <li><strong>Vínculo com PGR:</strong> Os dados de exposição são importados automaticamente do PGR</li>
        </ul>
        
        <h4>Diferencial:</h4>
        <p>Enquanto o Laudo de Insalubridade (NR-15) foca nos adicionais, o LTCAT tem caráter previdenciário.</p>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">LI/NR-15 - Laudo de Insalubridade</h3>
      <div class="document-content">
        <p>Documento que comprova a exposição do trabalhador a agentes insalubres conforme limites estabelecidos na NR-15.</p>
        
        <h4>Detalhamento:</h4>
        <ul>
          <li><strong>Graus de Insalubridade:</strong> Máximo (40%), Médio (20%) e Mínimo (10%) do salário mínimo</li>
          <li><strong>Agentes Avaliados:</strong> Ruído, calor, radiações, produtos químicos, entre outros</li>
          <li><strong>Metodologia:</strong> Requer medições ambientais com equipamentos específicos</li>
          <li><strong>Validade:</strong> Indeterminada, mas deve ser refeito quando houver alterações nas condições</li>
        </ul>
        
        <h4>Processo no Sistema:</h4>
        <p>Após cadastro dos dados de monitoramento, o sistema calcula automaticamente o grau de insalubridade.</p>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">LP/NR-16 - Laudo de Periculosidade</h3>
      <div class="document-content">
        <p>Documento técnico que atesta condições de risco iminente conforme definido na NR-16.</p>
        
        <h4>Especificações:</h4>
        <ul>
          <li><strong>Adicional:</strong> 30% sobre o salário base (não incide sobre outros adicionais)</li>
          <li><strong>Atividades Enquadradas:</strong> Explosivos, energia elétrica, inflamáveis, segurança patrimonial armada</li>
          <li><strong>Característica:</strong> Não requer medição quantitativa, apenas qualificação da atividade</li>
          <li><strong>Validade:</strong> Enquanto persistirem as condições de periculosidade</li>
        </ul>
        
        <h4>Integração:</h4>
        <p>O sistema gera alertas quando um trabalhador é alocado em função com periculosidade.</p>
      </div>
    </div>
  </section>

  <section class="esocial-integration">
    <h2>Integração com o eSocial</h2>
    <p>O sistema envia automaticamente os seguintes eventos para o eSocial:</p>
    
    <div class="event-grid">
      <div class="event-card">
        <h4>S-2210</h4>
        <p><strong>Comunicação de Acidente de Trabalho</strong></p>
        <p>Deve ser enviado em até 1 dia útil após o acidente. Contém dados do acidentado, tipo de lesão e CID.</p>
      </div>
      
      <div class="event-card">
        <h4>S-2220</h4>
        <p><strong>Monitoramento da Saúde do Trabalhador</strong></p>
        <p>Registra todos os exames ocupacionais realizados, vinculados ao PCMSO da empresa.</p>
      </div>
      
      <div class="event-card">
        <h4>S-2221</h4>
        <p><strong>Exame Toxicológico</strong></p>
        <p>Obrigatório para motoristas profissionais (Lei 13.103/2015). Resultados positivos geram bloqueio automático no sistema.</p>
      </div>
      
      <div class="event-card">
        <h4>S-2240</h4>
        <p><strong>Condições do Ambiente de Trabalho</strong></p>
        <p>Comunica os riscos ambientais identificados no PGR e as medidas de controle adotadas.</p>
      </div>
      
      <div class="event-card">
        <h4>S-3000</h4>
        <p><strong>Eventos de Saúde e Segurança</strong></p>
        <p> Utilizado para tornar sem efeito (excluir) um evento que foi enviado incorretamente.</p>
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
    
    .grid-container, .event-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 20px;
      margin: 25px 0;
    }
    
    .nr-card, .event-card {
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
    
    .event-card p {
      margin: 8px 0;
    }
    
    .event-card p:first-of-type {
      font-weight: bold;
      margin-bottom: 12px;
    }
  </style>
`

    }, 

    {
      id: 'migracao-gerenciamento-riscos-sigo-w3-para-sigo-web',
      title: 'Migração do Gerenciamento de Riscos: Impactos na Transição do Sigo W3 para o Sigo Web',
      description: 'Guia completo sobre a reestruturação de setores, funções, PCMSO e LTCAT durante a migração entre sistemas, com procedimentos para correção de vínculos e prevenção de erros operacionais.',
      group: 'Gerenciamento de Riscos',
      tags: ['Processos', 'Introdução', 'Migração'],
      content: `
  <h2>Migração do Gerenciamento de Riscos: Impactos na Transição do Sigo W3 para o Sigo Web</h2>
  <p>A transição entre as plataformas exige atenção especial à gestão de setores, funções e seus vínculos com documentos ocupacionais. Este manual técnico detalha as mudanças estruturais e fornece soluções práticas para garantir a continuidade dos processos de saúde e segurança no trabalho.</p>

  <!-- Seção 1 -->
  <h3>1. Protocolos Críticos para Prevenção de Erros</h3>
  <div class="warning-box">
    <h4>Atenção Operacional</h4>
    <ul>
      <li><strong>Preservação de cadastros:</strong> Manter todos os setores e funções existentes no Gerenciamento de Riscos de empresas migradas</li>
      <li><strong>Consolidação prévia:</strong> Verificar ativamente se todos os funcionários estão vinculados a um único setor/função antes de excluir duplicatas</li>
    </ul>
  </div>

  <!-- Seção 2 -->
  <h3>2. Análise Comparativa das Estruturas</h3>
  
  <h4>2.1 Arquitetura no Sigo W3 (Legado)</h4>
  <ul>
    <li><strong>Cadastro isolado:</strong> Cada empresa possuía seu próprio conjunto de setores e funções, mesmo com descrições idênticas</li>
    <li><strong>Identificadores únicos:</strong> IDs independentes para cada combinação empresa-setor-função</li>
  </ul>

  <div class="code-example">
    <p><strong>Exemplo Prático:</strong></p>
    <p>Empresa A: Setor Administrativo (ID: 1) | Função: Auxiliar (ID: 1)</p>
    <p>Empresa B: Setor Administrativo (ID: 2) | Função: Auxiliar (ID: 2)</p>
  </div>

  <!-- Espaço para imagem de fluxo Sigo W3 -->
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Gerenciamentoderiscos/Erro na impressão do PGR/Screenshot_1.png">
  </div>

  <h4>2.2 Modelo no Sigo Web (Nova Versão)</h4>
  <ul>
    <li><strong>Cadastro unificado:</strong> Setores e funções tornaram-se entidades globais</li>
    <li><strong>Seleção contextual:</strong> Associados às empresas durante a elaboração do Gerenciamento de Riscos</li>
  </ul>

  <div class="code-example">
    <p><strong>Exemplo Prático:</strong></p>
    <p>Setor: Administrativo (ID: 1) | Função: Auxiliar (ID: 1)</p>
    <p>Aplicação uniforme em todas as empresas</p>
  </div>

  <!-- Seção 3 -->
  <h3>3. Processo de Migração - Transformação de Dados</h3>
  <p>Durante a conversão dos dados ocorre:</p>
  
  <div class="comparison-table">
    <table>
      <tr>
        <th>Estado Inicial (Pré-Migração)</th>
        <th>Estado Final (Pós-Migração)</th>
      </tr>
      <tr>
        <td>
          <ul>
            <li>Administrativo, ID: 1 – Ativo</li>
            <li>Administrativo, ID: 2 – Ativo</li>
            <li>Administrativo, ID: 3 – Ativo</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Administrativo, ID: 1 – Ativo</li>
            <li>Administrativo, ID: 2 – Inativo</li>
            <li>Administrativo, ID: 3 – Inativo</li>
          </ul>
        </td>
      </tr>
    </table>
  </div>

  <p><strong>Observação técnica:</strong> Os vínculos históricos são preservados mesmo para registros inativados, permitindo a recuperação via ID original quando necessário.</p>

  <!-- Seção 4 -->
  <h3>4. Impactos Operacionais e Soluções</h3>
  
  <h4>4.1 Quebra de Vínculos no PCMSO</h4>
  <div class="alert-box">
    <p><strong>Cenário crítico:</strong> Quando os IDs de setor/função no Registro de Admissão divergem dos IDs no PCMSO migrado, ocorre perda de associação.</p>
    <p><em>Exemplo documentado:</em> Funcionária Luciana teve seu vínculo rompido devido à discrepância entre os sistemas.</p>
  </div>

  <!-- Espaço para imagem de alerta de vínculo quebrado -->
  <div class="image-placeholder">
    <p>[Imagem: Alerta de vínculo quebrado com exemplo da funcionária Luciana]</p>
  </div>

  <h4>4.2 Procedimento de Restauração (Passo a Passo)</h4>
  <div class="step-by-step">
    <div class="step">
      <h5>Passo 1: Recuperação de Cadastros</h5>
      <p>Acessar o cadastro de Setor/Função → Pesquisar pelo ID original → Reativar os registros inativados</p>
    </div>
    
    <div class="step">
      <h5>Passo 2: Reassociação no GR</h5>
      <p>No Gerenciamento de Riscos da empresa → Incluir os setores reativados</p>
    </div>
    
    <div class="step">
      <h5>Passo 3: Transferência de Riscos</h5>
      <p>Utilizar a função "Importar Exposições" para migrar os riscos do PGR antigo para a nova estrutura</p>
    </div>
  </div>

  <!-- Espaço para imagem do assistente de importação -->
  <div class="image-placeholder">
    <p>[Imagem: Tela do assistente de importação de exposições do PGR]</p>
  </div>

  <!-- Seção 5 -->
  <h3>5. Mudanças no LTCAT - Nova Abordagem</h3>
  <div class="new-feature">
    <h4>Desacoplamento de Funcionalidades</h4>
    <ul>
      <li><strong>Independência estrutural:</strong> LTCAT e PGR agora operam como módulos separados</li>
      <li><strong>Facilidade de importação:</strong> Nova função "Importar do PGR" para transferência de riscos da Tabela 24</li>
    </ul>
  </div>

  <div class="benefits-box">
    <h4>Vantagens da Nova Versão</h4>
    <ul>
      <li>Replicação simplificada de LTCATs entre empresas</li>
      <li>Atualização ágil de documentos</li>
      <li>Redução de inconsistências</li>
    </ul>
  </div>

  <div class="warning-box">
    <h4>Restrição Importante</h4>
    <p>Evitar importação de PGR entre empresas diferentes para prevenir falhas nos vínculos futuros entre PCMSO e atendimentos médicos.</p>
  </div>

  <!-- Seção 6 -->
  <h3>6. Fluxograma de Decisão para Casos Complexos</h3>
  <div class="flowchart">
    <!-- Espaço para imagem do fluxograma -->
    <p>[Imagem: Fluxograma de tratamento para migração com problemas de vínculo]</p>
  </div>

  <h3>Conclusão Técnica</h3>
  <div class="summary">
    <p>A migração para o Sigo Web representa uma evolução arquitetural significativa, com:</p>
    <ul>
      <li><strong>Otimização estrutural:</strong> Eliminação de redundâncias nos cadastros</li>
      <li><strong>Gestão unificada:</strong> Padronização de setores e funções</li>
      <li><strong>Continuidade assegurada:</strong> Mecanismos de recuperação para manutenção dos vínculos históricos</li>
    </ul>
    <p>As equipes devem priorizar a verificação dos vínculos pós-migração, seguindo os protocolos estabelecidos para garantia da integridade dos dados ocupacionais.</p>
  </div>

  <style>
    .warning-box, .alert-box {
      border-left: 4px solid #ff9800;
      background-color: #fff8e1;
      padding: 15px;
      margin: 20px 0;
    }
    .alert-box {
      border-color: #f44336;
      background-color: #ffebee;
    }
    .code-example {
      background: #f5f5f5;
      padding: 10px;
      border-radius: 4px;
      font-family: monospace;
    }
    .step-by-step .step {
      background: #e8f5e9;
      padding: 10px 15px;
      margin: 10px 0;
      border-left: 4px solid #4caf50;
    }
    .new-feature {
      background: #e3f2fd;
      padding: 15px;
      border-left: 4px solid #2196f3;
    }
    .benefits-box {
      background: #e8f5e9;
      padding: 15px;
      margin: 15px 0;
    }
    .image-placeholder {
      background: #f5f5f5;
      padding: 30px;
      text-align: center;
      margin: 20px 0;
      border: 1px dashed #ccc;
    }
    .comparison-table table {
      width: 100%;
      border-collapse: collapse;
    }
    .comparison-table th, .comparison-table td {
      border: 1px solid #ddd;
      padding: 12px;
      vertical-align: top;
    }
    .comparison-table th {
      background-color: #f2f2f2;
    }
  </style>
`

    },
    {
    id: 'diferenca-li-lp',
    title: 'Diferença entre LI e LP - Conceitos, Aplicações e Obrigações Legais',
    description: 'Guia visual comparativo entre Laudo de Insalubridade (LI) e Laudo de Periculosidade (LP), com objetivos, bases legais, critérios, prazos e orientações práticas.',
    tags: ['eSocial', 'Introdução'],
    group: 'Documentos',
    content: `
    <div class="welcome-banner">
        <h1>Diferença entre LI e LP</h1>
        <p>Este guia esclarece as funções, critérios e aplicações práticas do <strong>Laudo de Insalubridade (LI)</strong> e do <strong>Laudo de Periculosidade (LP)</strong>, essenciais para a conformidade legal e a proteção do trabalhador.</p>
    </div>

    <section class="steps-container">
        <!-- Passo 1 -->
        <div class="step-card hover-card">
            <div class="step-number">1</div>
            <h3>Laudo de Insalubridade (LI)</h3>
            <p><strong>O que é:</strong> Documento técnico elaborado por médico ou engenheiro de segurança do trabalho para identificar, avaliar e classificar atividades insalubres, conforme parâmetros da NR-15.</p>
            <ul class="aligned-list">
                <li><strong>Objetivos:</strong> Determinar exposição a agentes nocivos; Classificar grau (mínimo, médio ou máximo); Indicar medidas de controle.</li>
                <li><strong>Agentes avaliados:</strong> Físicos (ruído, vibração, calor, frio, radiações não ionizantes), Químicos (poeiras, fumos metálicos, vapores, gases), Biológicos (bactérias, vírus, fungos).</li>
                <li><strong>Base legal:</strong> NR-15 / CLT arts. 189 e 192.</li>
            </ul>
        </div>

        <!-- Passo 2 -->
        <div class="step-card hover-card">
            <div class="step-number">2</div>
            <h3>Laudo de Periculosidade (LP)</h3>
            <p><strong>O que é:</strong> Documento técnico elaborado por médico ou engenheiro de segurança do trabalho para avaliar se o trabalhador exerce atividades perigosas, conforme critérios da NR-16.</p>
            <ul class="aligned-list">
                <li><strong>Objetivos:</strong> Identificar risco iminente à vida; Determinar enquadramento conforme NR-16; Recomendar medidas preventivas.</li>
                <li><strong>Riscos avaliados:</strong> Inflamáveis e explosivos; Energia elétrica; Radiações ionizantes; Segurança armada.</li>
                <li><strong>Base legal:</strong> NR-16 / CLT art. 193.</li>
            </ul>
        </div>

        <!-- Passo 3 -->
        <div class="step-card hover-card">
            <div class="step-number">3</div>
            <h3>Comparativo LI x LP</h3>
            <div class="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Critério</th>
                            <th>LI</th>
                            <th>LP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Natureza do risco</td>
                            <td>Danos à saúde a longo prazo</td>
                            <td>Risco iminente de morte/acidente grave</td>
                        </tr>
                        <tr>
                            <td>Tipo de agente</td>
                            <td>Físico, químico, biológico</td>
                            <td>Inflamável, explosivo, eletricidade, radiação ionizante, segurança armada</td>
                        </tr>
                        <tr>
                            <td>Adicional</td>
                            <td>10%, 20% ou 40% sobre salário mínimo</td>
                            <td>30% sobre salário-base</td>
                        </tr>
                        <tr>
                            <td>Objetivo</td>
                            <td>Proteger saúde</td>
                            <td>Proteger vida e integridade física</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- Passo 4 -->
        <div class="step-card hover-card">
            <div class="step-number">4</div>
            <h3>Quando Solicitar</h3>
            <ul class="aligned-list">
                <li><strong>LI:</strong> Admissão em atividades com agentes nocivos; Mudança no processo produtivo; Suspeita de exposição acima do limite; Fiscalizações ou ações trabalhistas.</li>
                <li><strong>LP:</strong> Atividades com inflamáveis, explosivos, eletricidade ou riscos da NR-16; Alterações elétricas/combustíveis; Auditorias ou fiscalizações.</li>
            </ul>
        </div>

        <!-- Passo 5 -->
        <div class="step-card hover-card">
            <div class="step-number">5</div>
            <h3>Finalidade dos Laudos</h3>
            <ul class="aligned-list">
                <li>Comprovação legal perante órgãos fiscalizadores.</li>
                <li>Cálculo de adicionais salariais.</li>
                <li>Prevenção e segurança, orientando medidas e EPIs.</li>
                <li>Proteção jurídica para empresa e trabalhador.</li>
                <li>Atendimento ao eSocial (ex.: S-2240).</li>
            </ul>
        </div>
    </section>

    <style>
        .welcome-banner {
            background: #e3f2fd;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin-bottom: 25px;
        }
        .steps-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 20px;
        }
        .step-card {
            background: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.1);
            position: relative;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .hover-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .step-number {
            background: #2196F3;
            color: white;
            font-weight: bold;
            font-size: 1.2em;
            border-radius: 50%;
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: -12px;
            left: -12px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
        }
        .aligned-list {
            list-style-position: inside;
            margin-top: 10px;
            padding-left: 10px;
        }
        .comparison-table table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
        }
        .comparison-table th, .comparison-table td {
            border: 1px solid #ddd;
            padding: 8px;
        }
        .comparison-table th {
            background: #f5f5f5;
        }
        .comparison-table tbody tr:hover {
            background: #e3f2fd;
        }
    </style>
    `
},
  {
    id: 'ltcat-guia-completo',
    title: 'LTCAT: o que é, finalidade, validade e quando elaborar',
    description:
      'Laudo Técnico das Condições Ambientais do Trabalho: conceito, finalidade previdenciária (PPP/aposentadoria especial), quando elaborar, validade/atualização e integração com o eSocial.',
      tags: ['eSocial', 'Introdução'],
      group: 'Documentos',
    content: `
    <div class="welcome-banner">
      <h1>LTCAT – Laudo Técnico das Condições Ambientais do Trabalho</h1>
      <p>Documento técnico-legal que registra a exposição dos trabalhadores a agentes nocivos no ambiente laboral
      (químicos, físicos e biológicos), servindo de base para <span class="hover-tip" data-title="Documento histórico-laboral exigido pelo INSS; utiliza dados do LTCAT para caracterizar exposições."><strong>PPP</strong></span>
      e para concessão de <strong>aposentadoria especial</strong>.</p>
    </div>

    <section class="core-concepts">
      <h2>Conceito e Objetivo</h2>
      <div class="concept-card">
        <ul>
          <li>Registrar, de forma técnica e com amparo legal, as <strong>condições ambientais de trabalho</strong>.</li>
          <li>Caracterizar a <strong>exposição ocupacional</strong> a agentes nocivos e sua intensidade/concentração.</li>
          <li>Dar lastro técnico para emissão do <strong>PPP</strong> e para o envio de <span class="hover-tip" data-title="Sistema público de escrituração digital de obrigações trabalhistas, previdenciárias e fiscais."><strong>eventos de SST no eSocial</strong></span>.</li>
          <li>Apoiar programas ocupacionais: <strong>PCMSO</strong> e <strong>PGR</strong>.</li>
        </ul>
      </div>
    </section>

    <section class="documents-section">
      <h2>Finalidades Práticas</h2>
      <div class="grid-container">
        <div class="doc-card">
          <h3>Base Previdenciária</h3>
          <ul>
            <li>Suporte à <strong>aposentadoria especial</strong> (15, 20 ou 25 anos conforme agente e enquadramento).</li>
            <li>Fonte oficial para <strong>PPP</strong> e auditorias previdenciárias.</li>
          </ul>
        </div>
        <div class="doc-card">
          <h3>Gestão de SST</h3>
          <ul>
            <li>Evidencia os agentes nocivos presentes no ambiente de trabalho.</li>
            <li>Subsidiar decisões do <strong>PGR</strong> e acompanhamento clínico pelo <strong>PCMSO</strong>.</li>
          </ul>
        </div>
        <div class="doc-card">
          <h3>Conformidade</h3>
          <ul>
            <li>Comprovação legal perante fiscalizações trabalhistas e previdenciárias.</li>
            <li>Resguardo formal inclusive quando a empresa alega <em>“não haver riscos”</em>.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="nr-overview">
      <h2>Quando é obrigatório elaborar</h2>
      <div class="concept-card">
        <p>Aplicável a todas as empresas com empregados regidos pela CLT (inclui MEI com funcionário e órgãos públicos celetistas), especialmente quando houver:</p>
        <ul>
          <li><strong>Exposição a agentes nocivos</strong> acima dos limites de tolerância (químicos, físicos, biológicos).</li>
          <li>Atividades com potencial de <strong>aposentadoria especial</strong> (25, 20 ou 15 anos).</li>
          <li>Obrigação de emitir <strong>PPP</strong> — inclusive para comprovar <em>inexistência de riscos</em>.</li>
          <li>Necessidade de informações para envio ao eSocial:
            <ul>
              <li><span class="hover-tip" data-title="Evento de Fatores de Risco — comunica exposições por lotação/funcão."><strong>S-2240</strong></span> — Condições Ambientais do Trabalho</li>
              <li><span class="hover-tip" data-title="Evento de exames ocupacionais do PCMSO."><strong>S-2220</strong></span> — Monitoramento da Saúde do Trabalhador</li>
            </ul>
          </li>
        </ul>
        <div class="info-box">
          <strong>Importante:</strong> Mesmo empresas que declaram não possuir riscos devem formalizar essa condição via LTCAT para evitar passivos.
        </div>
      </div>
    </section>

    <section class="documents-section">
      <h2>Validade e Atualização</h2>
      <div class="document-card">
        <div class="document-content">
          <ul>
            <li>Sem <strong>prazo fixo</strong> em lei — vigor <em>enquanto as condições permanecerem</em>.</li>
            <li><strong>Atualizar</strong> sempre que houver mudanças de layout, processo, máquinas, EPI/EPC ou agentes que alterem a exposição.</li>
            <li><strong>Boas práticas:</strong> revisar ao menos <strong>anualmente</strong> ou a cada alteração significativa, alinhado ao ciclo do PGR e aos prazos do eSocial.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="esocial-integration">
      <h2>Conteúdo Mínimo e Estrutura Técnica</h2>
      <div class="grid-container">
        <div class="doc-card">
          <h3>Responsáveis</h3>
          <ul>
            <li>Elaboração por <strong>Engenheiro de Segurança</strong> ou <strong>Médico do Trabalho</strong>.</li>
          </ul>
        </div>
        <div class="doc-card">
          <h3>Itens do Laudo</h3>
          <ul>
            <li>Descrição das <strong>atividades</strong> e <strong>setores</strong>.</li>
            <li>Lista de <strong>agentes nocivos</strong> e <strong>níveis de exposição</strong> (métodos de avaliação).</li>
            <li><strong>Medidas de controle</strong> existentes (EPC/EPI) e recomendações.</li>
            <li>Relação com <strong>PGR</strong> e impactos no <strong>PCMSO</strong>.</li>
          </ul>
        </div>
        <div class="doc-card">
          <h3>Integração eSocial</h3>
          <ul>
            <li><strong>S-2240</strong>: fatores de risco por lotação e medidas de controle.</li>
            <li><strong>S-2220</strong>: exames e avaliações clínicas vinculadas ao PCMSO.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="legal-section">
      <h2>Base Legal e Referências</h2>
      <div class="comparison-table">
        <table>
          <tr>
            <th>Norma</th>
            <th>Escopo</th>
          </tr>
          <tr>
            <td>Lei 8.213/1991 — Art. 58</td>
            <td>Define critérios de exposição para fins previdenciários (aposentadoria especial).</td>
          </tr>
          <tr>
            <td>Decreto 3.048/1999</td>
            <td>Regulamento da Previdência Social (detalhamento dos enquadramentos).</td>
          </tr>
          <tr>
            <td>IN INSS 128/2022</td>
            <td>Procedimentos para comprovação de exposição e PPP.</td>
          </tr>
          <tr>
            <td>NR-15</td>
            <td>Atividades e Operações Insalubres (limites e critérios técnicos).</td>
          </tr>
          <tr>
            <td>PGR (NR-1)</td>
            <td>Integração com a gestão de riscos ocupacionais (substituiu a antiga NR-9/PPRA).</td>
          </tr>
        </table>
      </div>
    </section>

    <section class="faq-section">
      <h2>Perguntas Frequentes (FAQ)</h2>
      <details>
        <summary>Quem pode assinar o LTCAT?</summary>
        <p>Engenheiro de Segurança do Trabalho ou Médico do Trabalho, conforme legislação previdenciária.</p>
      </details>
      <details>
        <summary>Se não há agentes nocivos, preciso do LTCAT?</summary>
        <p>Sim. O laudo formaliza a inexistência de exposição e resguarda a empresa em fiscalizações e ações.</p>
      </details>
      <details>
        <summary>Qual a periodicidade de revisão?</summary>
        <p>Não há prazo fixo em lei; recomenda-se revisão anual ou sempre que houver alteração significativa.</p>
      </details>
    </section>
    <style>
      :root {
        --brand-blue: #2196F3;
        --brand-black: #0f172a;
        --brand-white: #ffffff;
        --muted: #f5f5f5;
      }
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 10px;
        margin-bottom: 30px;
        text-align: center;
        border: 1px solid rgba(0,0,0,.05);
      }
      h1, h2, h3 { color: var(--brand-black); }
      .core-concepts .concept-card,
      .concept-card,
      .doc-card,
      .document-card,
      .event-card {
        background: var(--brand-white);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        border-left: 4px solid var(--brand-blue);
        margin: 15px 0;
      }
      .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      .document-card { padding: 0; overflow: hidden; border-left: none; }
      .document-content { padding: 25px; }
      .comparison-table table { width: 100%; border-collapse: collapse; }
      .comparison-table th, .comparison-table td { border: 1px solid #e0e0e0; padding: 12px; text-align: left; }
      .comparison-table th { background: #f7f7f7; }
      .image-placeholder {
        background: var(--muted);
        padding: 40px; text-align: center; margin: 30px 0;
        border: 2px dashed #ccc; border-radius: 8px;
      }
      .info-box {
        background: #e8f5e9; border-left: 4px solid #4caf50; padding: 12px 16px; margin-top: 16px;
      }
      /* Hovers (tooltips) */
      .hover-tip { position: relative; cursor: help; border-bottom: 1px dashed var(--brand-blue); }
      .hover-tip::after {
        content: attr(data-title);
        position: absolute; left: 0; bottom: calc(100% + 8px);
        background: var(--brand-black); color: var(--brand-white);
        padding: 8px 10px; border-radius: 6px; white-space: nowrap; font-size: .85em; line-height: 1.2;
        opacity: 0; transform: translateY(4px); pointer-events: none; transition: all .2s ease;
      }
      .hover-tip:hover::after { opacity: 1; transform: translateY(0); }
      /* Details hover styling */
      details { background: #fafafa; border: 1px solid #eaeaea; border-radius: 8px; padding: 12px 14px; margin: 10px 0; }
      details[open] { border-color: var(--brand-blue); }
      summary { cursor: pointer; }
      /* Lists spacing */
      ul { padding-left: 18px; }
      li { margin: 6px 0; }
    </style>
    `
  },

  {
  id: 'pcmso-programa-controle-medico',
  title: 'PCMSO - Guia Completo sobre o Programa de Controle Médico de Saúde Ocupacional',
  description: 'Entenda o que é o PCMSO, sua importância, os exames obrigatórios, o Relatório Analítico e as responsabilidades da empresa conforme a NR-7.',
  tags: ['eSocial', 'Introdução'],
  group: 'Documentos',
  content: `
    <style>
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
        transition: box-shadow 0.3s ease-in-out;
      }

      .document-card:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
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

      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }

      .info-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-left: 4px solid #2196F3;
      }

      .info-card ul {
        padding-left: 20px;
        margin: 0;
      }

      .info-card li {
        margin-bottom: 8px;
      }

    </style>

    <div class="document-card">
      <h3 class="document-title">O que é o PCMSO (NR-7)?</h3>
      <div class="document-content">
        <p>O <strong>Programa de Controle Médico de Saúde Ocupacional (PCMSO)</strong> é um programa obrigatório para todas as empresas com empregados regidos pela CLT, conforme estabelecido pela Norma Regulamentadora NR-7.</p>
        <ul>
          <li><strong>Finalidade Principal:</strong> Proteger e preservar a saúde dos trabalhadores através de ações de prevenção e diagnóstico precoce de doenças relacionadas ao trabalho.</li>
          <li><strong>Integração:</strong> O PCMSO deve estar alinhado com o Programa de Gerenciamento de Riscos (PGR).</li>
          <li><strong>eSocial:</strong> As informações do PCMSO são enviadas principalmente através do evento S-2220 (Monitoramento da Saúde do Trabalhador).</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Exames Ocupacionais Contemplados</h3>
      <div class="document-content">
        <h4>Exames Obrigatórios por Lei:</h4>
        <ul>
          <li><strong>Admissional:</strong> Realizado antes do colaborador iniciar suas atividades.</li>
          <li><strong>Periódico:</strong> Feito em intervalos regulares, definidos de acordo com os riscos da função.</li>
          <li><strong>Retorno ao Trabalho:</strong> Necessário após afastamento por motivo de doença ou acidente.</li>
          <li><strong>Mudança de Função:</strong> Aplicado quando o trabalhador muda de atividade, se houver alteração de risco.</li>
          <li><strong>Demissional:</strong> Realizado no processo de desligamento do funcionário.</li>
        </ul>
        <h4>Exames Complementares:</h4>
        <p>Podem ser exigidos outros exames de acordo com os riscos identificados no ambiente de trabalho. O objetivo é a vigilância ativa da saúde para detectar doenças ocupacionais precocemente.</p>
        <ul>
          <li>Exemplos: Audiometria, radiologia, espirometria e outros exames específicos.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
        <h3 class="document-title">Importância e Funções Essenciais do PCMSO</h3>
        <div class="document-content">
            <p>O PCMSO desempenha um papel crucial na saúde ocupacional, com diversas funções definidas pela NR-7:</p>
            <div class="info-grid">
                <div class="info-card">
                    <h4>Prevenção e Diagnóstico</h4>
                    <ul>
                        <li>Detectar precocemente agravos à saúde.</li>
                        <li>Avaliar exposições a agentes nocivos.</li>
                    </ul>
                </div>
                <div class="info-card">
                    <h4>Gestão de Aptidão</h4>
                    <ul>
                        <li>Definir a aptidão do trabalhador para a função.</li>
                        <li>Subsidiar ações de reabilitação profissional.</li>
                    </ul>
                </div>
                <div class="info-card">
                    <h4>Análise e Controle</h4>
                    <ul>
                        <li>Apoiar análises epidemiológicas.</li>
                        <li>Monitorar imunizações ocupacionais recomendadas.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    <div class="document-card">
      <h3 class="document-title">Relatório Analítico do PCMSO</h3>
      <div class="document-content">
        <p>É um documento anual e obrigatório, elaborado pelo médico do trabalho, que funciona como uma avaliação crítica do PCMSO. Seu principal objetivo é analisar e comparar dados de saúde para identificar riscos, prevenir doenças e, se necessário, ajustar o PCMSO e o PGR.</p>
        <h4>O que o relatório contém?</h4>
        <ul>
          <li><strong>Exames Clínicos:</strong> Número de exames admissionais, periódicos, de retorno, de mudança de risco e demissionais realizados.</li>
          <li><strong>Exames Complementares:</strong> Estatísticas sobre a quantidade e os tipos de exames complementares feitos.</li>
          <li><strong>Resultados Anormais:</strong> Dados de exames com resultados fora do padrão, detalhados por tipo, setor ou função.</li>
          <li><strong>Saúde Geral:</strong> Incidência de doenças relacionadas ao trabalho e informações das CATs emitidas.</li>
          <li><strong>Análise Comparativa:</strong> Comparação dos resultados atuais com os do relatório anterior para identificar tendências.</li>
        </ul>
        <h4>Finalidade Estratégica:</h4>
        <ul>
            <li>Avaliar a eficácia das ações de prevenção e monitoramento da saúde.</li>
            <li>Identificar áreas e funções com maiores riscos para intervenções direcionadas.</li>
            <li>Fornecer dados para revisar e aprimorar o PGR.</li>
            <li>Oferecer dados concretos para decisões da gestão sobre investimentos em saúde e segurança.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Responsabilidades e Benefícios</h3>
      <div class="document-content">
        <h4>Responsabilidade do Empregador:</h4>
        <ul>
          <li>Elaborar, implantar e custear todos os procedimentos do programa, sem ônus ao empregado.</li>
          <li>Indicar um médico do trabalho para ser o responsável pelo PCMSO.</li>
          <li style="font-size: 0.9em;"><em>Obs: Empresas de grau de risco 1 ou 2, com até 25 empregados, podem ser dispensadas da indicação de médico coordenador.</em></li>
        </ul>
        <h4>Relevância para a Empresa:</h4>
        <ul>
          <li><strong>Legalidade:</strong> Cumprir a NR-7 protege a empresa de multas e ações judiciais.</li>
          <li><strong>Produtividade:</strong> Um ambiente de trabalho seguro reduz o absenteísmo e melhora o clima organizacional.</li>
        </ul>
      </div>
    </div>
  `
},

{
  id: 'pgr-programa-gerenciamento-riscos',
  title: 'PGR - Guia Completo do Programa de Gerenciamento de Riscos (NR-1)',
  description: 'Entenda o que é o PGR, sua estrutura com Inventário de Riscos e Plano de Ação, quem precisa elaborar, prazos de revisão e as exceções da norma.',
tags: ['eSocial', 'Introdução'],
  group: 'Documentos',
  content: `
    <style>
      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
        transition: box-shadow 0.3s ease-in-out;
      }

      .document-card:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
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

      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }
      
      .info-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-left: 4px solid #2196F3;
      }

      .warning-box {
        border-left: 4px solid #ff9800;
        background-color: #fff8e1;
        padding: 15px;
        margin: 20px 0;
      }

    </style>

    <div class="document-card">
      <h3 class="document-title">O que é o PGR (Programa de Gerenciamento de Riscos)?</h3>
      <div class="document-content">
        <p>O PGR é a formalização do Gerenciamento de Riscos Ocupacionais (GRO) por meio de documentos, com o objetivo de promover um ambiente de trabalho seguro e saudável. Ele se tornou obrigatório em <strong>3 de janeiro de 2022</strong>, com a nova redação da NR-01.</p>
        <ul>
          <li><strong>Substituição:</strong> O PGR substituiu o antigo PPRA (Programa de Prevenção de Riscos Ambientais), que existia desde 1994.</li>
          <li><strong>Escopo Ampliado:</strong> Diferente do PPRA, o PGR abrange também riscos ergonômicos e de acidentes.</li>
          <li><strong>Obrigatoriedade:</strong> Todas as empresas que contratam funcionários sob o regime CLT devem elaborar o PGR.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Estrutura Mínima do PGR</h3>
      <div class="document-content">
        <p>Conforme a NR-01, o PGR deve conter, no mínimo, dois documentos principais:</p>
        <div class="info-grid">
          <div class="info-card">
            <h4>1. Inventário de Riscos Ocupacionais</h4>
            <p>Documento que identifica e avalia os perigos no ambiente de trabalho. Ele deve incluir:</p>
            <ul>
              <li>Caracterização dos ambientes e atividades.</li>
              <li>Descrição de lesões potenciais e grupos de trabalhadores expostos.</li>
              <li>Análise de exposições a agentes físicos, químicos e biológicos.</li>
              <li>Critérios de avaliação e classificação dos riscos (probabilidade vs. severidade).</li>
              <li>O histórico deve ser mantido por, no mínimo, 20 anos.</li>
            </ul>
          </div>
          <div class="info-card">
            <h4>2. Plano de Ação</h4>
            <p>Define as medidas de prevenção a serem adotadas, contendo um cronograma, formas de acompanhamento e avaliação dos resultados.</p>
            <p>O PGR também deve prever procedimentos para resposta a emergências e se integrar a outras ações, como a análise de acidentes e o PCMSO.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Prazos e Revisões do PGR</h3>
      <div class="document-content">
        <p>A NR-01 não define um "prazo de validade" fixo, mas exige que a avaliação de riscos seja revista periodicamente.</p>
        <ul>
          <li><strong>Revisão Padrão:</strong> A avaliação de riscos deve ser revista, no máximo, a cada 2 anos.</li>
          <li><strong>Revisão Estendida:</strong> Empresas com certificações em SST podem estender o prazo para até 3 anos.</li>
        </ul>
        <h4>Revisões Obrigatórias Imediatas</h4>
        <p>O PGR deve ser revisado sempre que ocorrerem as seguintes situações:</p>
        <ul>
          <li>Implementação de novas medidas de prevenção (para reavaliar os riscos residuais).</li>
          <li>Mudanças nos processos, tecnologias ou na organização do trabalho.</li>
          <li>Ocorrência de acidentes de trabalho ou doenças ocupacionais.</li>
          <li>Alterações na legislação aplicável.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Quem está dispensado de elaborar o PGR?</h3>
      <div class="document-content">
        <p>A NR-01 prevê algumas exceções à obrigatoriedade de elaboração do PGR.</p>
        <div class="warning-box">
          <h4>Casos de Dispensa:</h4>
          <ul>
            <li><strong>Microempreendedor Individual (MEI):</strong> Está sempre dispensado de elaborar o PGR.</li>
            <li><strong>Microempresas (ME) e Empresas de Pequeno Porte (EPP):</strong> Podem ser dispensadas se atenderem a dois critérios simultaneamente:
              <ul>
                <li>Serem de grau de risco 1 ou 2.</li>
                <li>Não identificarem perigos de agentes físicos, químicos ou biológicos em seu levantamento preliminar de riscos e declararem essas informações digitalmente.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `
},

{
  id: 'prazos-validade-sst',
  title: 'Prazos de Validade, Elaboração e Atualização de Documentos de SST',
  description: 'Guia prático sobre prazos de validade, elaboração, renovação e revisão de documentos de Saúde e Segurança no Trabalho (SST), incluindo PCMSO, PGR, LTCAT, LI e LP.',
  group: 'Documentos',
  content: `
    <div class="welcome-banner">
      <h1>Prazos de Validade e Atualização em SST</h1>
      <p>Este guia detalha os prazos de validade, momentos de elaboração, renovação e revisão dos principais documentos de Saúde e Segurança no Trabalho (SST).</p>
    </div>

    <section class="core-concepts">
      <h2>Resumo Prático – Quando Agir</h2>
      <div class="concept-card">
        <ul>
          <li><strong>Implantar:</strong> Quando a empresa inicia atividades ou novos setores que envolvam riscos ocupacionais.</li>
          <li><strong>Renovar:</strong> Quando o documento atinge o fim de sua validade ou há mudanças profundas no ambiente de trabalho.</li>
          <li><strong>Revisar:</strong> Quando há ajustes pontuais, como novos EPIs, troca de máquinas, mudança de layout ou alteração de produto químico.</li>
        </ul>
      </div>

    <section class="documents-section">
      <h2>Detalhamento dos Documentos de SST</h2>

      <div class="document-card">
        <h3 class="document-title">PCMSO (NR-07) - Programa de Controle Médico de Saúde Ocupacional</h3>
        <div class="document-content">
          <h4>Detalhes Técnicos:</h4>
          <ul>
            <li><strong>Validade Padrão:</strong> 1 ano (renovação anual).</li>
            <li><strong>Quando Elaborar:</strong> Ao iniciar atividades da empresa com empregados regidos pela CLT.</li>
            <li><strong>Renovação Obrigatória:</strong> Anualmente, com nova programação de exames.</li>
            <li><strong>Quando Revisar:</strong> Sempre que houver mudança nos riscos ocupacionais identificados.</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">PGR (NR-01) - Programa de Gerenciamento de Riscos</h3>
        <div class="document-content">
          <h4>Detalhes Técnicos:</h4>
          <ul>
            <li><strong>Validade Padrão:</strong> 1 ano para análise documental (pode ser atualizado a qualquer momento).</li>
            <li><strong>Quando Elaborar:</strong> Antes do início das operações.</li>
            <li><strong>Renovação Obrigatória:</strong> Quando houver alteração significativa nos riscos ou processos.</li>
            <li><strong>Quando Revisar:</strong> Sempre que houver novos equipamentos, processos ou mudanças de layout.</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">LTCAT - Laudo Técnico das Condições Ambientais do Trabalho</h3>
        <div class="document-content">
          <h4>Detalhes Técnicos:</h4>
          <ul>
            <li><strong>Validade Padrão:</strong> Sem validade fixa por lei, mas deve estar sempre atualizado.</li>
            <li><strong>Quando Elaborar:</strong> Ao iniciar atividades que possam expor trabalhadores a agentes nocivos.</li>
            <li><strong>Renovação Obrigatória:</strong> Quando houver alteração de processos, layout ou agentes.</li>
            <li><strong>Quando Revisar:</strong> A cada nova medição ou atualização tecnológica.</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">LI (NR-15) - Laudo de Insalubridade</h3>
        <div class="document-content">
          <h4>Detalhes Técnicos:</h4>
          <ul>
            <li><strong>Validade Padrão:</strong> Sem prazo fixo, atualizado conforme necessidade.</li>
            <li><strong>Quando Elaborar:</strong> Ao admitir trabalhadores em atividades com possíveis agentes nocivos.</li>
            <li><strong>Renovação Obrigatória:</strong> Quando confirmada alteração de agentes ou intensidade de exposição.</li>
            <li><strong>Quando Revisar:</strong> Após mudanças no processo, substituição de EPI/EPC ou troca de função.</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">LP (NR-16) - Laudo de Periculosidade</h3>
        <div class="document-content">
          <h4>Detalhes Técnicos:</h4>
          <ul>
            <li><strong>Validade Padrão:</strong> Sem prazo fixo, atualizado conforme necessidade.</li>
            <li><strong>Quando Elaborar:</strong> Ao iniciar atividades com inflamáveis, explosivos, eletricidade, radiação ionizante ou segurança armada.</li>
            <li><strong>Renovação Obrigatória:</strong> Quando houver mudança de atividade ou risco.</li>
            <li><strong>Quando Revisar:</strong> Após modificações na área de risco ou mudança de função.</li>
          </ul>
        </div>
      </div>

    <style>
      .welcome-banner {
        background: #e3f2fd;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
        transition: background-color 0.3s ease;
      }
      .welcome-banner:hover {
        background: #bbdefb;
      }

      .concept-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: 15px 0;
        transition: transform 0.2s ease;
      }
      .concept-card:hover {
        transform: translateY(-5px);
      }

      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
        transition: box-shadow 0.3s ease;
      }
      .document-card:hover {
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
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
        transition: border-color 0.3s ease;
      }
      .image-placeholder:hover {
        border-color: #2196F3;
      }

      ul li {
        margin-bottom: 10px;
        position: relative;
        padding-left: 20px;
      }
      ul li:before {
        content: "•";
        position: absolute;
        left: 0;
        color: #2196F3;
        font-size: 1.2em;
      }
    </style>
  `
},

{
  id: 'rat-risco-acidente-trabalho',
  title: 'RAT - Risco Acidente de Trabaho: Legislação e Enquadramento',
  description: 'Guia completo sobre o RAT, alíquotas, legislação e enquadramento previdenciário.',
  group: 'Gerenciamento de Riscos',
  content: `
<div class="welcome-banner">
  <h1>Entendendo o RAT - Risco Acidente de Trabalho</h1>
  <p>Este guia explica o conceito, legislação e aplicação prática do RAT no contexto previdenciário e de segurança do trabalho.</p>
</div>

<section class="core-concepts">
  <h2>O Que é o RAT (Risco Acidente de Trabalho)?</h2>
  <div class="concept-card">
    <p>O RAT representa a contribuição da empresa, prevista no inciso II do artigo 22 da Lei 8212/91, e consiste em percentual que mede o risco da atividade econômica.</p>
    <p>Com base neste percentual, é cobrada a contribuição para financiar os benefícios previdenciários decorrentes do grau de incidência de incapacidade laborativa (GIIL-RAT).</p>
  </div>

<section class="nr-overview">
  <h2>Alíquotas do RAT e Sua Aplicação</h2>
  
  <div class="grid-container">
    <div class="nr-card hover-effect">
      <h3>1%</h3>
      <p>Atividades de Risco Mínimo</p>
      <p class="nr-desc">Aplicável a atividades econômicas com baixo potencial de acidentes de trabalho.</p>
    </div>
    
    <div class="nr-card hover-effect">
      <h3>2%</h3>
      <p>Atividades de Risco Médio</p>
      <p class="nr-desc">Para atividades com potencial moderado de ocorrência de acidentes de trabalho.</p>
    </div>
    
    <div class="nr-card hover-effect">
      <h3>3%</h3>
      <p>Atividades de Risco Grave</p>
      <p class="nr-desc">Aplicável a atividades com alto potencial de acidentes e doenças ocupacionais.</p>
    </div>
  </div>

  <div class="warning-box">
    <h4>Atenção:</h4>
    <p>Havendo exposição do trabalhador a agentes nocivos que permitam a concessão de aposentadoria especial, há acréscimo das alíquotas na forma da legislação em vigor. Além disso, é importante ressaltar que a Contabilidade, o RH ou a Folha serão responsáveis por essa questão do vínculo do funcionário à plataforma do eSocial. Esse procedimento deverá ser realizado primeiro, para que os eventos de SST possam ser enviados.</p>
  </div>
</section>

<section class="documents-section">
  <h2>Variações nas Alíquotas do RAT</h2>
  
  <div class="document-card hover-effect">
    <h3 class="document-title">Redução de Até 50%</h3>
    <div class="document-content">
      <p>O percentual de 1%, 2% ou 3% poderá ser reduzido em até cinquenta por cento conforme regulamento.</p>
      
      <h4>Critérios para Redução:</h4>
      <ul class="bullet-list">
        <li>Bom desempenho da empresa em relação à respectiva atividade econômica</li>
        <li>Índices positivos de frequência, gravidade e custo de acidentes</li>
        <li>Implementação eficaz de programas de prevenção de acidentes</li>
      </ul>
    </div>
  </div>

  <div class="document-card hover-effect">
    <h3 class="document-title">Aumento de Até 100%</h3>
    <div class="document-content">
      <p>O percentual pode ser aumentado em até cem por cento conforme regulamento.</p>
      
      <h4>Motivos para Aumento:</h4>
      <ul class="bullet-list">
        <li>Desempenho insatisfatório em segurança do trabalho</li>
        <li>Altos índices de acidentes na empresa</li>
        <li>Falta de implementação de medidas de proteção adequadas</li>
      </ul>
      
      <p class="note-text">Os índices são calculados segundo metodologia aprovada pelo Conselho Nacional de Previdência Social.</p>
    </div>
  </div>
</section>

<section class="legislation-section">
  <h2>Legislação Aplicável ao RAT</h2>
  
  <div class="legislation-card hover-effect">
    <h3 class="legislation-period">Fato gerador da contribuição até: 31/12/09</h3>
    <div class="legislation-content">
      <h4>Legislação:</h4>
      <p>Anexo V do RPS, alterado pelo Decreto nº 6.042, de 12 de fevereiro de 2007</p>
      
      <h4>Fonte:</h4>
      <p><a href="http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/decreto/d6042.htm" target="_blank">http://www.planalto.gov.br/ccivil_03/_ato2007-2010/2007/decreto/d6042.htm</a></p>
    </div>
  </div>

  <div class="legislation-card hover-effect">
    <h3 class="legislation-period">Fato gerador da contribuição a partir de: 01/01/10</h3>
    <div class="legislation-content">
      <h4>Legislação:</h4>
      <p>Anexo V do RPS, alterado pelo Decreto nº 6.957, de 9 de setembro de 2009</p>
      
      <h4>Fonte:</h4>
      <p><a href="http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2009/Decreto/D6957.htm" target="_blank">http://www.planalto.gov.br/ccivil_03/_Ato2007-2010/2009/Decreto/D6957.htm</a></p>
    </div>
  </div>
</section>

<section class="calculation-section">
  <h2>Base de Cálculo do RAT</h2>
  
  <div class="calculation-card hover-effect">
    <h3>Incide sobre:</h3>
    <ul class="bullet-list">
      <li>Total da remuneração paga</li>
      <li>Remuneração devida</li>
      <li>Remuneração creditada a qualquer título</li>
    </ul>
    <p class="note-text">No decorrer do mês, aos segurados empregados e trabalhadores avulsos.</p>
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
  
  .nr-card, .event-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .nr-card:hover, .event-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .nr-desc {
    font-size: 0.9em;
    color: #555;
    margin-top: 10px;
  }
  
  .document-card, .legislation-card, .calculation-card {
    background: white;
    padding: 0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .document-card:hover, .legislation-card:hover, .calculation-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .document-title, .legislation-period {
    background: #f5f5f5;
    padding: 18px;
    margin: 0;
    font-size: 1.2em;
    border-bottom: 1px solid #e0e0e0;
  }
  
  .document-content, .legislation-content {
    padding: 25px;
  }
  
  .document-content h4, .legislation-content h4 {
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
  
  .warning-box {
    border-left: 4px solid #ff9800;
    background-color: #fff8e1;
    padding: 15px;
    margin: 20px 0;
  }
  
  .bullet-list {
    list-style-type: disc;
    padding-left: 20px;
    margin: 15px 0;
  }
  
  .bullet-list li {
    margin-bottom: 8px;
    transition: color 0.2s ease;
  }
  
  .bullet-list li:hover {
    color: #2196F3;
  }
  
  .note-text {
    font-style: italic;
    color: #666;
    margin-top: 15px;
  }
  
  .hover-effect {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .hover-effect:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
</style>
`
},
{
  id: 'erros-impressao-pgr-formatacao',
  title: 'Erros na Impressão do PGR: Solução para Problemas de Formatação',
  description: 'Guia completo para solucionar problemas de impressão no PGR, PCMSO, LTCAT e outros documentos causados por formatação incorreta de texto.',
  group: 'Erros',
  content: `
<div class="welcome-banner">
  <h1>Resolução de Erros na Impressão de Documentos</h1>
  <p>Este guia aborda os problemas mais comuns de formatação que causam erros na geração de documentos do Gerenciamento de Riscos e suas soluções.</p>
</div>

<section class="core-concepts">
  <h2>Problemas Comuns de Formatação em Documentos</h2>
  <div class="concept-card">
    <p>Erros ao imprimir documentos como PGR, PCMSO, LTCAT, LI NR-15 e LP NR-16 geralmente estão relacionados a:</p>
    <ul class="bullet-list">
      <li>Formatação herdada de textos copiados de outras fontes</li>
      <li>CEP não vinculado à unidade ou informado de forma incorreta.</li>
      <li>Uso incorreto de negrito e itálico</li>
      <li>Espaçamentos e quebras de linha excessivas</li>
      <li>Caracteres especiais não reconhecidos pelo sistema</li>
    </ul>
  </div>

  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Gerenciamentoderiscos/Erro na impressão do PGR/Screenshot_1.png">
  </div>
</section>

<section class="troubleshooting-section">
  <h2>Sondagem Inicial para Identificação do Problema</h2>
  
  <div class="document-card hover-effect">
    <h3 class="document-title">Questionamentos Iniciais ao Cliente</h3>
    <div class="document-content">
      <p>Antes de iniciar a análise técnica, é importante levantar informações com o cliente:</p>
      
      <h4>Perguntas-Chave:</h4>
      <ul class="bullet-list">
        <li>Esse erro acontece em outras empresas ou estabelecimentos?</li>
        <li>Em qual empresa específica o erro ocorre?</li>
        <li>O erro acontece apenas com uma Área de Atuação específica na Documentação?</li>
        <li>Ocorre na geração de um único documento ou em vários?</li>
        <li>O caso se refere a uma revisão, implementação ou renovação?</li>
      </ul>
    </div>
  </div>
</section>

<section class="analysis-section">
  <h2>Análise Técnica Passo a Passo</h2>
  
  <div class="step-by-step">
    <div class="step hover-effect">
      <h4>Passo 1: Acessar a Empresa</h4>
      <p>Tente gerar o documento para confirmar a ocorrência do erro.</p>
    </div>
    
    <div class="step hover-effect">
      <h4>Passo 2: Verificar Escopo do Problema</h4>
      <p>Identifique se o erro ocorre em um único documento ou em vários, e se está relacionado a revisões.</p>
    </div>
    
    <div class="step hover-effect">
      <h4>Passo 3: Navegar até a Área de Atuação</h4>
      <p>Acesse: Menu → Configurações → Configurações Gerais → Documentação</p>
      <p>Desative todos os tópicos relacionados à área de atuação problemática.</p>
    </div>
    
    <div class="step hover-effect">
      <h4>Passo 4: Testar Novamente</h4>
      <p>Tente gerar o documento novamente. Se o erro persistir, desconsidere os próximos passos.</p>
    </div>
    
    <div class="step hover-effect">
      <h4>Passo 5: Identificação do Tópico Problemático</h4>
      <p>Ative os tópicos dois por vez, testando a geração do documento após cada ativação.</p>
      <p class="note-text">Recomenda-se anotar os tópicos ativados para não se perder durante os testes.</p>
    </div>
    
    <div class="step hover-effect">
      <h4>Passo 6: Correção da Formatação</h4>
      <p>Após identificar o tópico problemático, instrua o cliente a limpar a formatação usando a ferramenta "Remover Estilo de Fonte".</p>
    </div>
  </div>

  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Gerenciamentoderiscos/Erro na impressão do PGR/Screenshot_2.png">
  </div>
</section>

<section class="formatting-section">
  <h2>Problemas Específicos de Formatação</h2>
  
  <div class="grid-container">
    <div class="nr-card hover-effect">
      <h3>Texto com Estilo de Fonte</h3>
      <p>Formatações herdadas de outras fontes</p>
      <p class="nr-desc">Textos copiados de portais ou documentos externos trazem formatações invisíveis que causam erros.</p>
    </div>
    
    <div class="nr-card hover-effect">
      <h3>Espaços em Negrito</h3>
      <p>Espaços entre palavras formatados em negrito</p>
      <p class="nr-desc">Quando o espaço entre palavras também está em negrito (ex: "Texto&nbsp;&nbsp;com&nbsp;&nbsp;espaços"), ocorrem erros.</p>
    </div>
    
    <div class="nr-card hover-effect">
      <h3>Quebras de Linha</h3>
      <p>Excesso de espaçamentos e quebras</p>
      <p class="nr-desc">Muitas quebras de linha consecutivas ou espaçamentos excessivos podem causar falhas na renderização.</p>
    </div>
  </div>
  
  <div class="warning-box">
    <h4>Exemplo de Erro Comum</h4>
    <p>Um texto copiado de um portal do eSocial com diferentes formatações pode causar o erro:</p>
    <p class="code-example">ArgumentOutOfRangeException: Index was out of range. Must be non-negative and less than the size of the collection. (Parameter 'index')</p>
  </div>
</section>

<section class="solutions-section">
  <h2>Soluções para Problemas de Formatação</h2>
  
  <div class="document-card hover-effect">
    <h3 class="document-title">Remover Estilo de Fonte</h3>
    <div class="document-content">
      <p>A função "Remover Estilo de Fonte" elimina formatações como negrito, itálico, cores e tamanhos diferentes.</p>

       <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Gerenciamentoderiscos/Erro na impressão do PGR/Screenshot_3.png">
  </div>
</section>
      
      <h4>Como usar:</h4>
      <ol class="bullet-list">
        <li>Selecione todo o texto problemático</li>
        <li>Clique no ícone "Remover Estilo de Fonte" no editor</li>
        <li>Reformate o texto usando apenas as ferramentas do editor do sistema</li>
      </ol>
    </div>
  </div>

  <div class="document-card hover-effect">
    <h3 class="document-title">Usar Bloco de Notas como Intermediário</h3>
    <div class="document-content">
      <p>Quando a função "Remover Estilo de Fonte" não for suficiente:</p>
      
      <h4>Processo Recomendado:</h4>
      <ul class="bullet-list">
        <li>Cole o texto primeiro no Bloco de Notas (Notepad)</li>
        <li>O Bloco de Notas converte completamente qualquer formatação</li>
        <li>Copia o texto do Bloco de Notas e cole no sistema</li>
        <li>Formate o texto usando as ferramentas do editor do sistema</li>
      </ul>
    </div>
  </div>

<section class="client-support-section">
  <h2>Suporte ao Cliente</h2>
  
  <div class="document-card hover-effect">
    <h3 class="document-title">Para Clientes com Conhecimento Técnico</h3>
    <div class="document-content">
      <p>Envie documentação explicativa detalhando:</p>
      <ul class="bullet-list">
        <li>O motivo do erro relacionado à formatação</li>
        <li>Passo a passo para correção</li>
        <li>Exemplos antes e depois da correção</li>
        <li>Prevenção para casos futuros</li>
      </ul>
    </div>
  </div>

  <div class="document-card hover-effect">
    <h3 class="document-title">Para Clientes sem Conhecimento Técnico</h3>
    <div class="document-content">
      <p>Siga este protocolo de atendimento:</p>
      
      <h4>Passo a Passo de Atendimento:</h4>
      <ol class="bullet-list">
        <li>Informe ao cliente que a causa do erro foi identificada</li>
        <li>Solicite acesso remoto (AnyDesk) para demonstrar a solução</li>
        <li>Explique visualmente o problema e a solução</li>
        <li>Oriente o cliente a:
          <ul>
            <li>Selecionar todo o texto no tópico problemático</li>
            <li>Clicar no ícone "Remover Estilo de Fonte"</li>
            <li>Reformatar o texto usando as ferramentas do editor</li>
          </ul>
        </li>
      </ol>
    </div>
  </div>
<section class="prevention-section">
  <h2>Prevenção de Problemas Futuros</h2>
  
  <div class="prevention-grid">
    <div class="prevention-card hover-effect">
      <h4>Boas Práticas de Formatação</h4>
      <ul class="bullet-list">
        <li>Evitar copiar texto diretamente de outras fontes</li>
        <li>Usar sempre o Bloco de Notas como intermediário</li>
        <li>Formatar texto apenas com as ferramentas do sistema</li>
        <li>Verificar espaços entre palavras ao usar negrito</li>
      </ul>
    </div>
    
    <div class="prevention-card hover-effect">
      <h4>Verificações Regulares</h4>
      <ul class="bullet-list">
        <li>Testar a geração de documentos após edições</li>
        <li>Revisar textos copiados de fontes externas</li>
        <li>Manter documentação padronizada</li>
        <li>Treinar equipe nas boas práticas de formatação</li>
      </ul>
    </div>
  </div>
  
  <div class="warning-box">
    <h4>Observação Importante</h4>
    <p>Este mesmo erro pode ocorrer em qualquer campo de "Inserção de Texto" do sistema, não apenas na Documentação do Gerenciamento de Riscos.</p>
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
  
  .bullet-list {
    list-style-type: disc;
    padding-left: 20px;
    margin: 15px 0;
  }
  
  .bullet-list li {
    margin-bottom: 8px;
    transition: color 0.2s ease;
  }
  
  .bullet-list li:hover {
    color: #2196F3;
  }
  
  .grid-container, .prevention-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .nr-card, .prevention-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .nr-card:hover, .prevention-card:hover {
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
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .document-card:hover {
    transform: translateY(-5px);
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
  
  .warning-box {
    border-left: 4px solid #ff9800;
    background-color: #fff8e1;
    padding: 15px;
    margin: 20px 0;
  }
  
  .step-by-step .step {
    background: #e8f5e9;
    padding: 15px;
    margin: 10px 0;
    border-left: 4px solid #4caf50;
    border-radius: 4px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .step-by-step .step:hover {
    transform: translateX(5px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .code-example {
    background: #f5f5f5;
    padding: 10px;
    border-radius: 4px;
    font-family: monospace;
    margin: 10px 0;
  }
  
  .note-text {
    font-style: italic;
    color: #666;
    margin-top: 10px;
  }
  
  .hover-effect {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .hover-effect:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
</style>
`
},



    
  ]

};