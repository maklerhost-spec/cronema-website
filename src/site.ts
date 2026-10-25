import { SITE_URL } from "./config";
import { SERVICE_IDS, type ServiceId } from "./content/ids";
import { DEFAULT_LANG, getLang, isSiteLang, SITE_LANGS, type SiteLang } from "./lang";
import { chromeLang, isProductLang, PRODUCT_LANGS, PRODUCT_SLUG, productPath, type ProductLang } from "./products/elektropflicht/langs";

export const PAGES = ["home", "services", "service", "references", "approach", "about", "contact", "imprint", "privacy", "product", "productDocs"] as const;
export type Page = (typeof PAGES)[number];

type Segment = Exclude<Page, "home" | "service" | "product" | "productDocs">;

/** URL segment of each page per language. German keeps the original URLs at the root. */
const SEGMENTS: Record<SiteLang, Record<Segment, string>> = {
  de: { services: "leistungen", references: "referenzen", approach: "arbeitsweise", about: "ueber-uns", contact: "kontakt", imprint: "impressum", privacy: "datenschutz" },
  en: { services: "services", references: "references", approach: "approach", about: "about", contact: "contact", imprint: "imprint", privacy: "privacy" },
  fr: { services: "services", references: "references", approach: "methode", about: "a-propos", contact: "contact", imprint: "mentions-legales", privacy: "confidentialite" },
  es: { services: "servicios", references: "referencias", approach: "metodo", about: "sobre-nosotros", contact: "contacto", imprint: "aviso-legal", privacy: "privacidad" },
};

/** Service page slugs per language (/<services>/<slug>/). */
const SERVICE_SLUGS: Record<SiteLang, Record<ServiceId, string>> = {
  de: { websites: "websites", extensions: "system-erweiterungen", custom: "individualsoftware", agents: "ki-agenten", apis: "api-schnittstellen", hosting: "hosting-betrieb" },
  en: { websites: "websites", extensions: "system-extensions", custom: "custom-software", agents: "ai-agents", apis: "api-integrations", hosting: "hosting" },
  fr: { websites: "sites-web", extensions: "extensions", custom: "logiciel-sur-mesure", agents: "agents-ia", apis: "integrations-api", hosting: "hebergement" },
  es: { websites: "sitios-web", extensions: "extensiones", custom: "software-a-medida", agents: "agentes-ia", apis: "integraciones-api", hosting: "hosting" },
};

const prefix = (lang: SiteLang) => (lang === DEFAULT_LANG ? "" : `/${lang}`);

/** Path of a page in the given language (default: the current one). */
export function pathFor(page: Page = "home", id?: ServiceId, lang: SiteLang = getLang()): string {
  const p = prefix(lang);
  if (page === "home") return `${p}/`;
  if (page === "product" || page === "productDocs") return productPath(lang, page === "productDocs");
  if (page === "service") return `${p}/${SEGMENTS[lang].services}/${SERVICE_SLUGS[lang][id ?? "websites"]}/`;
  return `${p}/${SEGMENTS[lang][page]}/`;
}

export type Parsed = { lang: SiteLang; page: Page; id?: ServiceId; plang?: ProductLang };

export function parsePath(pathname: string): Parsed {
  const parts = pathname.toLowerCase().replace(/\/index\.html$/, "").split("/").filter(Boolean);
  // ElektroPflicht: /elektropflicht/(doku/) in German, /<lang>/elektropflicht/(docs/) otherwise.
  const pl = parts[0] === PRODUCT_SLUG ? "de" : parts[1] === PRODUCT_SLUG && isProductLang(parts[0]) ? parts[0] : null;
  if (pl) {
    const rest = pl === "de" ? parts[1] : parts[2];
    const docs = rest === "doku" || rest === "docs";
    return { lang: chromeLang(pl), page: docs ? "productDocs" : "product", plang: pl };
  }
  let lang: SiteLang = DEFAULT_LANG;
  if (parts[0] && isSiteLang(parts[0]) && parts[0] !== DEFAULT_LANG) lang = parts.shift() as SiteLang;
  const seg = SEGMENTS[lang];
  if (parts[0] === seg.services && parts[1]) {
    const id = SERVICE_IDS.find((s) => SERVICE_SLUGS[lang][s] === parts[1]);
    if (id) return { lang, page: "service", id };
  }
  const page = (Object.keys(seg) as Segment[]).find((p) => seg[p] === parts[0]);
  return { lang, page: page ?? "home" };
}

export function absoluteUrl(path: string): string {
  return SITE_URL.replace(/\/$/, "") + path;
}

export type Route = { lang: SiteLang; page: Page; id?: ServiceId; plang?: ProductLang; path: string };

/** Every route the prerender writes, in every language. */
export const ROUTES: Route[] = [
  ...SITE_LANGS.flatMap((lang) => [
    ...PAGES.filter((p) => p !== "service" && p !== "product" && p !== "productDocs").map((page) => ({ lang, page, path: pathFor(page, undefined, lang) })),
    ...SERVICE_IDS.map((id) => ({ lang, page: "service" as const, id, path: pathFor("service", id, lang) })),
  ]),
  ...PRODUCT_LANGS.flatMap((plang) => [
    { lang: chromeLang(plang), page: "product" as const, plang, path: productPath(plang) },
    { lang: chromeLang(plang), page: "productDocs" as const, plang, path: productPath(plang, true) },
  ]),
];
