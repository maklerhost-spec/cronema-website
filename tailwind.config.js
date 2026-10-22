/** @type {import('tailwindcss').Config} */
// Same family as bookique.app and work247.app: navy, orange accent, slate greys, Inter Tight headings.
// Cronema adds "net" (electric blue) for the network lines of the logo and the graphics.
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0a2540", 700: "#12345a", 800: "#0d2c4d", 900: "#071a2e" },
        accent: { 50: "#fff6ec", 100: "#ffe9d1", 200: "#ffd0a1", 300: "#ffb067", 400: "#ff922e", 500: "#ff8412", 600: "#fe7700", 700: "#d65f00", 800: "#a94b05", 900: "#883e0a" },
        net: { 50: "#eef6ff", 100: "#d9eaff", 200: "#bcdaff", 300: "#8ec3ff", 400: "#59a2ff", 500: "#3381fc", 600: "#1d63f1", 700: "#154dde", 800: "#183fb4", 900: "#1a398e" },
      },
      fontFamily: {
        display: ['"Inter Tight"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
      },
      boxShadow: {
        frame: "0 1px 2px rgba(15,23,42,.06), 0 20px 40px -12px rgba(15,23,42,.18)",
        soft: "0 1px 2px rgba(15,23,42,.05), 0 6px 16px -8px rgba(15,23,42,.15)",
      },
      keyframes: {
        rise: { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "none" } },
      },
      animation: { rise: "rise .7s cubic-bezier(.16,1,.3,1) both" },
    },
  },
  plugins: [],
};
