# Ecommerce Frontend (Monorepo com Nx)

Este é um projeto frontend de um e-commerce moderno, construído usando Angular e organizado com Nx.

## 🧰 Tecnologias

- [Nx](https://nx.dev) - Monorepo toolchain
- [Angular](https://angular.io) - Framework frontend
- [Tailwind CSS](https://tailwindcss.com) - Estilização com utilitários
- [DaisyUI](https://daisyui.com) - Componentes UI para Tailwind
- [Font Awesome](https://fontawesome.com) - Ícones SVG
- [PostCSS](https://postcss.org) - Processador de CSS
- [ESBuild](https://esbuild.github.io) - Build ultra rápido

## 📦 Estrutura do Projeto

```
apps/
  ecom-frontend/     # Aplicação principal Angular
```

## ▶️ Como rodar o projeto

```bash
npm install                 # Instala as dependências
npx nx serve ecom-frontend  # Inicia a aplicação
```

## 🧪 Como rodar os testes

```bash
npx nx test ecom-frontend
```

## 🛠️ Scripts úteis

```bash
npx nx build ecom-frontend     # Build de produção
npx nx lint ecom-frontend      # Lint da aplicação
npx nx format:write            # Formatação automática dos arquivos
npx nx graph                   # Visualização dos projetos no monorepo
```

## 📦 Instalação de dependências úteis

```bash
npm install -D tailwindcss postcss autoprefixer daisyui
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/angular-fontawesome
```

## 📁 Gerado com Nx

Este projeto foi criado com:

```bash
npx create-nx-workspace@latest
```
