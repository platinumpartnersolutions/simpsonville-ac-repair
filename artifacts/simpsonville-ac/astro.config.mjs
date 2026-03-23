import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  integrations: [react()],
  output: 'static',
  trailingSlash: 'always',
  outDir: './dist/public',
  server: {
    port: parseInt(process.env.PORT || '4321'),
    host: '0.0.0.0',
  },
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      allowedHosts: ['.replit.dev', 'localhost', '127.0.0.1'],
    },
  },
});
