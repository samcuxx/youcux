import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  safelist: ["dark"],
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        text: "var(--text-color)",
        textSecondary: "var(--text-color-secondary)",
        card: "var(--card-background)",
        border: "var(--border-color)",
        tableStripe: "var(--table-stripe-color)",
        tableHover: "var(--table-hover-color)",
      },
    },
  },
  plugins: [],
};
export default config;
