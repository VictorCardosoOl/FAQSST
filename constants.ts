import { FAQItem, Category } from './types';

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'acesso-wifi-visitantes',
    question: 'Acesso à Rede Wi-Fi para Visitantes',
    category: Category.TI,
    date: '10 Jan 2025',
    tags: ['Internet', 'Wi-Fi', 'Conectividade', 'Visitantes'],
    answer: 'Credenciais e diretrizes de segurança para conexão de dispositivos externos na rede corporativa.',
    content: `## Conectividade Segura

Para garantir a segurança da nossa infraestrutura, dispositivos pessoais e de visitantes devem utilizar exclusivamente a rede Guest.

### Credenciais de Acesso
* **SSID:** \`TeamWiki_Guest\`
* **Senha:** \`Welcome@2025\`

> **Atenção:** A rede Guest possui isolamento de cliente (AP Isolation). Dispositivos conectados não conseguem se comunicar entre si ou acessar impressoras e servidores internos.

### Termos de Uso
O acesso é monitorado. O uso para download de conteúdo ilegal ou streaming em alta definição (4K) durante o horário comercial é vetado para preservar a banda para operações críticas.`
  },
  {
    id: 'politica-home-office',
    question: 'Política de Trabalho Remoto (Home Office)',
    category: Category.RH,
    date: '12 Jan 2025',
    tags: ['Remoto', 'Híbrido', 'Horário', 'RH'],
    answer: 'Diretrizes para o modelo de trabalho híbrido, elegibilidade e expectativas de disponibilidade.',
    content: `## Flexibilidade com Responsabilidade

Adotamos o modelo híbrido para maximizar a produtividade e o bem-estar da equipe. A confiança é a base deste modelo.

### Regras Gerais
1. **Dias Presenciais:** Terças e Quintas são obrigatórios para rituais de time e alinhamento estratégico.
2. **Disponibilidade:** Durante o horário comercial (09:00 - 18:00), espera-se resposta no Slack em até 30 minutos.
3. **Ambiente:** O colaborador deve garantir infraestrutura adequada (internet estável e ambiente silencioso) nos dias remotos.

> "A liberdade de trabalhar de qualquer lugar exige a disciplina de entregar resultados de excelência sempre."`
  },
  {
    id: 'reembolso-despesas-pequenas',
    question: 'Solicitação de Reembolso e Despesas',
    category: Category.FINANCEIRO,
    date: '15 Jan 2025',
    tags: ['Financeiro', 'Reembolso', 'Uber', 'Alimentação'],
    answer: 'Fluxo simplificado para prestação de contas de transporte, alimentação e despesas operacionais.',
    content: `## Governança de Gastos

Para manter a saúde financeira da operação, todo gasto deve ser justificado e comprovado fiscalmente.

### O Que é Reembolsável
* **Transporte:** Uber/Táxi para reuniões externas (categoria Comfort ou equivalente).
* **Alimentação:** Almoços de negócio com clientes (teto de R$ 150,00/pessoa).
* **Material:** Insumos emergenciais de escritório aprovados pela gestão.

### Processo de Solicitação
1. Digitalize o **Cupom Fiscal** (não aceitamos comprovante de cartão).
2. Envie para \`financeiro@teamwiki.com\` com o assunto: \`[REEMBOLSO] Mês/Ano - Seu Nome\`.
3. Prazo de pagamento: Todo dia 05 e 20 de cada mês.`
  },
  {
    id: 'uso-copa-cozinha',
    question: 'Convivência: Uso da Copa e Cozinha',
    category: Category.COLETIVO,
    date: '02 Fev 2025',
    tags: ['Cultura', 'Limpeza', 'Convivência'],
    answer: 'Regras de etiqueta para manutenção da harmonia no espaço compartilhado de alimentação.',
    content: `## O Espaço é de Todos

A copa é o coração da nossa convivência. Mantê-la impecável é responsabilidade individual para o benefício coletivo.

### Os 3 Mandamentos da Copa
1. **Sujou, Lavou:** Não deixe louça na pia "de molho". Lave, seque e guarde imediatamente após o uso.
2. **Geladeira:** Identifique seus itens com Nome e Data. Toda sexta-feira às 17h, itens sem identificação ou vencidos serão descartados.
3. **Café:** Se acabar, faça o próximo. Nunca deixe a garrafa vazia na base térmica.

> A excelência que entregamos aos clientes começa na organização da nossa própria casa.`
  },
  {
    id: 'reserva-salas-reuniao',
    question: 'Reserva de Salas de Reunião',
    category: Category.GERAL,
    date: '05 Fev 2025',
    tags: ['Reunião', 'Agenda', 'Escritório'],
    answer: 'Procedimento para garantir espaço físico para videochamadas e reuniões presenciais.',
    content: `## Gestão de Espaços

Dispomos de duas salas de reunião: **Sala Alpha** (6 lugares, TV 4K) e **Sala Beta** (4 lugares, Quadro Branco).

### Como Reservar
Utilizamos o **Google Calendar** como fonte única da verdade.
1. Crie o evento na sua agenda.
2. Adicione a sala como "Local/Recurso".
3. Aguarde o e-mail de confirmação automática.

### Etiqueta de Uso
* **Pontualidade:** Libere a sala 5 minutos antes do término para a próxima equipe.
* **Limpeza:** Apague o quadro branco e recolha garrafas de água/café ao sair.
* **No-Show:** Se a reunião for cancelada, remova a reserva da agenda imediatamente.`
  },
  {
    id: 'acesso-ferramentas-crm',
    question: 'Acesso e Uso do CRM (HubSpot)',
    category: Category.VENDAS,
    date: '10 Fev 2025',
    tags: ['Vendas', 'CRM', 'Software', 'HubSpot'],
    answer: 'Diretrizes essenciais para registro de leads e manutenção da integridade dos dados comerciais.',
    content: `## A Memória da Empresa

O CRM não é uma ferramenta de fiscalização, mas nosso ativo mais valioso de inteligência comercial. Se não está no HubSpot, não aconteceu.

### Requisitos Mínimos por Deal
Para mover um negócio para a fase de "Proposta", os seguintes campos são obrigatórios:
* **Valor:** Estimativa realista de receita recorrente (MRR).
* **Decisor:** Nome, e-mail e telefone do tomador de decisão.
* **Próximo Passo:** Data agendada para follow-up.

> **Regra de Ouro:** Todo e-mail importante e ata de reunião deve ser logado na timeline do contato.`
  },
  {
    id: 'suporte-ti-equipamentos',
    question: 'Solicitação de Suporte Técnico',
    category: Category.TI,
    date: '15 Fev 2025',
    tags: ['Suporte', 'Hardware', 'Software', 'Helpdesk'],
    answer: 'Fluxo para reportar problemas em notebooks, monitores e acessos a sistemas.',
    content: `## Continuidade Operacional

Problemas técnicos bloqueantes devem ser resolvidos com prioridade máxima.

### Canais de Atendimento
1. **Urgência Alta (Parada Total):** Ligue ou chame no WhatsApp do Responsável de TI.
2. **Urgência Média/Baixa:** Abra um ticket no canal \`#helpdesk-ti\` no Slack.

### Inventário
Cada colaborador é guardião do seu equipamento.
* Não instale softwares não homologados sem autorização.
* Relate danos físicos (quedas, líquidos) imediatamente. Ocultar o problema atrasa a solução.`
  }
];