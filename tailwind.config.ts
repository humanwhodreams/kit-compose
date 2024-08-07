import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,jsx,md,mdx,ts,tsx}",
    "./app/**/*.{js,jsx,md,mdx,ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
