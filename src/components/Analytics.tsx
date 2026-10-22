// Google Analytics 4 – loads only after consent to "statistics" (as on work247.app). Without consent nothing
// is loaded from Google. On withdrawal, measuring stops and the _ga cookies are deleted.
// With an empty GA_MEASUREMENT_ID (src/config.ts) nothing is loaded at all.
import { useEffect } from "react";
import { GA_MEASUREMENT_ID } from "../config";
import { useConsent } from "../consent";

type GtagWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void } & Record<string, unknown>;

let loaded = false;

function load() {
  const w = window as unknown as GtagWindow;
  w[`ga-disable-${GA_MEASUREMENT_ID}`] = false;
  if (loaded) return;
  loaded = true;
  w.dataLayer = w.dataLayer || [];
  // gtag needs the arguments object
  // eslint-disable-next-line prefer-rest-params
  w.gtag = function gtag() { w.dataLayer!.push(arguments); };
  w.gtag("js", new Date());
  w.gtag("config", GA_MEASUREMENT_ID, { allow_google_signals: false, allow_ad_personalization_signals: false });
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(s);
}

function stop() {
  const w = window as unknown as GtagWindow;
  w[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
  // Delete _ga and _ga_<ID> on this domain and the main domain
  const host = window.location.hostname;
  const domains = ["", host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  for (const c of document.cookie.split(";")) {
    const name = c.split("=")[0].trim();
    if (name === "_ga" || name.startsWith("_ga_")) {
      for (const d of domains) document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ""}`;
    }
  }
}

export function Analytics() {
  const { consent, ready } = useConsent();
  const allowed = ready && consent?.analytics === true && GA_MEASUREMENT_ID !== "";
  useEffect(() => {
    if (!ready || !GA_MEASUREMENT_ID) return;
    if (allowed) load();
    else if (loaded || document.cookie.includes("_ga")) stop();
  }, [ready, allowed]);
  return null;
}
