import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domínio público provisório: substitua por `site.cloudme.com.br` (ou domínio final)
// antes da publicação. Usado para URLs canônicas, sitemap e Open Graph.
const SITE_URL = 'https://www.cloudme.com.br';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
