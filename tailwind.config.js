/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        orange: "#F7931E"
      },
      fontFamily: {
        cinzel: ['Cinzel', 'sans-serif'],
        lora: ['Lora', 'sans-serif']
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '2xxl': '1650px',
        '3xl': '1800px',
      },
    },
  },
  plugins: [],
};
