import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://nadinadiaz.github.io',
  base: '/', 
  output: 'static',
  integrations: [react()]
});
