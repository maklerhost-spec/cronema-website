// ElektroPflicht pages (landing page and documentation) exist in all 26
// languages of the app. German lives at /elektropflicht/, every other language
// at /<lang>/elektropflicht/. Header and footer use the site language where
// there is one (de, en, fr, es) and English otherwise.
import { isSiteLang, type SiteLang } from "../../lang";

export const PRODUCT_LANGS = [
  "de", "en", "bg", "cs", "da", "el", "es", "et", "fi", "fr", "ga", "hr", "hu",
  "is", "it", "lt", "lv", "mt", "nb", "nl", "pl", "pt", "ro", "sk", "sl", "sv",
] as const;
export type ProductLang = (typeof PRODUCT_LANGS)[number];

export const isProductLang = (value: string): value is ProductLang =>
  (PRODUCT_LANGS as readonly string[]).includes(value);

/** Each language's name in itself (Chrome lacks some, so they are fixed here). */
export const AUTONYMS: Record<ProductLang, string> = {
  de: "Deutsch", en: "English", bg: "Български", cs: "Čeština", da: "Dansk", el: "Ελληνικά",
  es: "Español", et: "Eesti", fi: "Suomi", fr: "Français", ga: "Gaeilge", hr: "Hrvatski",
  hu: "Magyar", is: "Íslenska", it: "Italiano", lt: "Lietuvių", lv: "Latviešu", mt: "Malti",
  nb: "Norsk bokmål", nl: "Nederlands", pl: "Polski", pt: "Português", ro: "Română",
  sk: "Slovenčina", sl: "Slovenščina", sv: "Svenska",
};

/** hreflang / og:locale per language. */
export const LOCALES: Record<ProductLang, string> = {
  de: "de_DE", en: "en_US", bg: "bg_BG", cs: "cs_CZ", da: "da_DK", el: "el_GR", es: "es_ES",
  et: "et_EE", fi: "fi_FI", fr: "fr_FR", ga: "ga_IE", hr: "hr_HR", hu: "hu_HU", is: "is_IS",
  it: "it_IT", lt: "lt_LT", lv: "lv_LV", mt: "mt_MT", nb: "nb_NO", nl: "nl_NL", pl: "pl_PL",
  pt: "pt_PT", ro: "ro_RO", sk: "sk_SK", sl: "sl_SI", sv: "sv_SE",
};

export const PRODUCT_SLUG = "elektropflicht";

/** Language of header and footer on a product page. */
export const chromeLang = (lang: ProductLang): SiteLang => (isSiteLang(lang) ? lang : "en");

export function productPath(lang: ProductLang, docs = false): string {
  const base = lang === "de" ? `/${PRODUCT_SLUG}/` : `/${lang}/${PRODUCT_SLUG}/`;
  return docs ? `${base}${lang === "de" ? "doku" : "docs"}/` : base;
}
