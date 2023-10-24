/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom:['Ubuntu','sans']
      },
      backgroundColor :{
        'custom-bg': 'hsl(217, 100%, 97%)'
      },
      colors:{
        'light-gray':' hsl(229, 24%, 87%)',
        'cool-gray':'hsl(231, 11%, 63%)',
        'marine-blue': 'hsl(213, 96%, 18%)',
        'purple-blue': 'hsl(243, 100%, 62%)',
      }
    },
  },
  plugins: [],
}
