# CloudMe — por Rodolfo Rios

Site institucional bilíngue (PT/EN) da CloudMe e currículo web interativo de
Rodolfo Rios. Projeto estático, construído com [Astro](https://astro.build/)
e TypeScript.

> **Site publicado:** <https://jrodolforios.github.io/cloudme-site/>

> **Marca:** CloudMe — por Rodolfo Rios
> **Proposta:** "Inteligência artificial aplicada a desafios reais."

---

## Sumário

- [Stack e decisões de arquitetura](#stack-e-decisões-de-arquitetura)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como rodar localmente](#como-rodar-localmente)
- [Scripts disponíveis](#scripts-disponíveis)
- [Idiomas e rotas](#idiomas-e-rotas)
- [Configuração institucional central](#configuração-institucional-central)
- [Como configurar o Calendly](#como-configurar-o-calendly)
- [Assets de marca (logo/símbolo/foto)](#assets-de-marca-logosímbolofoto)
- [Motion design e acessibilidade](#motion-design-e-acessibilidade)
- [Manutenção das traduções](#manutenção-das-traduções)
- [SEO técnico](#seo-técnico)
- [Testes, lint e build](#testes-lint-e-build)
- [Estratégia de deploy](#estratégia-de-deploy)
- [Checklist de publicação](#checklist-de-publicação)
- [Pendências que dependem do proprietário](#pendências-que-dependem-do-proprietário)

## Stack e decisões de arquitetura

- **[Astro](https://astro.build/)** — geração 100% estática, componentes
  reutilizáveis (`.astro`), zero JavaScript enviado ao navegador por padrão.
  Escolhido por ser a stack mais direta para um site de conteúdo bilíngue
  com pouquíssima interatividade, sem exigir um framework de UI completo
  (React/Vue) para o que é essencialmente uma landing page.
- **TypeScript** em todo o código (`.ts` e frontmatter dos componentes
  `.astro`), com `astro/tsconfigs/strict`.
- **CSS estruturado por design tokens** (`src/styles/tokens.css`), sem
  framework de utilitários — CSS nativo com variáveis, para manter o
  bundle mínimo e o controle total sobre a direção visual "Precisão
  Tecnológica".
- **JavaScript mínimo e opcional**: um único módulo
  (`src/scripts/enhance.ts`) cuida de três aprimoramentos progressivos
  (revelação por rolagem, abas acessíveis do explorador de desafios e
  progresso do método). Todo o conteúdo permanece funcional e legível sem
  ele — ver [Motion design e acessibilidade](#motion-design-e-acessibilidade).
- **Sem framework de UI (React/Preact/Vue)**: os componentes interativos
  são simples o suficiente para HTML semântico + um script pequeno, então
  não se justifica o custo de um runtime de componentes no cliente.
- **`@astrojs/sitemap`** gera o `sitemap-index.xml` automaticamente a partir
  das páginas estáticas.
- **Sem analytics, formulário de contato próprio ou embed do Calendly**
  nesta primeira versão, conforme escopo aprovado.

## Estrutura do projeto

```
├── public/                  # Arquivos estáticos servidos como estão
│   ├── brand/                # Assets de marca (ver seção dedicada)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/           # Componentes .astro (seções, layouts de página)
│   ├── config/
│   │   └── site.ts           # Configuração institucional central (ver abaixo)
│   ├── i18n/
│   │   ├── types.ts          # Contrato de conteúdo compartilhado PT/EN
│   │   ├── pt.ts / en.ts      # Dicionários de conteúdo
│   │   └── index.ts          # `getDictionary`, mapa de rotas equivalentes
│   ├── layouts/
│   │   └── BaseLayout.astro  # <head>, SEO, skip link, script de aprimoramento
│   ├── lib/
│   │   └── structuredData.ts # JSON-LD (Organization/ProfessionalService, Person)
│   ├── scripts/
│   │   └── enhance.ts        # Único script enviado ao navegador
│   ├── styles/
│   │   ├── tokens.css        # Design tokens (cores, espaçamento, motion)
│   │   └── global.css        # Reset, tipografia, utilitários, .reveal
│   └── pages/                 # Rotas do site (ver "Idiomas e rotas")
├── tests/                    # Testes unitários (Vitest)
├── astro.config.mjs
└── eslint.config.js
```

## Como rodar localmente

Pré-requisitos: Node.js 20+ e npm.

```bash
npm install
npm run dev       # http://localhost:4321
```

## Scripts disponíveis

| Script | Descrição |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Gera o site estático em `dist/` |
| `npm run preview` | Serve o build de `dist/` localmente |
| `npm run check` | `astro check` — valida tipos dentro dos componentes `.astro` |
| `npm run typecheck` | `tsc --noEmit` — valida os arquivos `.ts` |
| `npm run lint` | ESLint (JS/TS/Astro), zero warnings tolerados |
| `npm run format` | Formata o projeto com Prettier (+ plugin Astro) |
| `npm test` | Executa os testes unitários (Vitest) |

## Idiomas e rotas

Não há redirecionamento forçado por idioma. O alternador PT/EN fica sempre
visível no cabeçalho e no rodapé.

| Conteúdo | Português | English |
| --- | --- | --- |
| Landing page | `/` | `/en/` |
| Currículo interativo | `/rodolfo/` | `/en/rodolfo/` |
| Política de privacidade | `/privacidade/` | `/en/privacy/` |
| Termos de uso | `/termos/` | `/en/terms/` |
| Página 404 | `/404` (idioma padrão, com bloco também em inglês) | — |

O mapeamento entre rotas equivalentes vive em `src/i18n/index.ts`
(`routeMap`), usado tanto pelo alternador de idioma quanto pelas tags
`hreflang` geradas em `BaseLayout.astro`. Ao criar uma nova página
bilíngue, registre o par de caminhos ali.

## Configuração institucional central

Todos os dados de contato, integrações e informações legais ficam em
**`src/config/site.ts`** — é o único lugar que deve ser editado para
atualizar:

- E-mails comercial e geral;
- Número e mensagens pré-preenchidas do WhatsApp;
- URL do Calendly (`scheduling.eventUrl`, ver seção abaixo);
- Razão social, CNPJ e canal de privacidade;
- Link do LinkedIn.

Nenhum componente deve duplicar esses valores — sempre importe a partir
desse arquivo.

## Como configurar o Calendly

A URL pública do evento Calendly **ainda não existe** e não foi inventada
neste projeto. Enquanto isso, a seção final da landing page (`#scheduling`)
exibe um estado alternativo elegante com CTA por e-mail e WhatsApp.

Quando o evento estiver criado:

1. Abra `src/config/site.ts`.
2. Defina `scheduling.eventUrl` com a URL real, por exemplo:
   ```ts
   export const scheduling = {
     eventUrl: 'https://calendly.com/cloudme/conversa-inicial',
     // ...
   };
   ```
3. O componente `FinalCtaSection.astro` passa a exibir o botão que abre o
   Calendly **externamente** (`target="_blank"`), em vez do embed — decisão
   deliberada para reduzir cookies e complexidade, conforme solicitado.

As regras abaixo são configuradas **diretamente no Calendly** e apenas
documentadas aqui para fins informativos (o site não as controla):

- Evento: "Conversa inicial com a CloudMe" / "Initial conversation with CloudMe"
- Duração: 30 minutos
- Local: Google Meet
- Antecedência mínima: 24 horas
- Intervalo entre eventos: 15 minutos
- Limite: até 3 conversas por dia

## Assets de marca (logo/símbolo/foto)

Ver **`public/brand/README.md`** para o inventário completo e o passo a
passo de substituição.

Resumo: os anexos originais em CorelDRAW/rasterizados não estavam
disponíveis no ambiente de implementação, então os SVGs de
`public/brand/` são uma reconstrução vetorial própria (pontos conectados
formando uma nuvem), suficiente para uso imediato mas **provisória**. O
mesmo vale para o retrato de Rodolfo Rios na seção "Sobre"
(`rodolfo-placeholder.svg`) — não foi fabricada uma edição falsa da foto
"de terno" por não haver ferramenta de edição de imagem disponível; o
ponto exato de substituição está documentado nesse arquivo.

## Motion design e acessibilidade

- Direção "Precisão Tecnológica": paleta azul profundo / azul CloudMe /
  ciano / branco azulado / cinza frio, definida em `src/styles/tokens.css`.
- Animações usam apenas `transform` e `opacity` (revelação de blocos ao
  rolar, barra de progresso do método). Nenhum vídeo pesado ou efeito 3D.
- **`prefers-reduced-motion: reduce`** é respeitado em dois níveis:
  1. CSS: as transições de `.reveal` e as durações (`--duration-*` em
     `tokens.css`) são zeradas nessa preferência.
  2. JS: `src/scripts/enhance.ts` verifica a mesma media query antes de
     animar e, se necessário, apenas torna o conteúdo visível/ativo sem
     transição.
- **Sem JavaScript, o site continua funcional**: navegação por âncoras,
  FAQ com `<details>/<summary>` nativos, explorador de desafios com todos
  os painéis visíveis como lista simples (o JS apenas os transforma em
  abas ARIA reais), currículo imprimível via atalho do navegador.
- Não há tela de carregamento artificial.
- Skip link, `:focus-visible` consistente, `aria-current`, `role="tab"`
  com navegação por setas/Home/End, e alvos de toque com `min-height`/
  `min-width` de 44px.

## Manutenção das traduções

Todo o conteúdo textual vive em dois dicionários TypeScript tipados:
`src/i18n/pt.ts` e `src/i18n/en.ts`, ambos implementando a interface
`Dictionary` definida em `src/i18n/types.ts`.

- **Para adicionar um novo texto**: adicione a chave em `types.ts`
  primeiro; o TypeScript vai apontar erro em `pt.ts`/`en.ts` até que ambos
  sejam preenchidos, evitando que um idioma fique desatualizado.
- **A versão em inglês é uma adaptação, não uma tradução literal** — o
  tom, a ordem das frases e certas construções foram ajustados para soar
  natural em inglês, mantendo o mesmo significado e as mesmas afirmações
  aprovadas.
- Os testes em `tests/i18n.test.ts` verificam a paridade estrutural entre
  os dois idiomas (mesmo número de FAQs, abas do explorador, passos do
  método, serviços e seções legais), como uma rede de segurança contra
  esquecimentos ao editar apenas um dos arquivos.

## SEO técnico

- Títulos, descriptions, `canonical` e `hreflang` (`pt-BR`, `en`,
  `x-default`) por página, centralizados em `BaseLayout.astro`.
- Open Graph e Twitter Cards.
- `robots.txt` e `sitemap-index.xml` (gerado por `@astrojs/sitemap`).
- Dados estruturados JSON-LD `ProfessionalService` e `Person`
  (`src/lib/structuredData.ts`), com apenas propriedades reais — nenhum
  dado (avaliações, números, endereços) foi inventado.
- **Origem e prefixo atuais**: o site é publicado como GitHub Pages de
  projeto, então `siteOrigin` (`https://jrodolforios.github.io`) e
  `basePath` (`/cloudme-site`) ficam em `src/config/site.ts` e alimentam
  `site`/`base` em `astro.config.mjs`. Todos os links internos e assets
  passam por `withBase()` (`src/lib/paths.ts`). Ao migrar para o domínio
  final, troque `siteOrigin` e defina `basePath` como `''`.

## Testes, lint e build

```bash
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run check      # astro check
npm test           # Vitest
npm run build      # build estático de produção
```

Todos os comandos acima foram executados sem erros durante o
desenvolvimento deste projeto.

## Estratégia de deploy

O site é publicado automaticamente no **GitHub Pages** em
<https://jrodolforios.github.io/cloudme-site/>.

- O workflow `.github/workflows/deploy.yml` roda a cada `push` na branch
  `main` e também sob demanda (**Actions → Deploy to GitHub Pages → Run
  workflow**).
- Ele executa `npm ci`, lint, typecheck, testes e `npm run build`, envia
  `dist/` como artifact de Pages e faz o deploy com as actions oficiais
  (`actions/configure-pages`, `actions/upload-pages-artifact`,
  `actions/deploy-pages`).

**Passo manual necessário (uma única vez):** em **Settings → Pages →
Build and deployment → Source**, selecione **GitHub Actions**. Sem isso o
deploy falha porque o Pages ainda não está habilitado no repositório.

Para migrar para outra hospedagem ou domínio próprio, ajuste `siteOrigin`
e `basePath` em `src/config/site.ts` (o build continua sendo 100% estático
em `dist/`).

## Checklist de publicação

- [ ] Definir `scheduling.eventUrl` com a URL real do Calendly
- [ ] Substituir os SVGs de `public/brand/` pelos arquivos oficiais
      exportados do CorelDRAW (ver `public/brand/README.md`)
- [ ] Substituir `rodolfo-placeholder.svg` por uma foto real tratada
- [ ] Habilitar GitHub Pages com **Source: GitHub Actions** (Settings → Pages)
- [ ] Atualizar `siteOrigin`/`basePath` em `src/config/site.ts` com o domínio final
- [ ] Revisão jurídica da Política de Privacidade e dos Termos de Uso
- [ ] Confirmar número de WhatsApp Business e mensagens pré-preenchidas
- [ ] Rodar `npm run lint && npm run typecheck && npm test && npm run build`
- [ ] Validar Lighthouse (performance/acessibilidade/SEO) no ambiente final

## Pendências que dependem do proprietário

- **URL do Calendly**: evento ainda não criado (ver seção dedicada acima).
- **Assets de marca oficiais**: SVGs vetoriais definitivos exportados do
  arquivo `.CDR` original.
- **Foto profissional tratada** de Rodolfo Rios para a seção "Sobre".
- **Revisão jurídica** da Política de Privacidade e dos Termos de Uso
  antes da publicação definitiva.
