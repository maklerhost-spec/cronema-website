# Cronema – Website

Website von **Cronema (Cross Net Management)**, KI-Programmierschmiede aus München: cronema.com.
Statische Website, Vite + React + TypeScript + Tailwind CSS, kein Backend. Gleicher Aufbau wie bookique.app und work247.app.

## Seiten

| Seite | URL |
|---|---|
| Startseite | `/` |
| Leistungen (Übersicht) | `/leistungen/` |
| Websites & Landingpages | `/leistungen/websites/` |
| Erweiterungen (Shopify, GoHighLevel, HubSpot …) | `/leistungen/system-erweiterungen/` |
| Individualsoftware | `/leistungen/individualsoftware/` |
| KI-Agenten & Automatisierung | `/leistungen/ki-agenten/` |
| API-Schnittstellen | `/leistungen/api-schnittstellen/` |
| Hosting & Betrieb | `/leistungen/hosting-betrieb/` |
| Referenzen (work247, Bookique, GARAN-Label, ElektroPflicht) | `/referenzen/` |
| ElektroPflicht: Landingpage und Doku (26 Sprachen) | `/elektropflicht/`, `/elektropflicht/doku/`, `/<sprache>/elektropflicht/(docs/)` |
| Arbeitsweise mit Claude Code | `/arbeitsweise/` |
| Über uns | `/ueber-uns/` |
| Kontakt | `/kontakt/` |
| Impressum, Datenschutz | `/impressum/`, `/datenschutz/` |

## Sprachen

Die Website gibt es auf Deutsch (an der Wurzel, die bisherigen Adressen), Englisch (`/en/`), Französisch (`/fr/`)
und Spanisch (`/es/`), jeweils mit übersetzten Adressen (`src/site.ts`). Die deutschen Texte sind das Original
(`src/content/de/`), die Übersetzungen liegen in `src/content/en|fr|es/` und werden mit `scripts/i18n/` erzeugt
(`dump-de.ts` → `translate.py` → `write_ts.py`). Die Komponenten lesen die Texte über die bisherigen Namen
(`HOME`, `NAV`, `SERVICES` …); `src/lang.ts` liefert jeweils die Sprache der Seite.

Die ElektroPflicht-Seiten (`src/products/elektropflicht/`, `src/sections/Product.tsx`) gibt es in allen 26 Sprachen
der App. Kopf und Fuß erscheinen in der Seitensprache, wo es eine gibt, sonst auf Englisch. Die Texte je Sprache liegen in
`src/products/elektropflicht/content/<sprache>.json` (der Browser lädt nur die eigene Sprache), die Bilder in
`public/elektropflicht/<sprache>/`, die geprüften Behördenlinks in `src/products/elektropflicht/sources.ts`.

## Lokal starten

Node.js 18 oder neuer.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # Typprüfung, Build und Vorrendern nach dist/
npm run preview   # dist/ unter http://localhost:4173
```

**Das Vorrendern ist Teil von `vite build`** (Plugin in `vite.config.ts`), damit auch Bolt oder jeder Host, der nur
`vite build` ausführt, fertiges HTML ausliefert. Nach dem Browser-Build baut das Plugin ein Server-Bundle
(`src/entry-server.tsx`) und führt `scripts/prerender.mjs` aus: jede Seite als eigene `dist/<pfad>/index.html` mit
Titel, Beschreibung, Canonical, Open Graph und JSON-LD (schema.org), dazu `sitemap.xml`, `robots.txt`
(KI-Crawler erlaubt), `404.html`, `llms.txt` und `llms-full.txt`.

## In Bolt importieren (bolt.new)

**Variante A – von GitHub**

1. Auf [bolt.new](https://bolt.new) im Import-Menü **Import from GitHub** wählen und `maklerhost-spec/cronema-website` auswählen
   (oder direkt `https://bolt.new/~/github.com/maklerhost-spec/cronema-website` öffnen).
2. Bolt führt `npm install` und `npm run dev` selbst aus. Für die Veröffentlichung nutzt Bolt `npm run build` und den Ordner `dist/`.

**Variante B – als Zip**

1. Ordner ohne `node_modules/`, `dist/` und `.git/` zippen (z. B. `git archive -o cronema-website.zip HEAD`).
2. Zip in den Bolt-Chat ziehen und Bolt bitten, das Projekt zu starten.

Tipp für Prompts in Bolt: Alle Texte stehen in `src/content/*.ts`. Bitte Bolt, Texte dort zu ändern, nicht in den Komponenten.

## Kontaktformular → GoHighLevel

Das Formular auf `/kontakt/` sendet an die Netlify Function `netlify/functions/contact.mts`. Sie legt die Anfrage wie die
GARAN-Label-App über eine **GHL Private Integration** als Kontakt an (bzw. aktualisiert ihn per E-Mail), setzt die Tags
`website-anfrage`, `cronema-website` und `interesse-<leistung>` und speichert Thema, Firma, Telefon und Nachricht als Notiz.
Spam-Schutz wie bei work247.app: unsichtbares Honeypot-Feld, Mindest-Ausfüllzeit, Begrenzung je IP.

Einmalig einrichten (Netlify → Site configuration → Environment variables, bei Bolt-Hosting im verbundenen Netlify-Projekt):

| Variable | Wert |
|---|---|
| `GHL_PRIVATE_TOKEN` | Token einer Private Integration in der Cronema-Location (Scopes: Kontakte lesen und schreiben) |
| `GHL_LOCATION_ID` | ID der Cronema-Location |

Ohne diese Variablen antwortet die Funktion mit einem Fehler und das Formular zeigt den Hinweis mit der E-Mail-Adresse.
Lokal läuft die Funktion nur mit `npx netlify dev`; bei `npm run dev` wird das Formular angezeigt, kann aber nicht senden.
Liegt die Website nicht bei Netlify, kann `VITE_CONTACT_ENDPOINT` auf einen anderen Endpunkt zeigen, der dasselbe JSON annimmt.

## Wo was geändert wird

| Was | Wo |
|---|---|
| Domain, E-Mail, Telefon, Firmenname, Adresse, Google-Analytics-ID | `src/config.ts` (`GA_MEASUREMENT_ID` leer = keine Analyse) |
| Texte der Leistungsseiten | `src/content/services.ts` |
| Texte Startseite, Referenzen, Arbeitsweise, Über uns, Kontakt, Meta-Titel | `src/content/pages.ts` |
| Impressum und Datenschutz | `src/legal/content.ts` |
| Kontaktformular | `src/components/ContactForm.tsx`, Serverfunktion `netlify/functions/contact.mts` |
| Cookie-Banner | `src/consent.ts`, `src/components/ConsentBanner.tsx`, Texte in `src/content/consent.ts` |
| Grafiken (eigene SVG-Zeichnungen) | `src/graphics/ServiceArt.tsx` (je Leistung), `src/graphics/HeroArt.tsx` (Hero und Referenzen), Bausteine in `src/graphics/kit.tsx` |
| Logo | `public/logo.svg`, `public/logo-light.svg` (für dunkle Flächen), `public/favicon.svg`, `public/logo.png` (512 px); Original-Logo und erster Entwurf in `public/brand/` |
| Farben und Schriften | `tailwind.config.js` (`navy`, `accent` = Orange, `net` = Blau); Inter Tight + Inter lokal aus `public/fonts` |
| Vorschaubild für soziale Netzwerke | `public/og-image.png` (1200×630) |
| URLs und Seiten | `src/site.ts`, Leistungs-Slugs in `src/content/ids.ts` |

## Logo

Das Logo modernisiert das ursprüngliche Cronema-Zeichen (X im unterbrochenen Kreis): Der Ring steht für das Netz,
das Kreuz verbindet durch die Lücken nach außen, der orange Funke in der Mitte steht für KI. Slogan: **Cross Net Management**.
