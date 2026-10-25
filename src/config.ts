// Fixed values for the site. SITE_URL builds canonical links and the sitemap.
export const SITE_URL = "https://cronema.de";
export const CONTACT_EMAIL = "support@cronema.com";
export const PHONE_DISPLAY = "0163 4517633";
export const PHONE_INTL = "+491634517633";
/** Legal name as in the commercial register (imprint, privacy policy, structured data). */
export const COMPANY_LEGAL_NAME = "Cronema UG (haftungsbeschränkt)";
export const COMPANY_ADDRESS = { street: "Isabellastrasse 9", zip: "80798", city: "München" };
/** Google Analytics 4 property (loads only after consent). Empty = no analytics. */
export const GA_MEASUREMENT_ID = "";
/** Contact form endpoint (Netlify Function → GoHighLevel). Can point elsewhere via VITE_CONTACT_ENDPOINT. */
export const CONTACT_ENDPOINT: string = import.meta.env.VITE_CONTACT_ENDPOINT ?? "/.netlify/functions/contact";
