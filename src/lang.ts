// Site languages. German stays at the root (the original URLs), the others
// live under /en/, /fr/ and /es/. The current language is set once per render
// (prerender: per route, browser: from the URL) before any text is read.

export const SITE_LANGS = ["de", "en", "fr", "es"] as const;
export type SiteLang = (typeof SITE_LANGS)[number];
export const DEFAULT_LANG: SiteLang = "de";

export const LANG_META: Record<SiteLang, { name: string; short: string; locale: string; og: string }> = {
  de: { name: "Deutsch", short: "DE", locale: "de-DE", og: "de_DE" },
  en: { name: "English", short: "EN", locale: "en-US", og: "en_US" },
  fr: { name: "Français", short: "FR", locale: "fr-FR", og: "fr_FR" },
  es: { name: "Español", short: "ES", locale: "es-ES", og: "es_ES" },
};

export const isSiteLang = (value: string): value is SiteLang => (SITE_LANGS as readonly string[]).includes(value);

let current: SiteLang = DEFAULT_LANG;

export function setLang(lang: SiteLang) {
  current = lang;
}

export function getLang(): SiteLang {
  return current;
}

/**
 * One value per language behind a single name: reading `HOME.hero` returns
 * the hero of the current language. Lets the components keep importing
 * `HOME`, `NAV` and the like unchanged.
 */
export function localized<T extends object>(byLang: Record<SiteLang, T>): T {
  const pick = () => byLang[current] as object;
  return new Proxy(byLang.de as object, {
    get: (_, prop) => Reflect.get(pick(), prop),
    has: (_, prop) => Reflect.has(pick(), prop),
    ownKeys: () => Reflect.ownKeys(pick()),
    getOwnPropertyDescriptor: (_, prop) => {
      const d = Reflect.getOwnPropertyDescriptor(pick(), prop);
      return d ? { ...d, configurable: true } : undefined;
    },
  }) as T;
}
