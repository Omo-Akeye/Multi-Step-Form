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
        'custom-bg': 'hsl(206, 94%, 87%)'
      }
    },
  },
  plugins: [],
}
