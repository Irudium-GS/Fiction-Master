/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF0000',
          dark: '#8B0000',
        },
        secondary: {
          DEFAULT: '#D3D3D3',
          dark: '#A9A9A9',
        },
        accent: {
          DEFAULT: '#800000',
          dark: '#4A0404',
        },
      },
    },
  },
  plugins: [],
};