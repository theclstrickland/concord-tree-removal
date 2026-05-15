import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://concordtreeremovalpros.com',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
