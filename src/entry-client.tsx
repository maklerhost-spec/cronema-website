import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
import { parsePath } from "./site";
import { loadProductContent } from "./products/elektropflicht/store";
import "./index.css";

const root = document.getElementById("root")!;
const { page, id, lang, plang } = parsePath(window.location.pathname);
const app = (
  <StrictMode>
    <App page={page} id={id} lang={lang} plang={plang} />
  </StrictMode>
);

// The build prerenders every page; `npm run dev` serves an empty shell.
// ElektroPflicht pages load the texts of their language first.
const ready = plang ? loadProductContent(plang) : Promise.resolve();
void ready.then(() => {
  if (root.firstElementChild) hydrateRoot(root, app);
  else createRoot(root).render(app);
});
