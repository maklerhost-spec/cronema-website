// Writes the German texts as JSON (one file per module) for translation:
//   npx vite-node scripts/i18n/dump-de.ts <outDir>
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import * as consent from "../../src/content/de/consent";
import * as legal from "../../src/content/de/legal";
import * as pages from "../../src/content/de/pages";
import * as services from "../../src/content/de/services";
import * as ui from "../../src/content/de/ui";

const out = process.argv[2] ?? ".";
const modules = { pages, services, consent, legal, ui };
for (const [name, mod] of Object.entries(modules)) {
  writeFileSync(join(out, `${name}.de.json`), JSON.stringify(mod, null, 1));
}
console.log("dumped", Object.keys(modules).join(", "));
