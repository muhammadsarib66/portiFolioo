/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
       'Poppins': ['Poppins', 'sans-serif'] 
      },
      colors: {
        'text': '#0a012d',
        'background': '#ebe6fe',
        'primary': '#647c04',
        'secondary': '#af9cfc',
        'accent': '#a0c606',
       },
       fontSize :{
        nano : '0.4rem',
        xs : '0.5rem',
        sm: '0.75rem',
       }
       
    },
  },
  plugins: [],
}