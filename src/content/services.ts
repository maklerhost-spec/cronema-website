// The six services: card texts for the homepage and the full text of each service page.
// Texts with **bold** are rendered as <strong>.
import type { ServiceId } from "./ids";

type Text = { title: string; text: string };

export type Service = {
  id: ServiceId;
  /** Short name for navigation, footer and cards */
  name: string;
  /** Eyebrow above the card title */
  tag: string;
  /** Card on the homepage */
  card: { title: string; text: string; bullets: string[] };
  /** Service page */
  metaTitle: string;
  metaDescription: string;
  h1: string;
  claim: string;
  intro: string[];
  benefitsTitle: string;
  benefits: Text[];
  examplesTitle: string;
  examples: Text[];
  stepsTitle: string;
  steps: Text[];
  techTitle: string;
  tech: string[];
  highlight: { title: string; text: string };
  faq: { q: string; a: string }[];
};

export const SERVICES: Record<ServiceId, Service> = {
  websites: {
    id: "websites",
    name: "Websites & Landingpages",
    tag: "Sichtbar werden",
    card: {
      title: "Websites, die verkaufen und gefunden werden",
      text: "Von der schlanken Landingpage bis zum mehrsprachigen Firmenauftritt: schnell, suchmaschinen- und KI-freundlich, auf Wunsch mit Anbindung an Ihr CRM.",
      bullets: ["Eigene Texte, Grafiken und Logo-Entwicklung", "Vorgerendert für Google und KI-Suchmaschinen", "Import in Bolt oder Hosting auf Ihrem Server"],
    },
    metaTitle: "Website erstellen lassen mit KI – schnell, individuell, SEO-stark | Cronema",
    metaDescription:
      "Cronema erstellt Websites und Landingpages für kleine und mittlere Unternehmen: eigene Texte und Grafiken, vorgerendert für Google und KI-Suche, DSGVO-konform, mit CRM-Anbindung.",
    h1: "Websites und Landingpages, die für Sie arbeiten",
    claim: "Ihr Auftritt im Netz: schnell gebaut, sauber umgesetzt, von Suchmaschinen und KI-Assistenten gleichermaßen verstanden.",
    intro: [
      "Eine Website ist heute mehr als eine digitale Visitenkarte. Sie ist Vertriebskanal, Wissensquelle für KI-Assistenten wie ChatGPT, Claude oder Perplexity und oft der erste Kontakt mit einem neuen Kunden. Trotzdem sind viele Firmenseiten langsam, veraltet und von Baukasten-Vorlagen kaum zu unterscheiden.",
      "Wir bauen Websites mit modernen Werkzeugen (React, Vite, Tailwind CSS) und mit KI-Unterstützung durch Claude Code. Das bedeutet für Sie: **eigene Texte statt Füllwörter, eigene Grafiken statt Stockfotos** und eine technische Basis, die auch in fünf Jahren noch schnell ist. Jede Seite wird beim Bauen vorgerendert, sodass Google und KI-Crawler den vollständigen Inhalt sofort sehen.",
      "Genau so sind die Websites von work247.app und bookique.app entstanden: mehrsprachig, mit strukturierten Daten, llms.txt für KI-Systeme, Einwilligungsbanner und einer Dokumentation mit Dutzenden Kapiteln. Was wir für unsere eigenen Produkte bauen, bauen wir auch für Sie.",
    ],
    benefitsTitle: "Was Ihre neue Website mitbringt",
    benefits: [
      { title: "Inhalte mit Substanz", text: "Wir schreiben die Texte mit Ihnen gemeinsam: verständlich, fachlich korrekt und auf die Fragen Ihrer Kunden ausgerichtet. Keine austauschbaren Werbefloskeln." },
      { title: "Eigene Grafiken", text: "Statt Stockfotos zeichnen wir Grafiken, die Ihre Leistungen und Produkte wirklich zeigen. Als SVG gestochen scharf auf jedem Bildschirm und federleicht." },
      { title: "Gefunden werden, auch von KI", text: "Vorgerenderte Seiten, saubere Überschriften, strukturierte Daten nach schema.org, Sitemap und llms.txt: Suchmaschinen und KI-Assistenten verstehen, was Sie anbieten." },
      { title: "Schnell auf jedem Gerät", text: "Lokal ausgelieferte Schriften, optimierte Bilder und kein unnötiger Code. Die Seite lädt schnell, auch unterwegs mit schwachem Netz." },
      { title: "Datenschutz eingebaut", text: "Einwilligungsbanner nach TDDDG, Analyse nur nach Zustimmung, Schriften ohne Google-Server, Impressum und Datenschutzerklärung als feste Bestandteile." },
      { title: "Mehrsprachig, wenn Sie es brauchen", text: "Jede Sprache mit eigener Adresse, hreflang-Verweisen und übersetzten Metadaten. So erreichen Sie Kunden in ihrer Sprache." },
    ],
    examplesTitle: "Typische Projekte",
    examples: [
      { title: "Firmenwebsite für den Mittelstand", text: "Leistungen, Referenzen, Team, Karriere und Kontakt. Klar gegliedert, mit eigenen Texten und Grafiken." },
      { title: "Produkt- und App-Websites", text: "Wie bei bookique.app und work247.app: Funktionsübersicht, Preise, Dokumentation und Landingpages für jede Zielgruppe." },
      { title: "Landingpages für Kampagnen", text: "Eine Seite, ein Ziel: Anfrage, Termin oder Kauf. Mit Anbindung an Ihr CRM, damit jeder Lead sofort ankommt." },
      { title: "Relaunch bestehender Seiten", text: "Wir übernehmen Inhalte, richten Weiterleitungen alter Adressen ein und sorgen dafür, dass Ihre Sichtbarkeit beim Umzug nicht verloren geht." },
    ],
    stepsTitle: "So entsteht Ihre Website",
    steps: [
      { title: "Ziel und Inhalte klären", text: "Wen wollen Sie erreichen, was sollen Besucher tun? Wir sammeln Ihr Wissen und Ihre Unterlagen." },
      { title: "Entwurf in wenigen Tagen", text: "Sie sehen früh eine echte, klickbare Seite statt statischer Bilder und geben direkt Rückmeldung." },
      { title: "Texte, Grafiken, Feinschliff", text: "Wir schreiben, zeichnen und optimieren, bis jede Seite sitzt. Technisch geprüft und vorgerendert." },
      { title: "Veröffentlichen", text: "Auf Ihrem Server, bei Netlify oder als GitHub-Projekt zum Import in Bolt, ganz wie Sie möchten." },
    ],
    techTitle: "Technik und Werkzeuge",
    tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Vorrendern (SSG)", "schema.org", "llms.txt", "Bolt", "Netlify", "Hetzner"],
    highlight: {
      title: "Auf Wunsch zum Selbstbearbeiten in Bolt",
      text: "Wir legen Ihre Website als GitHub-Projekt an, das Sie direkt in Bolt importieren können. So ändern Sie Texte später selbst per KI-Prompt, ohne auf uns warten zu müssen. Wenn es komplexer wird, sind wir da.",
    },
    faq: [
      { q: "Wie lange dauert eine neue Website?", a: "Ein erster klickbarer Entwurf steht meist innerhalb weniger Tage. Wie lange es bis zum Start dauert, hängt vor allem vom Umfang der Inhalte ab. Eine Landingpage ist oft in ein bis zwei Wochen live, ein großer Firmenauftritt braucht entsprechend länger." },
      { q: "Schreibt ihr auch die Texte?", a: "Ja. Wir erarbeiten die Texte mit Ihnen auf Basis Ihrer Unterlagen und Gespräche. KI hilft uns beim Formulieren, die fachliche Prüfung und die Freigabe liegen bei Ihnen." },
      { q: "Kann ich die Website später selbst ändern?", a: "Ja. Entweder über den Import in Bolt, wo Sie Änderungen per Prompt beschreiben, oder wir bauen Ihnen einfache Bearbeitungsmöglichkeiten ein. Größere Erweiterungen übernehmen wir gerne." },
      { q: "Was bedeutet „vorgerendert“?", a: "Jede Seite liegt als fertige HTML-Datei mit allen Texten vor. Suchmaschinen und KI-Crawler müssen kein JavaScript ausführen, um den Inhalt zu sehen. Das verbessert Auffindbarkeit und Ladezeit." },
      { q: "Wird meine Website an ein CRM angebunden?", a: "Wenn Sie möchten, ja. Formulare und Anfragen können direkt in GoHighLevel, HubSpot oder Ihr eigenes System laufen, inklusive automatischer Folgeaktionen." },
    ],
  },

  extensions: {
    id: "extensions",
    name: "Erweiterungen für Ihre Systeme",
    tag: "Bestehendes erweitern",
    card: {
      title: "Apps und Erweiterungen für Shopify, GoHighLevel, HubSpot & Co.",
      text: "Ihr System kann fast alles, nur nicht genau das, was Sie brauchen? Wir bauen die fehlende Funktion als eigene App, nahtlos integriert.",
      bullets: ["Shopify-Apps und Theme-Erweiterungen", "GoHighLevel-Marketplace-Apps und Custom Objects", "HubSpot, WordPress und weitere Plattformen"],
    },
    metaTitle: "Shopify-App, GoHighLevel-App & HubSpot-Erweiterung entwickeln lassen | Cronema",
    metaDescription:
      "Eigene Apps und Erweiterungen für Shopify, GoHighLevel, HubSpot und andere Systeme. Cronema entwickelt mit KI-Unterstützung, was Standardsoftware fehlt. Referenzen: work247, Bookique, GARAN-Label.",
    h1: "Erweiterungen für die Systeme, die Sie schon nutzen",
    claim: "Sie müssen Ihr CRM oder Ihren Shop nicht wechseln. Wir bauen die Funktion, die fehlt, direkt hinein.",
    intro: [
      "Shopify, GoHighLevel, HubSpot und ähnliche Plattformen sind hervorragende Fundamente. Sie decken 80 Prozent dessen ab, was ein Unternehmen braucht. Die restlichen 20 Prozent sind aber oft genau das, was Sie von Ihren Mitbewerbern unterscheidet: ein besonderer Buchungsablauf, eine branchenspezifische Datenstruktur, eine gesetzliche Pflichtangabe oder der Abgleich mit einem Fachsystem.",
      "Für diese Lücke gab es bisher zwei schlechte Optionen: sich mit einer halb passenden Marketplace-App arrangieren oder ein teures Individualprojekt beauftragen. Mit KI-gestützter Entwicklung gibt es jetzt eine dritte: **eine eigene Erweiterung, die exakt zu Ihrem Ablauf passt, zu einem Bruchteil der früheren Kosten.**",
      "Wir wissen, wovon wir sprechen. Mit work247 haben wir eine vollständige Immobilien-App für GoHighLevel entwickelt, mit Bookique eine Buchungs-App für Shopify und mit dem GARAN-Label eine Shopify-App für die neue EU-Kennzeichnungspflicht. Alle drei laufen auf eigenen Servern in Deutschland.",
    ],
    benefitsTitle: "Warum eine eigene Erweiterung?",
    benefits: [
      { title: "Kein Systemwechsel", text: "Ihr Team arbeitet weiter in der gewohnten Oberfläche. Die neue Funktion erscheint dort, wo sie gebraucht wird: im Shop-Admin, im CRM-Menü, auf der Produktseite." },
      { title: "Genau Ihr Ablauf", text: "Statt Ihre Prozesse an eine Standard-App anzupassen, passen wir die App an Ihre Prozesse an. Felder, Regeln, Texte und Workflows nach Ihren Vorgaben." },
      { title: "Offizielle Schnittstellen", text: "Wir nutzen die offiziellen APIs, App-Frameworks und Webhooks der Plattformen. Updates des Hauptsystems brechen Ihre Erweiterung nicht." },
      { title: "Daten bleiben verbunden", text: "Kontakte, Bestellungen, Objekte und Termine fließen in beide Richtungen. Keine doppelte Pflege, keine Excel-Listen dazwischen." },
      { title: "Als Produkt vermarktbar", text: "Wenn Ihre Lösung auch anderen hilft: Wir bereiten sie für den Shopify App Store oder den GoHighLevel Marketplace vor, inklusive Abrechnung." },
      { title: "Server in Deutschland", text: "Die App-Logik und die Datenbank laufen auf Ihrem eigenen Hetzner-Server. Gut für Datenschutz, Geschwindigkeit und Unabhängigkeit." },
    ],
    examplesTitle: "Was wir für Plattformen bauen",
    examples: [
      { title: "Shopify", text: "Embedded Apps im Shop-Admin, Theme App Extensions und App-Blöcke, Checkout- und Kundenkonto-Erweiterungen, Metafelder und Abo-Abrechnung über Shopify." },
      { title: "GoHighLevel", text: "Marketplace-Apps mit Custom Objects, Workflow-Aktionen und Triggern, Website-Widgets, Custom Menu Links und Anbindung an externe Fachsysteme." },
      { title: "HubSpot", text: "Private und öffentliche Apps, CRM-Karten, eigene Objekte, Synchronisation mit ERP, Shop oder Branchensoftware und automatisierte Datenpflege." },
      { title: "Und weitere Systeme", text: "WordPress und WooCommerce, Pipedrive, Notion, Airtable, Microsoft 365 oder Ihre Branchensoftware, sofern eine Schnittstelle vorhanden ist." },
    ],
    stepsTitle: "Vom Bedarf zur fertigen App",
    steps: [
      { title: "Lücke beschreiben", text: "Sie zeigen uns, wo es hakt. Wir prüfen, was die Plattform-APIs hergeben und welcher Weg der sauberste ist." },
      { title: "Prototyp im Testsystem", text: "Wir bauen eine erste Version in einem Entwicklungsshop oder Test-Account. Sie probieren sie mit echten Abläufen aus." },
      { title: "Ausbau und Härtung", text: "Rechte, Fehlerfälle, Mehrsprachigkeit, Datenschutz-Webhooks und Lasttests. Erst dann ist es eine App." },
      { title: "Installation und Betrieb", text: "Privat in Ihrem Account oder öffentlich im Marketplace. Wir betreiben die Server und halten die App aktuell." },
    ],
    techTitle: "Plattformen und Technik",
    tech: ["Shopify App Bridge", "Polaris", "Theme App Extensions", "GraphQL Admin API", "GoHighLevel API v2", "Custom Objects", "HubSpot API", "Webhooks", "OAuth 2.0", "Node.js", "PostgreSQL"],
    highlight: {
      title: "Aus der Praxis: GARAN-Label",
      text: "Seit dem 27.09.2026 verlangt die EU-Durchführungsverordnung 2025/1960 einen harmonisierten Hinweis zur gesetzlichen Gewährleistung und ein Label für Haltbarkeitsgarantien. Wir haben dafür eine Shopify-App gebaut, die Hinweis und Label automatisch im Shop anzeigt. Genau solche Pflichten treffen kleine Händler hart, und genau hier hilft eine schlanke, eigene App.",
    },
    faq: [
      { q: "Muss meine Erweiterung in einen App Store?", a: "Nein. Eine App kann privat nur für Ihren Shop oder Ihren CRM-Account installiert werden. Den Weg in den Shopify App Store oder GoHighLevel Marketplace gehen wir nur, wenn Sie Ihre Lösung auch anderen anbieten möchten." },
      { q: "Was passiert, wenn die Plattform ein Update macht?", a: "Wir arbeiten mit den offiziellen, versionierten Schnittstellen. Wenn eine Plattform eine API-Version ausläuft, aktualisieren wir Ihre App im Rahmen der Betreuung rechtzeitig." },
      { q: "Können Sie auch bestehende Apps anpassen?", a: "Wenn der Quellcode verfügbar ist, ja. Oft ist es aber günstiger, eine schlanke eigene App zu bauen, die genau das tut, was Sie brauchen, statt eine fremde App umzubauen." },
      { q: "Für welche Systeme entwickeln Sie?", a: "Schwerpunkte sind Shopify, GoHighLevel und HubSpot. Grundsätzlich können wir jedes System erweitern, das eine dokumentierte Schnittstelle (API) oder ein Erweiterungs-Framework anbietet." },
    ],
  },

  custom: {
    id: "custom",
    name: "Individualsoftware",
    tag: "Eigenes System",
    card: {
      title: "Autarke Systeme, die nur Ihnen gehören",
      text: "Portale, Fachanwendungen und interne Tools, entwickelt nur für Ihr Unternehmen und betrieben auf Ihrem eigenen Server in Deutschland.",
      bullets: ["Kundenportale, Dashboards, Fachsoftware", "Hohe Sicherheit durch individuelle Codebasis", "Schnell erweiterbar, ohne Lizenzgrenzen"],
    },
    metaTitle: "Individualsoftware für KMU entwickeln lassen – eigene Server in Deutschland | Cronema",
    metaDescription:
      "Individuelle Software und autarke Systeme für kleine und mittlere Unternehmen: Portale, Fachanwendungen, interne Tools. KI-gestützt entwickelt, auf eigenen Hetzner-Servern in Deutschland.",
    h1: "Individualsoftware, die bisher nicht ins Budget passte",
    claim: "Ein eigenes System, gebaut für Ihre Abläufe, betrieben auf Ihrem Server. Für den Mittelstand jetzt erreichbar.",
    intro: [
      "Lange Zeit war Individualsoftware Konzernen vorbehalten. Ein eigenes Kundenportal, eine Fachanwendung oder ein internes Steuerungssystem bedeutete Projekte über viele Monate und Budgets, die für kleine und mittlere Unternehmen schlicht nicht darstellbar waren. Also arbeitete man mit Standardsoftware, Tabellen und vielen Kompromissen.",
      "Das hat sich grundlegend geändert. Mit KI-gestützter Entwicklung durch Claude Code setzen wir heute Systeme um, die noch vor wenigen Monaten weit außerhalb jedes Mittelstandsbudgets lagen. **Die KI übernimmt einen großen Teil der Schreibarbeit, wir übernehmen Architektur, Prüfung und Verantwortung.** Das Ergebnis ist professionelle Software in einem Bruchteil der früheren Zeit.",
      "Ein autarkes System gehört nur Ihnen. Es läuft auf einem eigenen Server in einem deutschen Rechenzentrum, es gibt keine Lizenzgebühr pro Nutzer und keine Abhängigkeit von der Produktstrategie eines Softwareherstellers. Und weil es kein weit verbreitetes Standardsystem ist, ist es für automatisierte Massenangriffe schlicht uninteressant.",
    ],
    benefitsTitle: "Die Vorteile eines eigenen Systems",
    benefits: [
      { title: "Passt wie maßgeschneidert", text: "Ihre Begriffe, Ihre Abläufe, Ihre Regeln. Mitarbeitende müssen sich nicht an die Logik einer fremden Software gewöhnen." },
      { title: "Hohe Sicherheit", text: "Angreifer suchen automatisiert nach Lücken in verbreiteten Systemen. Eine individuelle Codebasis auf einem eigenen, gehärteten Server bietet dafür keine Angriffsfläche von der Stange." },
      { title: "Schnell erweiterbar", text: "Neue Funktion gewünscht? Mit KI-Unterstützung setzen wir auch komplexe Erweiterungen in Tagen statt Monaten um, ohne auf eine Roadmap warten zu müssen." },
      { title: "Datenhoheit", text: "Ihre Daten liegen auf Ihrem Server in Deutschland. Sie entscheiden, wer Zugriff hat, und erfüllen DSGVO-Anforderungen ohne Umwege." },
      { title: "Keine Lizenzspirale", text: "Ob fünf oder fünfzig Nutzer: Es fallen keine Gebühren pro Arbeitsplatz an. Sie zahlen für Entwicklung, Betrieb und Server, nicht für Köpfe." },
      { title: "Integration statt Insel", text: "Ihr System spricht mit Buchhaltung, Shop, CRM und E-Mail. Über Schnittstellen und Automatisierung wird es Teil Ihrer bestehenden Landschaft." },
    ],
    examplesTitle: "Beispiele für eigene Systeme",
    examples: [
      { title: "Kunden- und Partnerportale", text: "Aufträge einsehen, Dokumente austauschen, Termine buchen, Rechnungen herunterladen. Rund um die Uhr, mit eigenem Login." },
      { title: "Fachanwendungen", text: "Objektverwaltung, Auftragssteuerung, Prüfprotokolle, Disposition oder Kalkulation. Software für genau Ihre Branche." },
      { title: "Interne Dashboards", text: "Kennzahlen aus allen Systemen auf einen Blick, mit Alarmen, wenn etwas aus dem Ruder läuft." },
      { title: "Plattformen und SaaS-Produkte", text: "Sie haben eine Produktidee für Ihre Branche? Wir bauen sie als mandantenfähige Plattform, die Sie selbst vermarkten können." },
    ],
    stepsTitle: "So bauen wir Ihr System",
    steps: [
      { title: "Abläufe verstehen", text: "Wir schauen uns an, wie Sie heute arbeiten, wo Zeit verloren geht und was das System leisten muss." },
      { title: "Klickbarer Prototyp", text: "Statt eines 80-seitigen Pflichtenhefts sehen Sie nach kurzer Zeit eine funktionierende Oberfläche mit echten Daten." },
      { title: "Entwicklung in kurzen Runden", text: "Funktion für Funktion, jeweils getestet und von Ihnen abgenommen. Sie behalten jederzeit den Überblick." },
      { title: "Start auf Ihrem Server", text: "Einrichtung des Hetzner-Servers, Datenübernahme, Schulung. Danach betreuen und erweitern wir das System." },
    ],
    techTitle: "Technik",
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL", "Redis", "Docker", "REST & GraphQL", "Rollen und Rechte", "Zwei-Faktor-Login", "Automatische Backups"],
    highlight: {
      title: "Was vor Monaten unbezahlbar war",
      text: "Die Entwicklungsgeschwindigkeit mit KI-Werkzeugen hat sich in kurzer Zeit vervielfacht. Das verschiebt die Grenze dessen, was sich ein kleines Unternehmen leisten kann. Wir sind darauf spezialisiert, diese neue Effizienz in solide, wartbare Systeme für den Mittelstand zu übersetzen.",
    },
    faq: [
      { q: "Ist KI-generierter Code sicher und wartbar?", a: "Die KI schreibt, wir verantworten. Jede Änderung wird von uns geprüft, getestet und typgeprüft. Wir setzen auf verbreitete, gut dokumentierte Technologien, damit Ihr System auch langfristig wartbar bleibt." },
      { q: "Was kostet ein eigenes System?", a: "Das hängt vom Umfang ab. Durch KI-gestützte Entwicklung liegen die Kosten deutlich unter dem, was klassische Individualprojekte gekostet haben. Nach einem ersten Gespräch erhalten Sie eine transparente Einschätzung." },
      { q: "Wem gehören System und Daten?", a: "Die Daten gehören immer Ihnen und liegen auf einem Server, der für Ihr Unternehmen gebucht wird. Die Rechte am Code regeln wir transparent im Vertrag, abgestimmt auf Ihr Projekt." },
      { q: "Was passiert, wenn das System wachsen muss?", a: "Cloud-Server lassen sich mit wenigen Klicks vergrößern, und das System kann auf mehrere Server verteilt werden. Neue Funktionen bauen wir laufend dazu." },
    ],
  },

  agents: {
    id: "agents",
    name: "KI-Agenten & Automatisierung",
    tag: "Abläufe automatisieren",
    card: {
      title: "KI-Agenten, die Routinearbeit übernehmen",
      text: "Mit n8n, Make oder Zapier verbinden wir Ihre Systeme und setzen KI-Agenten ein, die E-Mails sortieren, Anfragen beantworten und Daten pflegen.",
      bullets: ["n8n selbst gehostet auf Ihrem Server", "Make und Zapier für schnelle Lösungen", "KI-Agenten mit Zugriff auf Ihre Daten"],
    },
    metaTitle: "KI-Agenten bauen lassen mit n8n, Make & Zapier – Automatisierung für KMU | Cronema",
    metaDescription:
      "Cronema baut KI-Agenten und Automatisierungen mit n8n, Make und Zapier: Anfragen beantworten, E-Mails sortieren, Daten pflegen. Auf Wunsch selbst gehostet auf deutschen Servern.",
    h1: "KI-Agenten und Automatisierung für Ihren Arbeitsalltag",
    claim: "Ihre Mitarbeitenden sollen sich um Kunden kümmern, nicht um das Kopieren von Daten zwischen fünf Programmen.",
    intro: [
      "In fast jedem Unternehmen gibt es Aufgaben, die täglich gleich ablaufen: Anfragen lesen und weiterleiten, Daten aus E-Mails ins CRM übertragen, Angebote vorbereiten, Termine bestätigen, Rechnungen ablegen. Jede einzelne Aufgabe dauert nur Minuten. Zusammen kosten sie Stunden pro Woche.",
      "Automatisierungsplattformen wie **n8n, Make und Zapier** verbinden Ihre Programme miteinander. Mit KI-Agenten geht das heute einen großen Schritt weiter: Ein Agent versteht den Inhalt einer E-Mail, entscheidet, was zu tun ist, schlägt eine Antwort vor, legt einen Kontakt an oder fragt bei Unklarheit einen Menschen. Regeln und Grenzen legen Sie fest.",
      "Wir bauen diese Agenten und Workflows für Sie, testen sie mit echten Fällen und betreiben sie zuverlässig. Wenn Datenschutz wichtig ist, läuft n8n selbst gehostet auf Ihrem eigenen Server in Deutschland.",
    ],
    benefitsTitle: "Was KI-Agenten für Sie tun können",
    benefits: [
      { title: "Anfragen vorsortieren", text: "Eingehende E-Mails und Formulare werden gelesen, kategorisiert und an die richtige Person oder Pipeline weitergegeben. Mit Zusammenfassung." },
      { title: "Antworten vorbereiten", text: "Der Agent entwirft Antworten auf Basis Ihrer Dokumente, Preise und FAQ. Ihr Team prüft und sendet mit einem Klick." },
      { title: "Daten pflegen", text: "Kontakte, Bestellungen und Objekte werden automatisch zwischen Systemen abgeglichen. Dubletten und Lücken werden erkannt." },
      { title: "Dokumente verarbeiten", text: "Rechnungen, Lieferscheine oder Formulare werden ausgelesen, geprüft und in die passenden Systeme übernommen." },
      { title: "Rund um die Uhr", text: "Workflows laufen auch nachts und am Wochenende. Dringende Fälle lösen eine Benachrichtigung aus, alles andere wartet sortiert auf Montag." },
      { title: "Mensch behält die Kontrolle", text: "Freigabeschritte, Protokolle und klare Grenzen: Der Agent handelt nur dort selbstständig, wo Sie es erlauben." },
    ],
    examplesTitle: "Beispiele aus der Praxis",
    examples: [
      { title: "Lead-Agent für Vertrieb", text: "Neue Anfrage über Website oder Portal: Der Agent reichert den Kontakt an, bewertet ihn, legt ihn im CRM an und schickt eine persönliche Erstantwort." },
      { title: "Support-Assistent", text: "Häufige Kundenfragen werden aus Ihrer Wissensdatenbank beantwortet, komplexe Fälle landen mit Zusammenfassung beim richtigen Ansprechpartner." },
      { title: "Bestell- und Lagerabgleich", text: "Shopify-Bestellungen, Warenwirtschaft und Versanddienstleister werden synchron gehalten, inklusive Meldung bei Engpässen." },
      { title: "Berichte auf Knopfdruck", text: "Wöchentliche Kennzahlen aus Shop, CRM und Buchhaltung, vom Agenten zusammengefasst und kommentiert per E-Mail oder Slack." },
    ],
    stepsTitle: "Von der Idee zum laufenden Agenten",
    steps: [
      { title: "Prozess aufnehmen", text: "Wir identifizieren gemeinsam die Aufgaben mit dem größten Zeitgewinn und klären, welche Systeme beteiligt sind." },
      { title: "Plattform wählen", text: "n8n für Datenschutz und komplexe Logik, Make oder Zapier für schnelle Starts, eigene API-Lösungen, wo nötig." },
      { title: "Bauen und testen", text: "Mit echten Beispielen aus Ihrem Alltag. Erst wenn der Agent zuverlässig arbeitet, geht er live." },
      { title: "Überwachen und verbessern", text: "Protokolle, Fehlermeldungen und regelmäßige Auswertung. Der Agent wird mit der Zeit besser." },
    ],
    techTitle: "Plattformen und KI-Modelle",
    tech: ["n8n (selbst gehostet)", "Make", "Zapier", "Claude", "OpenAI", "Webhooks", "MCP", "Vektordatenbanken", "GoHighLevel Workflows", "HubSpot Workflows"],
    highlight: {
      title: "n8n auf Ihrem eigenen Server",
      text: "n8n lässt sich selbst betreiben. Wir installieren es auf einem Hetzner-Server in Deutschland, sodass Ihre Kundendaten Ihre Infrastruktur nicht verlassen müssen. Bei vielen Workflows ist das außerdem günstiger als Plattformen, die pro Ausführung abrechnen.",
    },
    faq: [
      { q: "n8n, Make oder Zapier, was ist besser?", a: "Das hängt vom Fall ab. Zapier und Make sind ideal für schnelle Verbindungen gängiger Programme. n8n ist flexibler, kann selbst gehostet werden und eignet sich für komplexe Logik und datenschutzsensible Abläufe. Wir beraten Sie neutral." },
      { q: "Ist ein KI-Agent datenschutzkonform?", a: "Das lässt sich gut lösen: selbst gehostete Workflows, KI-Anbieter mit Auftragsverarbeitungsvertrag und europäischer Verarbeitung, Datensparsamkeit beim Übermitteln. Wir planen den Datenschutz von Anfang an mit." },
      { q: "Was passiert, wenn der Agent einen Fehler macht?", a: "Für kritische Schritte bauen wir Freigaben durch Menschen ein. Alle Aktionen werden protokolliert, und bei Unsicherheit fragt der Agent nach, statt zu raten." },
      { q: "Können bestehende Zaps oder Szenarien übernommen werden?", a: "Ja. Wir prüfen Ihre vorhandenen Automatisierungen, verbessern sie oder überführen sie bei Bedarf nach n8n." },
    ],
  },

  apis: {
    id: "apis",
    name: "API-Schnittstellen",
    tag: "Systeme verbinden",
    card: {
      title: "Eigene API-Integrationen, wenn Standard nicht reicht",
      text: "Wo fertige Konnektoren aufhören, programmieren wir die Verbindung selbst: robust, nachvollziehbar und auf Ihre Datenmengen ausgelegt.",
      bullets: ["Datenabgleich zwischen beliebigen Systemen", "Webhooks, Feeds und Importe", "Eigene APIs für Ihre Partner"],
    },
    metaTitle: "API-Integration & Schnittstellenprogrammierung für KMU | Cronema",
    metaDescription:
      "Cronema programmiert Schnittstellen zwischen CRM, Shop, ERP und Fachsoftware: REST, GraphQL, Webhooks, XML-Feeds wie OpenImmo. Robuste Datenabgleiche auf eigenen Servern in Deutschland.",
    h1: "API-Schnittstellen, die Ihre Systeme wirklich verbinden",
    claim: "Daten sollen fließen, nicht abgetippt werden. Wir programmieren die Verbindung, die es von der Stange nicht gibt.",
    intro: [
      "Automatisierungsplattformen sind großartig, solange es fertige Bausteine für Ihre Programme gibt. Doch spätestens bei Branchensoftware, großen Datenmengen, speziellen Formaten oder komplexen Abgleichregeln stoßen sie an Grenzen. Dann braucht es eine echte, programmierte Schnittstelle.",
      "Wir haben genau solche Integrationen in unseren eigenen Produkten gebaut. work247 importiert Immobilienbestände per **OpenImmo-XML, Kyero-Feed und RESO Web API** aus Maklersoftware und MLS-Systemen, erkennt neue, geänderte und entfernte Objekte und überträgt alles in GoHighLevel. Bookique synchronisiert Kalender per iCal mit Airbnb, Booking.com und Google. Diese Erfahrung nutzen wir für Ihre Systeme.",
      "Eine gute Schnittstelle merkt man nicht. Sie läuft im Hintergrund, verarbeitet Fehler sauber, protokolliert jeden Abgleich und meldet sich, wenn etwas Ungewöhnliches passiert.",
    ],
    benefitsTitle: "Was eine gute Schnittstelle ausmacht",
    benefits: [
      { title: "Robust bei Fehlern", text: "Zeitüberschreitungen, Ratenlimits und fehlerhafte Datensätze werden abgefangen, wiederholt oder gemeldet, statt den ganzen Abgleich zu stoppen." },
      { title: "Für große Datenmengen", text: "Seitenweises Laden, inkrementelle Abgleiche und Warteschlangen sorgen dafür, dass auch zehntausende Datensätze zuverlässig ankommen." },
      { title: "Nachvollziehbar", text: "Jeder Import und jede Übertragung wird protokolliert. Sie sehen, wann was übertragen wurde und warum ein Datensatz abgelehnt wurde." },
      { title: "In beide Richtungen", text: "Wo sinnvoll, fließen Daten hin und zurück, mit klaren Regeln, welches System bei Konflikten führend ist." },
      { title: "Sicher angebunden", text: "OAuth, verschlüsselte Zugangsdaten, signierte Webhooks und minimale Berechtigungen. Nur so viel Zugriff wie nötig." },
      { title: "Unabhängig von Drittplattformen", text: "Die Schnittstelle läuft auf Ihrem Server. Keine Gebühren pro Ausführung, keine Abhängigkeit von einem Automatisierungsanbieter." },
    ],
    examplesTitle: "Typische Integrationen",
    examples: [
      { title: "CRM ↔ Shop ↔ ERP", text: "Kunden, Bestellungen, Lagerbestände und Rechnungen zwischen Shopify, HubSpot oder GoHighLevel und Ihrer Warenwirtschaft abgleichen." },
      { title: "Branchenformate und Feeds", text: "XML-Standards wie OpenImmo, Produktfeeds für Marktplätze, CSV-Importe von Lieferanten oder iCal-Kalender." },
      { title: "Eigene API für Partner", text: "Sie möchten Partnern, Händlern oder Kunden Daten bereitstellen? Wir bauen eine dokumentierte, abgesicherte API." },
      { title: "Altsysteme anbinden", text: "Auch ältere Software ohne moderne API lässt sich oft über Datenbank, Dateiaustausch oder Export-Schnittstellen integrieren." },
    ],
    stepsTitle: "Unser Vorgehen",
    steps: [
      { title: "Systeme analysieren", text: "Welche Schnittstellen bieten die beteiligten Programme? Welche Daten, wie oft, in welche Richtung?" },
      { title: "Datenmodell festlegen", text: "Wir ordnen Felder zu, klären Sonderfälle und legen fest, welches System für welche Daten führend ist." },
      { title: "Entwickeln und testen", text: "Mit Testdaten und anschließend mit einer Kopie Ihrer echten Daten, bis jeder Sonderfall sitzt." },
      { title: "Betrieb mit Überwachung", text: "Die Schnittstelle läuft auf Ihrem Server, mit Protokollen und Benachrichtigung bei Fehlern." },
    ],
    techTitle: "Standards und Formate",
    tech: ["REST", "GraphQL", "Webhooks", "OAuth 2.0", "OpenImmo", "RESO Web API", "iCal", "XML & CSV", "Warteschlangen", "Node.js", "PostgreSQL"],
    highlight: {
      title: "Aus der Praxis: work247",
      text: "Für work247 verarbeiten unsere Schnittstellen komplette Immobilienbestände aus Maklersoftware wie onOffice, FlowFact oder Propstack sowie MLS-Daten aus den USA und Kanada. Bilder, Grundrisse, über 150 Felder, mehrsprachige Texte. Was dort funktioniert, funktioniert auch für Ihre Branche.",
    },
    faq: [
      { q: "Wann reicht Zapier oder Make nicht mehr aus?", a: "Typische Grenzen sind fehlende Konnektoren für Branchensoftware, sehr viele Datensätze, komplexe Abgleichlogik, spezielle Dateiformate oder hohe Kosten durch viele Ausführungen. Dann lohnt sich eine eigene Schnittstelle." },
      { q: "Unsere Software hat keine API. Geht trotzdem etwas?", a: "Oft ja: über Export- und Importfunktionen, Dateiaustausch per SFTP, direkte Datenbankanbindung oder E-Mail-Verarbeitung. Wir prüfen das vorab." },
      { q: "Wer betreibt die Schnittstelle?", a: "Wir richten sie auf Ihrem eigenen Server ein, überwachen sie und passen sie an, wenn sich eine der angebundenen Schnittstellen ändert." },
    ],
  },

  hosting: {
    id: "hosting",
    name: "Hosting & Betrieb",
    tag: "Sicher betreiben",
    card: {
      title: "Eigene Cloud-Server in Deutschland, Kosten wachsen mit Ihrem Erfolg",
      text: "Wir buchen für jedes System eigene Hetzner-Server in deutschen Rechenzentren. Sie starten mit kleinem Budget und skalieren, wenn Ihr Geschäft wächst.",
      bullets: ["Rechenzentren in Deutschland", "Start mit kleinem Hosting-Budget", "Backups, Updates und Überwachung"],
    },
    metaTitle: "Hosting in Deutschland auf Hetzner Cloud – Betrieb Ihrer Software | Cronema",
    metaDescription:
      "Cronema betreibt Ihre Software auf eigenen Hetzner-Cloud-Servern in Deutschland: kleiner Start, Kosten wachsen mit dem Erfolg. Backups, Updates, Überwachung und DSGVO-konformer Betrieb.",
    h1: "Hosting in Deutschland: klein starten, mit dem Erfolg wachsen",
    claim: "Ihre Software läuft auf eigenen Cloud-Servern in deutschen Rechenzentren. Sie zahlen für die Leistung, die Sie gerade brauchen.",
    intro: [
      "Früher bedeutete ein eigenes System auch eigene, teure Hardware oder langfristig gemietete Server, die für den schlimmsten Fall dimensioniert waren und die meiste Zeit Däumchen drehten. Cloud-Server haben das verändert.",
      "Für jedes Kundensystem buchen wir **eigene Server bei Hetzner in deutschen Rechenzentren**. Ein neues Projekt startet auf einem kleinen Cloud-Server mit überschaubaren monatlichen Kosten. Wächst die Nutzung, vergrößern wir den Server mit wenigen Klicks oder verteilen die Last auf mehrere Maschinen. **Die Kosten wachsen erst mit dem Erfolg unserer Kunden.**",
      "Den Betrieb übernehmen wir: Einrichtung, Absicherung, Updates, Backups, Überwachung und Zertifikate. Sie bekommen ein System, das einfach läuft, und behalten die volle Kontrolle über Ihre Daten.",
    ],
    benefitsTitle: "Was im Betrieb enthalten ist",
    benefits: [
      { title: "Standort Deutschland", text: "Hetzner betreibt Rechenzentren in Nürnberg und Falkenstein. Ihre Daten bleiben in Deutschland, mit Auftragsverarbeitungsvertrag nach DSGVO." },
      { title: "Kleiner Start", text: "Ein Cloud-Server für ein neues System kostet nur wenige Euro im Monat. Sie investieren in Funktionen, nicht in Leerlauf." },
      { title: "Wachsen per Klick", text: "Mehr Prozessorleistung, mehr Arbeitsspeicher, zusätzliche Server oder Lastverteilung. Erweiterungen sind in Minuten erledigt." },
      { title: "Automatische Backups", text: "Regelmäßige Sicherungen von Server und Datenbank, getrennt gespeichert. Im Ernstfall ist Ihr System schnell wiederhergestellt." },
      { title: "Gehärtete Server", text: "Firewall, verschlüsselte Verbindungen, Schlüssel statt Passwörtern, automatische Sicherheitsupdates und nur die Dienste, die wirklich nötig sind." },
      { title: "Überwachung", text: "Erreichbarkeit, Auslastung und Fehler werden überwacht. Wir bemerken Probleme meist, bevor Ihre Nutzer es tun." },
    ],
    examplesTitle: "Was wir für Sie betreiben",
    examples: [
      { title: "Individuelle Systeme", text: "Ihre Fachanwendung oder Ihr Portal inklusive Datenbank, Dateispeicher und E-Mail-Versand." },
      { title: "App-Backends", text: "Die Server hinter Shopify-, GoHighLevel- oder HubSpot-Apps, wie bei Bookique, work247 und GARAN-Label." },
      { title: "Automatisierung", text: "Selbst gehostetes n8n, eigene Schnittstellen und KI-Agenten auf Ihrer Infrastruktur." },
      { title: "Websites", text: "Statische, vorgerenderte Websites mit weltweiter Auslieferung oder direkt auf Ihrem Server." },
    ],
    stepsTitle: "Wachstum in drei Stufen",
    steps: [
      { title: "Start", text: "Ein kleiner Cloud-Server reicht für Prototyp, Pilotkunden und die ersten Monate im Echtbetrieb." },
      { title: "Wachstum", text: "Mehr Nutzer, mehr Daten: Der Server wird vergrößert, Datenbank und Dateien bekommen eigenen Speicher." },
      { title: "Skalierung", text: "Lastverteilung auf mehrere Server, getrennte Datenbank, Caching. Nur dann, wenn Ihr Erfolg es verlangt." },
    ],
    techTitle: "Infrastruktur",
    tech: ["Hetzner Cloud", "Ubuntu LTS", "Docker", "PostgreSQL", "Nginx", "Let’s Encrypt", "Load Balancer", "Snapshots & Backups", "Monitoring", "Netlify"],
    highlight: {
      title: "Die Kosten wachsen erst mit Ihrem Erfolg",
      text: "Das ist der Kern unseres Modells. Statt am Anfang für Kapazität zu zahlen, die vielleicht nie gebraucht wird, beginnen Sie klein. Jede Vergrößerung des Servers ist ein gutes Zeichen: Ihr System wird mehr genutzt.",
    },
    faq: [
      { q: "Warum Hetzner?", a: "Hetzner ist ein deutscher Anbieter mit eigenen Rechenzentren in Deutschland, sehr gutem Preis-Leistungs-Verhältnis und zuverlässiger Infrastruktur. Für den Mittelstand ist das eine ideale Kombination aus Datenschutz und Kosten." },
      { q: "Auf wen läuft der Server?", a: "Der Server wird für Ihr System gebucht. Ob er direkt auf Ihr Unternehmen oder über uns läuft, stimmen wir gemeinsam ab. Ihre Daten liegen in jedem Fall getrennt von anderen Kunden." },
      { q: "Was kostet das Hosting?", a: "Ein Einstiegsserver in der Hetzner Cloud kostet nur wenige Euro im Monat. Hinzu kommt unsere Betreuung für Updates, Backups und Überwachung. Sie erhalten vorab eine klare Aufstellung." },
      { q: "Können Sie auch bestehende Systeme übernehmen?", a: "Ja. Wir prüfen Ihre aktuelle Umgebung und planen einen Umzug auf Hetzner, mit möglichst kurzer Unterbrechung." },
    ],
  },
};
