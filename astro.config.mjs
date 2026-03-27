import tailwindcss from '@tailwindcss/vite';
// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Segoe UI',
      cssVariable: '--font-base',
      formats: ['woff2'],
      options: {
        variants: [
          {
            weight: 400,
            style: 'normal',
            src: ['./src/assets/fonts/SegoeUI.woff'],
          },
          {
            weight: 500,
            style: 'normal',
            src: ['./src/assets/fonts/SegoeUI-Medium.ttf'],
          },
          {
            weight: 600,
            style: 'normal',
            src: ['./src/assets/fonts/SegoeUI-SemiBold.woff'],
          },
          {
            weight: 700,
            style: 'normal',
            src: ['./src/assets/fonts/SegoeUI-Bold.woff'],
          },
        ],
      },
    },
  ],

  vite: {
    plugins: [tailwindcss(), yaml()],
  },
});
