// Texts of the homepage and the other pages (references, approach, about, contact).
// Texts with **bold** are rendered as <strong>.

export const META = {
  home: {
    title: "Cronema – KI-Programmierschmiede für den Mittelstand | Software, Apps & KI-Agenten",
    description:
      "Cronema entwickelt mit KI und Claude Code individuelle Software für kleine und mittlere Unternehmen: Websites, Shopify- und GoHighLevel-Apps, eigene Systeme, KI-Agenten und Schnittstellen. Server in Deutschland.",
  },
  services: {
    title: "Leistungen – Websites, Apps, Individualsoftware, KI-Agenten | Cronema",
    description: "Alle Leistungen von Cronema im Überblick: Websites, Erweiterungen für Shopify, GoHighLevel und HubSpot, Individualsoftware, KI-Agenten, API-Schnittstellen sowie Hosting in Deutschland.",
  },
  references: {
    title: "Referenzen – work247, Bookique, GARAN-Label | Cronema",
    description: "Was wir mit KI-gestützter Entwicklung gebaut haben: work247 für GoHighLevel, die Shopify-Buchungs-App Bookique und die Shopify-App GARAN-Label. Eigene Produkte, eigene Server in Deutschland.",
  },
  approach: {
    title: "Arbeitsweise – Softwareentwicklung mit KI und Claude Code | Cronema",
    description: "Wie Cronema mit Claude Code Software entwickelt: schnelle Prototypen, kurze Entwicklungsrunden, menschliche Prüfung jeder Zeile und Betrieb auf eigenen Servern in Deutschland.",
  },
  about: {
    title: "Über Cronema – Cross Net Management seit rund 15 Jahren | Cronema",
    description: "Cronema steht für Cross Net Management. Seit rund 15 Jahren vernetzen wir Systeme, heute mit KI. Lernen Sie die KI-Programmierschmiede aus München kennen.",
  },
  contact: {
    title: "Kontakt – Projekt anfragen | Cronema",
    description: "Sprechen Sie mit Cronema über Ihr Projekt: Website, App, Individualsoftware, KI-Agent oder Schnittstelle. Per E-Mail oder Telefon, aus München.",
  },
  imprint: { title: "Impressum | Cronema", description: "Impressum von Cronema, KI-Programmierschmiede aus München." },
  privacy: { title: "Datenschutzerklärung | Cronema", description: "Datenschutzerklärung der Website cronema.com." },
};

export const NAV = {
  services: "Leistungen",
  references: "Referenzen",
  approach: "Arbeitsweise",
  about: "Über uns",
  contact: "Kontakt",
  cta: "Projekt anfragen",
  menu: "Menü öffnen",
  close: "Menü schließen",
  skip: "Zum Inhalt springen",
};

export const HOME = {
  hero: {
    badge: "KI-Programmierschmiede aus München",
    title: ["Software nach Maß,", "die bisher nicht ins Budget passte."],
    subtitle:
      "Wir entwickeln für kleine und mittlere Unternehmen alles von der Website bis zur komplexen Systemsoftware. Effizient mit KI, vor allem mit Claude Code, und betrieben auf eigenen Servern in Deutschland.",
    primary: "Projekt anfragen",
    secondary: "Leistungen ansehen",
    trust: ["Server in Deutschland (Hetzner)", "Entwickelt mit Claude Code", "Für KMU und Mittelstand"],
  },
  platforms: {
    label: "Wir entwickeln für und mit",
    items: ["Shopify", "GoHighLevel", "HubSpot", "WordPress", "n8n", "Make", "Zapier", "Claude", "Hetzner Cloud"],
  },
  shift: {
    eyebrow: "Was sich geändert hat",
    title: "Individuelle Software ist kein Luxus mehr",
    subtitle:
      "KI-gestützte Entwicklung hat in kurzer Zeit verschoben, was ein Softwareprojekt kostet und wie schnell es fertig wird. Davon profitieren vor allem kleine und mittlere Unternehmen.",
    before: {
      label: "Bisher",
      items: [
        "Individualsoftware nur mit großem Budget und langer Projektlaufzeit",
        "Standardsoftware als Kompromiss, Abläufe an das Programm angepasst",
        "Teure Server, dimensioniert für den schlimmsten Fall",
        "Neue Funktionen hängen an der Roadmap eines Herstellers",
      ],
    },
    after: {
      label: "Mit Cronema",
      items: [
        "Eigene Lösungen in einem Bruchteil der Zeit, dank KI-gestützter Entwicklung",
        "Software, die sich an Ihre Abläufe anpasst, nicht umgekehrt",
        "Eigene Cloud-Server in Deutschland, Kosten wachsen mit dem Erfolg",
        "Erweiterungen in Tagen statt Monaten, wann immer Sie sie brauchen",
      ],
    },
  },
  services: {
    eyebrow: "Leistungen",
    title: "Von der Website bis zur Systemsoftware",
    subtitle: "Sechs Bausteine, die sich beliebig kombinieren lassen. Alles aus einer Hand, alles mit derselben Sorgfalt.",
    more: "Mehr erfahren",
  },
  references: {
    eyebrow: "Referenzen",
    title: "Was wir in den letzten Monaten gebaut haben",
    subtitle:
      "Unsere eigenen Produkte sind der beste Beweis dafür, was KI-gestützte Entwicklung leisten kann. Was wir für Shopify und GoHighLevel gebaut haben, bauen wir auch für Ihr System.",
    all: "Alle Referenzen",
  },
  ownSystem: {
    eyebrow: "Eigene Systeme",
    title: "Ihr System. Ihr Server. Ihre Regeln.",
    subtitle: "Warum sich ein eigenes, autarkes System für immer mehr Unternehmen lohnt.",
    items: [
      { title: "Individuell", text: "Abläufe, Begriffe und Oberflächen genau nach Ihrem Bedarf. Keine Funktionen, die niemand braucht, und keine, die fehlen." },
      { title: "Sicher", text: "Kein weit verbreitetes Standardsystem, das automatisiert nach bekannten Lücken abgesucht wird. Dazu ein gehärteter, eigener Server." },
      { title: "Erweiterbar", text: "Neue, auch komplexe Funktionen sind schnell umgesetzt. Ihr System wächst mit Ihren Ideen statt mit einer fremden Roadmap." },
      { title: "In Deutschland", text: "Ihre Daten liegen in deutschen Rechenzentren. Datenschutz ist kein Zusatzmodul, sondern Grundlage." },
    ],
  },
  hosting: {
    eyebrow: "Hosting-Modell",
    title: "Klein starten. Mit dem Erfolg wachsen.",
    text: [
      "Für jedes System buchen wir eigene Cloud-Server bei Hetzner in Deutschland. So können Sie bereits mit einem kleinen Hosting-Budget starten.",
      "Wenn Ihr System mehr genutzt wird, vergrößern wir die Server mit wenigen Klicks. **Die Kosten wachsen erst mit dem Erfolg unserer Kunden**, nicht vorher.",
    ],
    points: ["Eigene Server pro Kunde, getrennte Daten", "Rechenzentren in Nürnberg und Falkenstein", "Backups, Updates und Überwachung inklusive"],
    link: "Mehr zu Hosting & Betrieb",
  },
  approach: {
    eyebrow: "Arbeitsweise",
    title: "So arbeiten wir mit KI",
    subtitle:
      "Claude Code schreibt einen großen Teil des Codes. Architektur, Prüfung und Verantwortung bleiben bei uns. Das macht uns schnell, ohne an Qualität zu sparen.",
    steps: [
      { title: "Gespräch", text: "Wir verstehen Ihr Ziel, Ihre Abläufe und Ihre bestehenden Systeme." },
      { title: "Prototyp", text: "Eine erste funktionierende Version in kurzer Zeit statt eines dicken Konzeptpapiers." },
      { title: "Entwicklung", text: "Kurze Runden, jede Funktion getestet und von Ihnen abgenommen." },
      { title: "Start", text: "Einrichtung auf Ihrem Server in Deutschland, Datenübernahme und Einweisung." },
      { title: "Weiterentwicklung", text: "Betrieb, Pflege und neue Funktionen, wann immer Sie sie brauchen." },
    ],
    link: "Unsere Arbeitsweise im Detail",
  },
  name: {
    eyebrow: "Cross Net Management",
    title: "Vernetzen war schon immer unser Thema",
    text: [
      "Cronema steht für **Cross Net Management**. Den Namen tragen wir seit rund 15 Jahren, und er passt heute besser denn je.",
      "Damals ging es darum, Systeme über Netzwerke hinweg zu verbinden und zu steuern. Heute verbinden wir Shops, CRM-Systeme, Datenbanken und KI-Agenten zu Lösungen, die eigenständig arbeiten. Das Prinzip ist geblieben: Wir bringen zusammen, was zusammengehört, und sorgen dafür, dass es zuverlässig läuft.",
    ],
    link: "Mehr über uns",
  },
  faq: {
    title: "Häufige Fragen",
    items: [
      { q: "Was ist eine KI-Programmierschmiede?", a: "Wir entwickeln Software wie eine klassische Agentur, nutzen dabei aber konsequent KI-Werkzeuge, vor allem Claude Code. Die KI übernimmt einen großen Teil der Programmierarbeit, wir planen, prüfen und verantworten das Ergebnis. So entstehen individuelle Lösungen deutlich schneller und günstiger." },
      { q: "Für welche Unternehmen arbeitet Cronema?", a: "Für kleine und mittlere Unternehmen, die mehr wollen als Standardsoftware: Händler mit Shopify-Shops, Dienstleister mit CRM-Systemen wie GoHighLevel oder HubSpot, Makler, Agenturen und Betriebe mit besonderen Abläufen." },
      { q: "Ist mit KI entwickelte Software wirklich professionell?", a: "Ja, wenn sie richtig entwickelt wird. Wir setzen auf bewährte Technologien, prüfen jede Änderung, nutzen Typprüfung und Tests und betreiben die Systeme auf gehärteten Servern. Unsere eigenen Apps work247, Bookique und GARAN-Label laufen genau so." },
      { q: "Was kostet ein Projekt?", a: "Das hängt vom Umfang ab, von der Landingpage bis zum eigenen System. Durch KI-gestützte Entwicklung liegen die Kosten deutlich unter klassischen Agenturpreisen. Nach einem ersten Gespräch erhalten Sie eine transparente Einschätzung." },
      { q: "Wo laufen die Systeme?", a: "Auf eigenen Cloud-Servern bei Hetzner in deutschen Rechenzentren. Jedes Kundensystem bekommt eigene Server. Sie starten klein, und die Kosten wachsen erst mit Ihrem Erfolg." },
      { q: "Können Sie unser bestehendes System erweitern?", a: "Ja, das ist einer unserer Schwerpunkte. Wir bauen Apps und Erweiterungen für Shopify, GoHighLevel, HubSpot und andere Systeme mit offenen Schnittstellen." },
      { q: "Was ist der Unterschied zwischen KI-Agent und Automatisierung?", a: "Eine klassische Automatisierung folgt festen Regeln: Wenn A, dann B. Ein KI-Agent versteht zusätzlich Inhalte, etwa eine E-Mail oder ein Dokument, und entscheidet innerhalb Ihrer Vorgaben, was zu tun ist. Wir kombinieren beides mit n8n, Make, Zapier oder eigenen Schnittstellen." },
      { q: "Wie schnell können wir starten?", a: "Meist innerhalb weniger Tage nach dem ersten Gespräch. Einen ersten Prototyp sehen Sie in der Regel sehr früh im Projekt." },
    ],
  },
  cta: {
    title: "Haben Sie eine Idee, die bisher zu teuer war?",
    text: "Erzählen Sie uns davon. In einem kurzen Gespräch klären wir, was möglich ist, wie lange es dauert und was es kostet.",
    primary: "Projekt anfragen",
    secondary: "Anrufen",
  },
};

export type Reference = {
  id: "work247" | "bookique" | "garan";
  name: string;
  platform: string;
  url?: string;
  title: string;
  text: string;
  facts: string[];
  /** Long version for the references page */
  story: string[];
  services: string[];
};

export const REFERENCES: Reference[] = [
  {
    id: "work247",
    name: "work247",
    platform: "GoHighLevel-App",
    url: "https://work247.app",
    title: "Die Immobilien-App für GoHighLevel",
    text: "Bestand aus Maklersoftware und MLS importieren, auf der Website zeigen, PDF-Exposés erzeugen und Bewertungs-Leads gewinnen. Alles direkt im CRM.",
    facts: ["OpenImmo, Kyero und RESO Web API", "Website-Widgets und Exposés", "Mehrsprachig, Europa und Nordamerika"],
    story: [
      "work247 macht GoHighLevel zur vollwertigen Maklersoftware. Immobilienbestände werden per OpenImmo-Export aus Systemen wie onOffice, FlowFact oder Propstack, per Kyero-Feed oder in den USA und Kanada per RESO Web API aus dem MLS importiert. Neue, geänderte und entfernte Objekte werden automatisch erkannt.",
      "Die App legt im CRM eigene Objekte und Felder an, liefert Website-Widgets für Galerie, Liste, Karte und Detailseiten, erzeugt PDF-Exposés in mehreren Designs und Sprachen und gewinnt mit Bewertungsformularen neue Eigentümer-Leads. Suchaufträge lösen automatisch CRM-Workflows aus, wenn ein passendes Objekt hereinkommt.",
      "Technisch vereint work247 alles, was wir anbieten: Plattform-Erweiterung, komplexe Schnittstellen, Automatisierung, Website-Widgets und den Betrieb auf eigenen Servern in Deutschland.",
    ],
    services: ["Erweiterungen", "API-Schnittstellen", "Automatisierung", "Hosting"],
  },
  {
    id: "bookique",
    name: "Bookique",
    platform: "Shopify-App",
    url: "https://bookique.app",
    title: "Buchungs-App für Shopify mit KI-Assistent",
    text: "Termine, Kurse, Vermietungen und Events mit Tickets direkt im Shopify-Shop buchen und im Checkout bezahlen. Mit KI-Assistent für die Einrichtung.",
    facts: ["Termine, Kurse, Vermietungen, Events", "KI-Assistent und KI-Bilder", "Website und Doku in fünf Sprachen"],
    story: [
      "Bookique bringt Buchungen in jeden Shopify-Shop: Termine mit Mitarbeitenden, Kurse mit Plätzen, Vermietungen nach Tagen und Events mit Tickets. Kunden buchen im Shop und bezahlen im gewohnten Shopify-Checkout.",
      "Die App bietet Wartelisten, Pässe und Guthaben, eigene Formularfelder, automatische E-Mails über den eigenen SMTP-Server des Händlers, Kalender-Sync mit Airbnb, Booking.com und Google sowie einen KI-Assistenten, der bei der Einrichtung hilft und Bilder erzeugt.",
      "Dazu gehört eine vorgerenderte Website in fünf Sprachen mit einer ausführlichen Dokumentation, strukturierten Daten und llms.txt. Die App läuft auf Servern in Deutschland.",
    ],
    services: ["Erweiterungen", "Individualsoftware", "Websites", "Hosting"],
  },
  {
    id: "garan",
    name: "GARAN-Label",
    platform: "Shopify-App",
    title: "EU-Gewährleistungshinweis und Haltbarkeitslabel für Shopify",
    text: "Seit dem 27.09.2026 Pflicht: der harmonisierte Hinweis zur gesetzlichen Gewährleistung und das Label für Haltbarkeitsgarantien nach EU-Verordnung 2025/1960.",
    facts: ["Durchführungsverordnung (EU) 2025/1960", "App-Embed und Produkt-Block", "Pflichtangaben automatisch im Shop"],
    story: [
      "Mit der Durchführungsverordnung (EU) 2025/1960 müssen Online-Händler seit dem 27. September 2026 einen harmonisierten Hinweis zur gesetzlichen Gewährleistung anzeigen und, wenn sie eine Haltbarkeitsgarantie von mehr als zwei Jahren geben, ein einheitliches Label.",
      "Die Shopify-App GARAN-Label löst das mit zwei Bausteinen: einem App-Embed, das den Gewährleistungshinweis im ganzen Shop einblendet, und einem App-Block für die Produktseite, der das Label nur dann zeigt, wenn eine Haltbarkeitsgarantie hinterlegt ist. Die Angaben pflegt der Händler über Produkt-Metafelder.",
      "Ein typisches Beispiel für unseren Ansatz: Eine neue gesetzliche Pflicht trifft viele kleine Händler, und eine schlanke, eigene App setzt sie schnell und kostengünstig um.",
    ],
    services: ["Erweiterungen", "Hosting"],
  },
];

export const REFERENCES_PAGE = {
  h1: "Referenzen",
  intro:
    "Wir zeigen nicht nur, was KI-gestützte Entwicklung kann, wir nutzen sie selbst. Diese Produkte haben wir in den letzten Monaten entwickelt und betreiben sie auf eigenen Servern in Deutschland. Jedes davon steht für eine Leistung, die wir auch für Ihr Unternehmen erbringen.",
  servicesLabel: "Eingesetzte Leistungen",
  visit: "Website besuchen",
  transferTitle: "Das können wir auch für Ihr System",
  transferText:
    "Was für Shopify und GoHighLevel funktioniert, funktioniert genauso für HubSpot, WordPress, Ihre Branchensoftware oder ein ganz eigenes System. Die Werkzeuge, die Erfahrung und die Infrastruktur sind dieselben.",
};

export const APPROACH_PAGE = {
  h1: "Softwareentwicklung mit KI: unsere Arbeitsweise",
  intro: [
    "KI hat die Softwareentwicklung grundlegend verändert. Werkzeuge wie Claude Code können ganze Funktionen planen, schreiben, testen und überarbeiten. Was früher Wochen dauerte, ist heute oft in Tagen erledigt.",
    "Aber KI allein macht noch keine gute Software. Es braucht jemanden, der weiß, was gebaut werden soll, der die Architektur festlegt, Ergebnisse kritisch prüft und Verantwortung übernimmt. **Genau das ist unsere Rolle.** Wir kombinieren die Geschwindigkeit der KI mit Erfahrung aus vielen Jahren Systemintegration.",
  ],
  principlesTitle: "Unsere Grundsätze",
  principles: [
    { title: "Die KI schreibt, wir verantworten", text: "Jede Änderung wird von uns gelesen, geprüft und getestet, bevor sie live geht. Typprüfung, automatische Prüfungen und Code-Reviews gehören zum Standard." },
    { title: "Bewährte Technik statt Experimente", text: "Wir setzen auf verbreitete, gut dokumentierte Technologien wie TypeScript, React, Node.js und PostgreSQL. So bleibt Ihr System langfristig wartbar, auch für andere Entwickler." },
    { title: "Zeigen statt beschreiben", text: "Statt langer Konzeptpapiere bauen wir früh einen funktionierenden Prototyp. Sie klicken sich durch und sagen uns, was passt und was nicht." },
    { title: "Kurze Wege", text: "Sie sprechen direkt mit den Menschen, die Ihr System bauen. Keine Projektmanagement-Schichten, keine Stille Post." },
    { title: "Datenschutz von Anfang an", text: "Server in Deutschland, Datensparsamkeit, Auftragsverarbeitung und Verschlüsselung planen wir ein, bevor die erste Zeile Code entsteht." },
    { title: "Dokumentiert und nachvollziehbar", text: "Code liegt versioniert in Git, Änderungen sind nachvollziehbar, und wichtige Entscheidungen werden dokumentiert." },
  ],
  claudeTitle: "Warum Claude Code?",
  claudeText: [
    "Claude Code ist ein KI-Entwicklungswerkzeug von Anthropic, das direkt im Projekt arbeitet: Es liest den bestehenden Code, versteht Zusammenhänge über viele Dateien hinweg, führt Befehle aus, startet Tests und setzt Änderungen um.",
    "Für uns ist es der Kern einer neuen Arbeitsweise. Wir beschreiben, was gebaut werden soll, prüfen die Vorschläge, steuern nach und behalten die Architektur im Blick. Dadurch können wir komplexe Projekte mit einem kleinen Team in einem Tempo umsetzen, das früher großen Agenturen vorbehalten war.",
  ],
  workflow: [
    { label: "Sie", text: "beschreiben Ziel und Abläufe" },
    { label: "Wir", text: "planen Architektur und Datenmodell" },
    { label: "Claude Code", text: "schreibt und testet den Code" },
    { label: "Wir", text: "prüfen, korrigieren, verantworten" },
    { label: "Sie", text: "testen und geben frei" },
  ],
  processTitle: "Ein Projekt in fünf Schritten",
  process: [
    { title: "Erstgespräch", text: "Wir lernen Ihr Unternehmen, Ihre Ziele und Ihre bestehenden Systeme kennen. Am Ende wissen beide Seiten, ob und wie es passt." },
    { title: "Einschätzung und Angebot", text: "Sie erhalten eine nachvollziehbare Einschätzung von Umfang, Zeit und Kosten, inklusive Hosting." },
    { title: "Prototyp", text: "Eine erste lauffähige Version zeigt früh, wohin die Reise geht. Änderungen sind in dieser Phase besonders günstig." },
    { title: "Entwicklung und Start", text: "In kurzen Runden entsteht das fertige System. Wir richten den Server ein, übernehmen Daten und weisen Ihr Team ein." },
    { title: "Betrieb und Weiterentwicklung", text: "Wir halten das System sicher und aktuell und bauen neue Funktionen, wenn Ihr Geschäft sie braucht." },
  ],
};

export const ABOUT_PAGE = {
  h1: "Über Cronema",
  claim: "Cross Net Management. Seit rund 15 Jahren. Heute mit KI.",
  intro: [
    "Cronema ist eine KI-Programmierschmiede und KI-Agentur aus München. Hinter uns stehen jeweils über 30 Jahre Erfahrung in 3D-Animation, Grafikdesign, Redaktion und Webentwicklung. Wir entwickeln Software für kleine und mittlere Unternehmen, von der einfachen Website bis zur komplexen Systemsoftware, und betreiben sie auf eigenen Servern in Deutschland.",
    "Unser Name steht für **Cross Net Management**: Systeme über Netzwerke hinweg verbinden und steuern. Als der Name vor rund 15 Jahren entstand, ging es um Server, Netzwerke und Schnittstellen. Heute geht es um Shops, CRM-Systeme, Cloud-Server und KI-Agenten. Der Gedanke dahinter ist derselbe geblieben.",
  ],
  nameTitle: "Was der Name heute bedeutet",
  name: [
    { letter: "Cross", title: "Über Grenzen hinweg", text: "Wir verbinden Systeme, die eigentlich nicht miteinander sprechen: Shop und Warenwirtschaft, CRM und Fachsoftware, Mensch und KI-Agent." },
    { letter: "Net", title: "Vernetzt denken", text: "Kein System steht allein. Wir planen jede Lösung als Teil Ihrer gesamten digitalen Landschaft." },
    { letter: "Management", title: "Verantwortung übernehmen", text: "Wir bauen nicht nur, wir betreiben. Server, Updates, Backups und Weiterentwicklung gehören dazu." },
  ],
  missionTitle: "Unser Antrieb",
  mission: [
    "Große Unternehmen konnten sich schon immer eigene Software leisten. Kleine und mittlere Unternehmen mussten mit dem leben, was der Markt hergab. KI-gestützte Entwicklung ändert das gerade grundlegend.",
    "Wir sind darauf spezialisiert, individuelle Lösungen, die vor wenigen Monaten noch nicht im Budget des kleinen Mittelstands waren, kosteneffizient umzusetzen. Mit eigenen Produkten wie work247, Bookique und GARAN-Label zeigen wir täglich, dass das funktioniert.",
  ],
  valuesTitle: "Woran Sie uns messen können",
  values: [
    { title: "Ehrlich", text: "Wir sagen Ihnen auch, wenn eine Standardlösung reicht und Sie keine eigene Software brauchen." },
    { title: "Pragmatisch", text: "Lieber eine schlanke Lösung, die nächste Woche läuft, als ein perfektes Konzept, das nie fertig wird." },
    { title: "Verlässlich", text: "Systeme, die wir bauen, betreiben wir auch. Wir sind langfristig für Sie da." },
    { title: "Neugierig", text: "Die KI-Werkzeuge entwickeln sich rasant. Wir testen Neues laufend und setzen ein, was sich bewährt." },
  ],
};

export const CONTACT_PAGE = {
  h1: "Lassen Sie uns über Ihr Projekt sprechen",
  intro:
    "Ob Website, Erweiterung für Ihr CRM, eigenes System oder KI-Agent: Schicken Sie uns Ihre Anfrage über das Formular, per E-Mail oder rufen Sie an. Wir melden uns schnell und klären in einem kurzen Gespräch, was möglich ist.",
  email: "E-Mail",
  phone: "Telefon",
  address: "Adresse",
  checklistTitle: "Was uns beim ersten Kontakt hilft",
  checklist: [
    "Worum geht es? Ein, zwei Sätze zu Ihrer Idee oder Ihrem Problem genügen.",
    "Welche Systeme nutzen Sie heute, zum Beispiel Shopify, GoHighLevel, HubSpot oder Branchensoftware?",
    "Gibt es einen Zeitrahmen oder einen festen Termin, etwa eine gesetzliche Frist?",
    "Wer arbeitet später mit dem System: Ihr Team, Ihre Kunden oder beide?",
  ],
  mailSubject: "Projektanfrage über cronema.com",
  nextTitle: "So geht es weiter",
  next: [
    { title: "Kurzes Gespräch", text: "Wir verstehen Ihr Vorhaben und stellen die richtigen Fragen." },
    { title: "Einschätzung", text: "Sie erhalten eine klare Aussage zu Weg, Zeit und Kosten." },
    { title: "Start", text: "Wenn es passt, beginnen wir mit einem ersten Prototyp." },
  ],
};

export const FOOTER = {
  tagline: "KI-Programmierschmiede für den Mittelstand. Software, Apps und KI-Agenten, betrieben in Deutschland.",
  services: "Leistungen",
  company: "Unternehmen",
  legal: "Rechtliches",
  imprint: "Impressum",
  privacy: "Datenschutz",
  rights: "Alle Rechte vorbehalten.",
  hosted: "Server in Deutschland",
};

export type Person = { id: string; name: string; role: string; photo: string; alt: string; intro: string; text: string[]; focus: string[]; quote: string };

export const TEAM = {
  eyebrow: "Team",
  title: "Die Köpfe hinter Cronema",
  subtitle: "Jeweils über 30 Jahre Erfahrung in der digitalen Welt, vom Grafikdesign bis zur Webentwicklung. Heute bündeln wir dieses Wissen in einer KI-Agentur.",
  people: [
    {
      id: "manfred-sandner",
      name: "Manfred Sandner",
      role: "Gründer und Geschäftsführer",
      photo: "/team/manfred-sandner.webp",
      alt: "Manfred Sandner, Gründer und Geschäftsführer von Cronema, lächelnd mit einer Zeitschrift",
      intro: "Entwickler aus Leidenschaft, von der 3D-Animation zur KI-gestützten Softwareentwicklung.",
      text: [
        "Manfred hat in der 3D-Animation und im Grafikdesign angefangen und sich dann ganz der Webentwicklung verschrieben. Über die Jahre hat er Online-Shops entwickelt und erweitert, Open-Source-CRM-Systeme angepasst und unzählige WordPress-Projekte umgesetzt.",
        "Heute entwickelt er mit Claude Code Apps, Plattform-Erweiterungen und eigene Systeme für den Mittelstand, darunter work247, Bookique und GARAN-Label. Er verantwortet Architektur, Qualität und den Betrieb auf den Servern in Deutschland.",
      ],
      focus: ["KI-gestützte Softwareentwicklung", "Shopify- und GoHighLevel-Apps", "Schnittstellen und Systemarchitektur", "Server und Betrieb"],
      quote: "Neue Technologien begeistern mich jeden Tag aufs Neue.",
    },
    {
      id: "rolf-mai",
      name: "Rolf Mai",
      role: "Business Partner, Marketing und Strategie",
      photo: "/team/rolf-mai.webp",
      alt: "Rolf Mai, Business Partner von Cronema, lächelnd im Sessel mit einer Zeitschrift",
      intro: "Stratege mit Wurzeln in Gestaltung und Redaktion, der Technik und Geschäftsmodell zusammenbringt.",
      text: [
        "Rolf kommt aus dem Grafikdesign und der redaktionellen Arbeit und hat später eigene Kommunikations- und Beratungsprojekte aufgebaut. Er berät Unternehmen zu Marketing- und Content-Strategien, Vertrieb und digitalen Geschäftsmodellen.",
        "Bei Cronema sorgt er dafür, dass KI dort eingesetzt wird, wo sie im Unternehmen wirklich etwas bewegt: in Abläufen, im Vertrieb und in der Kommunikation. Er übersetzt Ziele in Konzepte für KI-Agenten und Automatisierung, die sich rechnen.",
      ],
      focus: ["KI zur Prozessoptimierung", "Marketing- und Content-Strategie", "Digitale Geschäftsmodelle", "Vertrieb und Kommunikation"],
      quote: "Mich begeistert es, kreative Ideen mit technologischer Entwicklung zu verbinden.",
    },
  ] as Person[],
};
