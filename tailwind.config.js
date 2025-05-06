/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',         // Indigo-600
        'primary-hover': '#4338ca', // Indigo-700
        accent: '#bae6fd',          // Sky-200
        background: '#f0f9ff',      // Sky-100
        heading: '#1e1b4b',         // Indigo-900
        border: '#c7d2fe',          // Indigo-300
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}
