 const problemas = {
  id: 'resolu-o-de-problemas',
  title: 'Resolução de problemas',
  description: 'Este módulo tem como objetivo apoiar o processo de solução de problemas.',
  icon: `<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="currentColor" d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.8-.6 1.8-.2 2.6c.4.7 1 1.2 1.7 1.3V16c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.7 4-4.4 4-7.5c0-5-4-9-9-9m1 14h-2v-2h2v2m0-4h-2V5h2"/>
</svg>`,
  topics: [
{
  id: 'resolucao-erros-s2240',
  title: 'Resolução de Erros no Evento S-2240 do eSocial',
  description: 'Guia completo para diagnóstico e correção de falhas no envio do evento S-2240, com foco em configurações de empresa, funcionário e preenchimento de campos obrigatórios.',
  group: 'eSocial',
tags: ['eSocial', 'Eventos','Erro', 'S-2240'],  
content: `
<div class="error-resolution-guide">
  <h1>Erros no Envio do Evento S-2240</h1>
  <p>Este guia detalha os pontos críticos para resolver inconsistências no envio do evento S-2240 referente às Condições do Ambiente de Trabalho, conforme documentação técnica.</p>
  <div class="error-summary">
    <p><strong>Erro principal:</strong> Informações obrigatórias não preenchidas corretamente ou em desacordo com requisitos do eSocial</p>
    <p><strong>Causas comuns:</strong> Dados inconsistentes, campos obrigatórios em branco, preenchimento incorreto</p>
  </div>
</div>

<section class="diagnostic-section">
  <h2>Perguntas para Diagnóstico</h2>
  <div class="diagnostic-card">
    <p>Responda estas perguntas para identificar o cenário do erro:</p>
    <ul>
      <li>• <strong>Funcionário relacionado:</strong> Identificar qual colaborador está associado ao evento com erro</li>
      <li>• <strong>Empresa vinculada:</strong> Verificar a qual organização pertence o funcionário</li>
      <li>• <strong>Escopo do erro:</strong> Ocorre apenas com este funcionário ou afeta múltiplos colaboradores?</li>
      <li>• <strong>Abrangência empresarial:</strong> O erro acontece apenas nesta empresa ou em várias organizações?</li>
      <li>• <strong>Universalidade:</strong> Acontece com envios de todas as empresas diferentes?</li>
    </ul>
    <div class="technical-note">
      <p><strong>Nota Técnica:</strong> Estas perguntas permitem identificar se o erro é pontual (dados específicos) ou sistêmico (configuração geral)</p>
    </div>
  </div>
</section>

<section class="company-config">
  <h2>Configurações na Empresa (Verificação Obrigatória)</h2>
  <div class="config-grid">
    <div class="config-card critical">
      <h3>Habilitado</h3>
      <p>• Deve estar marcado como <strong class="required">SIM</strong> para envio ao eSocial</p>
      <p>• Se configurado como "Não", os eventos <strong>não serão transmitidos</strong></p>
    </div>
    
    <div class="config-card">
      <h3>Ambiente</h3>
      <p>• <strong>Produção:</strong> Envio oficial ao ambiente do governo</p>
      <p>• <strong>Restrita (Teste):</strong> Ambiente de validação pré-produção (sem efeitos legais)</p>
      <div class="warning">
        <p>Configuração incorreta gera envios para ambiente errado</p>
      </div>
    </div>
    
    <div class="config-card">
      <h3>Método de Transmissão</h3>
      <p>• <strong>Manual:</strong> Envio direto pela empresa (controle total)</p>
      <p>• <strong>Automático A1:</strong> Uso de certificado digital para automação</p>
    </div>
    
    <div class="config-card">
      <h3>Responsabilidade</h3>
      <p>• <strong>Prestador SST:</strong> Clínica/Parceiro responsável pelo envio</p>
      <p>• <strong>Empregador:</strong> Cliente final assume responsabilidade</p>
      <p>• <strong>Contador:</strong> Empresa contábil responsável (método manual)</p>
    </div>
  </div>
  
  <div class="image-placeholder">
    <p>[Imagem 1: Configurações de empresa - Habilitado/Ambiente/Transmissão/Responsabilidade]</p>
  </div>
</section>

<section class="employee-config">
  <h2>Configurações no Funcionário (Campos Críticos)</h2>
  <div class="config-grid">
    <div class="config-card">
      <h3>TSVE sem Matrícula</h3>
      <p>• Obrigatório para categorias profissionais sem matrícula</p>
      <p>• Requer preenchimento do <strong>Código de Categoria do Trabalhador</strong></p>
    </div>
    
    <div class="config-card critical">
      <h3>S-2240 Habilitado</h3>
      <p>• Deve estar explicitamente marcado como <strong class="required">SIM</strong></p>
      <p>• Configuração como "Não" impede o envio do evento</p>
    </div>
    
    <div class="config-card critical">
      <h3>Registro de Admissão</h3>
      <p>• <strong>Obrigatório</strong> para processamento correto</p>
      <p>• Ausência gera erro de vínculo empregatício</p>
    </div>
  </div>
  
  <div class="image-placeholder">
    <p>[Imagem 2: Configurações de funcionário - TSVE/S-2240/Admissão]</p>
  </div>
  
  <div class="sub-section">
    <h3>Admissão do Funcionário</h3>
    <div class="config-card critical">
      <h4>Número de Matrícula</h4>
      <p>• Campo obrigatório transmitido ao eSocial</p>
      <p>• Deve corresponder ao registro oficial do governo</p>
    </div>
    <div class="image-placeholder">
      <p>[Imagem 3: Tela de admissão do funcionário (destaque para campo matrícula)]</p>
    </div>
  </div>
  
  <div class="sub-section">
    <h3>Ocupações Sede</h3>
    <div class="config-card critical">
      <h4>Data Início</h4>
      <p>• Data de início de ocupação enviada ao eSocial</p>
      <p>• <strong>Deve corresponder exatamente</strong> ao registro no eSocial</p>
      <div class="warning">
        <p>Divergência causa erro de RET ou falta de vínculo</p>
      </div>
    </div>
    <div class="image-placeholder">
      <p>[Imagem 4: Tela de ocupações sede (destaque para data início)]</p>
    </div>
  </div>
</section>

<section class="ppp-config">
  <h2>Lotações PPP (Preenchimento Obrigatório)</h2>
  <div class="config-grid">
    <div class="config-card">
      <h3>Código CBO</h3>
      <p>• Classificação ocupacional conforme tabela oficial</p>
      <p>• Consultar: <a href="http://www.mtecbo.gov.br/cbosite/pages/pesquisas/BuscaPorCodigo.jsf" target="_blank">MTE CBO</a></p>
      <p>• Atualização constante requer verificação periódica</p>
    </div>
    
    <div class="config-card">
      <h3>Código GFIP</h3>
      <p>• Informa exposição a agentes nocivos</p>
      <p>• Especifica tempo de exposição quando aplicável</p>
    </div>
    
    <div class="config-card critical">
      <h3>EPI/EPC</h3>
      <p>• <strong>Número do CA</strong> deve corresponder ao lote do produto</p>
      <p>• Inconsistências podem gerar multas</p>
      <p>• Dados de cadastro devem refletir situação real</p>
    </div>
    
    <div class="config-card critical">
      <h3>Responsáveis Técnicos</h3>
      <p>• Cadastro completo obrigatório</p>
      <p>• Informações incorretas impedem envio do evento</p>
      <p>• Deve conter: Nome completo, registro profissional, especialidade</p>
    </div>
  </div>
  
  <div class="additional-fields">
    <h4>Outros Campos Relevantes:</h4>
    <ul>
      <li>• <strong>Observações Ambientais:</strong> Transmitidas integralmente ao eSocial</li>
      <li>• <strong>Descrição de Atividade:</strong> Detalhamento das funções exercidas</li>
      <li>• <strong>Registro eSocial:</strong> Histórico de envios e erros ocorridos</li>
    </ul>
  </div>
  
  <div class="image-placeholder">
    <p>[Imagem 5: Tela de lotações PPP com todos os campos obrigatórios]</p>
  </div>
</section>

<section class="risk-factors">
  <h2>Exposição a Fatores de Risco (Campo Crítico)</h2>
  <div class="critical-card">
    <h3>Preenchimento Obrigatório</h3>
    <p>• Mesmo sem exposição, selecionar: <strong class="required">Ausência de fatores de risco</strong></p>
    <p>• Campo vazio gera erro de "Informações insuficientes para gerar XML"</p>
    
    <div class="config-grid">
      <div class="config-card">
        <h4>Código do Agente Nocivo</h4>
        <p>• Obrigatório quando há direito à aposentadoria especial</p>
        <p>• Consultar Tabela 24: <a href="https://www.gov.br/esocial/pt-br/documentacao-tecnica/manuais/leiautes-esocial-v-1-1-beta/tabelas.html#24" target="_blank">Agentes Nocivos - eSocial</a></p>
      </div>
      
      <div class="config-card critical">
        <h4>Número do CA</h4>
        <p>• Identificação única do EPI</p>
        <p>• Deve corresponder ao registro no Ministério do Trabalho</p>
        <p>• Essencial para rastreabilidade e validade</p>
      </div>
    </div>
    
    <div class="technical-note">
      <p><strong>Consequências de Inconsistência:</strong> Diferença entre número do CA cadastrado e utilizado na empresa pode gerar multas e penalidades</p>
    </div>
  </div>
  
  <div class="image-placeholder">
    <p>[Imagem 6: Tela de exposição a riscos com destaque para campos obrigatórios]</p>
  </div>
</section>

<section class="recurrent-errors">
  <h2>Ocorrências Recorrentes e Soluções</h2>
  
  <div class="error-card critical">
    <h3>Data de Ocupação ≠ Data de Admissão</h3>
    <p>• <strong>Erro resultante:</strong> RET ou falta de vínculo</p>
    <p>• <strong>Mensagem do sistema:</strong> "Dentro da data enviada, não havia cadastro do funcionário"</p>
    <p>• <strong>Solução:</strong> Uniformizar datas entre sistema e eSocial</p>
  </div>
  
  <div class="error-card critical">
    <h3>Ausência de Risco Cadastrado</h3>
    <p>• <strong>Erro resultante:</strong> Erro de Preenchimento (S-2240)</p>
    <p>• <strong>Requisito absoluto:</strong> Cadastro de risco obrigatório, mesmo que seja "Ausência de agente nocivo"</p>
    <p>• <strong>Solução:</strong> Preencher campo de exposição a riscos em todos os funcionários</p>
  </div>
  
  <div class="error-example">
    <h4>Exemplo de Erro Retornado pelo Sistema:</h4>
    <div class="code-block">
      <p>[Grupo: 1]</p>
      <p>[Campo: dataIni]</p>
      <p>[Valor: 01/01/2023]</p>
      <p>[Motivo: Não existe vínculo ativo para o trabalhador na data de início]</p>
    </div>
  </div>
  
  <div class="image-placeholder">
    <p>[Imagem 7: Mensagem de erro detalhada do sistema]</p>
  </div>
  
  <div class="prevention-tips">
    <h3>Medidas Preventivas</h3>
    <ul>
      <li>• Verificar consistência entre data de admissão e data de ocupação</li>
      <li>• Implementar checklist de campos obrigatórios antes do envio</li>
      <li>• Validar números de CA com fornecedores de EPI</li>
      <li>• Realizar testes no ambiente Restrita antes da produção</li>
    </ul>
  </div>
</section>

<style>
  .error-resolution-guide {
    background: linear-gradient(to right, #ffebee, #ffcdd2);
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
    border-left: 5px solid #d32f2f;
  }
  
  .error-summary {
    background: #ffffff90;
    padding: 15px;
    border-radius: 6px;
    margin-top: 20px;
    text-align: left;
  }
  
  .diagnostic-card, .critical-card {
    background: #fff8e1;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #ffa000;
    margin: 20px 0;
  }
  
  .technical-note {
    background: #ffecb3;
    padding: 12px;
    border-radius: 4px;
    margin-top: 15px;
    font-style: italic;
  }
  
  .config-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .config-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #2196F3;
    transition: transform 0.3s;
  }
  
  .config-card:hover {
    transform: translateY(-5px);
  }
  
  .config-card.critical {
    border-left: 4px solid #f44336;
    background: #ffebee;
  }
  
  .critical-card {
    border-left: 4px solid #f44336;
  }
  
  .required {
    color: #d32f2f;
    font-weight: bold;
  }
  
  .error-card {
    background: #ffebee;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #f44336;
    margin: 15px 0;
  }
  
  .error-card.critical {
    background: #ffcdd2;
  }
  
  .sub-section {
    margin: 30px 0;
    padding-left: 20px;
    border-left: 3px solid #bdbdbd;
  }
  
  .warning {
    background: #fff8e1;
    padding: 10px;
    border-radius: 4px;
    margin-top: 10px;
    font-size: 0.9em;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
  
  .additional-fields {
    background: #e3f2fd;
    padding: 15px;
    border-radius: 6px;
    margin: 20px 0;
  }
  
  .error-example {
    margin: 25px 0;
  }
  
  .code-block {
    background: #5f5c5c79;
    color: #f8f8f2;
    padding: 15px;
    border-radius: 4px;
    font-family: monospace;
    overflow-x: auto;
  }
  
  .prevention-tips {
    background: #e8f5e9;
    padding: 20px;
    border-radius: 8px;
    margin-top: 25px;
  }
</style>
`
},



  ]
};
