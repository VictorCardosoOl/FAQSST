 const formatacaoModule = {
  id: 'formatacao',
  title: 'Formatação',
  description: 'Módulo de Formatação e Configuração de Sistemas',
  icon: `<svg class="module-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M17,18H7V16H17V18M15,14H9V12H15V14M15,10H9V8H15V10M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/></svg>`,
  topics: [
    // Grupo: Instalação
    {
      id: 'guia-instalacao-sistemas',
      title: 'Guia Completo: Instalação de Sistemas',
      description: 'Passo a passo para instalar sistemas operacionais',
      group: 'Instalação',
      tags: ['windows', 'linux', 'instalação', 'bios'],
      content: `
        <div class="welcome-banner">
          <h1>Guia Completo de Instalação</h1>
          <p>Tudo o que você precisa saber para instalar sistemas operacionais</p>
        </div>
        <section>
          <h2>Pré-requisitos</h2>
          <ul>
            <li>Mídia de instalação (USB ou DVD)</li>
            <li>Backup dos dados importantes</li>
            <li>Drivers atualizados</li>
          </ul>
        </section>
      `,
      manualSuggestions: [
        { categoryId: 'formatacao', topicId: 'pos-formatacao-checklist' }
      ]
    },
    {
      id: 'dual-boot-windows-linux',
      title: 'Configurando Dual Boot: Windows + Linux',
      description: 'Como instalar e configurar dois sistemas no mesmo computador',
      group: 'Instalação',
      tags: ['windows', 'linux', 'dual-boot', 'partição'],
      content: `...`
    },
    
    // Grupo: Configuração
    {
      id: 'pos-formatacao-checklist',
      title: 'Checklist Pós-Formatação',
      description: '7 cuidados essenciais após formatar o computador',
      group: 'Configuração',
      tags: ['windows', 'drivers', 'segurança', 'otimização'],
      content: `...`
    },
    {
      id: 'otimizando-windows-10',
      title: 'Otimizando o Windows 10 para Desempenho',
      description: 'Configurações para melhorar velocidade e responsividade',
      group: 'Configuração',
      tags: ['windows', 'otimização', 'desempenho', 'ssd'],
      content: `...`
    },
    
    // Grupo: Drivers
    {
      id: 'drivers-essenciais',
      title: 'Drivers Essenciais Pós-Formatação',
      description: 'Lista dos drivers mais importantes para instalar',
      group: 'Drivers',
      tags: ['drivers', 'hardware', 'placa-de-video', 'som'],
      content: `...`
    },
    {
      id: 'solucionar-problemas-drivers',
      title: 'Como Solucionar Problemas com Drivers',
      description: 'Identificando e corrigindo conflitos de drivers',
      group: 'Drivers',
      tags: ['drivers', 'erros', 'conflitos', 'dispositivos'],
      content: `...`
    },
    
    // Grupo: Segurança
    {
      id: 'seguranca-pos-formatacao',
      title: 'Proteção Essencial Após Formatação',
      description: 'Configurações de segurança fundamentais',
      group: 'Segurança',
      tags: ['antivirus', 'firewall', 'backup', 'atualizações'],
      content: `...`
    },
    {
      id: 'backup-automatizado',
      title: 'Configurando Backup Automatizado',
      description: 'Como criar rotinas de backup eficientes',
      group: 'Segurança',
      tags: ['backup', 'nuvem', 'automatização', 'recuperação'],
      content: `...`,
      manualSuggestions: [
        { categoryId: 'formatacao', topicId: 'seguranca-pos-formatacao' },
        { categoryId: 'formatacao', topicId: 'drivers-essenciais' }
      ]
    }
  ]
};