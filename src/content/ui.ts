// Small interface texts in the current site language.
import { localized } from "../lang";
import * as de from "./de/ui";
import * as en from "./en/ui";
import * as fr from "./fr/ui";
import * as es from "./es/ui";

export const UI = localized({ de: de.UI, en: en.UI, fr: fr.UI, es: es.UI });
