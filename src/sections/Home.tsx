import { ArrowRight, Check, Cpu, ExternalLink, Layers, Lock, MapPin, Puzzle, X } from "lucide-react";
import { HOME, REFERENCES } from "../content/pages";
import { SERVICE_IDS } from "../content/ids";
import { SERVICES } from "../content/services";
import { Rich } from "../components/Rich";
import { HeroArt, REFERENCE_ART } from "../graphics/HeroArt";
import { ServiceArt } from "../graphics/ServiceArt";
import { pathFor } from "../site";
import { Cta, Eyebrow, Faq, SectionHead, Steps } from "./common";
import { Team } from "./Team";

function Hero() {
  const h = HOME.hero;
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pb-16 pt-28 sm:pt-32">
      <div className="pointer-events-none absolute -right-32 -top-40 h-96 w-96 rounded-full bg-accent-200/30 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-net-200/30 blur-3xl" aria-hidden="true" />
      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div className="animate-rise text-center lg:text-left">
            <span className="pill">
              <span className="flex h-2 w-2 rounded-full bg-accent-500" />
              {h.badge}
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.06]">
              {h.title[0]} <span className="bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent">{h.title[1]}</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0">{h.subtitle}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <a href={pathFor("contact")} className="btn-accent group">
                {h.primary}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a href="#leistungen" className="btn-outline">
                {h.secondary}
              </a>
            </div>
            <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-sm text-slate-500 lg:justify-start">
              {h.trust.map((item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-accent-500" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="animate-rise [animation-delay:150ms]">
            <HeroArt />
          </div>
        </div>
      </div>
    </section>
  );
}

function Platforms() {
  const p = HOME.platforms;
  return (
    <section className="border-y border-slate-100 bg-white py-8">
      <div className="container-x flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
        <p className="shrink-0 text-sm font-semibold text-slate-500">{p.label}</p>
        <ul className="flex flex-wrap justify-center gap-2">
          {p.items.map((item) => (
            <li key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-sm font-semibold text-slate-700">
              {item}
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
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <SectionHead eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-bold uppercase tracking-wider text-slate-500">{s.before.label}</p>
            <ul className="mt-5 space-y-4">
              {s.before.items.map((item) => (
                <li key={item} className="flex gap-3 text-slate-600">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-500">
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-3xl bg-navy p-8 shadow-frame">
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-accent-600/20 blur-3xl" aria-hidden="true" />
            <p className="relative text-sm font-bold uppercase tracking-wider text-accent-400">{s.after.label}</p>
            <ul className="relative mt-5 space-y-4">
              {s.after.items.map((item) => (
                <li key={item} className="flex gap-3 text-slate-100">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-600 text-white">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
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
    <section id="leistungen" className="bg-slate-50 py-20 sm:py-28">
      <div className="container-x">
        <SectionHead eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_IDS.map((id) => {
            const sv = SERVICES[id];
            return (
              <a
                key={id}
                href={pathFor("service", id)}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:-translate-y-0.5 hover:border-accent-200 hover:shadow-frame"
              >
                <div className="border-b border-slate-100 bg-gradient-to-b from-white to-slate-50 p-4">
                  <ServiceArt id={id} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">{sv.tag}</p>
                  <h3 className="mt-2 text-xl font-bold text-slate-900">{sv.card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{sv.card.text}</p>
                  <ul className="mt-4 space-y-2">
                    {sv.card.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-accent-700">
                    {s.more}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
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
    <div className="grid gap-6 lg:grid-cols-3">
      {REFERENCES.map((r) => {
        const ArtC = REFERENCE_ART[r.id];
        return (
          <article key={r.id} className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="p-4 pb-0">
              <ArtC />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-slate-900">{r.name}</h3>
                <span className="rounded-full bg-net-50 px-2.5 py-1 text-xs font-semibold text-net-700">{r.platform}</span>
              </div>
              <p className="mt-1 text-sm font-semibold text-slate-700">{r.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{r.text}</p>
              <ul className="mt-4 space-y-1.5">
                {r.facts.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              {r.url && (
                <a href={r.url} rel="noopener" className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-accent-700 hover:text-accent-800">
                  {r.url.replace("https://", "")}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
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
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <SectionHead eyebrow={r.eyebrow} title={r.title} subtitle={r.subtitle} />
        <ReferenceCards />
        <div className="mt-10 text-center">
          <a href={pathFor("references")} className="btn-outline">
            {r.all}
          </a>
        </div>
      </div>
    </section>
  );
}

function OwnSystem() {
  const o = HOME.ownSystem;
  const icons = [Puzzle, Lock, Layers, MapPin];
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-net-500/15 blur-3xl" aria-hidden="true" />
      <div className="container-x relative">
        <SectionHead eyebrow={o.eyebrow} title={o.title} subtitle={o.subtitle} light />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {o.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <div key={item.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-600/15 text-accent-400">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.text}</p>
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
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div className="order-2 rounded-3xl border border-slate-200 bg-slate-50 p-4 lg:order-1">
          <ServiceArt id="hosting" />
        </div>
        <div className="order-1 lg:order-2">
          <Eyebrow>{h.eyebrow}</Eyebrow>
          <h2 className="h2 mt-2">{h.title}</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-600">
            {h.text.map((p) => (
              <p key={p.slice(0, 30)}><Rich text={p} /></p>
            ))}
          </div>
          <ul className="mt-6 space-y-2.5">
            {h.points.map((p) => (
              <li key={p} className="flex gap-2.5 text-slate-700">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <a href={pathFor("service", "hosting")} className="mt-8 inline-flex items-center gap-1.5 font-semibold text-accent-700 hover:text-accent-800">
            {h.link}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  const a = HOME.approach;
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="container-x">
        <SectionHead eyebrow={a.eyebrow} title={a.title} subtitle={a.subtitle} />
        <Steps items={a.steps} />
        <div className="mt-10 text-center">
          <a href={pathFor("approach")} className="inline-flex items-center gap-1.5 font-semibold text-accent-700 hover:text-accent-800">
            {a.link}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function NameStory() {
  const n = HOME.name;
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="mx-auto flex w-full max-w-sm items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-navy to-navy-700 p-12 shadow-frame">
          <img src="/logo-light.svg" alt="Cronema Logo: Kreuz im Netz mit KI-Kern" width={240} height={240} className="h-auto w-full" loading="lazy" />
        </div>
        <div>
          <Eyebrow>{n.eyebrow}</Eyebrow>
          <h2 className="h2 mt-2">{n.title}</h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-slate-600">
            {n.text.map((p) => (
              <p key={p.slice(0, 30)}><Rich text={p} /></p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Cross", "Net", "Management"].map((w) => (
              <span key={w} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5 text-sm font-semibold text-slate-800">
                <Cpu className="h-4 w-4 text-net-600" aria-hidden="true" />
                {w}
              </span>
            ))}
          </div>
          <a href={pathFor("about")} className="mt-8 inline-flex items-center gap-1.5 font-semibold text-accent-700 hover:text-accent-800">
            {n.link}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
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
