/** @type {import('tailwindcss').Config} */
// Cronema look (Manfred 22.10.2026): the blue of the logo and anthracite, no orange; agency style with
// large type, sharp corners and lines instead of the rounded cards of bookique.app and work247.app.
//   accent = logo blue (#0091da), ink = anthracite, net = light blue for network lines in the graphics.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#1d2025", 700: "#2b2f36", 800: "#24272d", 900: "#141619" },
        accent: { 50: "#eaf6fd", 100: "#cdeafb", 200: "#9dd6f6", 300: "#62bdee", 400: "#2aa5e4", 500: "#0091da", 600: "#0081c4", 700: "#00699f", 800: "#065680", 900: "#0b486a" },
        net: { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" },
      },
      fontFamily: {
        display: ['"Inter Tight"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      boxShadow: {
        frame: "0 1px 2px rgba(20,22,25,.06), 0 24px 48px -16px rgba(20,22,25,.22)",
        soft: "0 1px 2px rgba(20,22,25,.05), 0 6px 16px -8px rgba(20,22,25,.15)",
      },
      keyframes: {
        rise: { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "none" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
      },
      animation: { rise: "rise .7s cubic-bezier(.16,1,.3,1) both", marquee: "marquee 40s linear infinite" },
    },
  },
  plugins: [],
};
