// Imprint: taken from work247.app and bookique.app (same company). Privacy policy: based on bookique.app,
// reduced to this website (no app, no forms; consent banner, Google Analytics only with consent).
// Blocks: heading, paragraph (lines), list.
import { COMPANY_ADDRESS, COMPANY_LEGAL_NAME, CONTACT_EMAIL, PHONE_DISPLAY } from "../config";

export type LegalBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; lines: string[] }
  | { type: "ul"; items: string[] };

const ADDRESS = [COMPANY_ADDRESS.street, `${COMPANY_ADDRESS.zip} ${COMPANY_ADDRESS.city}`];

export const IMPRINT: LegalBlock[] = [
  { type: "p", lines: ["Angaben gemäß § 5 DDG"] },
  { type: "p", lines: [COMPANY_LEGAL_NAME, ...ADDRESS, "Deutschland"] },
  { type: "h3", text: "Handelsregister" },
  { type: "p", lines: ["Handelsregister: HRB 210506", "Registergericht: Amtsgericht München"] },
  { type: "h3", text: "Vertreten durch" },
  { type: "p", lines: ["Geschäftsführer: Manfred Sandner"] },
  { type: "h3", text: "Kontakt" },
  { type: "p", lines: [`Telefon: ${PHONE_DISPLAY}`, `E-Mail: ${CONTACT_EMAIL}`] },
  { type: "h3", text: "Umsatzsteuer-Identifikationsnummer" },
  { type: "p", lines: ["Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE294100946"] },
  { type: "h3", text: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV" },
  { type: "p", lines: ["Manfred Sandner", ...ADDRESS] },
  { type: "h3", text: "Verbraucherstreitbeilegung / Universalschlichtungsstelle" },
  { type: "p", lines: ["Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."] },
  { type: "h2", text: "Haftungsausschluss" },
  { type: "h3", text: "Haftung für Inhalte" },
  { type: "p", lines: ["Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht unter bestimmten Voraussetzungen verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen."] },
  { type: "h3", text: "Haftung für Links" },
  { type: "p", lines: ["Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen."] },
  { type: "h3", text: "Urheberrecht" },
  { type: "p", lines: ["Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers."] },
  { type: "h3", text: "Marken" },
  { type: "p", lines: ["Shopify, GoHighLevel, HubSpot, WordPress, n8n, Make, Zapier, Claude, Hetzner und weitere genannte Namen sind Marken ihrer jeweiligen Inhaber. Ihre Nennung dient nur der Beschreibung unserer Leistungen und bedeutet keine Partnerschaft, sofern nicht ausdrücklich angegeben."] },
];

export const PRIVACY: LegalBlock[] = [
  { type: "p", lines: ["Stand: 22. Oktober 2026"] },
  { type: "h2", text: "1. Verantwortlicher" },
  { type: "p", lines: [COMPANY_LEGAL_NAME, `${ADDRESS.join(", ")}, Deutschland`, "Vertreten durch den Geschäftsführer Manfred Sandner", `Telefon: ${PHONE_DISPLAY}`, `E-Mail: ${CONTACT_EMAIL}`] },
  { type: "p", lines: ["Diese Datenschutzerklärung gilt für die Website cronema.com (im Folgenden „Website“)."] },
  { type: "h2", text: "2. Überblick" },
  {
    type: "ul",
    items: [
      "Wir setzen keine Werbe-Cookies ein. Google Analytics nutzen wir nur mit Ihrer Einwilligung, um die Website zu verbessern (Abschnitt 5).",
      "Ihre Einwilligung können Sie jederzeit über das Schild-Symbol unten links oder den Link „Cookie-Einstellungen“ unten auf jeder Seite ändern oder widerrufen.",
      "Schriftarten werden von unserem eigenen Webserver geladen, nicht von Google.",
      "Anfragen über das Kontaktformular speichern wir in unserem Kundenverwaltungssystem (CRM) HighLevel, um sie zu bearbeiten (Abschnitt 7).",
    ],
  },
  { type: "h2", text: "3. Bereitstellung der Website und Server-Protokolle" },
  { type: "p", lines: ["Beim Aufruf der Website verarbeitet unser Hosting-Anbieter technisch notwendige Daten, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, Referrer-URL, Browsertyp und -version, Betriebssystem. Diese Daten werden benötigt, um die Website auszuliefern sowie ihre Sicherheit und Stabilität zu gewährleisten (z. B. Abwehr von Angriffen). Eine Zusammenführung mit anderen Datenquellen findet nicht statt."] },
  { type: "p", lines: ["Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt in der sicheren und fehlerfreien Bereitstellung der Website. Server-Protokolle werden vom Hosting-Anbieter nach kurzer Zeit, in der Regel nach höchstens 30 Tagen, gelöscht, sofern sie nicht zur Aufklärung eines Sicherheitsvorfalls benötigt werden."] },
  { type: "p", lines: ["Hosting-Anbieter: Netlify, Inc., 512 2nd Street, Suite 200, San Francisco, CA 94107, USA. Mit dem Anbieter besteht ein Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO). Für die Übermittlung in die USA gilt der Angemessenheitsbeschluss der EU-Kommission zum EU-US Data Privacy Framework, soweit der Anbieter zertifiziert ist, im Übrigen die Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO). Die Website wird über ein weltweites Netz von Servern ausgeliefert."] },
  { type: "h2", text: "4. Speicherung im Browser, Cookies und Einwilligung" },
  { type: "p", lines: ["Nach § 25 Abs. 1 TDDDG ist für das Speichern von Informationen auf Ihrem Endgerät oder den Zugriff darauf grundsätzlich Ihre Einwilligung erforderlich, außer es ist für einen von Ihnen ausdrücklich gewünschten Dienst unbedingt erforderlich (§ 25 Abs. 2 Nr. 2 TDDDG). Ohne Ihre Einwilligung setzen wir keine Cookies. Technisch notwendig speichern wir im lokalen Speicher Ihres Browsers (localStorage) nur einen Eintrag:"] },
  { type: "ul", items: ["„cronema-consent“: Ihre Auswahl im Einwilligungsbanner und der Zeitpunkt der Entscheidung, damit das Banner nicht bei jedem Seitenaufruf erscheint. Gültig 12 Monate, danach fragen wir erneut."] },
  { type: "p", lines: ["Dieser Eintrag verlässt Ihren Browser nicht. Sie können ihn jederzeit über die Einstellungen Ihres Browsers löschen."] },
  { type: "p", lines: ["Für die Webanalyse mit Google Analytics (Abschnitt 5) bitten wir um Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Ohne Einwilligung wird Google Analytics nicht geladen; alle Inhalte der Website bleiben vollständig nutzbar. Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie über das Schild-Symbol unten links, den Link „Cookie-Einstellungen“ unten auf jeder Seite oder den Knopf oben auf dieser Seite die Einstellungen öffnen und die Auswahl ändern. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt (Art. 7 Abs. 3 DSGVO)."] },
  { type: "h2", text: "5. Webanalyse mit Google Analytics (nur mit Einwilligung)" },
  { type: "p", lines: ["Wenn Sie in die Kategorie „Statistik“ einwilligen, nutzen wir Google Analytics 4, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (Mutterunternehmen: Google LLC, USA). Google Analytics erfasst, welche Seiten Sie aufrufen, wie lange Sie bleiben, von welcher Website Sie kommen sowie Angaben zu Browser, Betriebssystem, Gerät, Bildschirmgröße und ungefährem Standort (Land, Region, Stadt). Dazu werden Cookies (_ga, _ga_<ID>) auf Ihrem Endgerät gespeichert, die bis zu zwei Jahre gültig sind. Ihre IP-Adresse wird von Google Analytics 4 nicht gespeichert; sie wird nur kurz zur Bestimmung des ungefähren Standorts verwendet. Wir nutzen die Auswertungen ausschließlich in zusammengefasster Form, um die Website und unser Angebot zu verbessern. Google-Signale und personalisierte Werbung sind nicht aktiviert."] },
  { type: "p", lines: ["Google verarbeitet die Daten in unserem Auftrag; mit Google besteht ein Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO). Die Daten können auch an Google LLC in die USA übermittelt werden. Google LLC ist unter dem EU-US Data Privacy Framework zertifiziert; die Übermittlung erfolgt daher auf Grundlage des Angemessenheitsbeschlusses der EU-Kommission (Art. 45 DSGVO), ergänzend gelten die Standardvertragsklauseln. Die Aufbewahrungsdauer der Analysedaten bei Google ist auf 14 Monate eingestellt."] },
  { type: "p", lines: ["Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Wenn Sie die Einwilligung in den Cookie-Einstellungen widerrufen, beenden wir die Messung und löschen die Google-Analytics-Cookies in Ihrem Browser. Weitere Informationen: policies.google.com/privacy."] },
  { type: "h2", text: "6. Schriftarten" },
  { type: "p", lines: ["Die auf der Website verwendeten Schriftarten (Inter, Inter Tight) sind auf unserem Webserver gespeichert und werden von dort geladen. Es findet keine Verbindung zu Servern von Google oder anderen Schriftanbietern statt."] },
  { type: "h2", text: "7. Kontaktformular, E-Mail und Telefon" },
  { type: "p", lines: ["Wenn Sie uns über das Kontaktformular, per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben (Vor- und Nachname, E-Mail-Adresse, optional Telefonnummer und Firma, gewähltes Thema, Ihre Nachricht sowie den Zeitpunkt der Anfrage), um Ihre Anfrage zu beantworten und Sie zu unserem Angebot zu beraten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit einem Vertrag oder dessen Anbahnung zusammenhängt, im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen)."] },
  { type: "p", lines: ["Das Kontaktformular übermittelt Ihre Angaben verschlüsselt an eine Serverfunktion unseres Hosting-Anbieters Netlify (Abschnitt 3), die sie an unser Kundenverwaltungssystem (CRM) weiterleitet. Dort werden sie als Kontakt mit einer Notiz zu Ihrer Anfrage gespeichert. Zum Schutz vor Spam prüfen wir, wie schnell das Formular ausgefüllt wurde, und begrenzen die Zahl der Anfragen je IP-Adresse kurzzeitig; die IP-Adresse wird dafür nicht dauerhaft gespeichert."] },
  { type: "p", lines: ["Anbieter des CRM-Systems ist HighLevel, Inc. (mit der LeadConnector LLC), 1801 N. Lamar St., Suite 600, Dallas, Texas 75202, USA; die Daten werden in Rechenzentren von Google Cloud und Amazon Web Services verarbeitet. Mit HighLevel besteht ein Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO, Data Processing Addendum mit den Standardvertragsklauseln der EU-Kommission). HighLevel ist unter dem EU-US Data Privacy Framework zertifiziert; die Übermittlung in die USA erfolgt daher auf Grundlage des Angemessenheitsbeschlusses der EU-Kommission vom 10. Juli 2023 (Art. 45 DSGVO), ergänzend gelten die Standardvertragsklauseln (Art. 46 Abs. 2 lit. c DSGVO)."] },
  { type: "p", lines: ["Wir löschen Ihre Angaben, wenn die Anfrage erledigt ist und keine weitere Geschäftsbeziehung entsteht, spätestens nach zwei Jahren ohne weiteren Kontakt, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Kommt ein Vertrag zustande, gelten die handels- und steuerrechtlichen Aufbewahrungsfristen."] },
  { type: "h2", text: "8. Links zu anderen Websites" },
  { type: "p", lines: ["Die Website verlinkt auf Websites unserer Produkte (z. B. work247.app, bookique.app) und auf Websites Dritter. Erst wenn Sie einen solchen Link anklicken, werden Daten an den jeweiligen Betreiber übermittelt; dort gilt dessen Datenschutzerklärung."] },
  { type: "h2", text: "9. Ihre Rechte" },
  { type: "p", lines: ["Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:"] },
  { type: "ul", items: ["Recht auf Auskunft (Art. 15 DSGVO)", "Recht auf Berichtigung (Art. 16 DSGVO)", "Recht auf Löschung (Art. 17 DSGVO)", "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)", "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)", "Recht auf Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)"] },
  { type: "h3", text: "Widerspruchsrecht (Art. 21 DSGVO)" },
  { type: "p", lines: ["Soweit wir Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) verarbeiten, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen diese Verarbeitung einzulegen. Wir verarbeiten die Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen."] },
  { type: "h3", text: "Beschwerderecht" },
  { type: "p", lines: ["Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Für uns zuständig ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA), Promenade 18, 91522 Ansbach, www.lda.bayern.de."] },
  { type: "p", lines: [`Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an ${CONTACT_EMAIL}.`] },
  { type: "h2", text: "10. Datensicherheit" },
  { type: "p", lines: ["Die Website wird ausschließlich verschlüsselt über HTTPS (TLS) übertragen. Wir treffen technische und organisatorische Maßnahmen, um Ihre Daten gegen Verlust, Manipulation und unberechtigten Zugriff zu schützen."] },
  { type: "h2", text: "11. Änderungen dieser Datenschutzerklärung" },
  { type: "p", lines: ["Wir passen diese Datenschutzerklärung an, wenn sich die Website, unsere Dienste oder die Rechtslage ändern. Es gilt die jeweils hier veröffentlichte Fassung."] },
];
