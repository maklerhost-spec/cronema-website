import { Quote } from "lucide-react";
import { TEAM } from "../content/pages";
import { SectionHead } from "./common";

/** The two founders with photo, text, focus and quote. `compact` = homepage version without the long text. */
export function Team({ compact = false }: { compact?: boolean }) {
  return (
    <section id="team" className={`${compact ? "bg-slate-50" : "bg-white"} py-20 sm:py-28`}>
      <div className="container-x">
        <SectionHead eyebrow={TEAM.eyebrow} title={TEAM.title} subtitle={TEAM.subtitle} />
        <div className="grid gap-8 lg:grid-cols-2">
          {TEAM.people.map((p) => (
            <article key={p.id} className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="relative aspect-[3/2] overflow-hidden bg-slate-100">
                <img src={p.photo} alt={p.alt} width={1024} height={683} loading="lazy" className="h-full w-full object-cover object-[35%_30%]" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-6 pt-16">
                  <h3 className="text-2xl font-bold text-white">{p.name}</h3>
                  <p className="text-sm font-medium text-accent-300">{p.role}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="text-lg font-semibold leading-snug text-slate-900">{p.intro}</p>
                {!compact && (
                  <div className="mt-4 space-y-3 leading-relaxed text-slate-600">
                    {p.text.map((t) => (
                      <p key={t.slice(0, 30)}>{t}</p>
                    ))}
                  </div>
                )}
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.focus.map((f) => (
                    <li key={f} className="rounded-full bg-net-50 px-3 py-1 text-xs font-semibold text-net-700">{f}</li>
                  ))}
                </ul>
                <blockquote className="mt-6 flex gap-3 rounded-2xl bg-accent-50 p-5 text-slate-700 ring-1 ring-accent-100">
                  <Quote className="h-5 w-5 shrink-0 text-accent-600" aria-hidden="true" />
                  <p className="italic leading-relaxed">„{p.quote}“</p>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
