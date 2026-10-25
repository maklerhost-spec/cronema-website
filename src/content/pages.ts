// Texts of the homepage and the other pages in the current site language (see src/lang.ts).
// The German originals are in de/pages.ts, translations in en/, fr/, es/.
import { localized } from "../lang";
import * as de from "./de/pages";
import * as en from "./en/pages";
import * as fr from "./fr/pages";
import * as es from "./es/pages";

export type { Reference, Person } from "./de/pages";

export const META = localized({ de: de.META, en: en.META, fr: fr.META, es: es.META });
export const NAV = localized({ de: de.NAV, en: en.NAV, fr: fr.NAV, es: es.NAV });
export const HOME = localized({ de: de.HOME, en: en.HOME, fr: fr.HOME, es: es.HOME });
export const REFERENCES = localized({ de: de.REFERENCES, en: en.REFERENCES, fr: fr.REFERENCES, es: es.REFERENCES });
export const REFERENCES_PAGE = localized({ de: de.REFERENCES_PAGE, en: en.REFERENCES_PAGE, fr: fr.REFERENCES_PAGE, es: es.REFERENCES_PAGE });
export const APPROACH_PAGE = localized({ de: de.APPROACH_PAGE, en: en.APPROACH_PAGE, fr: fr.APPROACH_PAGE, es: es.APPROACH_PAGE });
export const ABOUT_PAGE = localized({ de: de.ABOUT_PAGE, en: en.ABOUT_PAGE, fr: fr.ABOUT_PAGE, es: es.ABOUT_PAGE });
export const CONTACT_PAGE = localized({ de: de.CONTACT_PAGE, en: en.CONTACT_PAGE, fr: fr.CONTACT_PAGE, es: es.CONTACT_PAGE });
export const FOOTER = localized({ de: de.FOOTER, en: en.FOOTER, fr: fr.FOOTER, es: es.FOOTER });
export const TEAM = localized({ de: de.TEAM, en: en.TEAM, fr: fr.TEAM, es: es.TEAM });
