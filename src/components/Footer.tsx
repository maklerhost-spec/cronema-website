import { Mail, MapPin, Phone } from "lucide-react";
import { COMPANY_ADDRESS, CONTACT_EMAIL, PHONE_DISPLAY, PHONE_INTL } from "../config";
import { openConsentSettings } from "../consent";
import { FOOTER, NAV } from "../content/pages";
import { SERVICE_IDS } from "../content/ids";
import { SERVICES } from "../content/services";
import { pathFor } from "../site";
import { UI } from "../content/ui";
import { Logo } from "./Logo";

export function Footer() {
  const link = "text-sm text-slate-300 transition-colors hover:text-accent-400";
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="container-x py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-300">{FOOTER.tagline}</p>
            <ul className="mt-5 space-y-2">
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className={`flex items-center gap-2 ${link}`}>
                  <Mail className="h-4 w-4 text-accent-400" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${PHONE_INTL}`} className={`flex items-center gap-2 ${link}`}>
                  <Phone className="h-4 w-4 text-accent-400" aria-hidden="true" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-accent-400" aria-hidden="true" />
                {COMPANY_ADDRESS.city}
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{FOOTER.services}</h2>
            <ul className="mt-3 space-y-2">
              {SERVICE_IDS.map((id) => (
                <li key={id}><a className={link} href={pathFor("service", id)}>{SERVICES[id].name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{FOOTER.company}</h2>
            <ul className="mt-3 space-y-2">
              <li><a className={link} href={pathFor("references")}>{NAV.references}</a></li>
              <li><a className={link} href={pathFor("approach")}>{NAV.approach}</a></li>
              <li><a className={link} href={pathFor("about")}>{NAV.about}</a></li>
              <li><a className={link} href={pathFor("contact")}>{NAV.contact}</a></li>
              <li><a className={link} href="https://work247.app" rel="noopener">work247.app</a></li>
              <li><a className={link} href="https://bookique.app" rel="noopener">bookique.app</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{FOOTER.legal}</h2>
            <ul className="mt-3 space-y-2">
              <li><a className={link} href={pathFor("imprint")}>{FOOTER.imprint}</a></li>
              <li><a className={link} href={pathFor("privacy")}>{FOOTER.privacy}</a></li>
              <li><button type="button" className={link} onClick={openConsentSettings}>{UI.cookieSettings}</button></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-1 border-t border-white/10 pt-6 text-center text-xs text-slate-400 sm:flex-row sm:justify-between">
          <p>© 2026 Cronema. {FOOTER.rights}</p>
          <p>{FOOTER.hosted} · Entwickelt mit Claude Code</p>
        </div>
      </div>
    </footer>
  );
}
