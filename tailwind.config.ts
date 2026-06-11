import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#121212",
        panel: "#1A1A1A",
        card: "#202020",
        rose: "#E11D48",
        blush: "#FB7185",
        muted: "#A3A3A3"
      }
    }
  },
  plugins: []
} satisfies Config;
