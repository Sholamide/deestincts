import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontSize: {
        xl: ["1.125rem", { lineHeight: "1.5" }],
        "2xl": ["1.25rem", { lineHeight: "1.45" }],
        "3xl": ["1.5rem", { lineHeight: "1.35" }],
        "4xl": ["1.875rem", { lineHeight: "1.25" }],
        // Moderated large display sizes using clamp for responsive scaling
        "5xl": ["clamp(2rem, 4vw, 2.5rem)", { lineHeight: "1.15" }],
        "6xl": ["clamp(2.25rem, 5vw, 3rem)", { lineHeight: "1.12" }],
        "7xl": ["clamp(2.5rem, 6vw, 3.5rem)", { lineHeight: "1.1" }],
        "8xl": ["clamp(2.75rem, 7vw, 4rem)", { lineHeight: "1.08" }],
        "9xl": ["clamp(3rem, 8vw, 4.5rem)", { lineHeight: "1.05" }],
      },
      boxShadow: {
        layer: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#C3122B",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config;
