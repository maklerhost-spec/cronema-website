// Service ids. Order = order on the site; the URL slugs per language are in src/site.ts.
export const SERVICE_IDS = ["websites", "extensions", "custom", "agents", "apis", "hosting"] as const;
export type ServiceId = (typeof SERVICE_IDS)[number];
