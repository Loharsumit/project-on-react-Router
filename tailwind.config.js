/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  // tailwind.config.js

  theme: {
    extend: {
      animation: {
        'spin-logo': 'logo-spin 7s linear infinite',
      },
      keyframes: {
        'logo-spin': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(180deg)' },
        },
      },
      dropShadow: {
        'react-hover': '0 0 2em #61dafbaa',
        'default-hover': '0 0 2em #646cffaa',
      },
    },
  },

}

