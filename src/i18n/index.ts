import type { Translations } from './types';
import type { Locale } from './config';
import { defaultLocale } from './config';

/**
 * Eagerly import all locale JSON files at build time.
 * Astro's import.meta.glob with `eager: true` inlines them into the bundle.
 */
const translationModules = import.meta.glob<{ default: Translations }>(
  './locales/*.json',
  { eager: true }
);

/**
 * Build a lookup map: locale code → translations object.
 * File names are like "./locales/en.json" → key "en".
 */
const translations: Partial<Record<Locale, Translations>> = {};

for (const [path, mod] of Object.entries(translationModules)) {
  const locale = path.replace('./locales/', '').replace('.json', '') as Locale;
  translations[locale] = mod.default;
}

/**
 * Get translations for a given locale.
 * Falls back to English if the locale file is missing.
 */
export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations[defaultLocale]!;
}

// Re-export everything for convenience
export { type Translations } from './types';
export { locales, localeConfig, defaultLocale, getLocalePath, getCanonicalUrl } from './config';
export type { Locale, LocaleMeta } from './config';
