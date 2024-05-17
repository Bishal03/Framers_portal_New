import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-brown': '#5E4A35',
        'brown': 'rgb(180, 167, 122)',
        'olive-green': '#8AA35E',
        'forest-green': '#4F6128',
        'mustard-yellow': '#F5D600',
        'sand': '#C7B474',
        'backgroundcolor':'#F5F5DC'
      },
    },
  },
  plugins: [daisyui],
}
