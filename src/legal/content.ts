// Imprint and privacy policy in the current site language. German is the
// binding version (de); the others are translations with a note on top.
import { localized } from "../lang";
import * as de from "../content/de/legal";
import * as en from "../content/en/legal";
import * as es from "../content/es/legal";
import * as fr from "../content/fr/legal";

export type { LegalBlock } from "../content/de/legal";

export const IMPRINT = localized({ de: de.IMPRINT, en: en.IMPRINT, fr: fr.IMPRINT, es: es.IMPRINT });
export const PRIVACY = localized({ de: de.PRIVACY, en: en.PRIVACY, fr: fr.PRIVACY, es: es.PRIVACY });
