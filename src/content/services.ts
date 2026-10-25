// The six services in the current site language (originals in de/services.ts).
import { localized } from "../lang";
import * as de from "./de/services";
import * as en from "./en/services";
import * as fr from "./fr/services";
import * as es from "./es/services";

export type { Service } from "./de/services";

export const SERVICES = localized({ de: de.SERVICES, en: en.SERVICES, fr: fr.SERVICES, es: es.SERVICES });
