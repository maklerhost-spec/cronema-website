// Consent banner as on work247.app: "Accept all" and "Necessary only" are equal on the first
// level, nothing is pre-ticked, imprint and privacy policy stay reachable (the banner does not block the page).
import { ShieldCheck, X } from "lucide-react";
import { useEffect, useState } from "react";
import { closeConsentSettings, openConsentSettings, saveConsent, useConsent, type ConsentChoice } from "../consent";
import { CONSENT } from "../content/consent";
import { pathFor } from "../site";

const primary =
  "inline-flex flex-1 items-center justify-center rounded-xl bg-accent-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-700 sm:flex-none";
const secondary =
  "inline-flex flex-1 items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50 sm:flex-none";

export function ConsentBanner() {
  const t = CONSENT;
  const { consent, settingsOpen, ready } = useConsent();
  const [details, setDetails] = useState(false);
  const [choice, setChoice] = useState<ConsentChoice>({ analytics: false });

  // Opening the settings shows the stored choice
  useEffect(() => {
    if (settingsOpen) {
      setChoice({ analytics: consent?.analytics ?? false });
      setDetails(true);
    }
  }, [settingsOpen, consent]);

  if (!ready) return null;
  // After the decision: small shield at the bottom left, opens the settings at any time (withdrawal)
  if (consent && !settingsOpen) {
    return (
      <button
        type="button"
        onClick={openConsentSettings}
        className="fixed bottom-4 left-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-accent-600 shadow-lg transition-colors hover:bg-slate-50 sm:bottom-6 sm:left-6"
        aria-label={t.footerLink}
        title={t.footerLink}
      >
        <ShieldCheck className="h-5 w-5" aria-hidden="true" />
      </button>
    );
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[55] p-2 sm:p-4" role="region" aria-label={t.title}>
      <div className="mx-auto max-h-[85vh] max-w-3xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/20 sm:p-6">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-accent-600" aria-hidden="true" />
          <div className="min-w-0 flex-1">
            <h2 className="text-lg font-bold text-slate-900">{t.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{t.text}</p>
            <p className="mt-2 text-sm">
              <a href={pathFor("privacy")} className="font-medium text-accent-700 underline">Datenschutz</a>
              <span className="mx-2 text-slate-300">·</span>
              <a href={pathFor("imprint")} className="font-medium text-accent-700 underline">Impressum</a>
            </p>
          </div>
          {consent && (
            <button type="button" onClick={closeConsentSettings} className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700" aria-label={t.close}>
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          )}
        </div>

        {details && (
          <ul className="mt-4 space-y-2">
            {t.categories.map((c) => {
              const fixed = c.key === "necessary";
              const checked = fixed || choice.analytics;
              return (
                <li key={c.key} className="rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200">
                  <label className={`flex items-start gap-3 ${fixed ? "" : "cursor-pointer"}`}>
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 shrink-0 accent-accent-600"
                      checked={checked}
                      disabled={fixed}
                      onChange={(e) => setChoice({ analytics: e.target.checked })}
                    />
                    <span className="min-w-0">
                      <span className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-900">
                        {c.title}
                        {fixed && <span className="rounded-md bg-slate-200 px-1.5 py-0.5 text-[11px] font-medium text-slate-600">{t.always}</span>}
                      </span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-slate-600">{c.text}</span>
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-2 sm:justify-end">
          {details ? (
            <button type="button" className={secondary} onClick={() => saveConsent(choice)}>{t.save}</button>
          ) : (
            <button type="button" className={secondary} onClick={() => setDetails(true)}>{t.settings}</button>
          )}
          <button type="button" className={primary} onClick={() => saveConsent({ analytics: false })}>{t.necessaryOnly}</button>
          <button type="button" className={primary} onClick={() => saveConsent({ analytics: true })}>{t.acceptAll}</button>
        </div>
      </div>
    </div>
  );
}

/** Box on the privacy page: current status and a button to change or withdraw */
export function ConsentRevokeBox() {
  const t = CONSENT;
  const { consent, ready } = useConsent();
  const analytics = t.categories.find((c) => c.key === "analytics")!;
  return (
    <div className="mb-8 rounded-2xl border border-accent-200 bg-accent-50 p-5 sm:p-6">
      <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
        <ShieldCheck className="h-5 w-5 text-accent-600" aria-hidden="true" />
        {t.revoke.title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{t.revoke.text}</p>
      {ready && (
        <p className="mt-2 text-sm text-slate-700">
          {t.revoke.status} <strong>{consent?.analytics ? `${t.revoke.granted} ${analytics.title}` : t.revoke.none}</strong>
        </p>
      )}
      <button type="button" onClick={openConsentSettings} className="mt-4 rounded-xl bg-accent-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-700">
        {t.revoke.button}
      </button>
    </div>
  );
}
