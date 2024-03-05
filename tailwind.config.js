/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: '#535bf2',
      }
    },
  }, experimental: {
    unknownAtRules: ['@tailwind base', '@custom2'],
  },
  plugins: [],
}