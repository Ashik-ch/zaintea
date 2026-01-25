/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zain: {
          brown: '#2A1A10', // Darker, richer brown
          dark: '#050505',  // Deepest black
          beige: '#E8E0D5', // Muted beige
          gold: '#FFD700',  // Sharp, electric gold
          red: '#D00000',   // Bold, spicy red
          accent: '#FF4D00', // Kinetic energy pop color (optional)
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Antonio', 'sans-serif'], // Tall, condensed
        kinetic: ['Big Shoulders Display', 'sans-serif'], // Extra condensed for huge text
      }
    },
  },
  plugins: [],
}
