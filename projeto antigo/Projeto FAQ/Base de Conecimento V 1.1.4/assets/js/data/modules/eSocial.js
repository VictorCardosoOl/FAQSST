 const eSocial = 
{
  id: 'esocial',
  title: 'eSocial',
  description: 'Módulo eSocial no sistema Sigo.',
  icon: `<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <path fill="currentColor" d="M13.138.053a12.018 12.018 0 0 0-9.646 3.481A12.014 12.014 0 0 0 .937 16.651a12.014 12.014 0 0 0 11.162 7.348a2.275 2.275 0 1 0-.037-4.549a7.438 7.438 0 0 1-6.932-4.562a7.438 7.438 0 0 1 1.587-8.145a7.437 7.437 0 0 1 12.378 3.014H12.05a2.275 2.275 0 1 0 0 4.55h9.674A2.275 2.275 0 0 0 24 12.04A12.014 12.014 0 0 0 16.597.914a11.962 11.962 0 0 0-3.459-.86Z"/>
</svg>`,
  topics: [ 
{
  id: 'esocial-guia-completo',
  title: 'eSocial: Guia Completo do Sistema de Escrituração Digital',
  description: 'Tudo sobre a plataforma federal que unificou as obrigações trabalhistas, fiscais e previdenciárias no Brasil.',
  group: 'eSocial',
  tags: ['eSocial', 'Introdução'],
  content: `
    <div class="header-banner" style="background: #e3f2fd; color: white; padding: 30px; border-radius: 8px; margin-bottom: 40px; text-align: center;">
      <h1 style="margin: 0; font-size: 2.2em;">eSocial</h1>
      <p style="margin: 10px 0 0; font-size: 1.2em;">Sistema de Escrituração Digital das Obrigações Fiscais, Previdenciárias e Trabalhistas</p>
    </div>

    <section style="margin-bottom: 50px;">
      <h2 style="color: #00000; border-bottom: 2px solid #0056b3; padding-bottom: 10px; font-size: 1.8em;">1. Fundamentação Legal e Histórico</h2>
      
      <div style="background: white; border-radius: 8px; box-shadow: 0 3px 15px rgba(0,0,0,0.1); padding: 25px; margin-bottom: 30px;">
        <h3 style="color: #00000; margin-top: 0;">Criação e Marco Legal</h3>
        <ul style="padding-left: 25px; line-height: 1.6;">
          <li><strong>Data de fundação:</strong> 11 de dezembro de 2014</li>
          <li><strong>Órgãos envolvidos:</strong> Receita Federal, INSS, Caixa Econômica Federal e Ministério do Trabalho</li>
          <li><strong>Base tecnológica:</strong> Sistema Público de Escrituração Digital (SPED)</li>
          <li><strong>Obrigatoriedade geral:</strong> 8 de janeiro de 2018 (com exceção inicial para eventos de SST)</li>
        </ul>
        
        <div style="background: #f0f7ff; padding: 20px; border-left: 4px solid #0056b3; margin-top: 20px;">
          <h4 style="color: #00000; margin-top: 0;">Principais Objetivos</h4>
          <ul style="padding-left: 25px;">
            <li>Eliminar a multiplicidade de declarações</li>
            <li>Reduzir custos de compliance para empresas</li>
            <li>Aprimorar a fiscalização governamental</li>
            <li>Garantir direitos trabalhistas e previdenciários</li>
          </ul>
        </div>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color: #00000; border-bottom: 2px solid #0056b3; padding-bottom: 10px; font-size: 1.8em;">2. Cronograma Detalhado de Implantação</h2>
      
      <div style="background: white; border-radius: 8px; box-shadow: 0 3px 15px rgba(0,0,0,0.1); padding: 25px; margin-bottom: 30px;">
        <h3 style="color: #00000; margin-top: 0;">Fases de Implementação</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 25px 0;">
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px;">
            <h4 style="color: #00000; margin-top: 0;">Fase 1 - Eventos de Tabela</h4>
            <p>Informações cadastrais do empregador</p>
          </div>
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px;">
            <h4 style="color: #00000; margin-top: 0;">Fase 2 - Eventos Não Periódicos</h4>
            <p>Admissões, afastamentos e demissões</p>
          </div>
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px;">
            <h4 style="color: #00000; margin-top: 0;">Fase 3 - Eventos Periódicos</h4>
            <p>Folhas de pagamento</p>
          </div>
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px;">
            <h4 style="color: #00000; margin-top: 0;">Fase 4 - Eventos de SST</h4>
            <p>Saúde e Segurança no Trabalho</p>
          </div>
        </div>
      </div>

      <h3 style="color: #00000;">Cronograma Específico para SST (Portaria SEPRT/RFB/ME nº 71/2021)</h3>
      <div style="overflow-x: auto; margin: 30px 0;">
        <table style="width: 100%; border-collapse: collapse; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <thead>
            <tr style="background-color: #0056b3; color: white;">
              <th style="padding: 15px; text-align: left; width: 10%;">Grupo</th>
              <th style="padding: 15px; text-align: left; width: 60%;">Perfil das Empresas</th>
              <th style="padding: 15px; text-align: left; width: 30%;">Data Limite</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 15px;">1</td>
              <td style="padding: 15px;">Faturamento anual superior a R$78 milhões</td>
              <td style="padding: 15px;">13/10/2021</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 15px;">2</td>
              <td style="padding: 15px;">Entidades com faturamento até R$78 milhões (não optantes pelo Simples Nacional)</td>
              <td style="padding: 15px;">10/01/2022</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 15px;">3</td>
              <td style="padding: 15px;">Optantes pelo Simples Nacional, empregadores PF (exceto doméstico), produtor rural PF e entidades sem fins lucrativos</td>
              <td style="padding: 15px;">10/01/2022</td>
            </tr>
            <tr>
              <td style="padding: 15px;">4</td>
              <td style="padding: 15px;">Órgãos públicos e organizações internacionais</td>
              <td style="padding: 15px;">11/07/2022</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div style="background: #fff8e1; padding: 20px; border-left: 4px solid #ff9800; margin: 30px 0;">
        <h4 style="color: #e65100; margin-top: 0;">Situação Atual</h4>
        <p>Desde 2022, a obrigatoriedade é universal para todas as empresas, com exceção de alguns órgãos públicos que possuem método de transmissão diferenciado.</p>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color: #00000; border-bottom: 2px solid #0056b3; padding-bottom: 10px; font-size: 1.8em;">3. eSocial Simplificado (S-1.0)</h2>
      
      <div style="background: white; border-radius: 8px; box-shadow: 0 3px 15px rgba(0,0,0,0.1); padding: 25px; margin-bottom: 30px;">
        <h3 style="color: #00000; margin-top: 0;">Principais Mudanças</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin: 30px 0;">
          <div style="border-left: 4px solid #4caf50; padding-left: 15px;">
            <h4 style="color: #00000; margin-top: 0;">Redução de Burocracia</h4>
            <ul style="padding-left: 20px;">
              <li>Eliminação de campos duplicados</li>
              <li>Substituição da RAIS e CAGED</li>
              <li>Simplificação de layouts</li>
            </ul>
          </div>
          
          <div style="border-left: 4px solid #4caf50; padding-left: 15px;">
            <h4 style="color: #00000; margin-top: 0;">Benefícios</h4>
            <ul style="padding-left: 20px;">
              <li>Menor carga de trabalho para empresas</li>
              <li>Redução de erros no preenchimento</li>
              <li>Processamento mais rápido pelo governo</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #e8f5e9; padding: 20px; border-radius: 8px; margin-top: 20px;">
          <h4 style="color: #2e7d32; margin-top: 0;">Impacto na Rotina</h4>
          <p>As empresas passaram a enviar aproximadamente 30% menos informações, mantendo toda a qualidade dos dados necessários para fiscalização.</p>
        </div>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color: #00000; border-bottom: 2px solid #0056b3; padding-bottom: 10px; font-size: 1.8em;">4. Impacto nas Relações de Trabalho</h2>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; margin: 30px 0;">
        <div style="background: white; border-radius: 8px; box-shadow: 0 3px 15px rgba(0,0,0,0.1); padding: 25px;">
          <h3 style="color: #00000; margin-top: 0;">Para os Trabalhadores</h3>
          <ul style="padding-left: 25px; line-height: 1.6;">
            <li><strong>Transparência:</strong> Registro imediato de admissões, alterações salariais e afastamentos</li>
            <li><strong>Histórico unificado:</strong> Facilita comprovação para aposentadoria especial</li>
            <li><strong>Garantia de direitos:</strong> FGTS, INSS e seguro-desemprego com menos inconsistências</li>
            <li><strong>Banco de dados:</strong> Informações sobre exames médicos, condições de trabalho e acidentes</li>
          </ul>
        </div>
        
        <div style="background: white; border-radius: 8px; box-shadow: 0 3px 15px rgba(0,0,0,0.1); padding: 25px;">
          <h3 style="color: #00000; margin-top: 0;">Para as Empresas</h3>
          <ul style="padding-left: 25px; line-height: 1.6;">
            <li><strong>Fiscalização integrada:</strong> Cruzamento automático de informações entre órgãos</li>
            <li><strong>Combate à sonegação:</strong> Identificação mais eficiente de irregularidades</li>
            <li><strong>Redução de custos:</strong> Eliminação de múltiplos envios para diferentes sistemas</li>
            <li><strong>Segurança jurídica:</strong> Registro oficial de todas as movimentações trabalhistas</li>
          </ul>
        </div>
      </div>
    </section>

    <section style="margin-bottom: 50px;">
      <h2 style="color: #00000; border-bottom: 2px solid #0056b3; padding-bottom: 10px; font-size: 1.8em;">5. Dados Coletados e LGPD</h2>
      
      <div style="background: white; border-radius: 8px; box-shadow: 0 3px 15px rgba(0,0,0,0.1); padding: 25px; margin-bottom: 30px;">
        <h3 style="color: #00000; margin-top: 0;">Categorias de Informações</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px; margin: 30px 0;">
          <div>
            <h4 style="color: #00000; border-bottom: 1px solid #e0e0e0; padding-bottom: 8px;">Dados Pessoais</h4>
            <ul style="padding-left: 20px;">
              <li>CPF</li>
              <li>Nome completo</li>
              <li>Data de nascimento</li>
              <li>Endereço</li>
            </ul>
          </div>
          
          <div>
            <h4 style="color: #00000; border-bottom: 1px solid #e0e0e0; padding-bottom: 8px;">Dados Contratuais</h4>
            <ul style="padding-left: 20px;">
              <li>Data de admissão</li>
              <li>Cargo e função</li>
              <li>Salário e benefícios</li>
              <li>Jornada de trabalho</li>
            </ul>
          </div>
          
          <div>
            <h4 style="color: #00000; border-bottom: 1px solid #e0e0e0; padding-bottom: 8px;">Dados de SST</h4>
            <ul style="padding-left: 20px;">
              <li>Exames médicos (ASO)</li>
              <li>Comunicação de Acidentes (CAT)</li>
              <li>Condições ambientais</li>
              <li>Exposição a agentes nocivos</li>
            </ul>
          </div>
        </div>
        
        <div style="background: #f3e5f5; padding: 20px; border-left: 4px solid #9c27b0; border-radius: 8px; margin-top: 30px;">
          <h4 style="color: #7b1fa2; margin-top: 0;">Conformidade com a LGPD</h4>
          <p>O tratamento dos dados no eSocial segue rigorosamente os princípios da Lei Geral de Proteção de Dados (LGPD):</p>
          <ul style="padding-left: 25px;">
            <li>Finalidade específica e legítima</li>
            <li>Necessidade e adequação</li>
            <li>Transparência</li>
            <li>Segurança e prevenção</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2 style="color: #00000; border-bottom: 2px solid #0056b3; padding-bottom: 10px; font-size: 1.8em;">6. Integração com o Sigo Web</h2>
      
      <div style="background: white; border-radius: 8px; box-shadow: 0 3px 15px rgba(0,0,0,0.1); padding: 25px; margin-bottom: 30px;">
        <h3 style="color: #00000; margin-top: 0;">Eventos de SST Transmitidos</h3>
        <p style="margin-bottom: 25px;">O sistema Sigo Web realiza a transmissão automática dos seguintes eventos para o eSocial:</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin: 30px 0;">
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; border-top: 4px solid #0056b3;">
            <h4 style="color: #00000; margin-top: 0;">S-2210</h4>
            <p><strong>Comunicação de Acidente de Trabalho</strong></p>
            <p style="font-size: 0.95em;">Deve ser enviado em até 1 dia útil após o acidente, contendo dados do acidentado, tipo de lesão e CID.</p>
          </div>
          
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; border-top: 4px solid #0056b3;">
            <h4 style="color: #00000; margin-top: 0;">S-2220</h4>
            <p><strong>Monitoramento da Saúde do Trabalhador</strong></p>
            <p style="font-size: 0.95em;">Registra todos os exames ocupacionais realizados, vinculados ao PCMSO da empresa.</p>
          </div>
          
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; border-top: 4px solid #0056b3;">
            <h4 style="color: #00000; margin-top: 0;">S-2221</h4>
            <p><strong>Exame Toxicológico</strong></p>
            <p style="font-size: 0.95em;">Obrigatório para motoristas profissionais (Lei 13.103/2015). Resultados positivos geram bloqueio automático.</p>
          </div>
          
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; border-top: 4px solid #0056b3;">
            <h4 style="color: #00000; margin-top: 0;">S-2240</h4>
            <p><strong>Condições Ambientais do Trabalho</strong></p>
            <p style="font-size: 0.95em;">Comunica os riscos ambientais identificados no PGR e as medidas de controle adotadas.</p>
          </div>
          
          <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; border-top: 4px solid #0056b3;">
            <h4 style="color: #00000; margin-top: 0;">S-3000</h4>
            <p><strong>Exclusão de Eventos</strong></p>
            <p style="font-size: 0.95em;">Utilizado para tornar sem efeito (excluir) um evento que foi enviado incorretamente.</p>
          </div>
        </div>
      </div>
    </section>
  `
},

{

id: 'eventos-sst-esocial',
title: 'Eventos de SST no eSocial',
description: 'Material sobre os eventos S-2210, S-2220, S-2221 e S-2240 no eSocial, com regras, observações e tabela completa de obrigatoriedade por categoria.',
group: 'Eventos do eSocial - SST',
content: `
  <div class="welcome-banner">
    <h1>Eventos de SST no eSocial</h1>
    <p>Os eventos de Segurança e Saúde no Trabalho (SST) no eSocial substituem formulários tradicionais como a CAT e o PPP, garantindo conformidade legal e registro eletrônico unificado.</p>
  </div>

  <section class="core-concepts">
    <h2>Definição Completa</h2>
    <div class="concept-card">
      <p>São eventos obrigatórios para registro de informações trabalhistas relacionadas à saúde e segurança:</p>
      <ul>
        <li><strong>S-2210</strong> - Comunicação de Acidente de Trabalho (Substitui a CAT física)</li>
        <li><strong>S-2220</strong> - Monitoramento da Saúde do Trabalhador (Equivalente ao PPP)</li>
        <li><strong>S-2221</strong> - Exame Toxicológico (Obrigatório para motoristas profissionais)</li>
        <li><strong>S-2240</strong> - Condições Ambientais do Trabalho (Base para aposentadoria especial)</li>
      </ul>
      <div class="purpose-grid">
        <div class="purpose-card">
          <h4>Finalidade Principal</h4>
          <ul>
            <li>- Substituição de formulários físicos (CAT, PPP)</li>
            <li>- Histórico digitalizado de exposição a riscos</li>
            <li>- Base para financiamento da aposentadoria especial</li>
            <li>- Integração com demais eventos do eSocial</li>
          </ul>
        </div>
        <div class="purpose-card">
          <h4>Impactos Jurídicos</h4>
          <ul>
            <li>- Eliminação de autuações por falta de PPP/CAT</li>
            <li>- Comprovação de conformidade com NRs</li>
            <li>- Redução de passivos trabalhistas</li>
            <li>- Fundamentação para defesas judiciais</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="event-grid">
  
    <div class="event-card hover-info" data-hover="Prazo: 1 dia útil após o acidente">
      <h4>S-2210</h4>
      <p><strong>Comunicação de Acidente de Trabalho</strong></p>
      <ul>
        <li>Substitui a CAT física (Comunicação de Acidente de Trabalho)</li>
        <li>Obrigatório para todos os tipos de acidente (típico, de trajeto, doença ocupacional)</li>
        <li>Informações essenciais:
          <ul>
            <li>- Data, hora e local do acidente</li>
            <li>- Parte do corpo afetada</li>
            <li>- CID-10 relacionado</li>
          </ul>
        </li>
      </ul>
      <div class="event-footer">
        <span class="tag">Obrigatoriedade: Imediata</span>
      </div>
    </div>

    <div class="event-card hover-info" data-hover="Inclui ASO, exames complementares e histórico médico ocupacional completo">
      <h4>S-2220</h4>
      <p><strong>Monitoramento da Saúde do Trabalhador</strong></p>
      <ul>
        <li>Registra todo o ciclo de exames ocupacionais</li>
        <li>Substitui o Perfil Profissiográfico Previdenciário (PPP)</li>
        <li>Tipos de exames abrangidos:
          <ul>
            <li>- Admissional, periódico, retorno ao trabalho</li>
            <li>- Mudança de função, demissional</li>
          </ul>
        </li>
      </ul>
      <div class="event-footer">
        <span class="tag">Prazo: 15º dia do mês subsequente</span>
      </div>
    </div>

    <div class="event-card hover-info" data-hover="Custos: Empresa arca com todos os exames | Periodicidade: A cada 2,5 anos">
      <h4>S-2221</h4>
      <p><strong>Exame Toxicológico</strong></p>
      <ul>
        <li>Exigido pela Lei 13.103/2015 (Lei do Caminhoneiro)</li>
        <li>Categorias obrigatórias:
          <ul>
            <li>- Motoristas profissionais (CNH C, D e E)</li>
            <li>- Operadores de máquinas perigosas</li>
          </ul>
        </li>
        <li>Consequências de resultado positivo:
          <ul>
            <li>- Afastamento imediato das atividades</li>
            <li>- Bloqueio no sistema até regularização</li>
          </ul>
        </li>
      </ul>
      <div class="event-footer">
        <span class="tag">Amostra: Cabelo/Unha (6 meses de rastreamento)</span>
      </div>
    </div>

    <div class="event-card hover-info" data-hover="Tabela 24 do eSocial com 1.200+ agentes nocivos | Atualização trimestral obrigatória">
      <h4>S-2240</h4>
      <p><strong>Condições Ambientais do Trabalho</strong></p>
      <ul>
        <li>Mapeamento completo de agentes:
          <ul>
            <li>- Físicos (ruído, calor, vibração)</li>
            <li>- Químicos (fumos, poeiras, gases)</li>
            <li>- Biológicos (vírus, bactérias, fungos)</li>
          </ul>
        </li>
        <li>Informações sobre proteção:
          <ul>
            <li>- EPIs fornecidos</li>
            <li>- EPCs instalados</li>
          </ul>
        </li>
      </ul>
      <div class="event-footer">
        <span class="tag">Base legal: Anexo IV do Decreto 3.048/99</span>
      </div>
    </div>
  </section>

  <section class="important-info">
    <h2>Observações Técnicas Críticas</h2>
    <div class="notes-grid">
      <div class="note-card">
        <h4>Regras Gerais</h4>
        <ul>
          <li>• Estagiários (901) e aprendizes (1401) estão isentos</li>
          <li>• Servidores públicos (RPPS): obrigatório apenas se previsto em norma específica</li>
          <li>• Empresas sem exposição a riscos: envio do S-2240 com declaração negativa</li>
        </ul>
      </div>
      <div class="note-card">
        <h4>Integração de Dados</h4>
        <ul>
          <li>• S-2220 utiliza dados do S-2240 para compor o histórico</li>
          <li>• S-2210 aciona automaticamente o S-2220 quando necessário</li>
          <li>• Eventos interligados: S-2190, S-2300 e S-2400</li>
        </ul>
      </div>
      <div class="note-card">
        <h4>Responsabilidades</h4>
        <ul>
          <li>• Médico coordenador: validação técnica dos eventos</li>
          <li>• RH: envio dentro dos prazos legais</li>
          <li>• SESMT: fornecimento de dados técnicos</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="obligations-table">
    <h2>Obrigatoriedade por Categoria de Trabalhador</h2>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Categoria</th>
            <th>S-2210</th>
            <th>S-2220</th>
            <th>S-2221</th>
            <th>S-2240</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>101</td><td>Empregado - CLT</td><td>Obrigatório</td><td>Obrigatório</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>102</td><td>Trabalhador Rural</td><td>Obrigatório</td><td>Obrigatório</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>103</td><td>Doméstico</td><td>Obrigatório</td><td>Obrigatório</td><td>Não</td><td>Obrigatório</td></tr>
          <tr><td>104</td><td>Aprendiz</td><td>Obrigatório</td><td>Obrigatório</td><td>Não</td><td>Obrigatório</td></tr>
          <tr><td>105</td><td>Avulso</td><td>Obrigatório</td><td>Obrigatório</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>106</td><td>Temporário</td><td>Obrigatório</td><td>Obrigatório</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>111</td><td>Cooperado</td><td>Obrigatório</td><td>Obrigatório</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>201</td><td>Servidor Público</td><td>Obrigatório</td><td>Obrigatório</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>301</td><td>Empresário</td><td>Facultativo</td><td>Facultativo</td><td>Não</td><td>Facultativo</td></tr>
          <tr><td>401</td><td>Dirigente</td><td>Facultativo</td><td>Facultativo</td><td>Não</td><td>Facultativo</td></tr>
          <tr><td>701</td><td>Autônomo</td><td>Facultativo</td><td>Facultativo</td><td>Não</td><td>Facultativo</td></tr>
          <tr><td>721</td><td>Dirigente Sindical</td><td>Facultativo</td><td>Facultativo</td><td>Não</td><td>Facultativo</td></tr>
          <tr><td>731</td><td>Trab. Cooperado</td><td>Facultativo</td><td>Facultativo</td><td>Condicional*</td><td>Obrigatório</td></tr>
          <tr><td>901</td><td>Estagiário</td><td>Não</td><td>Não</td><td>Não</td><td>Não</td></tr>
          <tr><td>1401</td><td>Aprendiz</td><td>Obrigatório</td><td>Obrigatório</td><td>Não</td><td>Obrigatório</td></tr>
        </tbody>
      </table>
    </div>
    <div class="table-notes">
      <p>* Condicional: Obrigatório apenas para motoristas profissionais (Lei 13.103/2015)</p>
      <p>Fonte: Instrução Normativa RFB nº 2.100/2022 e Manual do eSocial v. 1.7</p>
    </div>
  </section>

  <section class="penalties-section">
    <h2>Consequências do Descumprimento</h2>
    <div class="penalties-grid">
      <div class="penalty-card">
        <h4>Multas Administrativas</h4>
        <ul>
          <li>• Atraso no S-2210: R$ 1.000,00 + R$ 100,00/dia</li>
          <li>• Omisssão do S-2240: Até R$ 8.257,40 por trabalhador</li>
          <li>• Erros recorrentes: Inclusão no "Cadastro de Empresas Infratoras"</li>
        </ul>
      </div>
      <div class="penalty-card">
        <h4>Riscos Trabalhistas</h4>
        <ul>
          <li>• Invalidação de demissões por justa causa</li>
          <li>• Reversão do ônus da prova em ações judiciais</li>
          <li>• Perda de direito a recursos administrativos</li>
        </ul>
      </div>
      <div class="penalty-card">
        <h4>Impactos Previdenciários</h4>
        <ul>
          <li>• Perda do direito à aposentadoria especial</li>
          <li>• Reclassificação de grau de incapacidade</li>
          <li>• Cobrança retroativa de diferenças de GFIP</li>
        </ul>
      </div>
    </div>
  </section>

  <style>
    :root {
      --primary: #2196F3;
      --secondary: #0D47A1;
      --accent: #0D47A1
      --light: #e3f2fd;
      --dark: #0d2b4e;
      --gray: #f5f5f5;
      --text: #333;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: var(--text);
      padding: 0 20px 40px;
      background-color: #f9fbfd;
    }
    
    h1, h2, h3, h4 {
      color: var(--dark);
      margin-bottom: 1rem;
    }
    
    h1 {
      font-size: 2.2rem;
      border-bottom: 3px solid var(--accent);
      padding-bottom: 10px;
      margin-top: 0;
    }
    
    h2 {
      font-size: 1.8rem;
      margin: 2rem 0 1.5rem;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid var(--primary);
    }
    
    h3 {
      font-size: 1.4rem;
      margin: 1.5rem 0 1rem;
    }
    
    h4 {
      font-size: 1.2rem;
      margin: 1.2rem 0 0.8rem;
      color: var(--secondary);
    }
    
    p {
      margin-bottom: 1rem;
    }
    
    ul {
      padding-left: 1.5rem;
      margin-bottom: 1.2rem;
    }
    
    li {
      margin-bottom: 0.5rem;
    }
    
    /* Banner */
    .welcome-banner {
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      padding: 30px;
      border-radius: 12px;
      text-align: center;
      margin: 20px 0 30px;
      color: white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    .welcome-banner h1 {
      color: white;
      border-bottom: none;
    }
    
    .welcome-banner p {
      font-size: 1.1rem;
      max-width: 800px;
      margin: 0 auto;
    }
    
    /* Cards */
    .concept-card, 
    .event-card, 
    .purpose-card,
    .note-card,
    .penalty-card {
      background: white;
      padding: 25px;
      border-radius: 10px;
      box-shadow: 0 3px 10px rgba(0,0,0,0.08);
      margin-bottom: 20px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border-left: 4px solid var(--primary);
    }
    
    .concept-card {
      background: linear-gradient(to right, white 80%, #e8f4ff);
    }
    
    .event-card:hover, 
    .purpose-card:hover,
    .note-card:hover,
    .penalty-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 15px rgba(0,0,0,0.12);
    }
    
    /* Grids */
    .purpose-grid,
    .notes-grid,
    .penalties-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
      margin: 25px 0;
    }
    
    .event-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 25px;
      margin: 30px 0;
    }
    
    /* Event Card Specific */
    .event-card {
      position: relative;
      overflow: hidden;
    }
    
    .event-card:hover::after {
      content: attr(data-hover);
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: var(--accent);
      color: white;
      padding: 12px;
      font-size: 0.9rem;
      transform: translateY(0);
      transition: transform 0.3s ease;
      z-index: 10;
    }
    
    .event-footer {
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px dashed #e0e0e0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .tag {
      background: var(--light);
      color: var(--secondary);
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
    }
    
    /* Table */
    .obligations-table {
      margin: 40px 0 30px;
    }
    
    .table-container {
      overflow-x: auto;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }
    
    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 800px;
      background: white;
    }
    
    th, td {
      padding: 14px 16px;
      text-align: left;
      border-bottom: 1px solid #e0e0e0;
    }
    
    thead {
      background: var(--primary);
      color: white;
    }
    
    thead th {
      font-weight: 600;
      text-transform: uppercase;
      font-size: 0.9rem;
      letter-spacing: 0.5px;
    }
    
    tbody tr:nth-child(even) {
      background-color: #f8fbff;
    }
    
    tbody tr:hover {
      background-color: #edf7ff;
    }
    
    .table-notes {
      margin-top: 15px;
      font-size: 0.9rem;
      color: #666;
      font-style: italic;
    }
    
    /* Responsividade */
    @media (max-width: 768px) {
      .welcome-banner {
        padding: 20px;
      }
      
      .event-grid,
      .purpose-grid,
      .notes-grid,
      .penalties-grid {
        grid-template-columns: 1fr;
      }
      
      .concept-card, 
      .event-card {
        padding: 20px;
      }
    }
  </style>
  `
},


{
  id: 'ecac-esocial-advanced-guide',
  title: 'e-CAC e eSocial',
  description: 'Aspectos do e-CAC e sua integração estratégica com o eSocial.',
  group: 'eSocial',
  tags: ['eSocial', 'Introdução'],
  content: `
    <div class="welcome-banner">
      <h1>Domine o e-CAC: Guia Completo para Colaboradores Wise</h1>
      <p>Este guia aprofundado explica o e-CAC como pilar fundamental para a gestão das obrigações do eSocial, com ênfase nos processos de procuração eletrônica e certificação digital.</p>
    </div>

    <section class="core-concepts">
      <h2>O e-CAC em Detalhe: Centro Virtual de Atendimento ao Contribuinte</h2>
      <div class="concept-card">
        <div class="definition-box">
          <p>O <strong>e-CAC</strong> (Centro Virtual de Atendimento ao Contribuinte) é a principal plataforma digital da Receita Federal para:</p>
          <ul>
            <li>Centralizar todos os serviços fiscais em um único ambiente seguro</li>
            <li>Eliminar a necessidade de deslocamento físico às unidades da RFB</li>
            <li>Garantir autenticidade e validade jurídica através de certificação digital</li>
          </ul>
        </div>
        
        <h3>Serviços Essenciais do e-CAC para Operações SST</h3>
        <div class="service-grid">
          <div class="service-item">
            <h4>Consulta Fiscal Integrada</h4>
            <p>Verificação em tempo real de débitos e pendências tributárias vinculadas a CPF/CNPJ</p>
          </div>
          <div class="service-item">
            <h4>Gestão de Declarações</h4>
            <p>Envio e retificação de DCTF, EFD-Reinf e outras obrigações acessórias</p>
          </div>
          <div class="service-item">
            <h4>Regularização Fiscal</h4>
            <p>Emissão de DARF e opções de parcelamento de débitos</p>
          </div>
          <div class="service-item highlight">
            <h4>Procuração Eletrônica</h4>
            <p>Cadastro e gestão de autorizações para terceiros atuarem em nome da empresa</p>
          </div>
          <div class="service-item">
            <h4>Comunicação Digital</h4>
            <p>Acesso a documentos oficiais transmitidos via SPED e eSocial</p>
          </div>
        </div>
      </div>
    </section>

    <section class="integration-section">
      <h2>Integração Estratégica: e-CAC como Gateway do eSocial</h2>
      <div class="integration-card">
        <div class="integration-diagram">
          <div class="diagram-node">
            <h4>e-CAC</h4>
            <p>Portal de Controle de Acessos</p>
            <div class="node-arrow">→</div>
          </div>
          <div class="diagram-connector"></div>
          <div class="diagram-node">
            <h4>Procuração Eletrônica</h4>
            <p>Validação Jurídica</p>
            <div class="node-arrow">→</div>
          </div>
          <div class="diagram-connector"></div>
          <div class="diagram-node highlight">
            <h4>eSocial</h4>
            <p>Transmissão de Eventos</p>
          </div>
        </div>
        
        <div class="integration-details">
          <h3>Mecanismo de Autorização</h3>
          <p>O e-CAC atua como <strong>controlador de acesso</strong> para o eSocial, garantindo que:</p>
          <ul>
            <li>Apenas procuradores devidamente autorizados possam enviar eventos</li>
            <li>Cada transação tenha validade jurídica através de certificação digital</li>
            <li>As permissões sejam específicas por tipo de evento (ex: Grupo SST)</li>
          </ul>
          
          <div class="warning-box">
            <strong>Ponto Crítico:</strong> Sem procuração eletrônica válida no e-CAC, nenhum terceiro (incluindo a Wise) pode legalmente transmitir eventos ao eSocial em nome do cliente.
          </div>
        </div>
      </div>
    </section>

    <section class="proxy-process">
      <h2>Fluxo Detalhado: Cadastro de Procuração Eletrônica no e-CAC</h2>
      <div class="process-steps">
        <div class="step-card">
          <div class="step-header">1</div>
          <h3>Acesso com Certificado Digital</h3>
          <ul>
            <li>Login no e-CAC usando <strong>e-CNPJ A1 ou A3</strong></li>
            <li>Conta Gov.br com nível Prata ou Ouro também é aceita</li>
            <li>O representante legal deve acessar em nome da PJ outorgante</li>
          </ul>
        </div>
        
        <div class="step-card">
          <div class="step-header">2</div>
          <h3>Navegação ao Módulo de Procurações</h3>
          <ul>
            <li>Buscar por "procuração" na barra de pesquisa</li>
            <li>Selecionar: <em>"CADASTRO, CONSULTA E CANCELAMENTO - PROCURAÇÃO PARA E-CAC"</em></li>
            <li>Recomenda-se cancelar procurações antigas não utilizadas</li>
          </ul>
        </div>
        
        <div class="step-card highlight">
          <div class="step-header">3</div>
          <h3>Preenchimento dos Dados</h3>
          <ul>
            <li><strong>Outorgante:</strong> Dados preenchidos automaticamente (empresa cliente)</li>
            <li><strong>Procurador:</strong> CNPJ/CPF da Wise ou profissional designado</li>
            <li><strong>Vigência:</strong> Alinhar com duração do contrato de serviços</li>
          </ul>
        </div>
        
        <div class="step-card">
          <div class="step-header">4</div>
          <h3>Definição de Permissões</h3>
          <ul>
            <li>Marcar <strong>"eSocial - Grupo SST"</strong> para eventos de Saúde e Segurança</li>
            <li>Incluir <strong>"eSocial - Download"</strong> para consulta de envios</li>
            <li>Para exames toxicológicos: <strong>"eSocial - Toxicológico"</strong></li>
          </ul>
        </div>
        
        <div class="step-card">
          <div class="step-header">5</div>
          <h3>Finalização e Validação</h3>
          <ul>
            <li>Definir possibilidade de substabelecimento</li>
            <li>Resolver Captcha de segurança</li>
            <li>Clicar em <strong>"Cadastrar Procuração"</strong> para concluir</li>
          </ul>
        </div>
      </div>
      
      <div class="process-note">
        <p><strong>Observação:</strong> Todo o processo deve ser realizado pelo representante legal da empresa cliente. A Wise pode fornecer orientações, mas não pode executar esta etapa diretamente.</p>
      </div>
    </section>

    <section class="certificates-section">
      <h2>Certificação Digital: Requisitos Técnicos para Operação</h2>
      <div class="certificates-grid">
        <div class="certificate-card">
          <h3>e-CNPJ (Empresa Cliente)</h3>
          <ul>
            <li><strong>Obrigatório</strong> para outorgar procurações</li>
            <li><strong>Tipo A1:</strong> Arquivo digital (.pfx) instalado no computador</li>
            <li><strong>Tipo A3:</strong> Token físico ou cartão inteligente</li>
            <li>Validade: de 1 a 3 anos, conforme o tipo. Importante destacar que, no Sigo, é utilizado exclusivamente o certificado do Tipo A1</li>
          </ul>
        </div>
        
        <div class="certificate-card highlight">
          <h3>e-CPF (Profissional Wise)</h3>
          <ul>
            <li>Necessário para assinar eventos como procurador</li>
            <li>Deve estar vinculado à procuração eletrônica</li>
            <li>Permite transmissão em nome do cliente</li>
            <li>Níveis de certificado: A1 ou A3</li>
          </ul>
        </div>
        
        <div class="certificate-card">
          <h3>Conta Gov.br</h3>
          <ul>
            <li>Alternativa para acesso ao e-CAC</li>
            <li>Nível <strong>Prata</strong> (com foto) ou <strong>Ouro</strong> exigido</li>
            <li>Não substitui certificado digital para algumas funcionalidades</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="workflow-section">
      <h2>Fluxo Operacional Wise: e-CAC + eSocial</h2>
      <div class="workflow-diagram">
        <div class="workflow-step">
          <div class="step-number">1</div>
          <h3>Onboarding do Cliente</h3>
          <p>Cliente cadastra procuração para Wise no e-CAC com permissões SST</p>
        </div>
        <div class="workflow-arrow">→</div>
        <div class="workflow-step">
          <div class="step-number">2</div>
          <h3>Transmissão de Eventos</h3>
          <p>Wise envia eventos (S-2210, S-2220, etc.) usando e-CPF do responsável</p>
        </div>
        <div class="workflow-arrow">→</div>
        <div class="workflow-step highlight">
          <div class="step-number">3</div>
          <h3>Gestão de Correções</h3>
          <p>Para erros: envio de S-3000 (exclusão) e retransmissão do evento correto</p>
        </div>
        <div class="workflow-arrow">→</div>
        <div class="workflow-step">
          <div class="step-number">4</div>
          <h3>Verificação Conjunta</h3>
          <p>Cliente pode consultar recibo de entrega diretamente no eSocial via e-CAC</p>
        </div>
      </div>
    </section>

    <style>
      .welcome-banner {
        background: #e3f2fd;
        color: white;
        padding: 30px;
        border-radius: 8px;
        margin-bottom: 40px;
        text-align: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }
      .welcome-banner h1 {
        margin-top: 0;
        font-size: 2.2em;
      }
      .concept-card {
        background: white;
        padding: 25px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        margin-bottom: 30px;
      }
      .definition-box {
        background: #f5f9ff;
        border-left: 4px solid #2196F3;
        padding: 15px;
        margin-bottom: 20px;
      }
      .service-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 20px;
      }
      .service-item {
        background: #f9f9f9;
        padding: 15px;
        border-radius: 6px;
        border: 1px solid #e0e0e0;
      }
      .service-item.highlight {
        background: #e3f2fd;
        border-color: #2196F3;
      }
      .integration-card {
        display: flex;
        gap: 30px;
        margin-top: 20px;
      }
      .integration-diagram {
        flex: 1;
        display: flex;
        align-items: center;
      }
      .diagram-node {
        background: white;
        padding: 15px;
        border-radius: 6px;
        text-align: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        min-width: 120px;
      }
      .diagram-node.highlight {
        background: #e3f2fd;
        border: 1px solid #2196F3;
      }
      .diagram-connector {
        flex: 1;
        border-top: 2px dashed #2196F3;
        margin: 0 10px;
      }
      .node-arrow {
        color: #2196F3;
        font-weight: bold;
      }
      .integration-details {
        flex: 2;
      }
      .warning-box {
        background: #fff8e1;
        border-left: 4px solid #ffc107;
        padding: 15px;
        margin-top: 20px;
      }
      .process-steps {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 20px;
        margin-top: 30px;
      }
      .step-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .step-card.highlight {
        background: #e3f2fd;
        border: 1px solid #2196F3;
      }
      .step-header {
        background: #2196F3;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin-bottom: 15px;
      }
      .process-note {
        background: #f5f5f5;
        padding: 15px;
        border-radius: 6px;
        margin-top: 30px;
        font-style: italic;
      }
      .certificates-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 25px;
        margin-top: 30px;
      }
      .certificate-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .certificate-card.highlight {
        background: #e3f2fd;
        border: 1px solid #2196F3;
      }
      .workflow-diagram {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 40px;
        flex-wrap: wrap;
      }
      .workflow-step {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        text-align: center;
        min-width: 180px;
        flex: 1;
        margin: 0 10px;
      }
      .workflow-step.highlight {
        background: #e3f2fd;
        border: 1px solid #2196F3;
      }
      .step-number {
        background: #2196F3;
        color: white;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin: 0 auto 15px;
      }
      .workflow-arrow {
        color: #2196F3;
        font-weight: bold;
        font-size: 1.5em;
      }
      h2, h3, h4 {
        color: #00000;
      }
      h2 {
        border-bottom: 2px solid #e3f2fd;
        padding-bottom: 10px;
        margin-top: 40px;
      }
      ul {
        margin-left: 20px;
      }
      @media (max-width: 768px) {
        .integration-card, .workflow-diagram {
          flex-direction: column;
        }
        .workflow-arrow {
          transform: rotate(90deg);
          margin: 15px 0;
        }
      }
    </style>
  `
},
{
  id: 'esocial-sst-transmission',
  title: 'Rotina de Transmissão dos Eventos de SST ao eSocial',
  description: 'Fluxo completo e prazos para transmissão dos eventos de Saúde e Segurança do Trabalho no eSocial.',
  group: 'eSocial',
  tags: ['eSocial', 'Processos', 'Webservice', 'Eventos'],
  content: `
    <div class="transmission-header">
      <h1>Rotina de Transmissão Automatizada - Eventos SST</h1>
      <p>Envio automatizado via Serviço Mensageria do Sigo® conforme programação estabelecida</p>
    </div>

    <section class="event-section">
      <h2>Eventos de SST e Seus Prazos Legais</h2>
      
      <div class="event-grid">
        <!-- S-2210 -->
        <div class="event-card critical">
          <div class="event-header">
            <h3>S-2210</h3>
            <span class="event-tag">Crítico</span>
          </div>
          <p class="event-title">Comunicação de Acidente de Trabalho</p>
          <div class="event-detail">
            <strong>Prazo:</strong> 1º dia útil após ocorrência (em caso de morte: imediato)
          </div>
          <div class="event-detail">
            <strong>Transmissão:</strong> Imediata quando disponível
          </div>
          <div class="event-detail">
            <strong>Substitui:</strong> CAT física (exceto para MEI não obrigado no eSocial)
          </div>
          <div class="event-warning">
            <h4>Consequências por Não Envio:</h4>
            <ul>
              <li>Multas até R$ 10.037,35 (art. 286, Decreto 3.048/1999)</li>
              <li>Fiscalização eletrônica automatizada</li>
              <li>Impacto no FAP da empresa</li>
              <li>Dificuldade de acesso a benefícios</li>
            </ul>
          </div>
        </div>

        <!-- S-2220 -->
        <div class="event-card">
          <div class="event-header">
            <h3>S-2220</h3>
            <span class="event-tag">Periódico</span>
          </div>
          <p class="event-title">Monitoramento da Saúde do Trabalhador</p>
          <div class="event-detail">
            <strong>Prazo:</strong> Até dia 15 do mês subsequente ao exame
          </div>
          <div class="event-detail">
            <strong>Transmissão:</strong> A partir do 1º dia do mês subsequente
          </div>
          <div class="event-warning">
            <h4>Riscos por Não Envio:</h4>
            <ul>
              <li>Inconsistência no prontuário eletrônico</li>
              <li>Autuação por falta de comprovação</li>
              <li>Responsabilização solidária empregador-prestador</li>
            </ul>
          </div>
        </div>

        <!-- S-2221 -->
        <div class="event-card important">
          <div class="event-header">
            <h3>S-2221</h3>
            <span class="event-tag">Toxicológico</span>
          </div>
          <p class="event-title">Exame Toxicológico do Motorista Profissional</p>
          <div class="event-detail">
            <strong>Prazo:</strong> Até dia 15 do mês seguinte ao exame
          </div>
          <div class="event-detail">
            <strong>Aplica-se:</strong> Categorias C, D ou E (Lei 13.103/2015)
          </div>
          <div class="event-warning">
            <h4>Impactos por Não Envio:</h4>
            <ul>
              <li>Irregularidade perante Lei dos Caminhoneiros</li>
              <li>Impedimento contratual</li>
              <li>Ações fiscais por falta de controle</li>
            </ul>
          </div>
        </div>

        <!-- S-2240 -->
        <div class="event-card">
          <div class="event-header">
            <h3>S-2240</h3>
            <span class="event-tag">Ambiental</span>
          </div>
          <p class="event-title">Condições Ambientais do Trabalho</p>
          <div class="event-detail">
            <strong>Prazo:</strong> Até dia 15 do mês subsequente à alteração
          </div>
          <div class="event-detail">
            <strong>Observação:</strong> Não se retifica - envia novo evento
          </div>
          <div class="event-warning">
            <h4>Consequências por Não Envio:</h4>
            <ul>
              <li>Multas por omissão de dados</li>
              <li>Inconsistência no PPP eletrônico</li>
              <li>Impacto em aposentadoria especial</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="responsibility-section">
      <h2>Responsabilidades no Envio</h2>
      <div class="responsibility-card">
        <div class="responsibility-item">
          <h3>Empregador</h3>
          <p>Responsável legal pelo envio, podendo delegar via procuração eletrônica no e-CAC</p>
        </div>
        <div class="responsibility-item important">
          <h3>Certificação Digital</h3>
          <p>Obrigatório uso de e-CNPJ da empresa ou e-CPF com procuração válida</p>
          <div class="warning-note">
            <strong>Proibição:</strong> Uso indevido de certificado do cliente por prestador gera responsabilização solidária
          </div>
        </div>
        <div class="responsibility-item">
          <h3>Prestador SST</h3>
          <p>Quando autorizado, deve utilizar próprio e-CPF (nunca o certificado do cliente)</p>
        </div>
      </div>
    </section>

    <section class="automation-section">
      <h2>Processo Automatizado via Mensageria Sigo®</h2>
      <div class="automation-flow">
        <div class="flow-step">
          <div class="step-number">1</div>
          <h3>Verificação Horária</h3>
          <p>A cada 1 hora, o sistema rastreia eventos disponíveis no prazo</p>
        </div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">
          <div class="step-number">2</div>
          <h3>Validação XML</h3>
          <p>Conferência automática da estrutura conforme leiaute eSocial</p>
        </div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">
          <div class="step-number">3</div>
          <h3>Transmissão</h3>
          <p>Envio ao Ambiente Nacional do eSocial</p>
        </div>
        <div class="flow-arrow">→</div>
        <div class="flow-step">
          <div class="step-number">4</div>
          <h3>Confirmação</h3>
          <p>Consulta do recibo de entrega na próxima verificação</p>
        </div>
      </div>
      <div class="validation-note">
        <h3>Validação de Preenchimento</h3>
        <p>Eventos com erros ficam bloqueados para transmissão até correção via botão "Validar Preenchimento"</p>
      </div>
    </section>

    <style>
      .transmission-header {
        background: #e3f2fd;
        color: white;
        padding: 25px;
        border-radius: 8px;
        margin-bottom: 30px;
        text-align: center;
      }
      .transmission-header h1 {
        margin-top: 0;
      }
      .event-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 25px;
        margin-top: 20px;
      }
      .event-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-top: 4px solid #2196F3;
      }
      .event-card.critical {
        border-top-color: #2196F3;
      }
      .event-card.important {
        border-top-color: #2196F3;
      }
      .event-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }
      .event-tag {
        background: #e3f2fd;
        color: #2196F3;
        padding: 3px 10px;
        border-radius: 20px;
        font-size: 0.8em;
        font-weight: bold;
      }
      .event-title {
        font-weight: bold;
        color: #333;
        margin-bottom: 15px;
      }
      .event-detail {
        margin-bottom: 10px;
        font-size: 0.9em;
      }
      .event-warning {
        background: #fff8e1;
        padding: 12px;
        border-radius: 6px;
        margin-top: 15px;
        font-size: 0.85em;
      }
      .event-warning h4 {
        margin-top: 0;
        color: #f57c00;
      }
      .event-warning ul {
        margin: 8px 0 0 20px;
      }
      .responsibility-card {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 25px;
      }
      .responsibility-item {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }
      .responsibility-item.important {
        border: 2px solid #FFC107;
      }
      .warning-note {
        background: #ffebee;
        padding: 10px;
        border-radius: 5px;
        margin-top: 15px;
        font-size: 0.85em;
      }
      .automation-flow {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 30px 0;
        flex-wrap: wrap;
      }
      .flow-step {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        text-align: center;
        min-width: 150px;
        flex: 1;
        margin: 0 5px;
      }
      .step-number {
        background: #2196F3;
        color: white;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin: 0 auto 15px;
      }
      .flow-arrow {
        color: #2196F3;
        font-weight: bold;
        font-size: 1.3em;
      }
      .validation-note {
        background: #e8f5e9;
        padding: 15px;
        border-radius: 6px;
        margin-top: 20px;
      }
      h2 {
        color: #2196F3;
        border-bottom: 2px solid #e3f2fd;
        padding-bottom: 8px;
      }
      @media (max-width: 768px) {
        .automation-flow {
          flex-direction: column;
        }
        .flow-arrow {
          transform: rotate(90deg);
          margin: 15px 0;
        }
      }
    </style>
  `
},
//Introdução SST

  {

  id: 'evento-s2210-comunicacao-cat',
  title: 'Evento S-2210 - Comunicação de Acidente de Trabalho no eSocial',
  description: 'Artigo completo para integração de novos colaboradores sobre o envio da CAT pelo evento S-2210. Entenda a legislação, responsabilidades e impacto direto na vida do trabalhador.',
  group: 'Eventos do eSocial - SST',
  tags: ['eSocial', 'Eventos','Introdução', 'S-2210'],
  content: `

  <div class="welcome-banner">
    <h1>Bem-vindo à Comunicação de Acidente de Trabalho</h1>
    <p>Este conteúdo foi elaborado para você compreender a importância da Comunicação de Acidente de Trabalho (CAT) e como ela é feita através do evento S-2210 no eSocial. Um processo essencial para garantir os direitos do trabalhador e manter a empresa em conformidade com a legislação.</p>
  </div>

  <section class="core-concepts">
    <h2>O que é o Evento S-2210?</h2>
    <div class="concept-card">
      <p>O evento <strong>S-2210</strong> é utilizado para comunicar oficialmente um <strong>acidente de trabalho</strong>, uma <strong>doença ocupacional</strong> ou um <strong>acidente de trajeto</strong>, ainda que não haja afastamento do colaborador.</p>
      <p>Essa comunicação é obrigatória para:</p>
      <ul>
        <li>Empregadores do regime CLT;</li>
        <li>Órgãos públicos que contratam servidores pelo RGPS;</li>
        <li>OGMO (Órgão Gestor de Mão de Obra);</li>
        <li>Sindicatos que atuam com trabalhadores avulsos.</li>
      </ul>
      <p>No sistema do eSocial, o número de recibo do evento passa a ser o <strong>número oficial da CAT</strong>, eliminando a necessidade de emissão em papel.</p>
    </div>
  </section>

  <section class="nr-overview">
    <h2>Base Legal e Normas Relacionadas</h2>
    <div class="grid-container">
      <div class="nr-card">
        <h3>Lei nº 8.213/1991 - Art. 22</h3>
        <p>Estabelece a obrigatoriedade da comunicação do acidente de trabalho à Previdência Social até o primeiro dia útil seguinte ao da ocorrência.</p>
        <p class="nr-desc">O não cumprimento implica em penalidade ao empregador.</p>
      </div>
      <div class="nr-card">
        <h3>CLT - Art. 169</h3>
        <p>Prevê a notificação compulsória das doenças profissionais e das relacionadas às condições especiais de trabalho.</p>
        <p class="nr-desc">Complementa a legislação previdenciária com foco na saúde ocupacional.</p>
      </div>
    </div>
  </section>

  <section class="documents-section">
    <h2>Impacto Direto para o Trabalhador</h2>

    <div class="document-card">
      <h3 class="document-title">Direitos Garantidos com a Emissão da CAT</h3>
      <div class="document-content">
        <p>A CAT é o documento que formaliza o acidente ou doença como sendo de natureza ocupacional. Sua emissão garante ao trabalhador os seguintes direitos:</p>
        <ul>
          <li><strong>Auxílio por Incapacidade Temporária Acidentária (B91):</strong> O trabalhador passa a receber pelo INSS a partir do 16º dia de afastamento.</li>
          <li><strong>Estabilidade Provisória:</strong> Ao retornar de um afastamento superior a 15 dias por acidente de trabalho, o empregado tem estabilidade de 12 meses.</li>
          <li><strong>FGTS Durante o Afastamento:</strong> O empregador deve continuar depositando o FGTS durante todo o período.</li>
          <li><strong>Aposentadoria por Incapacidade Permanente ou Pensão por Morte:</strong> Em caso de óbito ou invalidez permanente, a CAT é base essencial para garantir esses benefícios.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Consequências da Não Comunicação</h3>
      <div class="document-content">
        <p>Deixar de transmitir o evento S-2210 acarreta penalidades:</p>
        <ul>
          <li><strong>Multa:</strong> Pode variar entre o limite mínimo e o limite máximo do salário de contribuição, conforme os artigos 286 e 336 do Decreto nº 3.048/1999.</li>
          <li><strong>Multa Agravada:</strong> Em caso de reincidência, a penalidade pode ser ampliada.</li>
        </ul>
        <p><strong>Responsabilidade Exclusiva:</strong> A obrigação de envio é da empresa ou dos órgãos competentes (OGMO, sindicato, etc.).</p>
      </div>
    </div>
  </section>

  <section class="esocial-integration">
    <h2>Detalhes Técnicos do Evento no Sistema</h2>
    <p>O evento S-2210 exige preenchimento rigoroso com base em tabelas do eSocial. Abaixo, apresentamos as mais relevantes:</p>

    <div class="event-grid">
      <div class="event-card">
        <h4>Tabela 01</h4>
        <p><strong>Categoria de Trabalhador</strong></p>
        <p>Exemplo: 101 – Empregado, 111 – Trabalhador Temporário.</p>
      </div>

      <div class="event-card">
        <h4>Tabela 05</h4>
        <p><strong>Tipo de Inscrição</strong></p>
        <p>Define o tipo de local do acidente (CNPJ, CAEPF, CNO).</p>
      </div>

      <div class="event-card">
        <h4>Tabela 13</h4>
        <p><strong>Parte do Corpo Atingida</strong></p>
        <p>Exemplo: cabeça, tronco, membros superiores/inferiores.</p>
      </div>

      <div class="event-card">
        <h4>Tabela 14</h4>
        <p><strong>Agente Causador</strong></p>
        <p>Exemplo: ferramenta, máquina, produto químico, veículo.</p>
      </div>

      <div class="event-card">
        <h4>Tabela 15</h4>
        <p><strong>Situação Geradora</strong></p>
        <p>Exemplo: queda, explosão, esforço físico, contato com material cortante.</p>
      </div>

      <div class="event-card">
        <h4>Tabela 17</h4>
        <p><strong>Natureza da Lesão</strong></p>
        <p>Exemplo: fratura, queimadura, corte, contusão, entorse.</p>
      </div>

      <div class="event-card">
        <h4>Tabela 20</h4>
        <p><strong>Tipo de Logradouro</strong></p>
        <p>Preenchimento correto do endereço onde ocorreu o acidente.</p>
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
      box-shadow: 0 2px 5px #e3f2fd(0,0,0,0.1);
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
  id: 'evento-s2220-monitoramento-saude',
  title: 'Evento S-2220 - Monitoramento da Saúde do Trabalhador',
  description: 'Entenda de forma clara e acolhedora como funciona o envio do evento S-2220 no eSocial e sua relação com o PCMSO e o ASO. Essencial para colaboradores e profissionais de SST.',
  group: 'Eventos do eSocial - SST',
  tags: ['eSocial', 'Eventos','Introdução', 'S-2220'],
  content: `

  <div class="welcome-banner">
    <h1>Monitoramento da Saúde no eSocial</h1>
    <p>Este guia foi criado para apresentar a importância do evento S-2220, que documenta a saúde ocupacional dos trabalhadores ao longo de sua trajetória na empresa. Uma ferramenta essencial para promover segurança, cumprir a legislação e proteger o trabalhador.</p>
  </div>

  <section class="core-concepts">
    <h2>O que é o Evento S-2220?</h2>
    <div class="concept-card">
      <p>O <strong>evento S-2220</strong> é utilizado para registrar digitalmente as informações sobre o <strong>monitoramento da saúde do trabalhador</strong> durante todo seu vínculo com a empresa.</p>
      <p>Esse evento detalha as avaliações clínicas e os exames complementares, com base no <strong>Atestado de Saúde Ocupacional (ASO)</strong>, e deve ser enviado sempre que um exame ocupacional for realizado.</p>

      <h4>Exames que devem ser registrados:</h4>
      <ul>
        <li>Admissional</li>
        <li>Periódico</li>
        <li>Retorno ao Trabalho</li>
        <li>Mudança de Função ou Risco</li>
        <li>Monitoração Pontual (quando houver ASO)</li>
        <li>Demissional</li>
      </ul>

      <p><strong>Importante:</strong> mesmo exames solicitados fora da rotina periódica (monitoração pontual) devem ser enviados, desde que estejam registrados no ASO.</p>
    </div>
  </section>

  <section class="nr-overview">
    <h2>Relação com as Normas Regulamentadoras</h2>
    <div class="grid-container">
      <div class="nr-card">
        <h3>NR-7</h3>
        <p>Programa de Controle Médico de Saúde Ocupacional (PCMSO)</p>
        <p class="nr-desc">Estabelece a obrigatoriedade de exames clínicos e complementares, visando preservar a saúde dos trabalhadores. O evento S-2220 é a forma digital de comprovar sua execução.</p>
      </div>
    </div>
  </section>

  <section class="documents-section">
    <h2>Impacto para o Trabalhador e Previdência</h2>

    <div class="document-card">
      <h3 class="document-title">Ligação com o Perfil Profissiográfico Previdenciário (PPP)</h3>
      <div class="document-content">
        <p>O evento S-2220 alimenta diretamente o <strong>PPP em meio digital</strong>, documento exigido pelo INSS para comprovação do histórico laboral e da saúde do trabalhador.</p>

        <h4>Benefícios do registro correto:</h4>
        <ul>
          <li><strong>Comprovação de Doença Ocupacional:</strong> Históricos de exames ajudam a comprovar o nexo entre a doença e a atividade profissional.</li>
          <li><strong>Aposentadoria Especial:</strong> O PPP digital, baseado no S-2220 e S-2240, é essencial para solicitação junto ao INSS.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Monitoração Pontual - Como Funciona?</h3>
      <div class="document-content">
        <p>O evento S-2220 também cobre exames realizados fora da rotina, como os solicitados por critério médico. No entanto:</p>
        <ul>
          <li>O exame só deve ser enviado se estiver vinculado a um <strong>ASO emitido</strong>.</li>
          <li>Exames avulsos, sem ASO, não devem ser registrados de forma isolada no S-2220.</li>
        </ul>
        <p>Esses cuidados evitam inconsistências no histórico digital do trabalhador.</p>
      </div>
    </div>
  </section>

  <section class="esocial-integration">
    <h2>Tabelas Técnicas Utilizadas no Evento S-2220</h2>
    <p>O correto preenchimento do S-2220 exige o uso de códigos e referências das tabelas do eSocial. Veja abaixo as principais:</p>

    <div class="event-grid">
      <div class="event-card">
        <h4>Tabela 05</h4>
        <p><strong>Tipos de Inscrição</strong></p>
        <p>Define o tipo de inscrição do estabelecimento de saúde onde o exame foi realizado. Ex: CNPJ, CAEPF, CNO.</p>
        <p><strong>Campo:</strong> ideEstabSaude/tpInsc</p>
      </div>

      <div class="event-card">
        <h4>Tabela 01</h4>
        <p><strong>Categoria do Trabalhador</strong></p>
        <p>Identifica a relação do trabalhador com a empresa (empregado, estagiário, servidor etc.).</p>
        <p><strong>Campo:</strong> categoria</p>
      </div>

      <div class="event-card">
        <h4>Tabela 27</h4>
        <p><strong>Procedimentos Diagnósticos</strong></p>
        <p>Indica o tipo de exame realizado: clínico, audiometria, hemograma, espirometria, etc.</p>
        <p><strong>Campo:</strong> procRealizado/codProcRealizado</p>
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
  id: 'evento-s2221-exame-toxicologico',
title: 'Evento S-2221 - Exame Toxicológico para Motoristas Profissionais',
description: 'Guia completo sobre o envio do evento S-2221 ao eSocial, abrangendo requisitos legais, prazos, impacto previdenciário e operacional, com orientações específicas para uso no sistema.',
group: 'Eventos do eSocial - SST',
tags: ['eSocial', 'Eventos','Introdução', 'S-2221'],
content: `
<div class="welcome-banner">
  <h1>Bem-vindo ao Guia sobre o Evento S-2221!</h1>
  <p>Este material foi desenvolvido para explicar de forma clara como funciona o envio do exame toxicológico de motoristas profissionais pelo evento S-2221 no eSocial, com instruções completas para uso do sistema.</p>
</div>

<section class="core-concepts">
  <h2>O que é o Evento S-2221?</h2>
  <div class="concept-card">
    <p>O evento S-2221 é o registro eletrônico, enviado ao eSocial, que contém as informações do <strong>exame toxicológico</strong> realizado por motoristas profissionais empregados. Visa detectar o uso de substâncias psicoativas que comprometam a direção segura.</p>
    <ul>
      <li>Obrigatório desde 1º de agosto de 2024</li>
      <li>Aplica-se a motoristas com CNH nas categorias C, D ou E</li>
      <li>Exclusivo para atividades remuneradas de transporte rodoviário de cargas ou passageiros</li>
    </ul>
  </div>
</section>

<section class="details-section">
  <h2>Quem Deve Realizar o Exame?</h2>
  <ul>
    <li>Motoristas de transporte rodoviário de passageiros</li>
    <li>Motoristas de transporte rodoviário de cargas</li>
    <li><strong>Importante:</strong> Aplica-se apenas às categorias C, D e E da CNH</li>
  </ul>
</section>

<section class="data-required">
  <h2>Informações que Devem ser Informadas no Evento</h2>
  <ul>
    <li>CPF do empregado</li>
    <li>Matrícula</li>
    <li>Data do exame</li>
    <li>CNPJ do laboratório</li>
    <li>Código sequencial (11 caracteres)</li>
    <li>Nome e CRM do médico responsável</li>
  </ul>
</section>

<section class="deadline-section">
  <h2>Prazo de Envio</h2>
  <p>O envio deve ocorrer até o dia 15 do mês subsequente ao exame. Se cair em dia não útil, antecipa-se para o último dia útil anterior.</p>
  <h3>Momentos de Realização</h3>
  <ul>
    <li><strong>Admissional</strong>: Antes da contratação</li>
    <li><strong>Periódico</strong>: A cada 30 meses por sorteio randômico</li>
    <li><strong>Demissional</strong>: No desligamento</li>
  </ul>
  <p><strong>Reaproveitamento:</strong> Se feito nos últimos 60 dias, pode ser usado para outro fim (admissional/demissional).</p>
</section>

<section class="legal-base">
  <h2>Base Legal e Normas</h2>
  <ul>
    <li><strong>Portaria MTP nº 672/2021</strong>: Confidencialidade e contraprova</li>
    <li><strong>Portaria MTE nº 612/2024</strong>: Regras específicas para motoristas empregados</li>
  </ul>
  <p>Embora não esteja vinculado a uma NR específica, sua inclusão no PCMSO é prevista. O resultado <strong>não deve constar no ASO</strong>.</p>
</section>

<section class="impact-section">
  <h2>Impactos do Exame</h2>
  <h3>Profissional</h3>
  <ul>
    <li>Resultado positivo implica suspensão do direito de dirigir por 3 meses</li>
    <li>Para retomar, deve apresentar novo exame negativo</li>
  </ul>
  <h3>Trabalhista e Previdenciário</h3>
  <ul>
    <li>Empregado deve ser afastado</li>
    <li>Empresa deve realizar avaliação clínica</li>
    <li>Se houver dependência química: CAT, INSS e reavaliação do PGR</li>
    <li><strong>Confidencialidade e direito à contraprova são garantidos</strong></li>
  </ul>
</section>

<section class="codigo-section">
  <h2>Código Sequencial no eSocial</h2>
  <p>O laudo possui 17 caracteres. Para o eSocial, só os 11 finais são usados. Exemplo:</p>
  <div class="code-example">
    <p>Laudo: AAAAAAAA123456789</p>
    <p>eSocial: AA123456789</p>
  </div>
</section>

<section class="positive-result">
  <h2>Condutas em Caso de Resultado Positivo</h2>
  <ul>
    <li>Avaliação clínica</li>
    <li>CAT (se houver suspeita ocupacional)</li>
    <li>Afastamento</li>
    <li>Encaminhamento ao INSS</li>
    <li>Revalidação de riscos e medidas preventivas</li>
  </ul>
</section>

<section class="ecac-section">
  <h2>Importante para o Suporte: Acesso ao e-CAC</h2>
  <p>É obrigatória a permissão específica na procuração eletrônica no portal e-CAC para envio do evento S-2221.</p>
  <p>Sem essa permissão, mesmo com o sistema configurado corretamente, a transmissão não será autorizada.</p>
</section>

<section class="sistema-section">
  <h2>No Sistema - Parametrização</h2>
  <p>O exame toxicológico é identificado pelo <strong>ID 17</strong>. Para que ele seja transmitido corretamente:</p>
  <ul>
    <li>Campo "S-2221" marcado como "Sim" no cadastro do funcionário</li>
    <li>Opção "Seleção Randômica" habilitada</li>
  </ul>
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/S_2221/Screenshot_1.png">
  </div>
</section>

<section class="preenchimento-section">
  <h2>Preenchimento do Exame</h2>
  <p>Campos obrigatórios para preenchimento:</p>
  <ul>
    <li>CPF do empregado</li>
    <li>Matrícula</li>
    <li>Data de realização do exame</li>
    <li>CNPJ do laboratório</li>
    <li>Código sequencial</li>
    <li>Nome e CRM do médico</li>
  </ul>
  <p>O campo "Exibir no ASO" deve estar desmarcado.</p>
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/S_2221/Screenshot_2.png">
  </div>
</section>

<section class="geracao-section">
  <h2>Geração e Transmissão do Evento</h2>
  <p>Após finalizar o atendimento, o evento S-2221 é gerado automaticamente, desde que todos os parâmetros estejam configurados corretamente.</p>
  <div class="image-placeholder">
    <img src="assets/IMG/Artigos/Esocial/S_2221/Screenshot_3.png">
  </div>
</section>

<style>
  .welcome-banner { background: #e3f2fd; padding: 25px; border-radius: 8px; margin-bottom: 30px; text-align: center; }
  .concept-card, .details-section, .data-required, .impact-section, .codigo-section, .positive-result, .ecac-section, .sistema-section, .preenchimento-section, .geracao-section { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); margin: 15px 0; }
  .image-placeholder {
  /* Remove o padding, background e a borda tracejada que criam o espaço cinza */
  background: none;
  padding: 0;
  text-align: center;
  margin: 30px 0;
  border: none;
  border-radius: 0;
}

.image-placeholder img {
  /* Garante que a imagem preencha 100% da largura do contêiner */
  width: 90%;
  height: auto; /* Mantém a proporção da imagem */
  display: block;
}
  .code-example { background: #f5f5f5; padding: 15px; border-radius: 5px; font-family: monospace; margin: 15px 0; }
</style>
`

},

{
  id: 'evento-s2240-condicoes-ambientais',
  title: 'Evento S-2240: Condições Ambientais do Trabalho no eSocial',
  description: 'Entenda como funciona o evento S-2240, sua base legal, prazos, impacto na aposentadoria e obrigatoriedade de envio, mesmo na ausência de riscos.',
  group: 'Eventos do eSocial - SST',
  tags: ['eSocial', 'Eventos','Introdução', 'S-2240'],
  content: `
  <div class="welcome-banner">
    <h1>Evento S-2240: Condições Ambientais do Trabalho</h1>
    <p>Este guia foi elaborado para integrar novos colaboradores ao universo do eSocial, com foco no evento S-2240, essencial para o histórico previdenciário do trabalhador.</p>
  </div>

  <section class="core-concepts">
    <h2>O que é o Evento S-2240?</h2>
    <div class="concept-card">
      <p>O evento S-2240 registra, de forma eletrônica, as <strong>condições ambientais de trabalho</strong> de cada funcionário e detalha a exposição a <strong>agentes nocivos</strong> (físicos, químicos, biológicos ou mistos).</p>
      <p>É a base para emissão do <strong>Perfil Profissiográfico Previdenciário (PPP)</strong> em meio eletrônico e responde a perguntas como:</p>
      <ul>
        <li>Onde o trabalhador exerce suas funções?</li>
        <li>Quais atividades realiza?</li>
        <li>Está exposto a algum risco que possa gerar direito à aposentadoria especial?</li>
        <li>Há medições? EPIs são fornecidos e eficazes?</li>
      </ul>
    </div>
  </section>

  <section class="esocial-integration">
    <h2>Envio Obrigatório (Mesmo sem Riscos)</h2>
    <p>Todo trabalhador regido pela CLT deve ter um evento S-2240 ativo no eSocial.</p>
    <div class="event-grid">
      <div class="event-card">
        <h4>Funcionário exposto a riscos</h4>
        <p>Informar os agentes nocivos conforme a Tabela 24 do eSocial, com base nos documentos ocupacionais da empresa.</p>
      </div>

      <div class="event-card">
        <h4>Funcionário sem exposição</h4>
        <p>Deve-se utilizar o código <strong>09.01.001</strong> – "Ausência de fator de risco", formalizando a avaliação realizada.</p>
      </div>
    </div>
    <p>Esse envio é obrigatório, inclusive para cargos administrativos. Ele comprova que a empresa avaliou o ambiente de trabalho e garante a segurança jurídica da organização.</p>
  </section>

  <section class="nr-overview">
    <h2>Normas Regulamentadoras e Bases Legais</h2>
    <div class="grid-container">
      <div class="nr-card">
        <h3>NR-01</h3>
        <p>Gerenciamento de Riscos Ocupacionais (PGR)</p>
        <p class="nr-desc">Origem primária das informações transmitidas no S-2240. Apresenta o inventário de riscos e medidas de controle.</p>
      </div>

      <div class="nr-card">
        <h3>NR-09</h3>
        <p>Exposições Ocupacionais</p>
        <p class="nr-desc">Orienta as avaliações qualitativas e quantitativas dos riscos ambientais descritos no evento.</p>
      </div>

      <div class="nr-card">
        <h3>NR-15 / NR-16</h3>
        <p>Insalubridade e Periculosidade</p>
        <p class="nr-desc">Laudos auxiliares para identificação de riscos no S-2240. Não geram diretamente os adicionais, mas são fontes de referência.</p>
      </div>

      <div class="nr-card">
        <h3>Decreto 3.048/99</h3>
        <p>Anexo IV - Previdência</p>
        <p class="nr-desc">Lista oficial de agentes nocivos que geram direito à aposentadoria especial.</p>
      </div>
    </div>
  </section>

  <section class="documents-section">
    <h2>Impactos Previdenciários e Trabalhistas</h2>
    <div class="document-card">
      <h3 class="document-title">Aposentadoria Especial</h3>
      <div class="document-content">
        <p>O evento S-2240 serve como prova documental de exposição a agentes nocivos. A Previdência usará esse histórico para conceder aposentadoria com tempo reduzido (15, 20 ou 25 anos).</p>
        <h4>Importante:</h4>
        <ul>
          <li>Sem o S-2240, o direito à aposentadoria especial pode ser negado.</li>
          <li>O histórico é construído por envio contínuo de novos eventos, sem necessidade de retificação por mudança de função.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Encargos para a Empresa</h3>
      <div class="document-content">
        <p>Empregadores que declaram exposição a riscos devem recolher uma contribuição adicional (GIIL-RAT), destinada ao financiamento da aposentadoria especial.</p>
        <h4>Consequências:</h4>
        <ul>
          <li>Alíquota de 6%, 9% ou 12% sobre a folha, conforme o risco.</li>
          <li>Empresas que omitem riscos podem ser autuadas e obrigadas a arcar com o passivo.</li>
        </ul>
      </div>
    </div>

    <div class="document-card">
      <h3 class="document-title">Segurança Jurídica e Compliance</h3>
      <div class="document-content">
        <p>O correto preenchimento do S-2240 protege tanto o colaborador quanto a empresa. Reduz ações trabalhistas, reforça a credibilidade da gestão e evita prejuízos futuros com passivos ocultos.</p>
        <h4>Boas Práticas:</h4>
        <ul>
          <li>Integrar PGR, LTCAT, PCMSO e S-2240 no sistema</li>
          <li>Validar EPIs e registros de entrega</li>
          <li>Registrar novas condições sempre que houver alterações</li>
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
  </style>
  `
},


{
  id: 'eventos-sst-orgaos-publicos',
  title: 'Eventos de SST para Órgãos Públicos: Regras e Obrigatoriedades',
  description: 'Guia completo sobre o envio de eventos de SST para servidores públicos no eSocial, com foco nas categorias 301-314, regimes previdenciários e particularidades legais.',
  group: 'Eventos do eSocial - SST',
  tags: ['eSocial', 'Eventos'],
  content: `
<div class="public-sector-guide">
  <h1>Eventos de SST no Âmbito dos Órgãos Públicos</h1>
  <p>Este guia detalha as regras específicas para envio de eventos de Saúde e Segurança no Trabalho (SST) para servidores públicos e funcionários sem vínculo empregatício no sistema eSocial.</p>
</div>

<section class="category-identification">
  <h2>Identificação de Funcionários Públicos</h2>
  <div class="identification-card">
    <p>Funcionários públicos são identificados pelo <strong>Código de Categoria do Trabalhador</strong> na Tabela 01 do eSocial:</p>
    
    <div class="category-table">
      <table>
        <tr>
          <th>Códigos</th>
          <th>Categoria</th>
          <th>Classificação</th>
        </tr>
        <tr>
          <td>301-314</td>
          <td>Todos os códigos neste intervalo</td>
          <td>Funcionário Público</td>
        </tr>
        <tr>
          <td colspan="3">
            <strong>Link oficial:</strong> 
            <a href="https://www.gov.br/esocial/pt-br/documentacao-tecnica/leiautes-esocial-v-1.3/tabelas.html#01" target="_blank">
              Tabela 01 - Clique aqui
            </a>
          </td>
        </tr>
      </table>
    </div>
    
    <div class="technical-note">
      <p><strong>Nota Importante:</strong> Estagiários não possuem obrigatoriedade de envio de eventos de SST, conforme destaque do manual do eSocial.</p>
    </div>
  </div>
</section>

<section class="previdenciary-system">
  <h2>Regimes Previdenciários e Impacto nos Eventos</h2>
  <div class="system-card">
    <p>A obrigatoriedade do envio de eventos de SST depende do regime previdenciário do servidor:</p>
    
    <div class="comparison-table">
      <table>
        <tr>
          <th>Tipo de Servidor</th>
          <th>Regime Previdenciário</th>
          <th>Eventos Obrigatórios</th>
          <th>Eventos Dispensados</th>
        </tr>
        <tr>
          <td>Empregado CLT</td>
          <td>RGPS</td>
          <td class="required">Todos (S-2210, S-2220, S-2240)</td>
          <td>Nenhum</td>
        </tr>
        <tr>
          <td>Servidor Estatutário</td>
          <td>RGPS</td>
          <td class="required">S-2210 e S-2240</td>
          <td>S-2220</td>
        </tr>
        <tr>
          <td>Servidor com RPPS instituído</td>
          <td>RGPS</td>
          <td class="required">S-2210 e S-2240</td>
          <td>S-2220</td>
        </tr>
        <tr>
          <td>Servidor Estatutário</td>
          <td>RPPS</td>
          <td>Nenhum</td>
          <td>Todos</td>
        </tr>
      </table>
    </div>
    
    <div class="critical-info">
      <h3>Diretriz Fundamental</h3>
      <p>A obrigatoriedade deve ser avaliada <strong>individualmente</strong> para cada servidor, considerando:</p>
      <ul>
        <li>• Regime jurídico (celetista ou estatutário)</li>
        <li>• Regime previdenciário (RGPS ou RPPS)</li>
      </ul>
    </div>
  </div>
</section>

<section class="obligation-rules">
  <h2>Diretrizes para Envio de Eventos de SST</h2>
  
  <div class="rule-card">
    <h3>1. Empregados CLT (RGPS)</h3>
    <div class="rule-content">
      <p><strong>Eventos obrigatórios:</strong> S-2210, S-2220 e S-2240</p>
      <p><strong>Contexto:</strong> Contratação pela CLT (emprego público)</p>
      <p><strong>Abragência:</strong> Todos os eventos de SST devem ser enviados</p>
    </div>
  </div>
  
  <div class="rule-card">
    <h3>2. Servidores Estatutários (RGPS)</h3>
    <div class="rule-content">
      <p><strong>Eventos obrigatórios:</strong> S-2210 e S-2240</p>
      <p><strong>Eventos dispensados:</strong> S-2220</p>
      <p><strong>Contexto:</strong> Regime estatutário vinculado ao RGPS</p>
    </div>
  </div>
  
  <div class="rule-card">
    <h3>3. Servidores com RPPS instituído (RGPS)</h3>
    <div class="rule-content">
      <p><strong>Eventos obrigatórios:</strong> S-2210 e S-2240</p>
      <p><strong>Eventos dispensados:</strong> S-2220</p>
      <p><strong>Contexto:</strong> RPPS instituído mas vinculação ao RGPS</p>
    </div>
  </div>
  
  <div class="rule-card">
    <h3>4. Servidores Estatutários (RPPS)</h3>
    <div class="rule-content">
      <p><strong>Obrigatoriedade:</strong> Nenhum evento de SST</p>
      <p><strong>Exceção:</strong> Pode ser enviado para cumprimento da Nota Técnica 2/2014/CGNAL/DRPSP/SPPS/MPS</p>
      <p><strong>Contexto:</strong> Regime estatutário vinculado a RPPS</p>
    </div>
  </div>
  
  <div class="legal-exception">
    <h3>Exceção Legal</h3>
    <p>Para servidores vinculados a RPPS, o envio de eventos pode ser realizado para cumprimento do disposto na:</p>
    <div class="legal-reference">
      <p><strong>Nota Técnica 2/2014/CGNAL/DRPSP/SPPS/MPS</strong></p>
      <p>"As informações são obrigatórias só para segurados vinculados ao RGPS, mas é possível a informação relativa a servidores vinculados a RPPS..."</p>
    </div>
  </div>
</section>

<section class="practical-example">
  <h2>Exemplo Prático</h2>
  
  <div class="example-card">
    <h3>Cenário:</h3>
    <p>Órgão público com regime estatutário e RPPS possui:</p>
    
    <div class="employee-grid">
      <div class="employee-card">
        <h4>2 Servidores</h4>
        <p>• Cargos em comissão</p>
        <p>• Sem vínculo efetivo</p>
        <p>• Vinculados ao <strong>RGPS</strong></p>
        <div class="required-action">
          <p>Eventos obrigatórios: S-2210 e S-2240</p>
        </div>
      </div>
      
      <div class="employee-card">
        <h4>Demais Servidores</h4>
        <p>• Vínculo estatutário</p>
        <p>• Vinculados ao <strong>RPPS</strong></p>
        <div class="optional-action">
          <p>Nenhum evento obrigatório</p>
        </div>
      </div>
    </div>
    
    <div class="justification">
      <h4>Fundamentação Técnica:</h4>
      <p>O PPP (Perfil Profissiográfico Previdenciário) e a CAT (Comunicação de Acidente de Trabalho) são obrigações aplicáveis exclusivamente a segurados do RGPS, substituídas pelo eSocial.</p>
    </div>
  </div>
</section>

<section class="implementation-guide">
  <h2>Orientações para Implementação</h2>
  
  <div class="step-by-step">
    <div class="step">
      <h3>Passo 1: Classificação</h3>
      <p>Identificar o código de categoria (301-314) e regime previdenciário de cada servidor</p>
    </div>
    
    <div class="step">
      <h3>Passo 2: Mapeamento</h3>
      <p>Definir quais eventos são obrigatórios conforme tabela de diretrizes</p>
    </div>
    
    <div class="step">
      <h3>Passo 3: Configuração</h3>
      <p>Ajustar o sistema para envio seletivo conforme perfil de cada servidor</p>
    </div>
    
    <div class="step">
      <h3>Passo 4: Validação</h3>
      <p>Testar no ambiente Restrita (Teste) antes do envio à Produção</p>
    </div>
  </div>

<style>
  .public-sector-guide {
    background: #e3f2fd;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 30px;
    text-align: center;
    border-left: 5px solid #0d47a1;
  }
  
  .identification-card {
    background: #fff8e1;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
  }
  
  .category-table table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  .category-table th, .category-table td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: center;
  }
  
  .category-table th {
    background-color: #bbdefb;
  }
  
  .technical-note {
    background: #ffecb3;
    padding: 15px;
    border-radius: 4px;
    margin-top: 20px;
  }
  
  .system-card {
    background: #e8f5e9;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
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
    background-color: #c8e6c9;
  }
  
  .comparison-table td.required {
    background-color: #c8e6c9;
    font-weight: bold;
  }
  
  .critical-info {
    background: #ffecb3;
    padding: 15px;
    border-radius: 4px;
    margin-top: 20px;
  }
  
  .rule-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    border-left: 4px solid #2196F3;
  }
  
  .legal-exception {
    background: #e3f2fd;
    padding: 20px;
    border-radius: 8px;
    margin: 30px 0;
  }
  
  .legal-reference {
    background: #bbdefb;
    padding: 15px;
    border-radius: 4px;
    margin-top: 15px;
    font-style: italic;
  }
  
  .example-card {
    background: #f5f5f5;
    padding: 25px;
    border-radius: 8px;
    margin: 20px 0;
  }
  
  .employee-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .employee-card {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .required-action {
    background: #c8e6c9;
    padding: 10px;
    border-radius: 4px;
    margin-top: 15px;
  }
  
  .optional-action {
    background: #e0e0e0;
    padding: 10px;
    border-radius: 4px;
    margin-top: 15px;
  }
  
  .justification {
    background: #e3f2fd;
    padding: 15px;
    border-radius: 4px;
    margin-top: 20px;
  }
  
  .step-by-step {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .step {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-left: 4px solid #4caf50;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 50px;
    text-align: center;
    margin: 30px 0;
    border: 2px dashed #ccc;
    border-radius: 5px;
  }
</style>
`
},
{
  id: 'Erro S-2210',
  title: 'Erros no Evento S-2210 - Comunicação de Acidente de Trabalho',
  description: 'Guia completo para solução de problemas no envio do evento S-2210 ao eSocial, com principais erros, fluxos de correção e procedimentos de escalonamento.',
  group: 'Erros',
  tags: ['eSocial', 'Eventos','Erro', 'S-2210'],
  content: `
    <div class="welcome-banner">
      <h1>Resolução de Erros no Evento S-2210</h1>
      <p>Este guia detalha os procedimentos para correção de erros no envio da Comunicação de Acidente de Trabalho (CAT) ao eSocial.</p>
    </div>

    <section class="core-concepts">
      <h2>Descrição do Evento S-2210</h2>
      <div class="concept-card">
        <p>O evento <strong>S-2210</strong> refere-se à Comunicação de Acidente de Trabalho (CAT) e deve ser enviado ao eSocial:</p>
        <ul>
          <li>• Sempre que ocorrer acidente de trabalho com empregado</li>
          <li>• Mesmo quando não houver afastamento</li>
          <li>• Dentro do prazo máximo de 1 dia útil após o acidente</li>
        </ul>
      </div>
    <section class="documents-section">
      <h2>Fluxo Geral de Envio</h2>
      
      <div class="document-card">
        <h3 class="document-title">Etapas do Processo</h3>
        <div class="document-content">
          <ol class="step-list">
            <h3>1. Preenchimento do evento no sistema</h3>
            <h3>2. Validação de dados obrigatórios</h3>
            <h3>3. Geração do XML do evento</h3>
            <h3>4. Envio para o eSocial</h3>
            <h3>5. Retorno do protocolo ou mensagem de erro</h3>
          </ol>
    <section class="esocial-integration">
      <h2>Principais Erros e Soluções</h2>
      
      <div class="document-card">
        <h3 class="document-title">Tabela de Erros Comuns</h3>
        <div class="document-content">
          <table class="error-table">
            <thead>
              <tr>
                <th>Mensagem de Erro</th>
                <th>Causa Provável</th>
                <th>Ação do Suporte</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"O cogAgent Causador inválido"</td>
                <td>Campo divergente das tabelas 14 ou 15 do eSocial</td>
                <td>Verificar aba "Acidente" da CAT, campo "Agente Causador"</td>
              </tr>
              <tr>
                <td>"O campo {tpAcid} é obrigatório"</td>
                <td>Campo "Tipo de Acidente" não preenchido</td>
                <td>Solicitar preenchimento do campo obrigatório</td>
              </tr>
              <tr>
                <td>"Data do acidente não correspondente"</td>
                <td>Data posterior à data atual</td>
                <td>Solicitar correção da data do acidente</td>
              </tr>
              <tr>
                <td>"Data do acidente não pode ser posterior a data de envio"</td>
                <td>Data posterior à data de envio do evento</td>
                <td>Solicitar correção da data do acidente</td>
              </tr>
              <tr>
                <td>"matricula ou codCateg: O valor '' é inválido"</td>
                <td>Matrícula do funcionário não informada</td>
                <td>Verificar número da matrícula do funcionário</td>
              </tr>
              <tr>
                <td>"CNPJ do emitente não autorizado"</td>
                <td>Empresa sem vínculo correto com o evento</td>
                <td>Confirmar cadastro da empresa no portal eSocial</td>
              </tr>
            </tbody>
          </table>
          
          <div class="alert-box">
            <h4>Consulta para Erros Diversos:</h4>
            <ol>
              <li>• Identificar o erro no XML (ex: 'tpInsc Inválido')</li>
              <li>Para consultar o documento oficial:
                <ul>
                  <li><strong>Leiautes eSocial - Versão 1.3 - NT 03/2025</strong></li>
                  <li>Disponível em: <a href="https://www.gov.br/esocial/pt-br/documentacao-tecnica/leiautes-esocial-versao-1-3-nt-03-2025/index.html#evtCAT" target="_blank">https://www.gov.br/esocial/pt-br/documentacao-tecnica/leiautes-esocial-versao-1-3-nt-03-2025/index.html#evtCAT</a></li>
                </ul>
              </li>
              <li>Usar <strong>Ctrl + F</strong> para localizar termos específicos</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="nr-overview">
      <h2>Orientação para Atendimento ao Cliente</h2>
      
      <div class="grid-container">
        <div class="nr-card">
          <h3>Solicitação Inicial</h3>
          <p>Solicitar print ou código do erro</p>
        </div>
        
        <div class="nr-card">
          <h3>Questionamentos</h3>
          <p>• Nome do funcionário e empresa<br>• Escopo do problema</p>
        </div>
        
        <div class="nr-card">
          <h3>Verificação Técnica</h3>
          <p>Validar dados do evento no sistema</p>
        </div>
        
        <div class="nr-card">
          <h3>Campos Críticos</h3>
          <p>• S-2210 ativado<br>• N° Matrícula<br>• CID em maiúsculas</p>
        </div>
      </div>

      <!-- Imagem: Verificação de campos no sistema -->
      <div class="image-placeholder">
        <img src="assets/IMG/Artigos/Esocial/s_2210_erro/Screenshot_1.png">
        <img src="assets/IMG/Artigos/Esocial/s_2210_erro/Screenshot_2.png">
      </div>

      <div class="document-card">
        <h3 class="document-title">Verificação do Agente Causador</h3>
        <div class="document-content">
          <p>Verificar na CAT do Trabalhador se o código corresponde às tabelas 14 ou 15:</p>
          
          <table class="id-table">
            <tr>
              <th>Tabela</th>
              <th>Código Iniciador</th>
              <th>Link</th>
            </tr>
            <tr>
              <td><strong>14</strong></td>
              <td>3</td>
              <td rowspan="2">
                <a href="https://www.gov.br/esocial/pt-br/documentacao-tecnica/manuais/leiautes-esocial-v-1-1-beta/tabelas.html#14" target="_blank">
                  Acessar Tabelas 14/15
                </a>
              </td>
            </tr>
            <tr>
              <td><strong>15</strong></td>
              <td>2</td>
            </tr>
          </table>
          
          <div class="tip-box">
            <h4>Dica Técnica:</h4>
            <p>Quando o agente causador for diretamente o agente presente no ambiente (código iniciado por 3), deve-se utilizar a Tabela 14. Para situações geradoras ou doenças (código iniciado por 2), utiliza-se a Tabela 15. Há ainda o caso em que, tratando-se de uma doença, pode-se utilizar tanto a Tabela 14 quanto a Tabela 15.</p>
          </div>

          <!-- Imagem: Verificação do agente causador -->
          <div class="image-placeholder">
            <img src="assets/IMG/Artigos/Esocial/s_2210_erro/Screenshot_3.png">
          </div>
        </div>
      </div>
    </section>

    <section class="documents-section">
      <h2>Escalonamento Técnico</h2>
      
      <div class="document-card">
        <h3 class="document-title">Casos para Escalonamento</h3>
        <div class="document-content">
          <ul>
            <li>• Erros de retorno da API sem mensagens claras</li>
            <li>• Falha no envio com XML validado</li>
            <li>• Inconsistência de dados entre sistema e eSocial</li>
          </ul>
          
          <h4>Informações Obrigatórias para Abertura de Chamado:</h4>
          <div class="info-grid">
            <div class="info-item">
              <h5>- Print do Erro</h5>
              <p>- Captura completa da mensagem de erro</p>
            </div>
            <div class="info-item">
              <h5>- Dados da Empresa</h5>
              <p>- Nome e ID da empresa</p>
            </div>
            <div class="info-item">
              <h5>- Dados do Funcionário</h5>
              <p>- Nome e ID do funcionário</p>
            </div>
            <div class="info-item">
              <h5>- Descrição do Ocorrido</h5>
              <p>- Detalhamento completo do problema</p>
            </div>
          </div>
          
          <div class="code-block">
            <h2><strong>Modelo de Detalhamento no w-GSC:</strong></h2>
            <p>Data: 00/00/0000<br>
            Contato: xxxxxx<br>
            Empresa: xxxxxx ID: 000<br>
            Funcionário: xxxxxx ID: 000<br>
            O que ocorreu: [Descrição detalhada]<br>
            Caminho da pasta: W:\\Transfer\\_x\\Exemplo</p>
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
      
      .error-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .error-table th, .error-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
      }
      
      .error-table th {
        background-color: #f2f2f2;
      }
      
      .error-table tr:nth-child(even) {
        background-color: #f9f9f9;
      }
      
      .alert-box {
        background: #fff8e1;
        border-left: 4px solid #ff9800;
        padding: 15px;
        margin: 20px 0;
        border-radius: 4px;
      }
      
      .step-list {
        padding-left: 20px;
      }
      
      .step-list li {
        margin-bottom: 10px;
        line-height: 1.6;
      }
      
      .id-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .id-table th, .id-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: center;
      }
      
      .id-table th {
        background-color: #f2f2f2;
      }
      
      .tip-box {
        background: #e8f5e9;
        border-left: 4px solid #4CAF50;
        padding: 15px;
        margin: 20px 0;
        border-radius: 4px;
      }
      
      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 15px;
        margin: 20px 0;
      }
      
      .info-item {
        background: #f5f5f5;
        padding: 15px;
        border-radius: 8px;
      }
      
      .code-block {
        background: #f8f8f8;
        border-left: 4px solid #2196F3;
        padding: 15px;
        margin: 15px 0;
        font-family: monospace;
      }
      
      a {
        color: #2196F3;
        text-decoration: none;
      }
      
      a:hover {
        text-decoration: underline;
      }
    </style>
  `
},
{
  id: 'resolucao-erros-s2240',
  title: 'Resolução de Erros no Evento S-2240 do eSocial',
  description: 'Guia completo para diagnóstico e correção de falhas no envio do evento S-2240, com foco em configurações de empresa, funcionário e preenchimento de campos obrigatórios.',
  group: 'Erros',
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
    <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_1.png">
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
    <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_2.png">
  </div>
  
  <div class="sub-section">
    <h3>Admissão do Funcionário</h3>
    <div class="config-card critical">
      <h4>Número de Matrícula</h4>
      <p>• Campo obrigatório transmitido ao eSocial</p>
      <p>• Deve corresponder ao registro oficial do governo</p>
    </div>
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_3.png">
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
      <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_4.png">
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
    <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_5.png">
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
    <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_6.png">
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
    <img src="assets/IMG/Artigos/Esocial/s_2240_erro/Screenshot_7.png">
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

{
  id: 'funcionarios-declarantes-esocial',
  title: 'Funcionários e Declarantes no eSocial - Regras de Identificação',
  description: 'Guia completo sobre identificação de funcionários (CPF/matrícula) e declarantes (CNPJ/CPF) no contexto do eSocial, com regras específicas para casos especiais.',
  group: 'eSocial',
  tags: ['eSocial', 'Introdução'],
  content: `
    <div class="welcome-banner">
      <h1>Identificação no eSocial</h1>
      <p>Este guia explica as regras de identificação de funcionários e declarantes para integração com o eSocial.</p>
    </div>

    <section class="core-concepts">
      <h2>Funcionários</h2>
      <div class="concept-card">
        <p>No eSocial, os funcionários têm como <strong>identificador obrigatório o CPF</strong>, com as seguintes regras:</p>
        
        <div class="highlight-box">
          <h4>Regras Chave:</h4>
          <ul>
            <li>• Um CPF pode ter múltiplos vínculos com o mesmo declarante</li>
            <li>• Cada vínculo é identificado por um número de matrícula único</li>
            <li>• A matrícula é obrigatória para eventos de SST</li>
          </ul>
        </div>
      <div class="document-card">
        <h3 class="document-title">Casos Especiais - TSVE (Trabalhador Sem Vínculo)</h3>
        <div class="document-content">
          <p>Quando a matrícula não foi informada no evento S-2300:</p>
          
          <div class="alert-box">
            <h4>Procedimento Obrigatório:</h4>
            <ol>
              <li>Acessar <strong>Funcionários » Aba Dados Pessoais</strong></li>
              <li>Habilitar a opção <strong>"TSVE sem Matrícula"</strong></li>
              <li>Selecionar o código da <strong>Categoria do Trabalhador</strong> (Tabela 01 do eSocial)</li>
            </ol>
          </div>
          
          <h4>Regras de Matrícula:</h4>
          <ul>
            <li>- Deve corresponder à matrícula informada nos eventos S-2190, S-2200 ou S-2300</li>
            <li>- Transferências entre departamentos <strong>não alteram</strong> a matrícula</li>
            <li>- Readmissão gera <strong>nova matrícula</strong> (novo vínculo)</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">Gerenciamento de Matrículas no Sigo®</h3>
        <div class="document-content">
          <p>A matrícula é informada em:</p>
          <p><strong>Funcionários » Aba Registros de Admissões</strong></p>
          
          <h4>Fluxo para Admissão/Readmissão:</h4>
          <ol>
            <li>• Criar registro de admissão</li>
            <li>• Preencher número de matrícula</li>
            <li>• Ativar vínculo do trabalhador</li>
          </ol>
    <section class="esocial-integration">
      <h2>Declarantes</h2>
      
      <div class="grid-container">
        <div class="nr-card">
          <h3>Pessoa Jurídica</h3>
          <p>Identificada apenas pelo <strong>CNPJ</strong></p>
          <p class="nr-desc">No XML: {nrInsc} = CNPJ-Raiz (8 posições)</p>
        </div>
        
        <div class="nr-card">
          <h3>Pessoa Física</h3>
          <p>Identificada apenas pelo <strong>CPF</strong></p>
          <p class="nr-desc">Utilizar <strong>CAEPF</strong> como estabelecimento</p>
        </div>
        
        <div class="nr-card">
          <h3>Administração Pública</h3>
          <p>Identificada pelo <strong>CNPJ completo (14 posições)</strong></p>
          <p class="nr-desc">Exige parametrização especial</p>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">Regras Específicas para Declarantes</h3>
        <div class="document-content">
          <table class="rules-table">
            <tr>
              <th>Tipo</th>
              <th>Identificador</th>
              <th>Casos Aplicáveis</th>
            </tr>
            <tr>
              <td><strong>Pessoa Física com Atividade Econômica</strong></td>
              <td>CAEPF (antigo CEI)</td>
              <td>
                <ul>
                  <li>Contribuinte individual (408-1)</li>
                  <li>Produtor rural (412-0)</li>
                  <li>Segurado especial (402-2)</li>
                  <li>Encarregado de consórcios rurais (228-3)</li>
                  <li>Titular de cartório (303-4)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td><strong>Obras de Construção Civil</strong></td>
              <td>CNO</td>
              <td>Vinculado a CNPJ ou CPF</td>
            </tr>
          </table>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">Configuração para Administração Pública</h3>
        <div class="document-content">
          <div class="warning-box">
            <h4>Parametrização Obrigatória:</h4>
            <p>Para clientes com natureza jurídica de Administração Pública Federal:</p>
            <ol>
              <li>Acessar <strong>Clientes - Empresas » Aba Geral</strong></li>
              <li>Habilitar <strong>"Natureza Jurídica de Adm Pública"</strong></li>
            </ol>
          </div>
          
          <p>Esta configuração garante que o campo <strong>{nrInsc}</strong> no XML seja preenchido com o CNPJ completo (14 posições).</p>
        
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
      
      .highlight-box {
        background: #e8f5e9;
        border-left: 4px solid #4CAF50;
        padding: 15px;
        margin: 15px 0;
        border-radius: 4px;
      }
      
      .alert-box {
        background: #fff8e1;
        border-left: 4px solid #FFC107;
        padding: 15px;
        margin: 20px 0;
        border-radius: 4px;
      }
      
      .warning-box {
        background: #ffebee;
        border-left: 4px solid #F44336;
        padding: 15px;
        margin: 20px 0;
        border-radius: 4px;
      }
      
      .rules-table {
        width: 100%;
        border-collapse: collapse;
        margin: 20px 0;
      }
      
      .rules-table th, .rules-table td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
      }
      
      .rules-table th {
        background-color: #f2f2f2;
      }
      
      .rules-table ul {
        margin: 0;
        padding-left: 20px;
      }
    </style>
  `
},

{
  id: 'procuracoes-eletronicas-ecac',
  title: 'Procuração Eletrônica no e-CAC',
  description: 'Passo a passo para cadastrar procurações eletrônicas no e-CAC, permitindo que clínicas e contadores transmitam eventos eSocial em nome das empresas.',
  group: 'eSocial',
  content: `
<div class="header-banner">
  <h1>Procuração Eletrônica para Transmissão eSocial</h1>
  <p>Guia completo para cadastrar autorizações no e-CAC e permitir que terceiros transmitam eventos como o S-2221</p>
</div>

<section class="intro-section">
  <h2>O Que é a Procuração Eletrônica?</h2>
  <div class="concept-card">
    <p>Documento digital que autoriza clínicas, contadores e outros prestadores a:</p>
    <ul>
      <li>• Transmitir eventos eSocial em nome da empresa</li>
      <li>• Acessar informações restritas no e-CAC</li>
      <li>• Realizar procedimentos fiscais e trabalhistas</li>
    </ul>
    <p><strong>Requisito obrigatório</strong> para transmissão de eventos por terceiros:</p>
  </div>
</section>

<!-- Passo 1 -->
<section class="step-section">
  <div class="step-header">
    <div class="step-number">1</div>
    <h2>Acesso Inicial</h2>
  </div>
  
  <div class="step-content">
    <ol>
      <li>• Acesse o <a href="https://cav.receita.fazenda.gov.br" target="_blank">e-CAC</a></li>
      <li>Faça login com:
        <ul>
          <li><strong>Certificado Digital e-CNPJ</strong> da empresa ou conta Gov. br com acesso ao CNPJ</li>
        </ul>
      </li>
      <li><strong>Critério essencial:</strong> Login deve ser feito em nome da pessoa jurídica outorgante</li>
    </ol>
    
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/Ecac_1/img_1.png">
    </div>
  </div>
</section>

<!-- Passo 2 -->
<section class="step-section">
  <div class="step-header">
    <div class="step-number">2</div>
    <h2>Localizando o Serviço</h2>
  </div>
  
  <div class="step-content">
    <ol>
      <li>Na barra de pesquisa, digite "procuração"</li>
      <li>Selecione: <strong>"CADASTRO, CONSULTA E CANCELAMENTO - PROCURAÇÃO PARA E-CAC"</strong></li>
      <li>Recomendações:
        <ul>
          <li>Consulte procurações ativas</li>
          <li>Cancele autorizações obsoletas</li>
        </ul>
      </li>
    </ol>
    
  
  
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/Ecac_1/img_2.png">
    </div>
  </div>
</section>

<!-- Passo 3 -->
<section class="step-section">
  <div class="step-header">
    <div class="step-number">3</div>
    <h2>Preenchendo Dados</h2>
  </div>
  
  <div class="step-content">
    <div class="form-section">
      <h3>Dados do Outorgante</h3>
      <ul>
        <li>• Preenchimento <strong>automático</strong> pelo sistema</li>
        <li>• Informações da empresa logada</li>
      </ul>
    </div>
    
    <div class="form-section">
      <h3>Dados do Procurador</h3>
      <ul>
        <li>• Informe CNPJ ou CPF do prestador (clínica/contador)</li>
        <li>• Dados complementares serão carregados automaticamente</li>
      </ul>
    </div>
    
    <div class="form-section">
      <h3>Configurações Adicionais</h3>
      <ol>
        <li>• Selecione o tipo de documento</li>
        <li>• Defina período de vigência (sugere-se alinhar ao contrato de serviços)</li>
      </ol>
    </div>
    
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/Ecac_1/img_3.png">
    </div>
  </div>
</section>

<!-- Passo 4 -->
<section class="step-section critical-section">
  <div class="step-header">
    <div class="step-number">4</div>
    <h2>Definindo Permissões</h2>
  </div>
  
  <div class="step-content">
    <p>Na seção <strong>"Opções de Atendimento Permitidas para o Delegante"</strong>:</p>
    
    <div class="permissions-grid">
      <div class="permission-card required">
        <h3>Permissão Essencial</h3>
        <ul>
          <li>
            <label>
    
              eSocial - Toxicológico
            </label>
          </li>
          <li><em>(Obrigatório para transmissão S-2221)</em></li>
        </ul>
      </div>
      
      <div class="permission-card recommended">
        <h3>Permissões Recomendadas</h3>
        <ul>
          <li>
            <label>
           
              eSocial - Grupo SST
            </label>
          </li>
          <li>
            <label>
            
              eSocial - Download
            </label>
          </li>
        </ul>
        <p><em>(Para transmissão completa de eventos SST)</em></p>
      </div>
    </div>
    
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/Ecac_1/img_4.png">
    </div>
  </div>
</section>

<!-- Passo 5 -->
<section class="step-section">
  <div class="step-header">
    <div class="step-number">5</div>
    <h2>Finalização do Cadastro</h2>
  </div>
  
  <div class="step-content">
    <ol>
      <li>Role até o final da página > </li>
      <li>Defina opção de substabelecimento:
        <ul>
          <li><strong>Permitir:</strong> Procurador pode delegar poderes</li>
          <li><strong>Não permitir:</strong> Acesso exclusivo ao procurador original</li>
        </ul>
      </li>
      <li>Resolva o <strong>Captcha</strong> de segurança.</li>
      
    
    <div class="legal-note">
      <h3>Validação Legal</h3>
      <p>Após cadastro, o prestador torna-se <strong>procurador legal</strong> da empresa para:</p>
      <ul>
        <li>• Transmissão de eventos S-2221 (Exame Toxicológico)</li>
        <li>• Envio de demais eventos SST quando autorizado</li>
        <li>• Consulta a informações restritas no e-CAC</li>
      </ul>
    </div>
    
    <div class="image-placeholder">
      <img src="assets/IMG/Artigos/Esocial/Ecac_1/img_5.png">
    </div>
  </div>
</section>

<section class="conclusion-section">
  <div class="benefits-card">
    <h2>Vantagens da Procuração Eletrônica</h2>
    <ul>
      <li>• Transmissão automática de eventos pelo SIGO</li>
      <li>• Redução de trâmites burocráticos</li>
      <li>• Segurança jurídica nas transmissões</li>
      <li>• Centralização das autorizações</li>
    </ul>
  </div>
  
  <div class="warning-box">
    <h3>Importante</h3>
    <p>Sem procuração ativa no e-CAC, <strong>é impossível</strong> transmitir eventos eSocial em nome de terceiros</p>
  </div>
</section>

<style>
  .header-banner {
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
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 25px;
  }
  
  .step-section {
    background: white;
    padding: 25px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    margin-bottom: 30px;
  }
  
  .critical-section {
    border-top: 3px solid #f44336;
  }
  
  .step-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
  }
  
  .step-number {
    background: #2196F3;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    font-weight: bold;
    margin-right: 15px;
  }
  
  .action-box {
    background: #e8f5e9;
    padding: 15px;
    border-radius: 4px;
    margin: 15px 0;
    text-align: center;
  }
  
  .virtual-button {
    background: #4caf50;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-weight: bold;
    cursor: default;
  }
  
  .form-section {
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 1px dashed #ddd;
  }
  
  .permissions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 25px 0;
  }
  
  .permission-card {
    padding: 20px;
    border-radius: 8px;
  }
  
  .permission-card.required {
    background: #ffebee;
    border-left: 4px solid #f44336;
  }
  
  .permission-card.recommended {
    background: #fff8e1;
    border-left: 4px solid #ff9800;
  }
  
  .permission-card h3 {
    margin-top: 0;
  }
  
  .permission-card ul {
    list-style: none;
    padding: 0;
  }
  
  .permission-card li {
    margin: 12px 0;
  }
  
  .permission-card input {
    margin-right: 10px;
  }
  
  .legal-note {
    background: #e3f2fd;
    padding: 20px;
    border-radius: 8px;
    margin: 20px 0;
  }
  
  .benefits-card {
    background: #e8f5e9;
    padding: 25px;
    border-radius: 8px;
    margin-bottom: 25px;
  }
  
  .warning-box {
    background: #ffebee;
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid #f44336;
  }
  
  .image-placeholder {
    background: #f5f5f5;
    padding: 40px;
    text-align: center;
    margin: 25px 0;
    border: 2px dashed #bdbdbd;
    border-radius: 4px;
    color: #757575;
  }
</style>
`
},

{
  id: 'parametrizacao-transmissao-eventos-sst-esocial',
  title: 'Parametrização para Transmissão de Eventos de SST no eSocial',
  description: 'Guia completo sobre os procedimentos para testes e parametrização de eventos de Saúde e Segurança no Trabalho (SST) no ambiente do eSocial, incluindo configurações no sistema Sigo®.',
  group: 'Eventos do eSocial - SST',
  content: `
    <div class="welcome-banner">
      <h1>Parametrização para Transmissão de Eventos de SST no eSocial</h1>
      <p>Este guia detalha os passos necessários para realizar testes e configurar a transmissão de eventos de Saúde e Segurança no Trabalho (SST) no ambiente do eSocial, utilizando o sistema Sigo®.</p>
    </div>

    <section class="core-concepts">
      <h2>Ambientes do eSocial</h2>
      <div class="concept-card">
        <p>O eSocial possui dois ambientes distintos:</p>
        <ul>
          <li><strong>Produção:</strong> Ambiente oficial para processamento e apuração das informações do declarante, gerando efeitos jurídicos.</li>
          <li><strong>Produção Restrita:</strong> Ambiente de testes, onde as informações não produzem efeitos jurídicos.</li>
        </ul>
      </div>
    <section class="configuration-section">
      <h2>Configurações no Sistema Sigo®</h2>
      <div class="document-card">
        <h3 class="document-title">Teste Realizado pelo RH/Folha de Pagamento do Cliente</h3>
        <div class="document-content">
          <p>Se o teste for realizado pelo RH/Folha de Pagamento do cliente, o Prestador de SST deve configurar o sistema Sigo® conforme abaixo:</p>
          <h4>Parâmetros no Sigo®:</h4>
          <div class="step-by-step">
            <div class="step">
              <h5>1. Acessar Clientes - Empresas » Aba eSocial Parâmetros eSocial</h5>
              <ul>
                <li><strong>eSocial – Habilitado:</strong> Definir como “Sim”.</li>
                <li><strong>Grupo de Declarantes Obrigados ao eSocial:</strong> Selecionar o grupo correspondente ao cliente.</li>
                <li><strong>Identificação do Ambiente:</strong> Selecionar “2 - Produção Restrita” durante os testes.</li>
                <li><strong>Método de Geração e Transmissão:</strong> Selecionar “Mensageria Manual”.</li>
              </ul>
            </div>
            <div class="step">
              <h5>2. Dados do Transmissor</h5>
              <ul>
                <li><strong>Transmissor:</strong> Selecionar “Empregador – Empresa”.</li>
              </ul>
            </div>
          </div>
          <h4>Próximos Passos:</h4>
          <ul>
            <li>Disponibilizar o <strong>Módulo Mensageria Manual</strong> e o <strong>Módulo Cliente</strong> no computador do responsável pela transmissão, com login de acesso.</li>
            <li>Capacitar o usuário sobre o uso dos módulos, especialmente o menu <strong>eSocial » Painel de Pendências</strong>.</li>
            <li>Utilizar um <strong>Certificado Digital A1 ou A3</strong> para assinatura dos eventos de SST (arquivos XML).</li>
          </ul>
        </div>
      </div>

      <div class="document-card">
        <h3 class="document-title">Teste Realizado pelo Prestador de SST</h3>
        <div class="document-content">
          <p>Se o teste for realizado pelo Prestador de SST, é necessário obter uma <strong>Procuração Eletrônica</strong> do cliente para assinar e enviar os eventos de SST em seu nome.</p>
          <h4>Parâmetros no Sigo®:</h4>
          <div class="step-by-step">
            <div class="step">
              <h5>1. Configurações do Sigo® » Empresas – Unidades » Aba eSocial Certificado</h5>
              <ul>
                <li><strong>Tipo de Certificado:</strong> Selecionar “A1”.</li>
                <li><strong>Arquivo *.pfx:</strong> Anexar o arquivo do Certificado Digital A1 do Prestador de SST.</li>
                <li><strong>Senha do Certificado:</strong> Preencher com a senha correspondente.</li>
              </ul>
            </div>
            <div class="step">
              <h5>2. Acessar Clientes - Empresas » Aba eSocial Parâmetros eSocial</h5>
              <ul>
                <li><strong>eSocial – Habilitado:</strong> Definir como “Sim”.</li>
                <li><strong>Grupo de Declarantes Obrigados ao eSocial:</strong> Selecionar o grupo correspondente ao cliente.</li>
                <li><strong>Identificação do Ambiente:</strong> Selecionar “2 - Produção Restrita” durante os testes.</li>
                <li><strong>Método de Geração e Transmissão:</strong> Selecionar “Serviço Mensageria (Automático)”.</li>
              </ul>
            </div>
            <div class="step">
              <h5>3. Dados do Transmissor</h5>
              <ul>
                <li><strong>Transmissor:</strong> Selecionar “Prestador de SST - Procurador”.</li>
                <li><strong>Procurador:</strong> Selecionar a unidade do Prestador de SST configurada com o Certificado Digital e a Procuração Eletrônica.</li>
              </ul>
            </div>
          </div>

          </ul>
        </div>
      </div>

  
        <ul>
  
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

      .concept-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        margin: 15px 0;
        transition: transform 0.2s;
      }
      .concept-card:hover {
        transform: translateY(-5px);
      }

      .event-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 20px;
        margin: 25px 0;
      }

      .event-card {
        background: white;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        border-left: 4px solid #2196F3;
        transition: transform 0.2s;
      }
      .event-card:hover {
        transform: translateY(-5px);
      }

      .event-card p {
        margin: 8px 0;
      }

      .event-card p:first-of-type {
        font-weight: bold;
        margin-bottom: 12px;
      }

      .document-card {
        background: white;
        padding: 0;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        margin-bottom: 30px;
        overflow: hidden;
        transition: transform 0.2s;
      }
      .document-card:hover {
        transform: translateY(-5px);
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
        transition: transform 0.2s;
      }
      .warning-box:hover {
        transform: translateY(-5px);
      }

      .step-by-step .step {
        background: #e8f5e9;
        padding: 10px 15px;
        margin: 10px 0;
        border-left: 4px solid #4caf50;
        transition: transform 0.2s;
      }
      .step-by-step .step:hover {
        transform: translateY(-5px);
      }

      .note {
        font-style: italic;
        color: #555;
        margin-top: 10px;
      }
    </style>
  `

},
  ],
};