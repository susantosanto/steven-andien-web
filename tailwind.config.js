/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#FFF8F3',
          100: '#FFF5F0',
          200: '#FFECD9',
          300: '#FFB38A',
          400: '#FF8A5C',
          500: '#FF6B35',
          600: '#E85A2A',
          700: '#CC4A1E',
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        accent: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}