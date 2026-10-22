// Building blocks shared by several pages: section heading, FAQ, call to action, page hero.
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { PHONE_INTL } from "../config";
import { HOME } from "../content/pages";
import { Rich } from "../components/Rich";
import { pathFor } from "../site";

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`text-sm font-semibold uppercase tracking-[0.14em] ${light ? "text-accent-400" : "text-accent-600"}`}>{children}</p>;
}

export function SectionHead({ eyebrow, title, subtitle, light = false }: { eyebrow?: string; title: string; subtitle?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      <h2 className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${light ? "text-white" : "text-slate-900"}`}>{title}</h2>
      {subtitle && <p className={`mx-auto mt-4 max-w-2xl text-lg leading-relaxed ${light ? "text-slate-300" : "text-slate-600"}`}>{subtitle}</p>}
    </div>
  );
}

export function Faq({ title, items }: { title: string; items: { q: string; a: string }[] }) {
  return (
    <section id="faq" className="bg-slate-50 py-20 sm:py-24">
      <div className="container-x max-w-3xl">
        <h2 className="h2 text-center">{title}</h2>
        <div className="mt-10 space-y-3">
          {items.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-soft">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 [&::-webkit-details-marker]:hidden">
                {item.q}
                <ChevronDown className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="mt-3 leading-relaxed text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cta() {
  const c = HOME.cta;
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 text-center sm:px-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-600/20 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-net-500/20 blur-3xl" aria-hidden="true" />
          <h2 className="relative mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">{c.title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-slate-300">{c.text}</p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={pathFor("contact")} className="btn-accent group">
              {c.primary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a href={`tel:${PHONE_INTL}`} className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:border-accent-400 hover:text-accent-400">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {c.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Top of a subpage: light gradient, breadcrumb, title, lead text, optional graphic. */
export function PageHero({ crumbs, title, claim, children, art }: { crumbs: { href: string; label: string }[]; title: string; claim?: string; children?: ReactNode; art?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pb-16 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-net-200/30 blur-3xl" aria-hidden="true" />
      <div className="container-x relative">
        <nav aria-label="Brotkrumen" className="text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li><a href="/" className="hover:text-accent-600">Start</a></li>
            {crumbs.map((c) => (
              <li key={c.href} className="flex items-center gap-1.5">
                <span aria-hidden="true">/</span>
                <a href={c.href} className="hover:text-accent-600">{c.label}</a>
              </li>
            ))}
          </ol>
        </nav>
        <div className={`mt-6 grid items-center gap-12 ${art ? "lg:grid-cols-[1.05fr_0.95fr]" : ""}`}>
          <div className="animate-rise">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:leading-[1.1]">{title}</h1>
            {claim && <p className="mt-5 max-w-2xl text-xl font-medium leading-relaxed text-slate-700">{claim}</p>}
            {children}
          </div>
          {art && <div className="animate-rise [animation-delay:120ms]">{art}</div>}
        </div>
      </div>
    </section>
  );
}

export function Paragraphs({ items, className = "" }: { items: string[]; className?: string }) {
  return (
    <div className={`space-y-4 text-lg leading-relaxed text-slate-600 ${className}`}>
      {items.map((p) => (
        <p key={p.slice(0, 40)}>
          <Rich text={p} />
        </p>
      ))}
    </div>
  );
}

/** Numbered steps in a row. */
export function Steps({ items, dark = false }: { items: { title: string; text: string }[]; dark?: boolean }) {
  const cols = items.length >= 5 ? "lg:grid-cols-5" : items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <ol className={`grid gap-6 sm:grid-cols-2 ${cols}`}>
      {items.map((s, i) => (
        <li key={s.title} className={`relative rounded-2xl p-6 ${dark ? "bg-white/5 ring-1 ring-white/10" : "border border-slate-200 bg-white"}`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-600 font-display text-lg font-bold text-white">{i + 1}</span>
          <h3 className={`mt-4 text-lg font-bold ${dark ? "text-white" : "text-slate-900"}`}>{s.title}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
