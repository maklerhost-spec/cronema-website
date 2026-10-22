import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { App } from "./App";
import { headHtml } from "./head";
import { parsePath, ROUTES } from "./site";

export { ROUTES };
export { CONTACT_EMAIL, PHONE_DISPLAY, COMPANY_LEGAL_NAME, SITE_URL } from "./config";
export { LAST_MODIFIED } from "./head";
export { absoluteUrl, pathFor } from "./site";
export { SERVICES } from "./content/services";
export { SERVICE_IDS } from "./content/ids";
export { HOME, REFERENCES, META, APPROACH_PAGE, ABOUT_PAGE, TEAM } from "./content/pages";

/** HTML for one route, used by scripts/prerender.mjs. */
export function render(path: string) {
  const { page, id } = parsePath(path);
  const html = renderToString(
    <StrictMode>
      <App page={page} id={id} />
    </StrictMode>,
  );
  return { html, head: headHtml(page, id), page };
}
