// ElektroPflicht: landing page and documentation in 26 languages.
// Texts: src/products/elektropflicht/content/<lang>.json (landing texts, the
// store image captions and the app's help page). Links to EU law and the
// authorities: products/elektropflicht/sources.ts (official pages only).
import { ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown, Globe, Plus } from "lucide-react";
import { pathFor } from "../site";
import { Cta, Eyebrow, SectionHead } from "./common";
import { AUTONYMS, PRODUCT_LANGS, productPath, type ProductLang } from "../products/elektropflicht/langs";
import { productContent } from "../products/elektropflicht/store";
import { COUNTRY_SOURCES, EC_PAGES, EU_LAWS, eurLex, type EcPage, type EuLaw, type SourceType } from "../products/elektropflicht/sources";

const COUNTRY_ORDER = ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK", "IS", "LI", "NO"];
/** Countries whose language is the page language come first in the list of authorities. */
const HOME_COUNTRIES: Partial<Record<ProductLang, string[]>> = {
  de: ["DE", "AT", "LU", "BE", "LI"], en: ["IE", "MT"], fr: ["FR", "BE", "LU"], es: ["ES"], it: ["IT"], nl: ["NL", "BE"],
  pl: ["PL"], pt: ["PT"], sv: ["SE", "FI"], da: ["DK"], fi: ["FI"], cs: ["CZ"], sk: ["SK"], sl: ["SI"], hr: ["HR"],
  hu: ["HU"], ro: ["RO"], bg: ["BG"], el: ["GR", "CY"], et: ["EE"], lv: ["LV"], lt: ["LT"], ga: ["IE"], mt: ["MT"],
  nb: ["NO"], is: ["IS"],
};

const TYPE_CLASS: Record<SourceType, string> = {
  battery: "bg-emerald-50 text-emerald-800",
  weee: "bg-sky-50 text-sky-800",
  both: "bg-violet-50 text-violet-800",
  retail: "bg-amber-50 text-amber-800",
};

/** Links to the same page in all 26 languages (plain links, no JavaScript needed). */
function LanguagePicker({ plang, docs }: { plang: ProductLang; docs: boolean }) {
  const c = productContent(plang);
  return (
    <details className="group relative inline-block">
      <summary className="flex cursor-pointer list-none items-center gap-2 rounded-md border border-white/20 px-3 py-2 text-sm font-medium text-slate-200 hover:border-white/40 [&::-webkit-details-marker]:hidden">
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span className="sr-only">{c.language}: </span>
        {AUTONYMS[plang]}
        <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>
      <ul className="absolute left-0 z-20 mt-2 grid max-h-80 w-[min(28rem,85vw)] grid-cols-2 gap-1 overflow-y-auto rounded-md border border-white/10 bg-ink-800 p-2 shadow-2xl shadow-black/40">
        {PRODUCT_LANGS.map((l) => (
          <li key={l}>
            <a
              href={productPath(l, docs)}
              hrefLang={l}
              lang={l}
              aria-current={l === plang ? "true" : undefined}
              className={`block rounded px-3 py-1.5 text-sm hover:bg-white/5 ${l === plang ? "font-semibold text-white" : "text-slate-300"}`}
            >
              {AUTONYMS[l]}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}

function Crumbs({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((c, i) => (
          <li key={c.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true" className="text-slate-600">/</span>}
            <a href={c.href} className="hover:text-accent-300">{c.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ProductLanding({ plang }: { plang: ProductLang }) {
  const c = productContent(plang);
  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-20 pt-32 sm:pt-36">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-accent-500/20 blur-3xl" aria-hidden="true" />
        <div className="container-x relative">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Crumbs items={[{ href: pathFor("home"), label: "Cronema" }, { href: productPath(plang), label: "ElektroPflicht" }]} />
            <LanguagePicker plang={plang} docs={false} />
          </div>
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="flex items-center gap-4">
                <img src="/elektropflicht/icon.png" alt="" width={56} height={56} className="h-14 w-14 rounded-xl" />
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-400/40 bg-accent-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-accent-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-400" aria-hidden="true" />
                  {c.badge}
                </span>
              </div>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">{c.title}</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{c.subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={productPath(plang, true)} className="btn-accent group">
                  <BookOpen className="h-4 w-4" aria-hidden="true" />
                  {c.ctaDocs}
                </a>
                <a href={pathFor("contact")} className="btn-light group">
                  {c.ctaContact}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
                {c.facts.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-accent-400" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <img src={`/elektropflicht/${plang}/cover.webp`} alt={c.tagline} width={1200} height={675} className="w-full rounded-lg shadow-2xl shadow-black/40 ring-1 ring-white/10" />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-x">
          <SectionHead eyebrow="ElektroPflicht" title={c.featuresTitle} subtitle={c.tagline} />
          <div className="space-y-20">
            {c.features.map((f, i) => (
              <article key={f.image} className="grid items-center gap-10 lg:grid-cols-2">
                <img
                  src={f.image}
                  alt={`${c.imageAlt}: ${f.title}`}
                  width={1200}
                  height={675}
                  loading="lazy"
                  className={`w-full rounded-lg border border-slate-200 shadow-soft ${i % 2 ? "lg:order-2" : ""}`}
                />
                <div>
                  <Eyebrow index={String(i + 1).padStart(2, "0")}>{c.featuresTitle}</Eyebrow>
                  <h3 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-ink">{f.title}</h3>
                  <p className="mt-4 max-w-lg text-lg leading-relaxed text-slate-600">{f.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="container-x">
          <SectionHead title={c.whyTitle} />
          <div className="grid gap-6 md:grid-cols-3">
            {c.why.map((w) => (
              <div key={w.title} className="rounded-md border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-bold text-ink">{w.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink">{c.langsTitle}</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{c.langsText}</p>
            <a href={productPath(plang, true)} className="btn-outline mt-8">
              {c.docsLink}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <ul className="flex flex-wrap content-start gap-2">
            {PRODUCT_LANGS.map((l) => (
              <li key={l}>
                <a
                  href={productPath(l)}
                  hrefLang={l}
                  lang={l}
                  className={`inline-block rounded-full border px-3 py-1.5 text-sm ${l === plang ? "border-accent-500 bg-accent-50 font-semibold text-accent-700" : "border-slate-200 text-slate-700 hover:border-accent-300"}`}
                >
                  {AUTONYMS[l]}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="container-x mt-16">
          <p className="rounded-md border border-slate-200 bg-slate-50 px-5 py-4 text-slate-700">
            <strong className="text-ink">{c.byCronema}.</strong> {c.upcomingNote}
          </p>
        </div>
      </section>

      <Cta />
    </>
  );
}

export function ProductDocs({ plang }: { plang: ProductLang }) {
  const c = productContent(plang);
  const d = c.docs;
  const first = HOME_COUNTRIES[plang] ?? [];
  const rest = COUNTRY_ORDER.filter((x) => !first.includes(x)).sort((a, b) => d.countryNames[a].localeCompare(d.countryNames[b], plang));
  const country = (code: string) => {
    const rows = COUNTRY_SOURCES[code] ?? [];
    return (
      <details key={code} className="group border-b border-slate-200 py-4">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-ink [&::-webkit-details-marker]:hidden">
          {d.countryNames[code]}
          <Plus className="h-4 w-4 shrink-0 text-accent-600 transition-transform group-open:rotate-45" aria-hidden="true" />
        </summary>
        <div className="mt-3 space-y-2">
          {code === "LI" && <p className="text-slate-600">{d.liNote}</p>}
          {code === "LV" && <p className="text-slate-600">{d.lvNote}</p>}
          {rows.length === 0 ? (
            <p className="text-sm text-slate-500">{d.noOfficial}</p>
          ) : (
            <ul className="space-y-2">
              {rows.map((r) => (
                <li key={r.url} className="flex flex-wrap items-baseline gap-2 text-sm">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${TYPE_CLASS[r.type]}`}>{d.types[r.type]}</span>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-accent-700 underline-offset-2 hover:underline">
                    {r.title} ↗
                  </a>
                  {r.urlEn && (
                    <a href={r.urlEn} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:underline">
                      · {d.englishVersion} ↗
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </details>
    );
  };

  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-16 pt-32 sm:pt-36">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="container-x relative">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Crumbs
              items={[
                { href: pathFor("home"), label: "Cronema" },
                { href: productPath(plang), label: "ElektroPflicht" },
                { href: productPath(plang, true), label: c.docsLink },
              ]}
            />
            <LanguagePicker plang={plang} docs />
          </div>
          <h1 className="mt-8 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">{d.heading}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{d.intro}</p>
        </div>
      </section>

      <div className="container-x grid gap-12 py-16 lg:grid-cols-[16rem_1fr]">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{d.contents}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {d.sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-slate-600 hover:text-accent-700">{s.title}</a>
              </li>
            ))}
            <li><a href="#faq" className="text-slate-600 hover:text-accent-700">{d.faqHeading}</a></li>
            <li><a href="#sources" className="text-slate-600 hover:text-accent-700">{d.sourcesHeading}</a></li>
          </ul>
          <a href={productPath(plang)} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-accent-700 hover:underline">
            ← {c.backToApp}
          </a>
        </aside>

        <article className="min-w-0">
          <p className="rounded-md border border-sky-200 bg-sky-50 px-5 py-4 text-sm leading-relaxed text-sky-900">{d.disclaimer}</p>
          {d.sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-28 border-b border-slate-200 py-10">
              <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">{s.title}</h2>
              <div className="mt-4 space-y-4 text-lg leading-relaxed text-slate-700">
                {s.body.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </section>
          ))}

          <section id="faq" className="scroll-mt-28 border-b border-slate-200 py-10">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">{d.faqHeading}</h2>
            <div className="mt-4">
              {d.faq.map((f) => (
                <details key={f.q} className="group border-b border-slate-200 py-4 last:border-0">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Plus className="mt-1 h-4 w-4 shrink-0 text-accent-600 transition-transform group-open:rotate-45" aria-hidden="true" />
                  </summary>
                  <p className="mt-3 leading-relaxed text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="sources" className="scroll-mt-28 py-10">
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">{d.sourcesHeading}</h2>
            <h3 className="mt-8 text-xl font-bold text-ink">{d.euHeading}</h3>
            <p className="mt-2 text-slate-600">{d.euIntro}</p>
            <ul className="mt-4 space-y-2">
              {(Object.keys(EU_LAWS) as EuLaw[]).map((law) => (
                <li key={law}>
                  <a href={eurLex(law, plang)} target="_blank" rel="noopener noreferrer" className="text-accent-700 hover:underline">
                    {d.law[law]} ↗
                  </a>
                </li>
              ))}
              {(Object.keys(EC_PAGES) as EcPage[]).map((page) => (
                <li key={page}>
                  <a href={EC_PAGES[page]} target="_blank" rel="noopener noreferrer" className="text-accent-700 hover:underline">
                    {d.ec[page]} ↗
                  </a>{" "}
                  <span className="text-sm text-slate-500">({d.inEnglish})</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-bold text-ink">{d.countriesHeading}</h3>
            <p className="mt-2 text-slate-600">{d.countriesIntro}</p>
            <div className="mt-4">
              {first.map(country)}
              {rest.map(country)}
            </div>
          </section>

          <section className="rounded-md bg-slate-50 p-6">
            <h2 className="text-xl font-bold text-ink">{d.contactHeading}</h2>
            <p className="mt-2 text-slate-600">{d.contactText}</p>
          </section>
        </article>
      </div>
    </>
  );
}
