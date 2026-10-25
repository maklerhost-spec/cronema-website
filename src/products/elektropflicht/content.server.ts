// Prerender: every language of the ElektroPflicht pages at once.
import { setProductContent, type ProductContent } from "./store";
import type { ProductLang } from "./langs";

const all = import.meta.glob<{ default: ProductContent }>("./content/*.json", { eager: true });

for (const [file, mod] of Object.entries(all)) {
  const lang = file.replace("./content/", "").replace(".json", "") as ProductLang;
  setProductContent(lang, mod.default);
}
