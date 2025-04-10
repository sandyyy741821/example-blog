import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example-frontend-6xa.pages.dev',
  base: '/blog',
  integrations: [mdx(), sitemap()],
  vite: {
    server: {
      host: 'localhost', 
      port: 4321,        
      strictPort: true,  
    },
  },
  build: {
    outDir: './public', 
  },
});
