import { fileURLToPath, pathToFileURL } from "node:url";
import react from "@vitejs/plugin-react";
import { build, defineConfig, type Plugin } from "vite";

const configFile = fileURLToPath(import.meta.url);

/**
 * Prerenders every page right after the browser build, so any build command (`vite build`
 * as Bolt runs it, or `npm run build`) ships full HTML per page plus sitemap.xml, robots.txt,
 * 404.html and llms.txt. Builds the server bundle of the app, then runs scripts/prerender.mjs.
 */
function prerender(): Plugin {
  let ssr = false;
  return {
    name: "cronema-prerender",
    apply: "build",
    configResolved(config) {
      ssr = Boolean(config.build.ssr);
    },
    async closeBundle() {
      if (ssr) return;
      await build({
        configFile,
        logLevel: "error",
        build: { ssr: "src/entry-server.tsx", outDir: "dist-server", emptyOutDir: true },
      });
      const script = pathToFileURL(fileURLToPath(new URL("./scripts/prerender.mjs", import.meta.url))).href;
      await import(`${script}?t=${Date.now()}`);
    },
  };
}

export default defineConfig({
  plugins: [react(), prerender()],
  optimizeDeps: { exclude: ["lucide-react"] },
});
