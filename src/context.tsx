import { createContext, useContext } from "react";
import type { ServiceId } from "./content/ids";
import type { Page } from "./site";

type Ctx = { page: Page; id?: ServiceId };

export const SiteContext = createContext<Ctx>({ page: "home" });
export const useSite = () => useContext(SiteContext);
