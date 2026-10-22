import { SITE_URL } from "./config";
import { SERVICE_SLUGS, serviceBySlug, SERVICE_IDS, type ServiceId } from "./content/ids";

export const PAGES = ["home", "services", "service", "references", "approach", "about", "contact", "imprint", "privacy"] as const;
export type Page = (typeof PAGES)[number];

/** URL segment of each page (German site, everything at the root). */
const SEGMENT: Record<Exclude<Page, "home" | "service">, string> = {
  services: "leistungen",
  references: "referenzen",
  approach: "arbeitsweise",
  about: "ueber-uns",
  contact: "kontakt",
  imprint: "impressum",
  privacy: "datenschutz",
};

/** Service pages live at /leistungen/<slug>/; `id` then holds the service id. */
export function pathFor(page: Page = "home", id?: ServiceId): string {
  if (page === "home") return "/";
  if (page === "service") return `/leistungen/${SERVICE_SLUGS[id ?? "websites"]}/`;
  return `/${SEGMENT[page]}/`;
}

export function parsePath(pathname: string): { page: Page; id?: ServiceId } {
  const parts = pathname.toLowerCase().replace(/\/index\.html$/, "").split("/").filter(Boolean);
  if (parts[0] === "leistungen" && parts[1]) {
    const id = serviceBySlug(parts[1]);
    if (id) return { page: "service", id };
  }
  const page = (Object.keys(SEGMENT) as (keyof typeof SEGMENT)[]).find((p) => SEGMENT[p] === parts[0]);
  return { page: page ?? "home" };
}

export function absoluteUrl(path: string): string {
  return SITE_URL.replace(/\/$/, "") + path;
}

export type Route = { page: Page; id?: ServiceId; path: string };

/** Every route the prerender writes. */
export const ROUTES: Route[] = [
  ...PAGES.filter((p) => p !== "service").map((page) => ({ page, path: pathFor(page) })),
  ...SERVICE_IDS.map((id) => ({ page: "service" as const, id, path: pathFor("service", id) })),
];
