import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { basePath, siteOrigin } from './src/config/site';

// Publicação atual: GitHub Pages de projeto em
// https://jrodolforios.github.io/cloudme-site/
// `site` recebe apenas a origem e `base` o prefixo do repositório; ambos vêm
// de `src/config/site.ts` para que os links internos usem o mesmo valor.

export default defineConfig({
  site: siteOrigin,
  base: basePath,
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
