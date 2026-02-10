import tailwindcss from '@tailwindcss/vite';
// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Noto Sans',
        cssVariable: '--font-base',
        formats: ['woff2', 'woff'],
		weights: [400, 500, 600, 700],
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
