// <head> of the ElektroPflicht pages: title, description, canonical, hreflang
// for all 26 languages, Open Graph with the cover image of the language and
// schema.org (SoftwareApplication, breadcrumb).
import { COMPANY_LEGAL_NAME, SITE_URL } from "../../config";
import { absoluteUrl } from "../../site";
import { LOCALES, PRODUCT_LANGS, productPath, type ProductLang } from "./langs";
import { productContent } from "./store";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const json = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

export const APP_NAME = "ElektroPflicht: Batterie+WEEE";

export function productTitle(plang: ProductLang, docs: boolean) {
  const c = productContent(plang);
  return docs ? c.docsMetaTitle : c.metaTitle;
}

export function productHeadHtml(plang: ProductLang, docs: boolean): string {
  const c = productContent(plang);
  const title = docs ? c.docsMetaTitle : c.metaTitle;
  const description = docs ? c.docsMetaDescription : c.metaDescription;
  const url = absoluteUrl(productPath(plang, docs));
  const image = absoluteUrl(`/elektropflicht/${plang}/cover.webp`);
  const graph: Record<string, unknown>[] = [
    {
      "@type": "SoftwareApplication",
      "@id": `${absoluteUrl(productPath(plang))}#app`,
      name: APP_NAME,
      alternateName: "ElektroPflicht",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Shopify",
      description: c.metaDescription,
      image,
      inLanguage: PRODUCT_LANGS.map((l) => l),
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: c.facts[2] },
      publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Cronema", legalName: COMPANY_LEGAL_NAME },
    },
    {
      "@type": docs ? "TechArticle" : "WebPage",
      "@id": url,
      url,
      name: title,
      description,
      inLanguage: LOCALES[plang].replace("_", "-"),
      about: { "@id": `${absoluteUrl(productPath(plang))}#app` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Cronema", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "ElektroPflicht", item: absoluteUrl(productPath(plang)) },
        ...(docs ? [{ "@type": "ListItem", position: 3, name: c.docsLink, item: url }] : []),
      ],
    },
  ];
  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />`,
    `<link rel="canonical" href="${url}" />`,
    ...PRODUCT_LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${absoluteUrl(productPath(l, docs))}" />`),
    `<link rel="alternate" hreflang="x-default" href="${absoluteUrl(productPath("en", docs))}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Cronema" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="675" />`,
    `<meta property="og:locale" content="${LOCALES[plang]}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${json({ "@context": "https://schema.org", "@graph": graph })}</script>`,
  ];
  return tags.join("\n    ");
}
