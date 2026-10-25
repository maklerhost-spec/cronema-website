import { createContext, useContext } from "react";
import type { ServiceId } from "./content/ids";
import { DEFAULT_LANG, type SiteLang } from "./lang";
import type { Page } from "./site";

type Ctx = {
  page: Page;
  id?: ServiceId;
  lang: SiteLang;
  /** The same page in the other site languages, for the language menu. */
  alternates: Partial<Record<SiteLang, string>>;
};

export const SiteContext = createContext<Ctx>({ page: "home", lang: DEFAULT_LANG, alternates: {} });
export const useSite = () => useContext(SiteContext);
