<div align="center">
  <img src="public/pwa-512x512.png" alt="SST FAQ Logo" width="120" height="120" />
  <h1>SST FAQ</h1>
  <p><strong>Base de Conhecimento de Alta Performance para Saúde e Segurança do Trabalho</strong></p>
</div>

<br />

> **Acesso instantâneo, offline e inteligente às normas e procedimentos vitais.**

O **SST FAQ** é uma aplicação web progressiva (PWA) de última geração, desenvolvida para resolver o problema de acesso rápido à informação crítica em campo. Diferente de wikis lentas ou documentos em PDF estáticos, esta plataforma oferece uma experiência fluida, pesquisável e sempre disponível.

## 🚀 Diferenciais e Habilidades do Projeto

*   **⚡ Performance Extrema:** Carregamento instantâneo e navegação sem delays, impulsionada pelo **Vite** e **React 19**.
*   **📱 Primeiro Mobile & PWA:** Totalmente responsivo e instalável. Funciona como um aplicativo nativo no seu celular, tablet ou desktop.
*   **📡 Modo Offline Real:** Graças à tecnologia **Service Workers**, todo o conteúdo é acessível mesmo sem conexão com a internet. Ideal para operações em campo ou áreas remotas.
*   **🔍 Busca "Spotlight" Inteligente:** Sistema de pesquisa difusa (Fuzzy Search) que entende o que você quis dizer, tolerando erros de digitação e encontrando resultados em milissegundos.
*   **✨ UX Premium:** Interface limpa, moderna e animada com **Framer Motion**, focada na legibilidade e facilidade de uso.

## 🛠️ Stack Tecnológico

Este projeto foi construído utilizando o que há de mais moderno no ecossistema web, garantindo longevidade, manutenibilidade e escalabilidade.

*   **Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/) (Builds ultra-rápidos e HMR instantâneo)
*   **Estilização:** [Tailwind CSS v4](https://tailwindcss.com/) (Design System utilitário)
*   **Animações:** [Framer Motion](https://www.framer.com/motion/) (Interações fluidas)
*   **Busca:** [Fuse.js](https://www.fusejs.io/) + [CMDK](https://cmdk.paco.me/) (Command Palette acessível)
*   **Conteúdo:** [Marked](https://marked.js.org/) (Renderização robusta de Markdown)
*   **PWA:** [Vite Plugin PWA](https://vite-pwa-org.netlify.app/) (Capacidades offline e instalação)
*   **SEO:** [React Helmet Async](https://github.com/staylor/react-helmet-async)

## 💡 Princípios de Design

1.  **Velocidade é Funcionalidade:** Ninguém quer esperar para saber como proceder em uma situação de segurança. O app deve responder imediatamente.
2.  **Conteúdo Primeiro:** A interface deve desaparecer para que o conteúdo brilhe. Tipografia e espaçamento são cuidadosamente ajustados para leitura prolongada.
3.  **Resiliência:** O sistema deve funcionar nas piores condições de rede possíveis.

## 🏁 Como Rodar o Projeto

Este projeto é 100% frontend e independente de APIs externas complexas para funcionamento básico.

### Pré-requisitos
- Node.js instalado (versão 18+ recomendada)

### Passo a Passo

1. **Clone e Instale:**
   ```bash
   npm install
   ```

2. **Rode Localmente:**
   ```bash
   npm run dev
   ```
   O app estará disponível em `http://localhost:5173`.

3. **Gere para Produção:**
   ```bash
   npm run build
   ```
