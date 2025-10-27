# Desafio Lacrei Saúde

Aplicação Next.js (App Router) com Tailwind CSS e styled-components.

## Requisitos

- Node.js 18+ (recomendado 20 LTS)
- npm 9+ (ou pnpm/yarn, se preferir)

## Instalação (Windows PowerShell)

```powershell
# clonar o repositório
git clone https://github.com/duduvf11/desafio-lacreisaude.git
cd desafio-lacreisaude

# instalar dependências
npm install
```

## Execução

```powershell
# ambiente de desenvolvimento (usa Webpack por padrão neste projeto)
npm run dev

# build de produção
npm run build

# iniciar servidor de produção
npm run start
```

- App local: http://localhost:3000
- Se a porta estiver ocupada, use outra: `npx next dev -p 3001`

### Sobre Turbopack x Webpack

No Next.js 16, o Turbopack é o padrão, mas aqui os scripts forçam Webpack com `--webpack` para compatibilidade. Se quiser experimentar o Turbopack:

```powershell
# executar sem a flag --webpack
npx next dev
```

## Estrutura principal

```
app/
	page.tsx          # Home (Hero + Features)
	contatos/page.tsx # Formulário com imagem lateral
	sobre/page.tsx    # Seções com imagem e cards
components/
	contact/ContactForm.tsx
	features/*, hero/*, header/*, footer/*
public/
	(adicione imagens usadas nas páginas)
```

### Alias de import

Usamos `@/` mapeando para a raiz do projeto. Exemplo:

```ts
import ContactForm from '@/components/contact/ContactForm'
```

## Testes

O projeto usa Jest + Testing Library com a configuração oficial do Next (`next/jest`).

Comandos (PowerShell):

```powershell
# executar todos os testes
npm test

# assistir alterações
npx jest --watch

# relatório de cobertura
npx jest --coverage
```

Notas:
- Testes rodam em jsdom (navegador simulado).
- `next/image` é mockado em `jest.setup.ts` para simplificar.
- Não é necessário `ts-jest` — a configuração usa o SWC do Next.

## Estilo e Acessibilidade

- Tailwind CSS v4 e styled-components para estilos.
- Formulários com labels associados (`htmlFor`/`id`) e validação nativa.
- Texto alternativo em imagens (`alt`).

### Tipografia baseadas no Marsha Design System

- Fontes carregadas (Google Fonts): Inter e Nunito.
- Fonte de destaque (display): `Nunito` (token `--font-display`).
- Escala tipográfica definida via tokens no `@theme` (arquivo `app/globals.css`):
	- `--text-headline-xl: 48px`
	- `--text-headline-lg: 40px`
	- `--text-headline-base: 32px`
	- `--text-headline-sm: 24px`
	- `--text-text-xl: 18px`
	- `--text-text-base: 16px`
	- `--text-text-sm: 14px`
	- `--text-text-xs: 12px`

Como usar com Tailwind v4 (tokens):

- Títulos: `text-headline-lg`, `text-headline-base`, etc.
- Corpo do texto: `text-text-base`, `text-text-sm`, `text-text-xl`.
- Exemplos:
	- `<h1 class="text-headline-lg font-bold">Título</h1>`
	- `<p class="text-text-base">Parágrafo</p>`

Para ajustar a família tipográfica global, edite `app/globals.css` (ex.: aplicar `font-family` no body) ou use classes utilitárias do Tailwind.

### Cores baseadas no Marsha Design System

A paleta está definida como tokens no `@theme` de `app/globals.css`, com tons de 10 a 80:

- Emerald: `--color-emerald-10` ... `--color-emerald-80`
- Green: `--color-green-10` ... `--color-green-80`
- Red: `--color-red-10` ... `--color-red-80`
- Gray: `--color-gray-10` ... `--color-gray-80`
- Blue: `--color-blue-10` ... `--color-blue-80`
- Orange: `--color-orange-10` ... `--color-orange-80`

Uso com Tailwind (mapa automático de tokens):

- Texto: `text-emerald-60`, `text-gray-70`, etc.
- Fundo: `bg-emerald-20`, `bg-gray-10`, etc.
- Borda: `border-emerald-20`, `border-gray-30`, etc.

Boas práticas de contraste:

- Prefira textos em `text-gray-80`/`text-emerald-70` sobre fundos claros (`bg-gray-10`/`bg-emerald-20`).
- Para fundos escuros, use textos claros (`text-gray-10`).
- Valide contraste com o Lighthouse/axe; ajuste um tom acima/abaixo quando necessário.
- Relatório do Lighthouse de Acessibilidade:
  
  <img width="492" height="184" alt="Relatorio do Light House - Acessibilidade" src="https://github.com/user-attachments/assets/dbb7b3b4-ea15-43df-94fc-edb6cfa61129" />

## Desempenho

Este projeto segue práticas para boa performance em produção. Abaixo, como medir e o que já foi aplicado.

### Como medir localmente

1) Build e servidor de produção

```powershell
npm run build
npm run start
```

2) Lighthouse (Chrome)
- Abra http://localhost:3000 no Chrome.
- DevTools > Lighthouse > Performance, Best Practices e SEO.
- Emule dispositivo móvel e conexão lenta para avaliar a experiência real.

3) Core Web Vitals (referências)
- LCP < 2.5s
- CLS < 0.1
- INP/FID “Good” (interação rápida)

### Otimizações já aplicadas

- next/image com `sizes` e `loading="lazy"` nas páginas de Sobre e Contatos para baixar a resolução adequada por breakpoint e adiar imagens não críticas.
- Containers com proporção estável (ex.: `aspect-square`) para evitar CLS.
- Renderização condicional do menu mobile: quando fechado, os links não são renderizados (reduz foco/DOM desnecessário e evita elementos interativos invisíveis).
- App Router (RSC) por padrão: componentes do servidor quando possível; apenas onde há estado/efeitos usamos `"use client"` (Header, ContactForm).
- Code-splitting e minificação padrão do Next/Webpack em produção.
- Relatório do Lighthouse de Desempenho do Estado Atual:

  <img width="528" height="342" alt="Relatorio do Light House - Desempenho" src="https://github.com/user-attachments/assets/f9d37462-e882-4907-aa1a-bdf829d7c7a8" />


### Dicas de deploy

- Em plataformas como Vercel, assets estáticos recebem cache agressivo por padrão; rotas estáticas podem ser servidas via CDN.
- Evite imagens gigantes em `public/`; priorize formatos modernos (WebP/AVIF) quando possível.
## Imagens

Coloque suas imagens em `public/`. Alguns arquivos referenciados nas páginas (troque pelos seus):

- `/hero-image.jpg`
- `/bg-contatos.jpg`
- `/sobre-right-1.jpg`, `/sobre-right-2.jpg`, `/sobre-main.jpg`

## Lint

```powershell
npm run lint
```

## Deploy
https://desafio-lacreisaude.vercel.app/

## Checklist do desafio

- [x] Páginas implementadas: Home (Hero + Features), Contatos (formulário com imagem), Sobre (seções com cards)
- [x] Interatividade real em múltiplos componentes
	- Menu mobile no Header (toggle)
	- Botões com estados de foco/hover/active e transições
	- Formulário com feedback de envio (aria-live) e botão “Limpar”
	- Dica expandível no campo de mensagem (mostrar/ocultar ajuda)
- [x] Acessibilidade
	- Link “Ir para o conteúdo” (skip link) no layout
	- Landmarks e títulos: main com `role="main"` e `aria-labelledby`
	- Labels associados (`htmlFor`/`id`) e `aria-required` quando apropriado
	- `alt` adequado nas imagens e contraste revisado
- [x] Testes unitários (Jest + Testing Library)
	- Cobrem pelo menos 4 componentes: Header, Hero, ContactForm, Footer
	- `next/image` mockado e ambiente `jsdom`
- [x] Responsividade
	- Layouts em grid/flex que se adaptam a breakpoints do Tailwind
	- Imagens com `object-cover`/`fill` para evitar áreas em branco
- [x] Documentação (este README) com instalação, scripts, testes e decisões

## Decisões técnicas

- Next.js 16 (App Router) e React 19
- Webpack forçado nos scripts (`--webpack`) por compatibilidade e previsibilidade
- Tailwind CSS v4 para utilitários + styled-components para componentes estilizados
- Testes com `next/jest` (sem `ts-jest`), `jest-environment-jsdom` e Testing Library
- Alias `@/` apontando para a raiz do projeto

## Responsividade e imagens

- Seções usam grid/flex responsivos com espaçamentos consistentes
- Componentes de imagem usam `next/image` com `fill` + `object-cover` quando necessário
- Cards se reorganizam em 1/2/3 colunas conforme largura da tela

## Como fazer rollback

Use Git para desfazer alterações com segurança:

```powershell
# ver histórico
git log --oneline

# voltar um commit (exemplo)
git revert <sha>

# ou resetar para um ponto anterior (atenção: destrutivo se --hard)
git reset --hard <sha>
```

Sobre o empacotador:
- Para voltar a usar Turbopack, remova `--webpack` dos scripts em `package.json` e rode `npx next dev`.
- Para manter Webpack, preserve as flags como estão neste projeto.
