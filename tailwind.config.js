/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // screens: {
    //   'laptop' : '768px'
    //  ` @media (max-width: 768px): {
    //     '.header-bg' :{
    //     backgroundImage: 'url(./assets/bg-sidebar-mobile.png)',
    //    }
    //    }`
    // },
    extend: {
      fontFamily:{
        custom:['Ubuntu','sans']
      },
        backgroundImage: {
          'mobile-sidebar': "url('/assets/bg-sidebar-mobile.png')",
          'desktop-view' : "url('/assets/bg-sidebar-desktop.svg')"
      },
      backgroundColor :{
        'custom-bg': 'hsl(217, 100%, 97%)'
      },
      colors:{
        'light-gray':' hsl(229, 24%, 87%)',
        'cool-gray':'hsl(231, 11%, 63%)',
        'marine-blue': 'hsl(213, 96%, 18%)',
        'purple-blue': 'hsl(243, 100%, 62%)',
        'pastel-blue': ' hsl(228, 100%, 84%)',
        'light-blue' : 'hsl(206, 94%, 87%)',
        'strawberry-red' : ' hsl(354, 84%, 57%)',
        'magnolia': 'hsl(217, 100%, 97%)',
        'Alabaster': ' hsl(231, 100%, 99%)'
      },
   
    },
    
  },
  plugins: [],
}
