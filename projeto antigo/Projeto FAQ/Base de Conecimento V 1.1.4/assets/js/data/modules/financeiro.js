const financeiro = {
    id: 'financeiro',
    title: 'Financeiro e Faturamento',
    description: 'Este módulo tem como objetivo apoiar o processo de solução de problemas relacionados a processos financeiros e de faturamento.',
    icon: ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
    <path fill="currentColor" d="M19.72 10.47a11.65 11.65 0 0 0-6.31.52a.8.8 0 1 0 .59 1.49a10.11 10.11 0 0 1 5.44-.48a.8.8 0 1 0 .28-1.57Z" class="clr-i-outline clr-i-outline-path-1"/>
    <circle cx="25.38" cy="16.71" r="1.36" fill="currentColor" class="clr-i-outline clr-i-outline-path-2"/>
    <path fill="currentColor" d="M35.51 18.63a1 1 0 0 0-.84-.44a3.42 3.42 0 0 1-2.09-1.12a17.35 17.35 0 0 1-2.63-3.78l2.88-4.5A1.89 1.89 0 0 0 33 7a1.77 1.77 0 0 0-1.33-1a10.12 10.12 0 0 0-5.39.75a12.72 12.72 0 0 0-2.72 1.63a16.94 16.94 0 0 0-5.16-1.39C11.31 6.3 4.83 10.9 4 17a2.56 2.56 0 0 1-1.38-1.53a1.81 1.81 0 0 1 .14-1.4a1.19 1.19 0 0 1 .43-.43a1.08 1.08 0 0 0-1.12-1.85A3.31 3.31 0 0 0 .91 13a4 4 0 0 0-.33 3.08A4.76 4.76 0 0 0 3 18.95l.92.46a17.58 17.58 0 0 0 1.82 7l.17.38a23 23 0 0 0 3.29 5.09a1 1 0 0 0 .75.34h4.52a1 1 0 0 0 .92-1.38l-.39-.9l1.18.13a20.33 20.33 0 0 0 4 0c.37.6.77 1.2 1.21 1.79a1 1 0 0 0 .8.41h4.34a1 1 0 0 0 .92-1.39c-.17-.4-.34-.83-.47-1.2c-.18-.53-.32-1-.43-1.45A13.18 13.18 0 0 0 29.56 26a12.5 12.5 0 0 0 3 0a1 1 0 0 0 .78-.62l2.26-5.81a1 1 0 0 0-.09-.94Zm-3.78 5.44a11.37 11.37 0 0 1-2.35-.11a8.2 8.2 0 0 1-2.53-.87a1 1 0 0 0-.93 1.77a11.72 11.72 0 0 0 1.29.58a8 8 0 0 1-1.8 1.16l-1.06.48s.49 2.19.82 3.16h-2.38c-.24-.34-1.45-2.36-1.45-2.36l-.67.09a18.53 18.53 0 0 1-4.25.12c-.66-.06-1.76-.2-2.62-.35l-1.55-.27s.63 2.43.75 2.74h-2.58A20.57 20.57 0 0 1 7.76 26l-.18-.39A14.62 14.62 0 0 1 6 17.48c.54-5.19 6.12-9.11 12.19-8.54a15.47 15.47 0 0 1 5.08 1.48l.62.29l.5-.47A10.29 10.29 0 0 1 27 8.54a8.25 8.25 0 0 1 4-.65l-3.38 5.29l.25.5a21.16 21.16 0 0 0 3.31 4.84a6.49 6.49 0 0 0 2.14 1.39Z" class="clr-i-outline clr-i-outline-path-3"/>
    <path fill="none" d="M0 0h36v36H0z"/>
</svg>`,
    topics: [

      {
  id: 'parametros-financeiros',
  title: 'Parâmetros Comuns do Financeiro',
  description: 'Configurações de cobrança, exames, contratos e serviços adicionais no módulo financeiro do sistema.',
tags: ['Empresas'],
  group: 'Financeiro',
  content: `
<div class="welcome-banner">
  <h1>Bem-vindo ao Módulo Financeiro!</h1>
  <p>Este guia apresenta os principais parâmetros e configurações do sistema financeiro para gestão de cobranças, exames e contratos.</p>
</div>

<section class="core-concepts">
  <h2>Parâmetros de Cobrança de Exames</h2>
  
  <div class="grid-container">
    <div class="param-card">
      <h3>Sem Resultado</h3>
      <div class="param-content">
        <p>O sistema fatura com base na data de atendimento (data de cadastro), independente da realização do exame.</p>
      </div>
    </div>
    
    <div class="param-card">
      <h3>Todos com Resultado</h3>
      <div class="param-content">
        <p>O sistema fatura com base na data de realização do exame. Se o procedimento foi cadastrado em 15/06 mas realizado em 02/07, entrará na cobrança de julho.</p>
      </div>
    </div>
    
    <div class="param-card">
      <h3>Todos com Resultado -- Liberado</h3>
      <div class="param-content">
        <p>Funciona como "Todos com Resultado", mas depende do ASO estar liberado. A data de realização do atendimento define o período de cobrança.</p>
      </div>
    </div>
  </div>
  

</section>

<section class="cobranca-section">
  <h2>Tipos de Cobrança</h2>
  
  <div class="document-card">
    <h3 class="document-title">Per Capta</h3>
    <div class="document-content">
      <p>Cobrança baseada em todas as vidas ativas da empresa (funcionários ativos).</p>
      
      <h4>Configurações Adicionais:</h4>
      <ul>
        <li><strong>Cobrar Funcionários Demitidos:</strong> Parâmetro que deve ser marcado se desejar incluir demitidos na cobrança</li>
        <li><strong>Não Cobrar:</strong> Opção no cadastro do funcionário para excluí-lo da cobrança</li>
        <li><strong>Exames Clínicos:</strong> Entram como "Coberto" por padrão, mas podem ser configurados como "Cobrado à parte"</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">Tabela de Desconto</h3>
    <div class="document-content">
      <h4>Funcionário:</h4>
      <p>Valor multiplicado pela quantidade de funcionários (ex: R$ 162,50 × 10 funcionários)</p>
      
      <h4>Pacote:</h4>
      <p>Cobrança até X funcionários por valor fixo. Opção "Adicionar Excedente na Cobrança" para funcionários além do limite.</p>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">Atendimentos</h3>
    <div class="document-content">
      <p>Cobrança baseada apenas nos atendimentos lançados no sistema.</p>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">Valor Consulta Médica</h3>
    <div class="document-content">
      <p>Sem vínculo com Exame Clínico Ocupacional. Utilizado para consultas rotineiras ou monitoração pontual.</p>
    </div>
  </div>
</section>

<section class="configuracoes-section">
  <h2>Configurações Adicionais de Cobrança</h2>
  
  <div class="grid-container">
    <div class="config-card">
      <h3>Carência na Cobrança</h3>
      <div class="config-content">
        <p>Permite estender o tempo de cobrança após demissão (ex: cobrar mais 3 meses após demissão).</p>
      </div>
    </div>
    
    <div class="config-card">
      <h3>Quantidade Mínima de Funcionários</h3>
      <div class="config-content">
        <p>Só realiza cobrança a partir do número X de vidas ativas configurado.</p>
        <div class="warning-box">
          <p><strong>Observação:</strong> Este campo não tem vínculo com o campo "Quantidade Funcionários". O sistema utiliza apenas o número de vidas ativas cadastradas.</p>
        </div>
      </div>
    </div>
    
    <div class="config-card">
      <h3>Periodicidade de Cobrança</h3>
      <div class="config-content">
        <p>Frequência de faturamento da empresa:</p>
        <ul>
          <li>Mensalmente (uma vez ao mês)</li>
          <li>Semestralmente (uma vez a cada seis meses)</li>
          <li>Personalizado (período determinado pela empresa)</li>
        </ul>
      </div>
    </div>
  </div>
  

</section>

<section class="exames-section">
  <h2>Configurações de Exames</h2>
  
  <div class="document-card">
    <h3 class="document-title">Exames Médicos Pré-Pagos</h3>
    <div class="document-content">
      <p>Utilizado para contratos com pacotes de exames clínicos pré-determinados.</p>
      
      <h4>Funcionalidades:</h4>
      <ul>
        <li>Parametrização do número total de exames</li>
        <li>Opção de acumulação por mês</li>
        <li>Controle de quantidade restante e já realizados</li>
        <li>Gestão do período de vigência</li>
      </ul>
      
      <div class="warning-box">
        <p><strong>Importante:</strong> Todo tipo de pacote pré-pago deve ser parametrizado antes da realização dos exames.</p>
      </div>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">Exames Médicos por Credenciada</h3>
    <div class="document-content">
      <p>Criação de tabela individual com valores específicos para cada credenciada.</p>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">Exames Complementares</h3>
    <div class="document-content">
      <p>Tabela individual para cada exame complementar, tanto para laboratórios quanto para exames realizados na clínica.</p>
      
      <h4>Funcionalidades:</h4>
      <ul>
        <li>Criação de pacotes pré-pagos para exames complementares</li>
        <li>Configuração de quantidade de exames no pacote</li>
        <li>Opção de acumulação</li>
      </ul>
    </div>
  </div>
</section>

<section class="servicos-section">
  <h2>Serviços Adicionais - Contrato</h2>
  
  <div class="document-card">
    <div class="document-content">
      <p>Cobrança de serviços além dos exames (NRs, acordos contratuais, adendos, etc.).</p>
      
      <h4>Tipos de Cobrança:</h4>
      <div class="grid-container">
        <div class="service-card">
          <h5>Coberto no Contrato</h5>
          <p>Serviço incluído como cortesia, sem cobrança adicional.</p>
        </div>
        
        <div class="service-card">
          <h5>Per Capta</h5>
          <p>Valor multiplicado pelo total de vidas ativas da empresa.</p>
        </div>
        
        <div class="service-card">
          <h5>Valor Fechado</h5>
          <p>Mensalidade fixa cobrada todo mês.</p>
        </div>
        
        <div class="service-card">
          <h5>Anual</h5>
          <p>Cobrança realizada uma vez por ano, no mês determinado por parâmetro.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="parametros-section">
  <h2>Parâmetros de Faturamento - Contrato</h2>
  
  <div class="document-card">
    <div class="document-content">
      <p>Parametrização da unidade responsável pela cobrança mensal de:</p>
      <ul>
        <li>Serviços Médicos Ocupacionais</li>
        <li>Serviços Adicionais</li>
      </ul>
      <p>Cada contrato pode ser faturado através de uma unidade específica.</p>
    </div>
  </div>
</section>

<section class="contrato-section">
  <h2>Gestão de Contratos</h2>
  
  <div class="grid-container">
    <div class="contract-card">
      <h3>Contrato Digitalizado</h3>
      <div class="contract-content">
        <p>Área para arquivamento de documentos contratuais referentes à empresa.</p>
      </div>
    </div>
    
    <div class="contract-card">
      <h3>Complementos - Contrato</h3>
      <div class="contract-content">
        <p>Funcionalidades adicionais:</p>
        <ul>
          <li>Apontamento do vendedor responsável</li>
          <li>Reajuste manual do contrato</li>
          <li>Configuração de reajuste automático por base do sistema</li>
          <li>Registro do usuário que parametrizou o contrato</li>
        </ul>
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
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .param-card, .config-card, .contract-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .param-card:hover, .config-card:hover, .contract-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .service-card {
    background: #f5f5f5;
    padding: 15px;
    border-radius: 6px;
    border-left: 3px solid #4caf50;
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
  
  .warning-box {
    border-left: 4px solid #ff9800;
    background-color: #fff8e1;
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
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
    transition: background-color 0.2s ease;
  }
  
  li:hover {
    background-color: #f5f5f5;
  }
</style>
`
},
        {
  id: 'cnab-remessa-retorno',
  title: 'CNAB - Remessa e Retorno: Guia Completo para Geração e Processamento',
  description: 'Aprenda a gerar remessas CNAB e processar retornos para boletos bancários, com detalhes sobre layouts 240 e 400.',
  tags: ['Empresas', 'Introdução'],
  group: 'Financeiro',
  content: `
<div class="welcome-banner">
  <h1>Bem-vindo ao Módulo CNAB!</h1>
  <p>Este guia apresenta o processo completo de geração de remessas e processamento de retornos CNAB para cobrança bancária em nosso sistema.</p>
</div>

<section class="core-concepts">
  <h2>O Que é o Arquivo CNAB?</h2>
  <div class="concept-card">
    <p>O <strong>CNAB (Centro Nacional de Automação Bancária)</strong> é um arquivo de texto usado para encaminhar instruções de cobrança de uma empresa para um banco, contendo:</p>
    <ul>
      <li>Dados do cliente</li>
      <li>Valor e vencimento do boleto</li>
      <li>Instruções (multa, juros, desconto)</li>
      <li>Número do documento</li>
      <li>Código da empresa no banco</li>
    </ul>
    <p>Estas informações validam os boletos criados no sistema, permitindo que sejam pagos e estejam prontos para cobrança.</p>
  </div>

  <div class="image-placeholder">
     <img src="assets/IMG/Artigos/Financeiro e faturamento/CNAB/Screenshot_1.png">
  </div>
</section>

<section class="layout-section">
  <h2>Layouts CNAB</h2>
  <p>A remessa CNAB possui dois tipos de layouts que variam conforme bancos e contas bancárias:</p>
  
  <div class="grid-container">
    <div class="layout-card">
      <h3>Layout 400</h3>
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/CNAB/Screenshot_2.png">
      </div>
      <p class="layout-desc">Layout com até 400 posições (linhas) no arquivo.</p>
    </div>
    
    <div class="layout-card">
      <h3>Layout 240</h3>
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/CNAB/Screenshot_3.png">
      </div>
      <p class="layout-desc">Layout com até 240 posições (linhas) no arquivo.</p>
    </div>
  </div>
  
  <div class="warning-box">
    <h4>Importante</h4>
    <p>A diferença entre esses layouts é a quantidade de posições dentro do arquivo, sendo crucial identificá-los corretamente para evitar complicações no processamento.</p>
  </div>
</section>

<section class="remessa-generation">
  <h2>Geração de Remessa CNAB</h2>
  
  <div class="step-by-step">
    <div class="step">
      <h3>Passo 1: Pré-requisitos</h3>
      <p>É necessário ter um título no Contas a Receber (pedido faturado ou faturamento de contrato) com status "Em carteira".</p>
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/CNAB/Screenshot_4.png">
      </div>
    </div>
    
    <div class="step">
      <h3>Passo 2: Acessar o Módulo de Geração</h3>
      <p>Direcione-se ao módulo de geração de remessa CNAB e utilize os filtros para localizar o título desejado.</p>
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/CNAB/Screenshot_5.png">
      </div>
    </div>
    
    <div class="step">
      <h3>Passo 3: Gerar Remessa</h3>
      <p>Após verificar se o título correto está selecionado, clique em "Gerar Remessa" para criar o arquivo de texto.</p>
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/CNAB/Screenshot_6.png">
      </div>
    </div>
    
    <div class="step">
      <h3>Passo 4: Download e Envio ao Banco</h3>
      <p>Faça o download do arquivo gerado e encaminhe-o para o banco. Após processamento, o boleto ficará disponível para pagamento.</p>
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/CNAB/Screenshot_7.png">
      </div>
    </div>
  </div>
  
  <div class="info-box">
    <h4>Onde Gerar o Boleto</h4>
    <p>O boleto pode ser gerado tanto no módulo de boletos em lote quanto no próprio Contas a Receber.</p>
  </div>
</section>

<section class="retorno-section">
  <h2>Retorno CNAB</h2>
  
  <div class="concept-card">
    <p>O <strong>Retorno CNAB</strong> é um arquivo disponibilizado pelo banco para confirmar operações de boletos, como:</p>
    <ul>
      <li>Entrada confirmada</li>
      <li>Entrada rejeitada</li>
      <li>Alterações de dados</li>
      <li>Diversas outras operações</li>
    </ul>
  </div>
  
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Financeiro e faturamento/CNAB/Screenshot_8.png">
  </div>
  
  <h3>Processamento do Retorno CNAB</h3>
  <p>O processamento do arquivo de retorno no sistema permite alterar o status do título no Contas a Receber (ex: para "Em cartório") ou no movimento financeiro (se liquidado).</p>
  
  <div class="step-by-step">
    <div class="step">
      <h4>Passo a Passo: Processar Retorno</h4>
      <ol>
        <li>Acesse o módulo Financeiro e navegue até a aba "Retorno CNAB"</li>
        <li>Selecione a conta bancária correspondente à remessa</li>
        <li>Selecione o arquivo de retorno a ser processado</li>
      </ol>
    </div>
  </div>
  
  <!--<div class="image-placeholder">
    <p>[Imagem: Tela de processamento de retorno CNAB]</p>
  </div>-->
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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .layout-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .layout-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .layout-desc {
    font-size: 0.9em;
    color: #555;
    margin-top: 10px;
  }
  
  .step-by-step .step {
    background: #e8f5e9;
    padding: 20px;
    margin: 15px 0;
    border-left: 4px solid #4caf50;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  .step-by-step .step:hover {
    background: #d4edda;
  }
  
  .warning-box {
    border-left: 4px solid #ff9800;
    background-color: #fff8e1;
    padding: 15px;
    margin: 20px 0;
  }
  
  .info-box {
    border-left: 4px solid #2196F3;
    background-color: #e3f2fd;
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
  
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  ol {
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 8px;
  }
</style>
`
},


{
  id: 'processo-faturamento-empresarial',
  title: 'Processo de Faturamento Empresarial',
  description: 'Manual completo sobre o processo de faturamento, incluindo parametrizações, tipos de faturamento e geração de documentos fiscais.',
  tags: ['Empresas'],
  group: 'Faturamento',
  content: `
<div class="welcome-banner">
  <h1>Bem-vindo ao Módulo de Faturamento!</h1>
  <p>Este guia foi criado para ajudar você a compreender todo o processo de faturamento da empresa, desde as parametrizações iniciais até a geração de documentos fiscais.</p>
</div>

<section class="core-concepts">
  <h2>O que é o Faturamento?</h2>
  <div class="concept-card">
    <p>Em resumo, o faturamento é um <strong>processo periódico</strong> onde todos os valores a serem cobrados dos clientes são analisados por meio de relatórios e demonstrativos (no caso de contratos).</p>
    <p>Após essa análise é feito o faturamento, no qual o sistema gera um boleto e uma RPS (Nota Fiscal) com os valores obtidos do relatório e demonstrativo.</p>
    
    <div class="alert-box">
      <h4>Atenção!</h4>
      <p>É crucial revisar tudo antes de faturar, pois não é possível voltar atrás após a confirmação.</p>
    </div>
    
    <h4>Tipos de Faturamento:</h4>
    <ul>
      <li><strong>Faturamento de Contratos</strong> - Para cobranças recorrentes baseadas em contratos</li>
      <li><strong>Faturamento de Pedidos de Vendas</strong> - Para vendas avulsas ou pontuais</li>
    </ul>
  </div>

  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Financeiro e faturamento/Faturamento/Screenshot_1.png">
  </div>
</section>

<section class="parametrizacao-section">
  <h2>Parametrizações Iniciais</h2>
  
  <div class="document-card">
    <h3 class="document-title">Unidades - Configuração de Impostos</h3>
    <div class="document-content">
      <p>Antes do faturamento em si, é necessário configurar os dados referentes aos impostos que serão cobrados.</p>
      
      <h4>Como acessar:</h4>
      <p>Menu >> Configurações >> Unidades >> Adm</p>
      
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/Faturamento/Screenshot_2.png">
      </div>
      
      <h4>Importante:</h4>
      <ul>
        <li>Alguns valores de impostos são preenchidos nessa aba Adm</li>
        <li>Atenção especial ao código de ISS que também precisa ser cadastrado</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">Empresas - Configuração Financeira</h3>
    <div class="document-content">
      <p>Para cada cliente, dependendo do município e tipo de empresa, os valores de impostos podem variar.</p>
      
      <h4>Como acessar:</h4>
      <p>Menu >> Cadastros >> Empresas >> Financeiro</p>
      
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/Faturamento/Screenshot_3.png">
      </div>
      
      <h4>Configurações importantes:</h4>
      <ul>
        <li>Impostos que serão cobrados para cada cliente</li>
        <li>Tipo de empresa</li>
        <li>Taxas administrativas da conta bancária (configurada no cadastro do Banco)</li>
      </ul>
    </div>
  </div>
</section>

<section class="faturamento-contrato">
  <h2>Faturamento de Contrato</h2>
  
  <div class="document-card">
    <h3 class="document-title">Parametrização do Contrato</h3>
    <div class="document-content">
      <p>É necessário primeiramente parametrizar o contrato do cliente no cadastro de Empresas.</p>
      
      <h4>Como acessar:</h4>
      <p>Empresas >> Financeiro >> Parametrizar Cobrança</p>
      
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/Faturamento/Screenshot_4.png">
      </div>
      
      <h4>Configurações importantes na aba "Parâmetros de Faturamento":</h4>
      <ul>
        <li>Unidade que vai faturar</li>
        <li>Conta bancária de recebimento do boleto</li>
        <li>Último mês de cobrança</li>
      </ul>
      
      <h4>Na aba Financeiro deve ser informado:</h4>
      <ul>
        <li>Dia de vencimento do boleto</li>
        <li>Dia do fechamento (o dia em que finaliza a cobrança de um mês e inicia uma nova)</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">Processo de Faturamento</h3>
    <div class="document-content">
      <h4>Como realizar o faturamento:</h4>
      <ol>
        <li>Acesse o Menu >> Faturamento >> Faturamento de Contrato</li>
        <li>Pesquise pela empresa e o período</li>
        <li>Gere o demonstrativo</li>
        <li>Compare com os relatórios:
          <ul>
            <li>Faturamento >> Relatório de Funcionários Para Cobrança</li>
            <li>Faturamento >> Relatório de Exames Para Cobrança</li>
          </ul>
        </li>
        <li>Se todos os dados estiverem corretos, realize o faturamento</li>
      </ol>
      
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/Faturamento/Screenshot_5.png">
      </div>
      
      <div class="note-box">
        <h4>Observação:</h4>
        <p>Para os pedidos parcelados, utilize o Menu >> Faturamento >> Faturamento de Notas Parciais.</p>
      </div>
    </div>
  </div>
</section>

<section class="faturamento-pedidos">
  <h2>Faturamento de Pedidos</h2>
  
  <div class="document-card">
    <h3 class="document-title">Processo de Faturamento de Pedidos</h3>
    <div class="document-content">
      <p>Para esse tipo de faturamento, é necessário que o pedido de venda seja aprovado previamente.</p>
      
      <h4>Fluxo do processo:</h4>
      <ol>
        <li>Pedido de venda realizado no Menu >> Comercial >> Pedidos</li>
        <li>Pedido é aprovado</li>
        <li>Pedido fica disponível para faturamento em Menu >> Faturamento >> Faturamento de Pedidos</li>
      </ol>
      
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Financeiro e faturamento/Faturamento/Screenshot_6.png">
      </div>
    </div>
  </div>
</section>

<section class="geracao-documentos">
  <h2>Geração de RPS e Remessa CNAB</h2>
  
  <div class="document-card">
    <h3 class="document-title">Processo Pós-Faturamento</h3>
    <div class="document-content">
      <p>Após a realização do faturamento, o sistema automaticamente gera:</p>
      <ul>
        <li><strong>Título (boleto)</strong> no Menu >> Financeiro >> Contas a Receber</li>
        <li><strong>Arquivos RPS e CNAB</strong> para serem gerados posteriormente</li>
      </ul>
      
      <h4>Geração dos arquivos:</h4>
      <ul>
        <li>RPS: Menu >> Faturamento >> Gerar NFS-e</li>
        <li>CNAB: Menu >> Financeiro >> Remessa CNAB</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">CNAB - Remessa Bancária</h3>
    <div class="document-content">
      <p>O arquivo CNAB será encaminhado ao banco para validação do título gerado pelo sistema.</p>
      
      <h4>Características do processo:</h4>
      <ul>
        <li>A remessa CNAB leva cerca de 1 dia para que o banco processe</li>
        <li>Após esse procedimento, pode processar o retorno em Menu >> Financeiro >> Retorno CNAB</li>
        <li>O sistema informa o status atual do título</li>
        <li>Caso esteja pago, dá baixa no boleto gerado no sistema</li>
      </ul>
    </div>
  </div>

  <div class="document-card">
    <h3 class="document-title">RPS - Nota Fiscal</h3>
    <div class="document-content">
      <p>O arquivo RPS será encaminhado para prefeitura com as informações preenchidas no sistema.</p>
      
      <h4>Características do processo:</h4>
      <ul>
        <li>Contém todas as informações preenchidas no sistema, incluindo impostos e valores</li>
        <li>Gera uma nota fiscal que será encaminhada automaticamente para o cliente</li>
      </ul>
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
  
  .alert-box {
    border-left: 4px solid #ff9800;
    background-color: #fff8e1;
    padding: 15px;
    margin: 20px 0;
  }
  
  .note-box {
    border-left: 4px solid #4caf50;
    background-color: #e8f5e9;
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
  
  ol {
    padding-left: 20px;
  }
</style>
`
},















        ]
};