/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clinic-teal': '#2dd4bf', // Example teal
        'clinic-blue': '#3b82f6', // Example blue
      }
    },
  },
  plugins: [],
}