import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
import { parsePath } from "./site";
import "./index.css";

const root = document.getElementById("root")!;
const { page, id, lang } = parsePath(window.location.pathname);
const app = (
  <StrictMode>
    <App page={page} id={id} lang={lang} />
  </StrictMode>
);

// The build prerenders every page; `npm run dev` serves an empty shell.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
