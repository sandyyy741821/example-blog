import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],
  vite: {
    server: {
      host: true,
      port: 4321,
      strictPort: true,
      // https: {
      //   key: fs.readFileSync(path.resolve(__dirname, 'example.com+2-key.pem')),
      //   cert: fs.readFileSync(path.resolve(__dirname, 'example.com+2-cert.pem')),
      // },
      allowedHosts: ['example.com','sub.example.com'],
    }
  }
  
});
