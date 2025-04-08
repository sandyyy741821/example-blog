import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://mainfrontendnet.netlify.app', 
  integrations: [mdx(), sitemap()],
  vite: {
    server: {
      host: true,
      port: 4321,
      strictPort: true,
    }
  },
  build: {

    outDir: './dist',
  },
  renderers: [
    mdx(),
  ],
  pages: [
    {
      path: '/blog/*', 
      component: './src/pages/blog/*.astro', 
    },
    {
      path: '/*', 
      component: './src/pages/*.astro', 
    },
  ],
});
