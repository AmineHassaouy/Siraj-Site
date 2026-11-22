import type { Config } from "tailwindcss";

/**
 * Same theme extension the Services wireframe declared in its
 * `tailwind.config = {…}` block (CDN build).
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sirajBg: "#FAF8EA",
        sirajBrown: "#3A2416",
        sirajDark: "#1A120E",
        sirajText: "#2C221E",
        sirajGold: "#D4963B",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "serif"],
        sans: ["Manrope", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
