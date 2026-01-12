<div align="center">
  <img src="public/pwa-512x512.png" alt="SST FAQ Logo" width="120" />

  <h1>SST FAQ</h1>

  <p>
    <strong>Base de Conhecimento de Alta Performance para Saúde e Segurança do Trabalho</strong>
  </p>

  <p>
    <a href="https://github.com/VictorCardosoOl/FAQSST/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="License" />
    </a>
    <a href="https://react.dev/">
      <img src="https://img.shields.io/badge/react-19.0.0-blue" alt="React 19" />
    </a>
    <a href="https://www.typescriptlang.org/">
      <img src="https://img.shields.io/badge/typescript-5.0-blue" alt="TypeScript" />
    </a>
    <a href="https://vitejs.dev/">
      <img src="https://img.shields.io/badge/vite-6.0-purple" alt="Vite" />
    </a>
     <a href="">
      <img src="https://img.shields.io/badge/status-active-success" alt="Status" />
    </a>
  </p>
  
   <p>
    <em>Acesso instantâneo, offline e inteligente a normas e procedimentos vitais.</em>
  </p>
</div>

<br />

<div align="center">
  <img src="public/assets/Screenshot_5.jpg" alt="Demonstração do App" width="100%" style="border-radius: 8px; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);" />
  <p><em>Interface do usuário mostrando a busca instantânea e leitura de artigos.</em></p>
</div>

<br />

## 📖 Sobre o Projeto

O **SST FAQ** nasceu para resolver um problema crítico na área de Segurança do Trabalho: o **acesso à informação em campo**.

Técnicos e engenheiros frequentemente operam em ambientes com conectividade limitada (subsolos, áreas rurais, plantas industriais isoladas). A solução tradicional — pastas com PDFs ou wikis lentas — é ineficiente e frustrante.

Este projeto é uma **PWA (Progressive Web App)** "Offline-First". Isso significa que ela foi desenhada para funcionar **sem internet** desde o primeiro acesso subsequente. Com uma busca "Spotlight" difusa (fuzzy search), o usuário encontra o procedimento de emergência, a norma regulamentadora ou o guia técnico em milissegundos, mesmo que digite errado.

## ✨ Diferenciais e Features

*   **⚡ Performance Extrema:** Construído com React 19 e Vite para carregamento instantâneo.
*   **📡 100% Offline (Service Workers):** Todo o conteúdo é cacheado automaticamente. O app funciona no modo avião.
*   **🔍 Busca Spotlight Inteligente:** Pesquisa difusa (Fuzzy Search) com tolerancia a erros de digitação (ex: encontrar "incêndio" digitando "incendio" ou "fogo").
*   **📱 DX Mobile & Desktop:** Layout responsivo que se adapta de celulares a monitores ultrawide.
*   **🎨 UX/UI Premium:** Animações fluídas com Framer Motion e design system limpo com Tailwind CSS v4.
*   **🛠️ Comando de Voz (CMDK):** Navegação rápida via teclado (Command+K) para power users.

## 🚀 Tecnologias Utilizadas

O projeto utiliza uma stack moderna focada em performance e experiência do desenvolvedor:

<div style="display: flex; gap: 10px; flex-wrap: wrap;">
  <img src="https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA" />
</div>

## 🏁 Getting Started

Para rodar o projeto localmente, siga os passos abaixo.

### Pré-requisitos

*   [Node.js](https://nodejs.org/) (Versão 18 ou superior)

### Instalação

1.  **Clone o repositório**
    ```bash
    git clone https://github.com/VictorCardosoOl/FAQSST.git
    ```
2.  **Instale as dependências**
    ```bash
    npm install
    ```
3.  **Rode o servidor de desenvolvimento**
    ```bash
    npm run dev
    ```
    O projeto estará rodando em `http://localhost:5173`.

### Build para Produção

Para gerar a versão otimizada para produção:

```bash
npm run build
```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<div align="center">
  <p>Feito com 💜 para a segurança de todos.</p>
</div>
