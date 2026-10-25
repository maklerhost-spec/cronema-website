import { useEffect } from "react";
import { Analytics } from "./components/Analytics";
import { ConsentBanner } from "./components/ConsentBanner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SiteContext } from "./context";
import { NAV } from "./content/pages";
import { setLang, SITE_LANGS, type SiteLang } from "./lang";
import type { ServiceId } from "./content/ids";
import { HomePage } from "./sections/Home";
import { AboutPage, ApproachPage, ContactPage, LegalPage, ReferencesPage, ServicePage, ServicesPage } from "./sections/Pages";
import { pathFor, type Page } from "./site";
import { ProductDocs, ProductLanding } from "./sections/Product";
import { productPath, type ProductLang } from "./products/elektropflicht/langs";

export function App({ page, id, lang, plang }: { page: Page; id?: ServiceId; lang: SiteLang; plang?: ProductLang }) {
  // Texts read the current language while rendering (src/lang.ts).
  setLang(lang);
  const product = page === "product" || page === "productDocs";
  const alternates = Object.fromEntries(
    SITE_LANGS.map((l) => [l, product ? productPath(l, page === "productDocs") : pathFor(page, id, l)]),
  );
  // The prerendered HTML already has the title; this keeps `npm run dev` right too.
  useEffect(() => {
    if (!import.meta.env.DEV) return;
    if (product) return;
    void import("./head").then((h) => (document.title = h.pageTitle(page, id)));
  }, [page, id, product]);

  return (
    <SiteContext.Provider value={{ page, id, lang, alternates }}>
      <a href="#main" className="sr-only z-50 rounded-full bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        {NAV.skip}
      </a>
      <Header />
      <main id="main">
        {page === "home" && <HomePage />}
        {page === "services" && <ServicesPage />}
        {page === "service" && id && <ServicePage id={id} />}
        {page === "references" && <ReferencesPage />}
        {page === "approach" && <ApproachPage />}
        {page === "about" && <AboutPage />}
        {page === "contact" && <ContactPage />}
        {(page === "imprint" || page === "privacy") && <LegalPage page={page} />}
        {page === "product" && plang && <ProductLanding plang={plang} />}
        {page === "productDocs" && plang && <ProductDocs plang={plang} />}
      </main>
      <Footer />
      <ConsentBanner />
      <Analytics />
    </SiteContext.Provider>
  );
}
