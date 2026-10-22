// Contact form: sends the inquiry to the Netlify Function, which saves it as a contact with note in GoHighLevel.
// Spam protection as on work247.app: hidden honeypot field "website" and the time the form was opened.
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { CONTACT_EMAIL, CONTACT_ENDPOINT } from "../config";
import { SERVICE_IDS } from "../content/ids";
import { SERVICES } from "../content/services";
import { pathFor } from "../site";

const input =
  "w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-base text-slate-900 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-100 sm:text-sm";

const ERRORS = {
  required: "Bitte füllen Sie alle Pflichtfelder aus.",
  email: "Bitte prüfen Sie Ihre E-Mail-Adresse.",
  consent: "Bitte bestätigen Sie die Datenschutzerklärung.",
  rateLimited: "Sie haben gerade mehrere Anfragen gesendet. Bitte versuchen Sie es in einigen Minuten erneut.",
  generic: `Das Senden hat leider nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie uns an ${CONTACT_EMAIL}.`,
};

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
        {required ? <span className="text-accent-600"> *</span> : <span className="font-normal text-slate-400"> (optional)</span>}
      </span>
      {children}
    </label>
  );
}

export function ContactForm({ interest = "" }: { interest?: string }) {
  const startedAt = useRef(Date.now());
  const [form, setForm] = useState({ first_name: "", last_name: "", email: "", phone: "", company: "", interest, message: "", consent: false, website: "" });
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState<string | null>(null);
  const set = (key: keyof typeof form) => (value: string | boolean) => setForm((f) => ({ ...f, [key]: value }));

  async function submit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    if (!form.first_name.trim() || !form.last_name.trim() || !form.email.trim() || !form.message.trim()) return setError(ERRORS.required);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) return setError(ERRORS.email);
    if (!form.consent) return setError(ERRORS.consent);
    setState("sending");
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ ...form, interest: form.interest || "other", started_at: startedAt.current, page: window.location.pathname }),
      });
      const body = await res.json().catch(() => null);
      if (!res.ok || body?.ok !== true) {
        setError(body?.error === "RATE_LIMITED" ? ERRORS.rateLimited : body?.error === "INVALID_FIELDS" ? ERRORS.required : ERRORS.generic);
        setState("idle");
        return;
      }
      setState("done");
    } catch {
      setError(ERRORS.generic);
      setState("idle");
    }
  }

  if (state === "done") {
    return (
      <div className="py-12 text-center" role="status">
        <CheckCircle2 className="mx-auto h-14 w-14 text-accent-600" aria-hidden="true" />
        <h2 className="mt-4 text-2xl font-bold text-slate-900">Vielen Dank für Ihre Anfrage!</h2>
        <p className="mx-auto mt-2 max-w-md text-slate-600">Wir haben Ihre Nachricht erhalten und melden uns in Kürze bei Ihnen, in der Regel innerhalb eines Werktags.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-4">
      <h2 className="text-xl font-bold text-slate-900">Projekt anfragen</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Vorname" required>
          <input className={input} autoComplete="given-name" value={form.first_name} onChange={(e) => set("first_name")(e.target.value)} maxLength={80} required />
        </Field>
        <Field label="Nachname" required>
          <input className={input} autoComplete="family-name" value={form.last_name} onChange={(e) => set("last_name")(e.target.value)} maxLength={80} required />
        </Field>
        <Field label="E-Mail" required>
          <input type="email" className={input} autoComplete="email" value={form.email} onChange={(e) => set("email")(e.target.value)} maxLength={200} required />
        </Field>
        <Field label="Telefon">
          <input type="tel" className={input} autoComplete="tel" value={form.phone} onChange={(e) => set("phone")(e.target.value)} maxLength={40} />
        </Field>
      </div>
      <Field label="Firma">
        <input className={input} autoComplete="organization" value={form.company} onChange={(e) => set("company")(e.target.value)} maxLength={120} />
      </Field>
      <Field label="Worum geht es?">
        <select className={input} value={form.interest} onChange={(e) => set("interest")(e.target.value)}>
          <option value="">Bitte wählen</option>
          {SERVICE_IDS.map((id) => (
            <option key={id} value={id}>{SERVICES[id].name}</option>
          ))}
          <option value="other">Sonstiges</option>
        </select>
      </Field>
      <Field label="Ihre Nachricht" required>
        <textarea
          className={`${input} min-h-[140px]`}
          value={form.message}
          onChange={(e) => set("message")(e.target.value)}
          maxLength={5000}
          placeholder="Beschreiben Sie kurz Ihre Idee, Ihre bestehenden Systeme und Ihren Zeitrahmen."
          required
        />
      </Field>
      {/* Honeypot: invisible for people, bots fill it in */}
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input tabIndex={-1} autoComplete="off" value={form.website} onChange={(e) => set("website")(e.target.value)} />
        </label>
      </div>
      <label className="flex cursor-pointer items-start gap-3 text-sm text-slate-600">
        <input type="checkbox" className="mt-0.5 h-4 w-4 shrink-0 accent-accent-600" checked={form.consent} onChange={(e) => set("consent")(e.target.checked)} />
        <span>
          Ich habe die{" "}
          <a href={pathFor("privacy")} className="font-medium text-accent-700 underline" target="_blank" rel="noopener">
            Datenschutzerklärung
          </a>{" "}
          gelesen und bin einverstanden, dass meine Angaben zur Bearbeitung meiner Anfrage gespeichert werden. *
        </span>
      </label>
      {error && (
        <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
      <button type="submit" className="btn-accent w-full disabled:opacity-60" disabled={state === "sending"}>
        {state === "sending" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
        {state === "sending" ? "Wird gesendet …" : "Anfrage senden"}
      </button>
    </form>
  );
}
