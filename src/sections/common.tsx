// Building blocks shared by several pages: section heading, FAQ, call to action, page hero, steps.
// Agency style: left-aligned headings with a line and number, large type, lines instead of cards.
import { ArrowRight, ArrowUpRight, Phone, Plus } from "lucide-react";
import type { ReactNode } from "react";
import { PHONE_INTL } from "../config";
import { HOME } from "../content/pages";
import { Rich } from "../components/Rich";
import { pathFor } from "../site";

export function Eyebrow({ children, light = false, index }: { children: ReactNode; light?: boolean; index?: string }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${light ? "text-accent-300" : "text-accent-600"}`}>
      {index && <span className={light ? "text-white/50" : "text-slate-400"}>{index}</span>}
      <span className={`h-px w-10 ${light ? "bg-accent-400" : "bg-accent-500"}`} aria-hidden="true" />
      {children}
    </p>
  );
}

/** Two columns on large screens: eyebrow and title on the left, lead text on the right. */
export function SectionHead({ eyebrow, title, subtitle, light = false, index }: { eyebrow?: string; title: string; subtitle?: string; light?: boolean; index?: string }) {
  return (
    <div className="mb-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
      <div>
        {eyebrow && <Eyebrow light={light} index={index}>{eyebrow}</Eyebrow>}
        <h2 className={`mt-4 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      </div>
      {subtitle && <p className={`max-w-xl text-lg leading-relaxed ${light ? "text-slate-300" : "text-slate-600"}`}>{subtitle}</p>}
    </div>
  );
}

export function Faq({ title, items }: { title: string; items: { q: string; a: string }[] }) {
  return (
    <section id="faq" className="bg-slate-50 py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl">{title}</h2>
        </div>
        <div className="border-t border-slate-300">
          {items.map((item) => (
            <details key={item.q} className="group border-b border-slate-300 py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus className="mt-1 h-5 w-5 shrink-0 text-accent-600 transition-transform group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">{item.a}</p>
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
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 top-0 h-[28rem] w-[28rem] rounded-full bg-accent-500/20 blur-3xl" aria-hidden="true" />
      <div className="container-x relative grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <Eyebrow light>Kontakt</Eyebrow>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl">{c.title}</h2>
          <p className="mt-6 max-w-xl text-lg text-slate-300">{c.text}</p>
        </div>
        <div className="flex flex-col gap-3 lg:items-end">
          <a href={pathFor("contact")} className="btn-accent group w-full justify-between sm:w-auto">
            {c.primary}
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a href={`tel:${PHONE_INTL}`} className="btn-light w-full justify-between sm:w-auto">
            {c.secondary}
            <Phone className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

/** Top of a subpage: dark band with grid lines, breadcrumb, large title, lead text, optional graphic. */
export function PageHero({ crumbs, title, claim, children, art }: { crumbs: { href: string; label: string }[]; title: string; claim?: string; children?: ReactNode; art?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-32 sm:pt-36">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-accent-500/20 blur-3xl" aria-hidden="true" />
      <div className="container-x relative">
        <nav aria-label="Brotkrumen" className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
          <ol className="flex flex-wrap items-center gap-2">
            <li><a href="/" className="hover:text-accent-300">Start</a></li>
            {crumbs.map((c) => (
              <li key={c.href} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-slate-600">/</span>
                <a href={c.href} className="hover:text-accent-300">{c.label}</a>
              </li>
            ))}
          </ol>
        </nav>
        <div className={`mt-8 grid items-center gap-12 ${art ? "lg:grid-cols-[1.05fr_0.95fr]" : ""}`}>
          <div className="animate-rise">
            <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.02] tracking-tight text-white sm:text-6xl">{title}</h1>
            {claim && <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-300">{claim}</p>}
            <div className="hero-dark">{children}</div>
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

/** Numbered steps: large numbers, a line on top, no boxes. */
export function Steps({ items, dark = false }: { items: { title: string; text: string }[]; dark?: boolean }) {
  const cols = items.length >= 5 ? "lg:grid-cols-5" : items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <ol className={`grid gap-x-8 gap-y-10 sm:grid-cols-2 ${cols}`}>
      {items.map((s, i) => (
        <li key={s.title} className={`border-t-2 pt-6 ${dark ? "border-white/15" : "border-ink"}`}>
          <span className={`font-display text-5xl font-bold tracking-tight ${dark ? "text-accent-300" : "text-accent-600"}`}>{String(i + 1).padStart(2, "0")}</span>
          <h3 className={`mt-4 text-lg font-bold ${dark ? "text-white" : "text-ink"}`}>{s.title}</h3>
          <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-slate-300" : "text-slate-600"}`}>{s.text}</p>
        </li>
      ))}
    </ol>
  );
}

/** Text link with arrow, used under sections. */
export function MoreLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return (
    <a href={href} className={`group inline-flex items-center gap-2 border-b pb-1 text-sm font-semibold uppercase tracking-[0.12em] transition-colors ${light ? "border-white/30 text-white hover:border-accent-300 hover:text-accent-300" : "border-ink text-ink hover:border-accent-600 hover:text-accent-600"}`}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
    </a>
  );
}
