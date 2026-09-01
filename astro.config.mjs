import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://danieldleao.github.io',
  base: '/RedLion',
  output: 'static',
  build: {
    format: 'directory'
  }
});
