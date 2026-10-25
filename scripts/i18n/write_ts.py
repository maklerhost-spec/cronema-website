"""Writes src/content/<lang>/<module>.ts from the translated JSON, typed
against the German module so the compiler checks the shape."""
import json
import re
from pathlib import Path

HERE = Path(__file__).parent
CONTENT = Path(r"C:\Projekte\cronema-website\src\content")
LEGAL_NAME = "Cronema UG (haftungsbeschränkt)"
# Explicit types where the German module declares one.
TYPES = {
    ("pages", "REFERENCES"): "DE.Reference[]",
    ("services", "SERVICES"): "typeof DE.SERVICES",
    ("consent", "CONSENT"): "DE.ConsentTexts",
    ("legal", "IMPRINT"): "DE.LegalBlock[]",
    ("legal", "PRIVACY"): "DE.LegalBlock[]",
    ("ui", "ART"): "Record<string, string>",
}


def fix(value):
    if isinstance(value, dict):
        return {k: fix(v) for k, v in value.items()}
    if isinstance(value, list):
        return [fix(v) for v in value]
    if isinstance(value, str):
        # The registered company name is never translated.
        return re.sub(r"Cronema UG \([^)]*\)", LEGAL_NAME, value)
    return value


for f in sorted(HERE.glob("*.*.json")):
    module, lang = f.name.split(".")[:2]
    if lang == "de":
        continue
    data = fix(json.load(open(f, encoding="utf-8")))
    lines = [f"// {module} – {lang}. Generated from the German texts (scripts/i18n), then reviewed.",
             f'import type * as DE from "../de/{module}";', ""]
    for name, value in data.items():
        t = TYPES.get((module, name), f"typeof DE.{name}")
        lines.append(f"export const {name}: {t} = {json.dumps(value, ensure_ascii=False, indent=2)};")
        lines.append("")
    out = CONTENT / lang / f"{module}.ts"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_bytes("\n".join(lines).encode("utf-8"))
    print("wrote", out.relative_to(CONTENT))
