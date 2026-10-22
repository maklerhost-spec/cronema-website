// Contact form → GoHighLevel. Same approach as the GARAN-Label app (app/garan/ghl.server.ts):
// a GHL private integration (scope contacts.write) creates or updates the contact, adds tags
// and a note with the inquiry. Token and location only live in the hosting environment:
//   GHL_PRIVATE_TOKEN, GHL_LOCATION_ID (Netlify → Site configuration → Environment variables).
// Spam protection as on work247.app: honeypot field "website", minimum fill time, rate limit per IP.

const API = "https://services.leadconnectorhq.com/contacts";
const MIN_FILL_MS = 3000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

const INTERESTS: Record<string, string> = {
  websites: "Website / Landingpage",
  extensions: "Erweiterung für Shopify, GoHighLevel, HubSpot",
  custom: "Individualsoftware",
  agents: "KI-Agenten & Automatisierung",
  apis: "API-Schnittstellen",
  hosting: "Hosting & Betrieb",
  other: "Sonstiges",
};

type Body = {
  first_name?: string;
  last_name?: string;
  email?: string;
  phone?: string;
  company?: string;
  interest?: string;
  message?: string;
  consent?: boolean;
  website?: string;
  started_at?: number;
  page?: string;
};

const json = (status: number, data: object) =>
  new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

async function ghl(path: string, method: string, body: object) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${process.env.GHL_PRIVATE_TOKEN}`,
      Version: "2021-07-28",
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    console.error(`GHL ${method} ${path} failed: ${res.status} ${await res.text()}`);
    return null;
  }
  return res.json();
}

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export default async (req: Request) => {
  if (req.method !== "POST") return json(405, { ok: false, error: "METHOD" });
  if (!process.env.GHL_PRIVATE_TOKEN || !process.env.GHL_LOCATION_ID) {
    console.error("Contact form: GHL_PRIVATE_TOKEN or GHL_LOCATION_ID missing");
    return json(500, { ok: false, error: "NOT_CONFIGURED" });
  }
  const body = (await req.json().catch(() => null)) as Body | null;
  if (!body) return json(400, { ok: false, error: "INVALID_FIELDS" });

  // Bots: filled honeypot or sent too fast. Answer "ok" so they don't retry.
  if (clean(body.website, 200) || (typeof body.started_at === "number" && Date.now() - body.started_at < MIN_FILL_MS)) {
    return json(200, { ok: true });
  }
  const ip = req.headers.get("x-nf-client-connection-ip") ?? req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (rateLimited(ip)) return json(429, { ok: false, error: "RATE_LIMITED" });

  const firstName = clean(body.first_name, 80);
  const lastName = clean(body.last_name, 80);
  const email = clean(body.email, 200).toLowerCase();
  const phone = clean(body.phone, 40);
  const company = clean(body.company, 120);
  const message = clean(body.message, 5000);
  const interest = INTERESTS[clean(body.interest, 20)] ? clean(body.interest, 20) : "other";
  if (!firstName || !lastName || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || body.consent !== true) {
    return json(400, { ok: false, error: "INVALID_FIELDS" });
  }

  const data = await ghl("/upsert", "POST", {
    locationId: process.env.GHL_LOCATION_ID,
    source: "Website cronema.com",
    firstName,
    lastName,
    email,
    ...(phone ? { phone } : {}),
    ...(company ? { companyName: company } : {}),
  });
  const id: string | undefined = data?.contact?.id;
  if (!id) return json(502, { ok: false, error: "CRM" });

  // Tags through their own call: upsert would replace tags added in GHL by hand.
  await ghl(`/${id}/tags`, "POST", { tags: ["website-anfrage", "cronema-website", `interesse-${interest}`] });
  const note = [
    "Anfrage über das Kontaktformular auf cronema.com",
    `Interesse: ${INTERESTS[interest]}`,
    company && `Firma: ${company}`,
    phone && `Telefon: ${phone}`,
    body.page && `Seite: ${clean(body.page, 200)}`,
    `Einwilligung Datenschutz: ja (${new Date().toISOString()})`,
  ]
    .filter(Boolean)
    .join("\n");
  await ghl(`/${id}/notes`, "POST", { body: `${note}\n\n${message}` });

  return json(200, { ok: true });
};
