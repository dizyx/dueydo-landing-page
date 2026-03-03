// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const locales = [
  'en', 'de', 'es', 'fr', 'it', 'pt', 'nl', 'pl',
  'sv', 'da', 'no', 'fi', 'cs', 'ro', 'hu', 'el',
  'bg', 'hr', 'sk', 'sl', 'et', 'lv', 'lt',
  'ja', 'ko', 'zh', 'ar', 'tr', 'hi',
];

// https://astro.build/config
export default defineConfig({
  site: 'https://dueydo.com',
  i18n: {
    defaultLocale: 'en',
    locales: locales,
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('invite'),
      i18n: {
        defaultLocale: 'en',
        locales: Object.fromEntries(locales.map(l => [l, l])),
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
