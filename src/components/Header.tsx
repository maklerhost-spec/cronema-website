import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV } from "../content/pages";
import { SERVICE_IDS } from "../content/ids";
import { SERVICES } from "../content/services";
import { useSite } from "../context";
import { pathFor } from "../site";
import { Logo } from "./Logo";

export function Header() {
  const { page } = useSite();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const links = [
    { href: pathFor("references"), label: NAV.references, active: page === "references" },
    { href: pathFor("approach"), label: NAV.approach, active: page === "approach" },
    { href: pathFor("about"), label: NAV.about, active: page === "about" },
    { href: pathFor("contact"), label: NAV.contact, active: page === "contact" },
  ];
  const linkClass = (active: boolean) =>
    `whitespace-nowrap text-sm font-medium transition-colors hover:text-accent-400 ${active ? "text-white" : "text-slate-300"}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 transition-all duration-300 ${
        scrolled ? "bg-navy/95 shadow-lg shadow-navy/30 backdrop-blur-md" : "bg-navy"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Hauptnavigation">
        <a href="/" aria-label="Cronema Startseite" onClick={() => setOpen(false)}>
          <Logo light />
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          <div className="group relative">
            <a href={pathFor("services")} className={`flex items-center gap-1 ${linkClass(page === "services" || page === "service")}`}>
              {NAV.services}
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <ul className="rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                {SERVICE_IDS.map((id) => (
                  <li key={id}>
                    <a href={pathFor("service", id)} className="block rounded-xl px-3 py-2.5 hover:bg-slate-50">
                      <span className="block text-sm font-semibold text-slate-900">{SERVICES[id].name}</span>
                      <span className="block text-xs text-slate-500">{SERVICES[id].tag}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={linkClass(l.active)} aria-current={l.active ? "page" : undefined}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={pathFor("contact")}
            className="hidden whitespace-nowrap rounded-lg bg-accent-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-accent-700 hover:shadow-md sm:inline-block"
          >
            {NAV.cta}
          </a>
          <button
            type="button"
            className="rounded-lg p-2 text-slate-200 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? NAV.close : NAV.menu}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>
      <div id="mobile-nav" hidden={!open} className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 bg-navy lg:hidden">
        <div className="space-y-1 px-4 py-3">
          <a href={pathFor("services")} className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-white hover:bg-white/5">
            {NAV.services}
          </a>
          {SERVICE_IDS.map((id) => (
            <a key={id} href={pathFor("service", id)} className="block rounded-lg py-2 pl-6 pr-3 text-sm text-slate-300 hover:bg-white/5 hover:text-accent-400">
              {SERVICES[id].name}
            </a>
          ))}
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-accent-400">
              {l.label}
            </a>
          ))}
          <a href={pathFor("contact")} className="mt-2 block rounded-lg bg-accent-600 px-4 py-2.5 text-center text-sm font-semibold text-white">
            {NAV.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
