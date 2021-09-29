const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    gridTemplateAreas: {
      mobile: ['header header header', 'main main main', 'footer footer footer'],
      desktop: ['sidebar header header', 'sidebar main main', 'sidebar footer footer'],
    },
    extend: {
      gridTemplateColumns: {
        layout: '0.7fr 2.3fr 1fr',
      },
      gridTemplateRows: {
        layout: '0.2fr 2.6fr 0.2fr',
      },
       height: {
        '13': '52px',
        '18': '66px'
      },
      outline: {
        royal: ['2px solid #2e8bc0', '0px'],
        red: ['2px solid red', '0px']
      },
    },
  },
  variants: {
     gridTemplateAreas: ['responsive'],
    extend: {},
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas'),
    require('@tailwindcss/typography')({
      className: 'markdown',
    }),
    require('tailwind-scrollbar'),
    plugin(function({ addUtilities }) {
      const scrollUtilities = {
        '.scroll-smooth': {
          scrollBehavior: 'smooth',
        },
        '.scroll-auto': {
          scrollBehavior: 'auto',
        },
      }

      addUtilities(scrollUtilities)
    })
  ],
}
