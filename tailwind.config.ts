import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#f9f8f5",
        ink: "#101116",
        graphite: "#5f6368",
        hairline: "rgba(20, 25, 30, 0.16)",
        faint: "rgba(20, 25, 30, 0.075)",
        citrus: "#d98b41",
      },
      fontFamily: {
        serifDisplay: ["var(--font-display)", "Georgia", "serif"],
        sansFine: ["var(--font-sans)", "Helvetica Neue", "Arial", "sans-serif"],
      },
      letterSpacing: {
        blueprint: "0.18em",
        nav: "0.01em",
      },
    },
  },
  plugins: [],
};

export default config;
