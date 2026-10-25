import { Globe } from "lucide-react";
import { useSite } from "../context";
import { LANG_META, SITE_LANGS } from "../lang";
import { UI } from "../content/ui";

/** Links to the same page in the other site languages (plain links, work without JavaScript). */
export function LanguageMenu({ mobile = false }: { mobile?: boolean }) {
  const { lang, alternates } = useSite();
  if (mobile) {
    return (
      <div className="flex flex-wrap gap-2 px-3 py-2" aria-label={UI.header.language}>
        {SITE_LANGS.map((l) => (
          <a
            key={l}
            href={alternates[l] ?? "/"}
            hrefLang={l}
            lang={l}
            className={`rounded px-2.5 py-1 text-xs font-semibold ${l === lang ? "bg-white/10 text-white" : "text-slate-300 hover:text-accent-400"}`}
            aria-current={l === lang ? "true" : undefined}
          >
            {LANG_META[l].name}
          </a>
        ))}
      </div>
    );
  }
  return (
    <div className="group relative">
      <button type="button" className="flex items-center gap-1.5 rounded-md px-2 py-2 text-[13px] font-semibold uppercase tracking-[0.12em] text-slate-300 hover:text-accent-400" aria-label={UI.header.language}>
        <Globe className="h-4 w-4" aria-hidden="true" />
        {LANG_META[lang].short}
      </button>
      <div className="invisible absolute right-0 top-full w-40 pt-2 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        <ul className="rounded-md border border-white/10 bg-ink-800 p-1.5 shadow-2xl shadow-black/40">
          {SITE_LANGS.map((l) => (
            <li key={l}>
              <a
                href={alternates[l] ?? "/"}
                hrefLang={l}
                lang={l}
                className={`block rounded px-3 py-2 text-sm hover:bg-white/5 ${l === lang ? "font-semibold text-white" : "text-slate-300"}`}
                aria-current={l === lang ? "true" : undefined}
              >
                {LANG_META[l].name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
