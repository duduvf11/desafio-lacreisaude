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
