// Texts of one ElektroPflicht language. The prerender loads all languages at
// once (content.server.ts); the browser loads only the language of the page
// before hydrating (entry-client.tsx), so the bundle stays small.
import type { ProductLang } from "./langs";

export type ProductContent = {
  metaTitle: string;
  metaDescription: string;
  docsMetaTitle: string;
  docsMetaDescription: string;
  badge: string;
  title: string;
  subtitle: string;
  ctaDocs: string;
  ctaContact: string;
  facts: string[];
  featuresTitle: string;
  whyTitle: string;
  why: { title: string; text: string }[];
  langsTitle: string;
  langsText: string;
  upcomingNote: string;
  byCronema: string;
  docsLink: string;
  backToApp: string;
  language: string;
  imageAlt: string;
  tagline: string;
  features: { title: string; text: string; image: string }[];
  docs: {
    heading: string;
    intro: string;
    disclaimer: string;
    contents: string;
    sections: { id: string; title: string; body: string[] }[];
    faqHeading: string;
    faq: { q: string; a: string }[];
    sourcesHeading: string;
    euHeading: string;
    euIntro: string;
    law: Record<"batteryRegulation" | "weeeDirective" | "chargerDirective" | "dataAct", string>;
    ec: Record<"ecBatteries" | "ecWeee" | "ecCharger" | "ecDataAct", string>;
    inEnglish: string;
    countriesHeading: string;
    countriesIntro: string;
    types: Record<"battery" | "weee" | "both" | "retail", string>;
    englishVersion: string;
    noOfficial: string;
    liNote: string;
    lvNote: string;
    contactHeading: string;
    contactText: string;
    yourCountries: string;
    otherCountries: string;
    /** Country names in this language (written at build time, same on server and browser). */
    countryNames: Record<string, string>;
  };
};

const loaded = new Map<ProductLang, ProductContent>();

export function setProductContent(lang: ProductLang, content: ProductContent) {
  loaded.set(lang, content);
}

export function productContent(lang: ProductLang): ProductContent {
  const c = loaded.get(lang);
  if (!c) throw new Error(`ElektroPflicht texts for "${lang}" are not loaded`);
  return c;
}

/** Browser: loads one language (a separate small file per language). */
const lazy = import.meta.glob<{ default: ProductContent }>("./content/*.json");

export async function loadProductContent(lang: ProductLang) {
  if (loaded.has(lang)) return;
  const mod = await lazy[`./content/${lang}.json`]();
  setProductContent(lang, mod.default);
}
