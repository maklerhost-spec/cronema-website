// Labels inside the SVG graphics: the German text is the key.
import { getLang } from "../lang";
import * as en from "./en/ui";
import * as es from "./es/ui";
import * as fr from "./fr/ui";

const ART = { en: en.ART, fr: fr.ART, es: es.ART };

export function art(text: string): string {
  const lang = getLang();
  return lang === "de" ? text : (ART[lang][text] ?? text);
}
