import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#4f46e5",
        "brand-secondary": "#7c3aed",
        "brand-dark": "#050816"
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, #4f46e5, transparent 55%), radial-gradient(circle at bottom right, #7c3aed, transparent 55%)",
        "card-glass":
          "linear-gradient(135deg, rgba(15,23,42,0.85), rgba(30,64,175,0.75))"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.8)"
      },
      borderRadius: {
        glass: "26px"
      }
    }
  },
  plugins: []
};

export default config;

