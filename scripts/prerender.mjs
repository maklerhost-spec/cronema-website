// Runs after both Vite builds and writes into dist/:
//   one static HTML file per page, 404.html (noindex), sitemap.xml, robots.txt
//   (search engines and AI crawlers welcome), llms.txt and llms-full.txt (summary for AI systems).
// All texts come from the same content files as the website.
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const server = await import(pathToFileURL(join(root, "dist-server", "entry-server.js")).href);
const { render, ROUTES, absoluteUrl, pathFor, LAST_MODIFIED, SERVICES, SERVICE_IDS, HOME, REFERENCES, META, APPROACH_PAGE, ABOUT_PAGE, TEAM, CONTACT_EMAIL, PHONE_DISPLAY, COMPANY_LEGAL_NAME } = server;

const template = await readFile(join(dist, "index.html"), "utf8");
if (!template.includes("<!--app-html-->") || !template.includes("<!--app-head-->")) {
  throw new Error("dist/index.html has no <!--app-head--> / <!--app-html--> placeholders");
}
const pageHtml = (path) => {
  const { html, head } = render(path);
  return template.replace("<!--app-head-->", head).replace("<!--app-html-->", html);
};

// 1. Pages
for (const route of ROUTES) {
  const file = join(dist, route.path, "index.html");
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, pageHtml(route.path));
}

// 2. 404: the home page, not indexed
await writeFile(
  join(dist, "404.html"),
  pageHtml("/").replace(/<meta name="robots" content="[^"]*" \/>/, '<meta name="robots" content="noindex, follow" />').replace(/<link rel="canonical"[^>]*>/, ""),
);

// 3. Sitemap
const priority = (r) => (r.page === "home" ? "1.0" : r.page === "service" || r.page === "services" ? "0.9" : r.page === "imprint" || r.page === "privacy" ? "0.2" : "0.7");
const urls = ROUTES.map((r) => `  <url>\n    <loc>${absoluteUrl(r.path)}</loc>\n    <lastmod>${LAST_MODIFIED}</lastmod>\n    <priority>${priority(r)}</priority>\n  </url>`);
await writeFile(join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);

// 4. robots.txt
const bots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "Claude-User", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bingbot", "CCBot"];
await writeFile(
  join(dist, "robots.txt"),
  `# Cronema – search engines and AI assistants are welcome\nUser-agent: *\nAllow: /\n\n# AI search and AI assistants\n${bots.map((b) => `User-agent: ${b}\nAllow: /\n`).join("\n")}\nSitemap: ${absoluteUrl("/sitemap.xml")}\n`,
);

// 5. llms.txt and llms-full.txt (German, from the site texts)
const plain = (t) => t.replace(/\*\*([^*]+)\*\*/g, "$1");
const llms = `# Cronema

> ${META.home.description}

Cronema (Cross Net Management) ist eine KI-Programmierschmiede aus München (${COMPANY_LEGAL_NAME}). Sie entwickelt für kleine und mittlere Unternehmen Websites, Erweiterungen für Shopify, GoHighLevel und HubSpot, individuelle Software, KI-Agenten mit n8n, Make und Zapier sowie API-Schnittstellen. Entwickelt wird mit KI, vor allem mit Claude Code. Die Systeme laufen auf eigenen Hetzner-Cloud-Servern in Deutschland; die Hosting-Kosten wachsen mit dem Erfolg der Kunden.

## Leistungen
${SERVICE_IDS.map((id) => `- [${SERVICES[id].name}](${absoluteUrl(pathFor("service", id))}): ${SERVICES[id].metaDescription}`).join("\n")}

## Referenzen
${REFERENCES.map((r) => `- ${r.name} (${r.platform})${r.url ? ` – ${r.url}` : ""}: ${r.text}`).join("\n")}

## Seiten
- [Referenzen](${absoluteUrl(pathFor("references"))})
- [Arbeitsweise mit Claude Code](${absoluteUrl(pathFor("approach"))})
- [Über Cronema](${absoluteUrl(pathFor("about"))})
- [Kontakt](${absoluteUrl(pathFor("contact"))})
- [Impressum](${absoluteUrl(pathFor("imprint"))})
- [Datenschutz](${absoluteUrl(pathFor("privacy"))})
- [Volltext für KI-Systeme](${absoluteUrl("/llms-full.txt")})

## Kontakt
- E-Mail: ${CONTACT_EMAIL}
- Telefon: ${PHONE_DISPLAY}
`;
await writeFile(join(dist, "llms.txt"), llms);

const serviceText = (s) =>
  [
    `## ${s.h1}`,
    `Quelle: ${absoluteUrl(pathFor("service", s.id))}`,
    s.claim,
    s.intro.map(plain).join("\n\n"),
    `### ${s.benefitsTitle}`,
    s.benefits.map((b) => `- ${b.title}: ${b.text}`).join("\n"),
    `### ${s.examplesTitle}`,
    s.examples.map((b) => `- ${b.title}: ${b.text}`).join("\n"),
    `### ${s.stepsTitle}`,
    s.steps.map((b, i) => `${i + 1}. ${b.title}: ${b.text}`).join("\n"),
    `### ${s.techTitle}`,
    s.tech.join(", "),
    `### ${s.highlight.title}`,
    s.highlight.text,
    `### Häufige Fragen`,
    s.faq.map((f) => `**${f.q}** ${f.a}`).join("\n\n"),
  ].join("\n\n");

const full = `${llms}
# Leistungen im Detail

${SERVICE_IDS.map((id) => serviceText(SERVICES[id])).join("\n\n")}

# Referenzen im Detail

${REFERENCES.map((r) => `## ${r.name}: ${r.title}\n\n${r.story.join("\n\n")}`).join("\n\n")}

# Arbeitsweise

${APPROACH_PAGE.intro.map(plain).join("\n\n")}

${APPROACH_PAGE.principles.map((p) => `- ${p.title}: ${p.text}`).join("\n")}

${APPROACH_PAGE.process.map((p, i) => `${i + 1}. ${p.title}: ${p.text}`).join("\n")}

# Über Cronema

${ABOUT_PAGE.intro.map(plain).join("\n\n")}

${ABOUT_PAGE.mission.join("\n\n")}

## Team

${TEAM.people.map((p) => `### ${p.name}, ${p.role}\n\n${p.text.join("\n\n")}\n\nSchwerpunkte: ${p.focus.join(", ")}`).join("\n\n")}

# Häufige Fragen

${HOME.faq.items.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}
`;
await writeFile(join(dist, "llms-full.txt"), full);

await rm(join(root, "dist-server"), { recursive: true, force: true });
console.log(`Prerendered ${ROUTES.length} pages + 404 · sitemap.xml · robots.txt · llms.txt · llms-full.txt`);
