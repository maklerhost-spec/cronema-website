// Consent banner texts in the current site language.
import { localized } from "../lang";
import * as de from "./de/consent";
import * as en from "./en/consent";
import * as fr from "./fr/consent";
import * as es from "./es/consent";

export type { ConsentTexts } from "./de/consent";

export const CONSENT = localized({ de: de.CONSENT, en: en.CONSENT, fr: fr.CONSENT, es: es.CONSENT });
