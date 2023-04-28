/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '480px'
      },
      colors: {
        'oliv': 'rgb(104, 105, 45)',
        'red': '#ad1f00',
        'main-color': '#212a2f',
        'border-gray': '#d3d4d5'
      },
      boxShadow: {
        'nav': '0px 2px 24px 0 rgba(0, 0, 0, .09)',
        'newsletter': 'transparent 0px 2px 0px 0px inset, transparent 2px 0px 0px 0px inset, transparent -2px 0px 0px 0px inset;',
        'newsletterActive': 'rgb(33, 42, 47) 0px 2px 0px 0px inset, rgb(33, 42, 47) 2px 0px 0px 0px inset, rgb(33, 42, 47) -2px 0px 0px 0px inset;',
      },
      backgroundImage: {
        'hero-bg-mob': "url(./assets/bg/hero-bg--mob.jpg)",
        'hero-bg-desk': "url(./assets/bg/hero-bg.jpg)",
      }
    },
  },
  plugins: [],
}

