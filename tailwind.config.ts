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
        background: "var(--background)",
        foreground: "var(--foreground)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        accent1: "var(--accent-1)",
        accent2: "var(--accent-2)",
      },
    },
  },
  plugins: [],
};
export default config;
