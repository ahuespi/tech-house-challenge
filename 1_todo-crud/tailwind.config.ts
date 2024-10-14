import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'neutral-10': '#DBDBDB',
        'neutral-20': '#B3B3B3',
        'neutral-40': '#777777',
        'neutral-60': '#555555',
        'neutral-80': '#333333',
        'primary-main': '#639605'
      },
    },
  },
  plugins: [],
};
export default config;
