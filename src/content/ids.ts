// Service ids and their URL slugs (/leistungen/<slug>/). Order = order on the site.
export const SERVICE_IDS = ["websites", "extensions", "custom", "agents", "apis", "hosting"] as const;
export type ServiceId = (typeof SERVICE_IDS)[number];

export const SERVICE_SLUGS: Record<ServiceId, string> = {
  websites: "websites",
  extensions: "system-erweiterungen",
  custom: "individualsoftware",
  agents: "ki-agenten",
  apis: "api-schnittstellen",
  hosting: "hosting-betrieb",
};

export const serviceBySlug = (slug: string): ServiceId | undefined =>
  SERVICE_IDS.find((id) => SERVICE_SLUGS[id] === slug);
