"""Translates the German website texts (<module>.de.json) into en, fr, es.
Keeps keys, array lengths and every non-text value (paths, URLs, emails,
ids) exactly; writes <module>.<lang>.json. Key from GARAN/listing/de/video/.env."""
import json
import re
import sys
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

HERE = Path(__file__).parent
MODULES = ["pages", "services", "consent", "legal", "ui"]
LANGS = {
    "en": "English (international business English)",
    "fr": "French (France), address the reader formally with 'vous'",
    "es": "Spanish (Spain), address the reader formally with 'usted'",
}
LEGAL_NOTE = {
    "en": "This translation is provided for your convenience. The German version is legally binding.",
    "fr": "Cette traduction est fournie pour votre commodité. Seule la version allemande fait foi.",
    "es": "Esta traducción se ofrece para su comodidad. La versión alemana es la jurídicamente vinculante.",
}


def key():
    for line in Path("C:/Projekte/GARAN/listing/de/video/.env").read_text(encoding="utf-8-sig").splitlines():
        if line.strip().startswith("OPENAI_API_KEY="):
            return line.split("=", 1)[1].strip().strip('"').strip("'")
    sys.exit("no key")


def protected(s):
    """Values that must stay as they are."""
    return bool(re.match(r"^(/|https?://|mailto:|tel:|#)", s) or re.fullmatch(r"[\w.+-]+@[\w.-]+", s)
                or re.fullmatch(r"[\w-]+", s) and s.lower() == s and "-" in s)


def merge(de, tr, path="$"):
    """Same shape as German; protected values copied from German."""
    if isinstance(de, dict):
        assert isinstance(tr, dict) and set(tr) == set(de), f"keys differ at {path}: {set(de) ^ set(tr)}"
        return {k: merge(de[k], tr[k], f"{path}.{k}") for k in de}
    if isinstance(de, list):
        assert isinstance(tr, list) and len(tr) == len(de), f"length differs at {path}"
        return [merge(a, b, f"{path}[{i}]") for i, (a, b) in enumerate(zip(de, tr))]
    if isinstance(de, str):
        assert isinstance(tr, str), f"type differs at {path}"
        return de if protected(de) else tr
    return de


def translate(k, module, lang):
    src = json.load(open(HERE / f"{module}.de.json", encoding="utf-8"))
    instructions = (
        f"Translate the string values of this JSON from German into {LANGS[lang]}. It is the website of Cronema, "
        "an AI software studio from Munich. Return the same JSON with exactly the same keys, nesting and array "
        "lengths; translate values only, never keys. Keep **bold** markers, numbers, units, product and brand names "
        "(Cronema, Cross Net Management, Claude Code, Shopify, GoHighLevel, HubSpot, work247, Bookique, GARAN-Label, "
        "Hetzner, n8n, Make, Zapier, OpenImmo, Kyero, RESO) and every URL, path, e-mail, phone number and id unchanged. "
        "Write natural, idiomatic marketing copy, not word-for-word. Legal texts (imprint, privacy policy): translate "
        "faithfully, keep German law names (DSGVO → GDPR equivalent in the target language, TMG/DDG etc. keep the "
        "abbreviation) and authority names. In the object ART the keys are German graphic labels: keep the keys, "
        "translate the values (keep them short, they sit inside small graphics). Keep leading spaces of values."
    )
    body = {"model": "gpt-5", "reasoning": {"effort": "low"}, "instructions": instructions,
            "input": "Translate this JSON:\n" + json.dumps(src, ensure_ascii=False),
            "text": {"format": {"type": "json_object"}}}
    req = urllib.request.Request("https://api.openai.com/v1/responses", data=json.dumps(body).encode(),
                                 headers={"Authorization": "Bearer " + k, "Content-Type": "application/json"})
    out = json.loads(urllib.request.urlopen(req, timeout=900).read())
    text = "".join(c.get("text", "") for o in out.get("output", []) if o.get("type") == "message"
                   for c in o.get("content", []) if c.get("type") == "output_text")
    data = merge(src, json.loads(text))
    if module == "ui":
        data["UI"]["legalNote"] = LEGAL_NOTE[lang]
    (HERE / f"{module}.{lang}.json").write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")
    return f"{module}.{lang}"


if __name__ == "__main__":
    k = key()
    jobs = [(m, l) for m in MODULES for l in LANGS if not (HERE / f"{m}.{l}.json").exists()]
    with ThreadPoolExecutor(8) as ex:
        futures = {f"{m}.{l}": ex.submit(translate, k, m, l) for m, l in jobs}
        for name, f in futures.items():
            try:
                print("ok", f.result(), flush=True)
            except Exception as e:
                print("FAIL", name, type(e).__name__, str(e)[:300], flush=True)
