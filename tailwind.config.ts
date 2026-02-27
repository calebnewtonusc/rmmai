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
        background: "#080808",
        surface: "#111111",
        "surface-elevated": "#1a1a1a",
        border: "rgba(255,255,255,0.08)",
        accent: "#a855f7",
        "accent-hover": "#9333ea",
        "text-primary": "#f5f5f7",
        "text-secondary": "#a1a1aa",
        "text-muted": "#52525b",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "purple-pink": "linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #f97316 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
