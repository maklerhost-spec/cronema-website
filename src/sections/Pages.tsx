// Subpages: services overview, one page per service, references, approach, about, contact, legal.
import { ArrowRight, Check, ExternalLink, Lightbulb, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY_ADDRESS, COMPANY_LEGAL_NAME, CONTACT_EMAIL, PHONE_DISPLAY, PHONE_INTL } from "../config";
import { ConsentRevokeBox } from "../components/ConsentBanner";
import { Rich } from "../components/Rich";
import { ABOUT_PAGE, APPROACH_PAGE, CONTACT_PAGE, HOME, META, NAV, REFERENCES, REFERENCES_PAGE } from "../content/pages";
import { SERVICE_IDS, type ServiceId } from "../content/ids";
import { SERVICES } from "../content/services";
import { REFERENCE_ART } from "../graphics/HeroArt";
import { ServiceArt } from "../graphics/ServiceArt";
import { IMPRINT, PRIVACY, type LegalBlock } from "../legal/content";
import { pathFor } from "../site";
import { ReferenceCards } from "./Home";
import { Cta, Eyebrow, Faq, PageHero, Paragraphs, SectionHead, Steps } from "./common";
import { Team } from "./Team";

const card = "rounded-2xl border border-slate-200 bg-white p-6";

export function ServicesPage() {
  return (
    <>
      <PageHero crumbs={[{ href: pathFor("services"), label: NAV.services }]} title={HOME.services.title} claim={META.services.description} />
      <section className="bg-white pb-20">
        <div className="container-x space-y-6">
          {SERVICE_IDS.map((id, i) => {
            const s = SERVICES[id];
            return (
              <a key={id} href={pathFor("service", id)} className="group grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:border-accent-200 hover:shadow-frame md:grid-cols-2 md:p-8">
                <div className={i % 2 ? "md:order-2" : ""}>
                  <ServiceArt id={id} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">{s.tag}</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">{s.name}</h2>
                  <p className="mt-3 leading-relaxed text-slate-600">{s.card.text}</p>
                  <ul className="mt-4 space-y-2">
                    {s.card.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700">
                    {HOME.services.more}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>
      <Cta />
    </>
  );
}

export function ServicePage({ id }: { id: ServiceId }) {
  const s = SERVICES[id];
  const others = SERVICE_IDS.filter((o) => o !== id);
  return (
    <>
      <PageHero
        crumbs={[
          { href: pathFor("services"), label: NAV.services },
          { href: pathFor("service", id), label: s.name },
        ]}
        title={s.h1}
        claim={s.claim}
        art={
          <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-frame">
            <ServiceArt id={id} />
          </div>
        }
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={pathFor("contact")} className="btn-accent group">
            {NAV.cta}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a href="#faq" className="btn-outline">Häufige Fragen</a>
        </div>
      </PageHero>

      <section className="bg-white py-16">
        <div className="container-x max-w-3xl">
          <Paragraphs items={s.intro} />
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <SectionHead title={s.benefitsTitle} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {s.benefits.map((b) => (
              <div key={b.title} className={card}>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                  <Check className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="h2">{s.examplesTitle}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {s.examples.map((e) => (
                <div key={e.title} className="rounded-2xl border-l-4 border-net-500 bg-slate-50 p-5">
                  <h3 className="font-bold text-slate-900">{e.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{e.text}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="self-start rounded-3xl bg-navy p-8 text-white shadow-frame">
            <Lightbulb className="h-8 w-8 text-accent-400" aria-hidden="true" />
            <h2 className="mt-4 text-xl font-bold">{s.highlight.title}</h2>
            <p className="mt-3 leading-relaxed text-slate-300">{s.highlight.text}</p>
            <h3 className="mt-8 text-sm font-bold uppercase tracking-wider text-accent-400">{s.techTitle}</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {s.tech.map((t) => (
                <li key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-100">{t}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <SectionHead title={s.stepsTitle} />
          <Steps items={s.steps} />
        </div>
      </section>

      <Faq title={`Fragen zu ${s.name}`} items={s.faq} />

      <section className="bg-white pt-20">
        <div className="container-x">
          <h2 className="text-2xl font-bold text-slate-900">Weitere Leistungen</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((o) => (
              <a key={o} href={pathFor("service", o)} className="group rounded-2xl border border-slate-200 p-5 transition-all hover:border-accent-200 hover:shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent-600">{SERVICES[o].tag}</p>
                <p className="mt-1 font-bold text-slate-900">{SERVICES[o].name}</p>
                <ArrowRight className="mt-3 h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-accent-600" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

export function ReferencesPage() {
  const p = REFERENCES_PAGE;
  return (
    <>
      <PageHero crumbs={[{ href: pathFor("references"), label: NAV.references }]} title={p.h1} claim={p.intro} />
      <section className="bg-white pb-8">
        <div className="container-x space-y-10">
          {REFERENCES.map((r, i) => {
            const ArtC = REFERENCE_ART[r.id];
            return (
              <article key={r.id} id={r.id} className="grid items-center gap-10 rounded-3xl border border-slate-200 p-6 md:p-10 lg:grid-cols-2">
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <ArtC />
                </div>
                <div>
                  <span className="rounded-full bg-net-50 px-3 py-1 text-xs font-semibold text-net-700">{r.platform}</span>
                  <h2 className="mt-3 text-3xl font-bold text-slate-900">{r.name}</h2>
                  <p className="mt-1 text-lg font-semibold text-slate-700">{r.title}</p>
                  <div className="mt-4 space-y-3 leading-relaxed text-slate-600">
                    {r.story.map((s) => (
                      <p key={s.slice(0, 30)}>{s}</p>
                    ))}
                  </div>
                  <p className="mt-6 text-xs font-bold uppercase tracking-wider text-slate-500">{p.servicesLabel}</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {r.services.map((s) => (
                      <li key={s} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700">{s}</li>
                    ))}
                  </ul>
                  {r.url && (
                    <a href={r.url} rel="noopener" className="btn-outline mt-6">
                      {p.visit}
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container-x">
          <div className="rounded-3xl bg-accent-50 p-8 text-center ring-1 ring-accent-100 sm:p-12">
            <h2 className="h2">{p.transferTitle}</h2>
            <p className="lead">{p.transferText}</p>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}

export function ApproachPage() {
  const p = APPROACH_PAGE;
  return (
    <>
      <PageHero crumbs={[{ href: pathFor("approach"), label: NAV.approach }]} title={p.h1}>
        <Paragraphs items={p.intro} className="mt-6 max-w-3xl" />
      </PageHero>
      <section className="bg-navy py-20">
        <div className="container-x">
          <SectionHead eyebrow="Claude Code" title={p.claudeTitle} light />
          <div className="mx-auto max-w-3xl space-y-4 text-center text-lg leading-relaxed text-slate-300">
            {p.claudeText.map((t) => (
              <p key={t.slice(0, 30)}>{t}</p>
            ))}
          </div>
          <ol className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-5">
            {p.workflow.map((w, i) => (
              <li key={i} className="relative rounded-2xl bg-white/5 p-4 text-center ring-1 ring-white/10">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold ${w.label === "Claude Code" ? "bg-accent-600 text-white" : w.label === "Wir" ? "bg-net-600 text-white" : "bg-white text-navy"}`}>{w.label}</span>
                <p className="mt-3 text-sm text-slate-200">{w.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container-x">
          <SectionHead title={p.principlesTitle} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {p.principles.map((x) => (
              <div key={x.title} className={card}>
                <h3 className="text-lg font-bold text-slate-900">{x.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <SectionHead title={p.processTitle} />
          <Steps items={p.process} />
        </div>
      </section>
      <Cta />
    </>
  );
}

export function AboutPage() {
  const p = ABOUT_PAGE;
  return (
    <>
      <PageHero
        crumbs={[{ href: pathFor("about"), label: NAV.about }]}
        title={p.h1}
        claim={p.claim}
        art={
          <div className="mx-auto flex max-w-sm items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-navy to-navy-700 p-12 shadow-frame">
            <img src="/logo-light.svg" alt="Cronema Logo" width={240} height={240} className="h-auto w-full" />
          </div>
        }
      >
        <Paragraphs items={p.intro} className="mt-6" />
      </PageHero>
      <Team />
      <section className="bg-white py-20">
        <div className="container-x">
          <SectionHead eyebrow="Cross Net Management" title={p.nameTitle} />
          <div className="grid gap-6 md:grid-cols-3">
            {p.name.map((n) => (
              <div key={n.letter} className="rounded-3xl border border-slate-200 p-8">
                <p className="font-display text-4xl font-bold text-net-600">{n.letter}</p>
                <h3 className="mt-3 text-lg font-bold text-slate-900">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{n.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>{p.missionTitle}</Eyebrow>
            <h2 className="h2 mt-2">Individuelle Software für den Mittelstand</h2>
            <Paragraphs items={p.mission} className="mt-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">{p.valuesTitle}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {p.values.map((v) => (
                <div key={v.title} className={card}>
                  <h3 className="font-bold text-slate-900">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="container-x">
          <SectionHead eyebrow="Referenzen" title={HOME.references.title} />
          <ReferenceCards />
        </div>
      </section>
      <Cta />
    </>
  );
}

export function ContactPage() {
  const p = CONTACT_PAGE;
  const mail = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(p.mailSubject)}`;
  const items = [
    { icon: Mail, label: p.email, value: CONTACT_EMAIL, href: mail },
    { icon: Phone, label: p.phone, value: PHONE_DISPLAY, href: `tel:${PHONE_INTL}` },
    { icon: MapPin, label: p.address, value: `${COMPANY_ADDRESS.street}, ${COMPANY_ADDRESS.zip} ${COMPANY_ADDRESS.city}` },
  ];
  return (
    <>
      <PageHero crumbs={[{ href: pathFor("contact"), label: NAV.contact }]} title={p.h1} claim={p.intro} />
      <section className="bg-white pb-20">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {items.map(({ icon: Icon, label, value, href }) => {
              const body = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-600 text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm text-slate-500">{label}</span>
                    <span className="block text-lg font-semibold text-slate-900">{value}</span>
                  </span>
                </>
              );
              return href ? (
                <a key={label} href={href} className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5 transition-all hover:border-accent-200 hover:shadow-soft">
                  {body}
                </a>
              ) : (
                <div key={label} className="flex items-center gap-4 rounded-2xl border border-slate-200 p-5">{body}</div>
              );
            })}
            <p className="text-sm text-slate-500">{COMPANY_LEGAL_NAME}</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
            <h2 className="text-xl font-bold text-slate-900">{p.checklistTitle}</h2>
            <ul className="mt-5 space-y-3">
              {p.checklist.map((c) => (
                <li key={c} className="flex gap-3 text-slate-700">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
            <a href={mail} className="btn-accent mt-8 w-full">
              <Mail className="h-4 w-4" aria-hidden="true" />
              E-Mail schreiben
            </a>
          </div>
        </div>
      </section>
      <section className="bg-slate-50 py-20">
        <div className="container-x">
          <SectionHead title={p.nextTitle} />
          <Steps items={p.next} />
        </div>
      </section>
    </>
  );
}

function LegalText({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="space-y-4 text-[15px] leading-relaxed text-slate-700">
      {blocks.map((b, i) => {
        if (b.type === "h2") return <h2 key={i} className="pt-6 text-xl font-bold text-slate-900">{b.text}</h2>;
        if (b.type === "h3") return <h3 key={i} className="pt-2 text-base font-bold text-slate-900">{b.text}</h3>;
        if (b.type === "ul")
          return (
            <ul key={i} className="list-disc space-y-1.5 pl-5">
              {b.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          );
        return (
          <p key={i}>
            {b.lines.map((line, j) => (
              <span key={j}>{j > 0 && <br />}<Rich text={line} /></span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export function LegalPage({ page }: { page: "imprint" | "privacy" }) {
  return (
    <section className="mx-auto min-h-[60vh] max-w-3xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{page === "imprint" ? "Impressum" : "Datenschutzerklärung"}</h1>
      <div className="mt-8">
        {page === "privacy" && <ConsentRevokeBox />}
        <LegalText blocks={page === "imprint" ? IMPRINT : PRIVACY} />
      </div>
      <a href="/" className="btn-outline mt-12">Zur Startseite</a>
    </section>
  );
}
