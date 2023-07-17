import type { Config } from 'tailwindcss'

export default {
  content: ["**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        decorative: ["Playfair Display", "serif"]
      }
    },
  },
  plugins: [],
} satisfies Config

