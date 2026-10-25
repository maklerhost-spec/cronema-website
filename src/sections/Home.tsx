import { ArrowRight, ArrowUpRight, Check, ExternalLink, Layers, Lock, MapPin, Puzzle } from "lucide-react";
import { HOME, REFERENCES } from "../content/pages";
import { SERVICE_IDS } from "../content/ids";
import { SERVICES } from "../content/services";
import { Rich } from "../components/Rich";
import { HeroArt, REFERENCE_ART } from "../graphics/HeroArt";
import { ServiceArt } from "../graphics/ServiceArt";
import { pathFor } from "../site";
import { UI } from "../content/ui";
import { Cta, Eyebrow, Faq, MoreLink, SectionHead, Steps } from "./common";
import { Team } from "./Team";

function Hero() {
  const h = HOME.hero;
  return (
    <section className="relative overflow-hidden bg-ink pt-32 sm:pt-36">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-accent-500/25 blur-3xl" aria-hidden="true" />
      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-rise">
            <span className="pill">
              <span className="flex h-2 w-2 rounded-full bg-accent-400" />
              {h.badge}
            </span>
            <h1 className="mt-8 font-display text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {h.title[0]} <span className="text-accent-400">{h.title[1]}</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-300">{h.subtitle}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={pathFor("contact")} className="btn-accent group">
                {h.primary}
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a href="#leistungen" className="btn-light">
                {h.secondary}
              </a>
            </div>
          </div>
          <div className="animate-rise [animation-delay:150ms]">
            <HeroArt />
          </div>
        </div>
        <dl className="mt-16 grid grid-cols-2 border-t border-white/10 lg:grid-cols-4">
          {h.stats.map((s, i) => (
            <div key={s.label} className={`py-8 pr-6 ${i > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""} ${i % 2 ? "border-l border-white/10 pl-6 lg:pl-8" : ""}`}>
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">{s.value}</span>
                <span className="mt-2 block text-sm text-slate-400">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Platforms() {
  const p = HOME.platforms;
  const row = [...p.items, ...p.items];
  return (
    <section className="overflow-hidden border-b border-slate-200 bg-white py-10" aria-label={p.label}>
      <p className="container-x text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">{p.label}</p>
      <div className="relative mt-6 flex">
        <ul className="flex shrink-0 animate-marquee items-center gap-12 pr-12 motion-reduce:animate-none">
          {row.map((item, i) => (
            <li key={i} aria-hidden={i >= p.items.length} className="flex items-center gap-12 whitespace-nowrap font-display text-3xl font-bold tracking-tight text-slate-300 sm:text-4xl">
              {item}
              <span className="h-2 w-2 rotate-45 bg-accent-500" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Shift() {
  const s = HOME.shift;
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-x">
        <SectionHead index="01" eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />
        <div className="grid border border-slate-200 md:grid-cols-2">
          <div className="p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-400">{s.before.label}</p>
            <ul className="mt-6 divide-y divide-slate-200">
              {s.before.items.map((item) => (
                <li key={item} className="py-4 text-slate-500 line-through decoration-slate-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-ink p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent-300">{s.after.label}</p>
            <ul className="mt-6 divide-y divide-white/10">
              {s.after.items.map((item) => (
                <li key={item} className="flex gap-3 py-4 text-slate-100">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const s = HOME.services;
  return (
    <section id="leistungen" className="bg-slate-50 py-24 sm:py-32">
      <div className="container-x">
        <SectionHead index="02" eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />
        <div className="border-t border-ink">
          {SERVICE_IDS.map((id, i) => {
            const sv = SERVICES[id];
            return (
              <a
                key={id}
                href={pathFor("service", id)}
                className="group grid items-center gap-6 border-b border-slate-300 py-10 transition-colors hover:bg-white md:grid-cols-[5rem_1fr_18rem] md:px-4 lg:grid-cols-[6rem_1fr_22rem]"
              >
                <span className="font-display text-4xl font-bold text-slate-300 transition-colors group-hover:text-accent-500">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">{sv.tag}</p>
                  <h3 className="mt-2 flex items-start gap-3 font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {sv.card.title}
                    <ArrowUpRight className="mt-1 h-6 w-6 shrink-0 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-600" aria-hidden="true" />
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">{sv.card.text}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-1.5">
                    {sv.card.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-slate-700">
                        <span className="h-1.5 w-1.5 rotate-45 bg-accent-500" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="overflow-hidden rounded-lg border border-slate-200 bg-white p-2 transition-shadow group-hover:shadow-frame">
                  <ServiceArt id={id} />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ReferenceCards() {
  return (
    <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">
      {REFERENCES.map((r) => {
        const ArtC = REFERENCE_ART[r.id];
        return (
          <article key={r.id} className="flex flex-col bg-white">
            <div className="bg-slate-50 p-6">
              <ArtC />
            </div>
            <div className="flex flex-1 flex-col p-8">
              <p className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
                {r.platform}
                {r.upcoming && <span className="rounded-full bg-accent-50 px-2 py-0.5 tracking-[0.12em] text-accent-700 ring-1 ring-accent-200">{UI.upcoming}</span>}
              </p>
              <h3 className="mt-2 font-display text-3xl font-bold tracking-tight text-ink">{r.name}</h3>
              <p className="mt-1 font-semibold text-slate-700">{r.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{r.text}</p>
              <ul className="mt-5 space-y-2 border-t border-slate-200 pt-5">
                {r.facts.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="h-1.5 w-1.5 rotate-45 bg-accent-500" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              {r.url && (
                <a href={r.url} rel="noopener" className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-ink hover:text-accent-600">
                  {r.url.replace("https://", "")}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
              {r.upcoming && (
                <a href={pathFor("product")} className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-ink hover:text-accent-600">
                  {UI.toProductPage}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}

function References() {
  const r = HOME.references;
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-x">
        <SectionHead index="03" eyebrow={r.eyebrow} title={r.title} subtitle={r.subtitle} />
        <ReferenceCards />
        <div className="mt-10">
          <MoreLink href={pathFor("references")}>{r.all}</MoreLink>
        </div>
      </div>
    </section>
  );
}

function OwnSystem() {
  const o = HOME.ownSystem;
  const icons = [Puzzle, Lock, Layers, MapPin];
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHead index="04" eyebrow={o.eyebrow} title={o.title} subtitle={o.subtitle} light />
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {o.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="bg-ink p-8 transition-colors hover:bg-ink-700">
                <Icon className="h-8 w-8 text-accent-400" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-8 font-display text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Hosting() {
  const h = HOME.hosting;
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div className="order-2 rounded-lg border border-slate-200 bg-slate-50 p-6 lg:order-1">
          <ServiceArt id="hosting" />
        </div>
        <div className="order-1 lg:order-2">
          <Eyebrow index="05">{h.eyebrow}</Eyebrow>
          <h2 className="h2 mt-4">{h.title}</h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-slate-600">
            {h.text.map((p) => (
              <p key={p.slice(0, 30)}><Rich text={p} /></p>
            ))}
          </div>
          <ul className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {h.points.map((p) => (
              <li key={p} className="flex items-center gap-3 py-3.5 text-slate-700">
                <Check className="h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <MoreLink href={pathFor("service", "hosting")}>{h.link}</MoreLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const a = HOME.approach;
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="container-x">
        <SectionHead index="06" eyebrow={a.eyebrow} title={a.title} subtitle={a.subtitle} />
        <Steps items={a.steps} />
        <div className="mt-12">
          <MoreLink href={pathFor("approach")}>{a.link}</MoreLink>
        </div>
      </div>
    </section>
  );
}

function NameStory() {
  const n = HOME.name;
  return (
    <section className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="mx-auto w-full max-w-sm">
          <img src="/logo-light.svg" alt={UI.logoAlt} width={320} height={320} className="h-auto w-full" loading="lazy" />
        </div>
        <div>
          <Eyebrow light index="07">{n.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl">{n.title}</h2>
          <div className="hero-dark mt-6 space-y-4 text-lg leading-relaxed">
            {n.text.map((p) => (
              <p key={p.slice(0, 30)}><Rich text={p} /></p>
            ))}
          </div>
          <p className="mt-8 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            <span className="text-accent-400">Cross</span> · <span className="text-accent-400">Net</span> · <span className="text-accent-400">Management</span>
          </p>
          <div className="mt-8">
            <MoreLink href={pathFor("about")} light>{n.link}</MoreLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <Platforms />
      <Shift />
      <Services />
      <References />
      <OwnSystem />
      <Hosting />
      <Approach />
      <NameStory />
      <Team compact />
      <Faq title={HOME.faq.title} items={HOME.faq.items} />
      <Cta />
    </>
  );
}
