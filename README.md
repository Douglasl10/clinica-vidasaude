# VidaSaude Clinica - Landing Page

Landing page moderna para clinica medica com formulario de agendamento online, construida com Next.js 15, React 19, Tailwind CSS e shadcn/ui.

## Image
![VidaSaude Clinica - Preview](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LcCjhAVxzSBzt1YzWGwGPPEOgCQDu9.png)
---

## Tecnologias Utilizadas

| Tecnologia | Versao | Descricao |
|------------|--------|-----------|
| Next.js | 15+ | Framework React com App Router, SSR e otimizacoes automaticas |
| React | 19+ | Biblioteca de UI com componentes reutilizaveis |
| TypeScript | 5+ | Superset do JavaScript com tipagem estatica |
| Tailwind CSS | 4+ | Framework CSS utilitario para estilizacao rapida |
| shadcn/ui | latest | Componentes acessiveis e customizaveis |
| Lucide React | latest | Biblioteca de icones em SVG |

---

## Pre-requisitos

Antes de comecar, certifique-se de ter instalado:

- **Node.js** versao 18 ou superior
- **npm**, **yarn** ou **pnpm** como gerenciador de pacotes
- **VSCode** (recomendado) com as extensoes:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense

---

## Instalacao Passo a Passo

### 1. Clone ou crie o projeto

```bash
# Se estiver clonando
git clone <url-do-repositorio>
cd clinica-vidasaude

# Ou crie um novo projeto Next.js
npx create-next-app@latest clinica-vidasaude --typescript --tailwind --app
cd clinica-vidasaude
```

### 2. Instale as dependencias

```bash
# Com pnpm (recomendado)
pnpm install

# Ou com npm
npm install

# Ou com yarn
yarn install
```

### 3. Instale o shadcn/ui

```bash
npx shadcn@latest init
```

Responda as perguntas:
- Style: Default
- Base color: Slate
- CSS variables: Yes

### 4. Adicione os componentes necessarios

```bash
npx shadcn@latest add button card input label textarea select
```

### 5. Instale os icones

```bash
pnpm add lucide-react
```

### 6. Execute o projeto

```bash
pnpm dev
```

Acesse `http://localhost:3000` no navegador.

---

## Estrutura do Projeto

```
clinica-vidasaude/
├── app/
│   ├── layout.tsx          # Layout raiz com fontes e metadata
│   ├── page.tsx            # Pagina inicial que monta todos os componentes
│   └── globals.css         # Estilos globais e design tokens
│
├── components/
│   ├── ui/                 # Componentes shadcn/ui (Button, Card, Input...)
│   ├── navbar.tsx          # Barra de navegacao responsiva
│   ├── hero-section.tsx    # Secao principal com CTA
│   ├── services-section.tsx # Grid de servicos oferecidos
│   ├── about-section.tsx   # Informacoes sobre a clinica
│   ├── testimonials-section.tsx # Depoimentos de pacientes
│   ├── appointment-form.tsx # Formulario de agendamento
│   └── footer.tsx          # Rodape com links e contato
│
├── public/
│   └── images/             # Imagens do site
│
├── package.json            # Dependencias do projeto
└── README.md               # Este arquivo
```

---

## Componentes e suas Funcoes

### Navbar (`components/navbar.tsx`)

Barra de navegacao fixa no topo com:
- Logo da clinica
- Links de navegacao (scroll suave)
- Menu hamburguer para mobile
- Botao CTA "Agendar Consulta"

**Conceito:** Usa `"use client"` porque precisa de `useState` para controlar o menu mobile.

### HeroSection (`components/hero-section.tsx`)

Secao de destaque com:
- Titulo principal e subtitulo
- Botoes de acao (CTA)
- Imagem da clinica
- Estatisticas (pacientes, anos, especialidades)

**Conceito:** Server Component - renderizado no servidor para melhor SEO.

### ServicesSection (`components/services-section.tsx`)

Grid de cards mostrando especialidades:
- Clinica Geral, Cardiologia, Pediatria, etc.
- Icones ilustrativos
- Descricao breve de cada servico

### AboutSection (`components/about-section.tsx`)

Secao institucional com:
- Imagem da equipe medica
- Diferenciais da clinica (lista com checkmarks)
- Informacoes de confianca

### TestimonialsSection (`components/testimonials-section.tsx`)

Depoimentos de pacientes com:
- Cards com avatar, nome e especialidade
- Estrelas de avaliacao
- Texto do depoimento

### AppointmentForm (`components/appointment-form.tsx`)

Formulario completo de agendamento:
- Campos: nome, email, telefone, especialidade, data, mensagem
- Validacao de campos obrigatorios
- Feedback visual apos envio
- Select com especialidades medicas

**Conceito:** Usa `"use client"` porque gerencia estado do formulario com `useState`.

### Footer (`components/footer.tsx`)

Rodape com:
- Logo e descricao
- Links rapidos
- Informacoes de contato
- Redes sociais
- Copyright

---

## Personalizacao

### Cores

Edite o arquivo `app/globals.css` para alterar o tema:

```css
:root {
  --primary: oklch(0.55 0.12 190);      /* Cor principal (teal) */
  --background: oklch(0.98 0.002 200);  /* Fundo */
  --foreground: oklch(0.18 0.02 240);   /* Texto */
}
```

### Fontes

Edite `app/layout.tsx` para trocar as fontes:

```tsx
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'] 
})
```

### Conteudo

Cada componente tem seus dados definidos internamente. Para um projeto real, considere:
- Criar um arquivo `data/content.ts` com todo o conteudo
- Usar um CMS como Sanity ou Contentful
- Buscar dados de uma API

---

## Scripts Disponiveis

```bash
pnpm dev      # Inicia servidor de desenvolvimento
pnpm build    # Gera build de producao
pnpm start    # Inicia servidor de producao
pnpm lint     # Executa verificacao de codigo
```

---

### Outros provedores

```bash
pnpm build
pnpm start
```

---

## Conceitos Aprendidos

Este projeto ensina:

1. **App Router** - Sistema de rotas baseado em pastas do Next.js
2. **Server vs Client Components** - Quando usar `"use client"`
3. **Tailwind CSS** - Classes utilitarias para estilizacao
4. **shadcn/ui** - Componentes acessiveis e customizaveis
5. **Responsividade** - Design mobile-first com breakpoints
6. **Formularios em React** - Controle de estado e validacao
7. **Design Tokens** - Variaveis CSS para consistencia visual

---

## Proximos Passos

- [ ] Conectar formulario a um backend (API Route ou servico externo)
- [ ] Adicionar autenticacao para area do paciente
- [ ] Integrar com banco de dados para agendamentos
- [ ] Adicionar testes automatizados
- [ ] Implementar internacionalizacao (i18n)

---

## Licenca

MIT License - Sinta-se livre para usar e modificar.
