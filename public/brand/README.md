# Assets de marca — status e substituição

Este diretório (`public/brand/`) contém **assets provisórios**, criados
diretamente neste repositório como uma reconstrução vetorial simples da
identidade CloudMe, pois os anexos originais em CorelDRAW/rasterizados
enviados durante o planejamento não estavam disponíveis no ambiente de
implementação (apenas descrições visuais foram usadas como referência).

## O que existe hoje

| Arquivo | Uso | Status |
| --- | --- | --- |
| `symbol.svg` | Símbolo isolado (azul), usado como favicon e ícone | Provisório |
| `symbol-white.svg` | Símbolo isolado em branco, para fundos escuros | Provisório |
| `logo-compact.svg` | Símbolo + "CloudMe" | Provisório |
| `logo-horizontal.svg` | Símbolo + "CloudMe" + "por Rodolfo Rios" | Provisório |
| `rodolfo-placeholder.svg` | Retrato provisório (iniciais "RR") usado na seção Sobre | Provisório — **não é uma foto real** |

Todos os SVGs acima são desenhos vetoriais originais (pontos conectados
formando uma nuvem), criados para manter a identidade utilizável sem
depender de arquivos rasterizados de baixa qualidade. Eles **não** são uma
cópia da logo oficial em CorelDRAW.

## Como substituir pelos assets oficiais

1. No CorelDRAW, converta os textos para curvas em uma cópia do arquivo
   (mantenha o `.CDR` original editável).
2. Exporte, para cada versão da marca (principal, compacta, símbolo,
   negativa):
   - **SVG** com fundo transparente (formato preferencial);
   - PNG transparente em alta resolução (2000–3000px de largura) como
     alternativa/fallback.
3. Substitua os arquivos deste diretório mantendo os **mesmos nomes**, para
   que nenhum componente precise ser alterado. Caso os nomes mudem, atualize
   as referências em `src/components/`.
4. Gere um novo favicon a partir do símbolo oficial (o arquivo
   `public/favicon.svg` é uma cópia de `public/brand/symbol.svg`).

## Sobre a foto de Rodolfo Rios

A foto profissional original (LinkedIn) não pôde ser processada de forma
segura neste ambiente (não há ferramenta de edição de imagem disponível, e
não devemos fabricar uma edição falsa "com terno" sem uma ferramenta
adequada). Por isso, a seção "Sobre" usa um retrato vetorial provisório
(`rodolfo-placeholder.svg`) com as iniciais "RR".

**Ponto de substituição:** troque a referência de imagem no componente
`src/components/AboutSection.astro` por um arquivo de foto real (ex.:
`public/brand/rodolfo.jpg`), idealmente já recortada e tratada
visualmente (recorte quadrado ou retrato, boa iluminação, fundo neutro),
mantendo as dimensões explícitas (`width`/`height`) para evitar layout
shift.
