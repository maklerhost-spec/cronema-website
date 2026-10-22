import { COMPANY_ADDRESS, COMPANY_LEGAL_NAME, CONTACT_EMAIL, PHONE_INTL, SITE_URL } from "./config";
import type { ServiceId } from "./content/ids";
import { SERVICE_IDS } from "./content/ids";
import { HOME, META, NAV, TEAM } from "./content/pages";
import { SERVICES } from "./content/services";
import { absoluteUrl, pathFor, type Page } from "./site";

/** Date of the last content change, for search engines (dateModified, sitemap lastmod). */
export const LAST_MODIFIED = "2026-10-22";

export function pageTitle(page: Page, id?: ServiceId): string {
  if (page === "service") return SERVICES[id!].metaTitle;
  return META[page].title;
}

export function pageDescription(page: Page, id?: ServiceId): string {
  if (page === "service") return SERVICES[id!].metaDescription;
  return META[page].description;
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const json = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");
const plain = (s: string) => s.replace(/\*\*([^*]+)\*\*/g, "$1");

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

const CRUMB_LABEL: Partial<Record<Page, string>> = {
  services: NAV.services,
  references: NAV.references,
  approach: NAV.approach,
  about: NAV.about,
  contact: NAV.contact,
  imprint: "Impressum",
  privacy: "Datenschutz",
};

/** schema.org graph: organisation (ProfessionalService), website, page, services, FAQ, breadcrumbs. */
function structuredData(page: Page, url: string, id?: ServiceId) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": ORG_ID,
      name: "Cronema",
      legalName: COMPANY_LEGAL_NAME,
      alternateName: "Cronema – Cross Net Management",
      slogan: "Cross Net Management",
      description: META.home.description,
      url: `${SITE_URL}/`,
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo.png"), width: 512, height: 512 },
      image: absoluteUrl("/og-image.png"),
      email: CONTACT_EMAIL,
      telephone: PHONE_INTL,
      address: { "@type": "PostalAddress", streetAddress: COMPANY_ADDRESS.street, postalCode: COMPANY_ADDRESS.zip, addressLocality: COMPANY_ADDRESS.city, addressCountry: "DE" },
      areaServed: ["DE", "AT", "CH"],
      knowsAbout: ["Softwareentwicklung", "Künstliche Intelligenz", "Claude Code", "Shopify-Apps", "GoHighLevel", "HubSpot", "n8n", "Make", "Zapier", "API-Integration", "Hetzner Cloud"],
      sameAs: ["https://work247.app", "https://bookique.app"],
      founder: { "@type": "Person", name: "Manfred Sandner", jobTitle: "Gründer und Geschäftsführer" },
      employee: TEAM.people.map((p) => ({ "@type": "Person", name: p.name, jobTitle: p.role, image: absoluteUrl(p.photo) })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: NAV.services,
        itemListElement: SERVICE_IDS.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: SERVICES[s].name, url: absoluteUrl(pathFor("service", s)) } })),
      },
    },
    { "@type": "WebSite", "@id": SITE_ID, url: `${SITE_URL}/`, name: "Cronema", inLanguage: "de", publisher: { "@id": ORG_ID } },
    {
      "@type": page === "about" ? "AboutPage" : page === "contact" ? "ContactPage" : "WebPage",
      "@id": url,
      url,
      name: pageTitle(page, id),
      description: pageDescription(page, id),
      inLanguage: "de",
      isPartOf: { "@id": SITE_ID },
      about: { "@id": ORG_ID },
      dateModified: LAST_MODIFIED,
    },
  ];

  const crumbs = [{ "@type": "ListItem", position: 1, name: "Start", item: absoluteUrl("/") }];
  if (page === "service") {
    const s = SERVICES[id!];
    crumbs.push({ "@type": "ListItem", position: 2, name: NAV.services, item: absoluteUrl(pathFor("services")) });
    crumbs.push({ "@type": "ListItem", position: 3, name: s.name, item: url });
    graph.push(
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: s.name,
        serviceType: s.name,
        description: s.metaDescription,
        provider: { "@id": ORG_ID },
        areaServed: "DE",
        url,
      },
      { "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: s.faq.map((q) => ({ "@type": "Question", name: q.q, acceptedAnswer: { "@type": "Answer", text: plain(q.a) } })) },
    );
  } else if (page !== "home") {
    crumbs.push({ "@type": "ListItem", position: 2, name: CRUMB_LABEL[page]!, item: url });
  }
  if (page === "home") {
    graph.push({ "@type": "FAQPage", "@id": `${url}#faq`, mainEntity: HOME.faq.items.map((q) => ({ "@type": "Question", name: q.q, acceptedAnswer: { "@type": "Answer", text: q.a } })) });
  } else {
    graph.push({ "@type": "BreadcrumbList", itemListElement: crumbs });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

/** Everything that goes into <head> for one route, as HTML. */
export function headHtml(page: Page, id?: ServiceId): string {
  const title = pageTitle(page, id);
  const description = pageDescription(page, id);
  const url = absoluteUrl(pathFor(page, id));
  const image = absoluteUrl("/og-image.png");
  const robots = "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    `<meta name="application-name" content="Cronema" />`,
    `<meta name="author" content="${esc(COMPANY_LEGAL_NAME)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" type="text/plain" title="Cronema für KI-Assistenten" href="${absoluteUrl("/llms.txt")}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Cronema" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="Cronema – KI-Programmierschmiede, Cross Net Management" />`,
    `<meta property="og:locale" content="de_DE" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<script type="application/ld+json">${json(structuredData(page, url, id))}</script>`,
  ];
  return tags.join("\n    ");
}
