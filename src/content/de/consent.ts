// Texts of the consent banner (taken from bookique.app).
export interface ConsentTexts {
  title: string;
  text: string;
  acceptAll: string;
  necessaryOnly: string;
  settings: string;
  save: string;
  close: string;
  footerLink: string;
  always: string;
  categories: { key: "necessary" | "analytics"; title: string; text: string }[];
  revoke: { title: string; text: string; button: string; status: string; none: string; granted: string };
}

export const CONSENT: ConsentTexts = {
    title: "Ihre Privatsphäre",
    text: "Wir setzen keine Werbe-Cookies ein. Mit Ihrer Einwilligung messen wir mit Google Analytics, wie unsere Website genutzt wird; dabei können Daten in die USA übermittelt werden. Ihre Einwilligung ist freiwillig und jederzeit über das Schild-Symbol unten links oder „Cookie-Einstellungen“ im Fußbereich widerrufbar. Die Website funktioniert auch ohne Einwilligung vollständig.",
    acceptAll: "Alle akzeptieren",
    necessaryOnly: "Nur notwendige",
    settings: "Einstellungen",
    save: "Auswahl speichern",
    close: "Schließen",
    footerLink: "Cookie-Einstellungen",
    always: "Immer aktiv",
    categories: [
      { key: "necessary", title: "Notwendig", text: "Speichert Ihre Auswahl in diesem Banner bis zu 12 Monate in Ihrem Browser. Keine Cookies." },
      { key: "analytics", title: "Statistik (Google Analytics)", text: "Misst Seitenaufrufe und Nutzung der Website in zusammengefasster Form, damit wir sie verbessern können. Setzt Cookies (_ga); Daten können von Google in den USA verarbeitet werden." },
    ],
    revoke: { title: "Ihre Einwilligung", text: "Sie können Ihre Auswahl jederzeit mit Wirkung für die Zukunft ändern oder widerrufen.", button: "Cookie-Einstellungen ändern", status: "Aktueller Stand:", none: "nur notwendige", granted: "eingewilligt in" },
  };
