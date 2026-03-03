/**
 * Locale metadata for every supported language.
 * Copied verbatim from dizyx.com — shared across all dizyx projects.
 */
export interface LocaleMeta {
  /** Native language name shown in the language switcher */
  name: string;
  /** og:locale format (e.g. "de_DE") */
  ogLocale: string;
  /** Text direction */
  dir: 'ltr' | 'rtl';
  /** Optional extra font-family hint for CJK / Devanagari */
  fontHint?: string;
}

export const locales = [
  'en', 'de', 'es', 'fr', 'it', 'pt', 'nl', 'pl',
  'sv', 'da', 'no', 'fi', 'cs', 'ro', 'hu', 'el',
  'bg', 'hr', 'sk', 'sl', 'et', 'lv', 'lt',
  'ja', 'ko', 'zh', 'ar', 'tr', 'hi',
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeConfig: Record<Locale, LocaleMeta> = {
  en: { name: 'English',     ogLocale: 'en_US', dir: 'ltr' },
  de: { name: 'Deutsch',     ogLocale: 'de_DE', dir: 'ltr' },
  es: { name: 'Español',     ogLocale: 'es_ES', dir: 'ltr' },
  fr: { name: 'Français',    ogLocale: 'fr_FR', dir: 'ltr' },
  it: { name: 'Italiano',    ogLocale: 'it_IT', dir: 'ltr' },
  pt: { name: 'Português',   ogLocale: 'pt_PT', dir: 'ltr' },
  nl: { name: 'Nederlands',  ogLocale: 'nl_NL', dir: 'ltr' },
  pl: { name: 'Polski',      ogLocale: 'pl_PL', dir: 'ltr' },
  sv: { name: 'Svenska',     ogLocale: 'sv_SE', dir: 'ltr' },
  da: { name: 'Dansk',       ogLocale: 'da_DK', dir: 'ltr' },
  no: { name: 'Norsk',       ogLocale: 'nb_NO', dir: 'ltr' },
  fi: { name: 'Suomi',       ogLocale: 'fi_FI', dir: 'ltr' },
  cs: { name: 'Čeština',     ogLocale: 'cs_CZ', dir: 'ltr' },
  ro: { name: 'Română',      ogLocale: 'ro_RO', dir: 'ltr' },
  hu: { name: 'Magyar',      ogLocale: 'hu_HU', dir: 'ltr' },
  el: { name: 'Ελληνικά',    ogLocale: 'el_GR', dir: 'ltr' },
  bg: { name: 'Български',   ogLocale: 'bg_BG', dir: 'ltr' },
  hr: { name: 'Hrvatski',    ogLocale: 'hr_HR', dir: 'ltr' },
  sk: { name: 'Slovenčina',  ogLocale: 'sk_SK', dir: 'ltr' },
  sl: { name: 'Slovenščina', ogLocale: 'sl_SI', dir: 'ltr' },
  et: { name: 'Eesti',       ogLocale: 'et_EE', dir: 'ltr' },
  lv: { name: 'Latviešu',    ogLocale: 'lv_LV', dir: 'ltr' },
  lt: { name: 'Lietuvių',    ogLocale: 'lt_LT', dir: 'ltr' },
  ja: { name: '日本語',       ogLocale: 'ja_JP', dir: 'ltr', fontHint: '"Hiragino Kaku Gothic ProN", "Yu Gothic", "Noto Sans JP", sans-serif' },
  ko: { name: '한국어',       ogLocale: 'ko_KR', dir: 'ltr', fontHint: '"Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", sans-serif' },
  zh: { name: '中文',         ogLocale: 'zh_CN', dir: 'ltr', fontHint: '"PingFang SC", "Microsoft YaHei", "Noto Sans SC", sans-serif' },
  ar: { name: 'العربية',     ogLocale: 'ar_SA', dir: 'rtl' },
  tr: { name: 'Türkçe',      ogLocale: 'tr_TR', dir: 'ltr' },
  hi: { name: 'हिन्दी',       ogLocale: 'hi_IN', dir: 'ltr', fontHint: '"Noto Sans Devanagari", "Mangal", sans-serif' },
};

/**
 * Returns the URL path prefix for a locale.
 * English (default) has no prefix; others get "/{locale}".
 */
export function getLocalePath(locale: Locale): string {
  return locale === defaultLocale ? '' : `/${locale}`;
}

/**
 * Returns the full canonical URL for a locale.
 */
export function getCanonicalUrl(locale: Locale): string {
  const base = 'https://dueydo.com';
  return locale === defaultLocale ? `${base}/` : `${base}/${locale}/`;
}
