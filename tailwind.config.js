/** @type {import('tailwindcss').Config} */
export default {
  // CRITICAL: Tells Tailwind where to find your Vue components and HTML files
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // You can define custom colors, fonts, spacing, etc. here
    },
  },
  plugins: [],
}