const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,mdx,html}'],
  theme: {
    extend: {
      animation: {
        // if you are using the animate variant of the modal
        modal: 'modal 0.5s',

        // if you are using drawer variant right
        'drawer-right': 'drawer-right 0.3s',

        // if you are using drawer variant left
        'drawer-left': 'drawer-left 0.3s',

        // if you are using drawer variant top
        'drawer-top': 'drawer-top 0.3s',

        // if you are using drawer variant bottom
        'drawer-bottom': 'drawer-bottom 0.3s',
      },
      keyframes: {
        // if you are using the animate variant of the modal
        modal: {
          '0%, 100%': { opacity: 0 },
          '100%': { opacity: 1 },
        },

        // if you are using drawer variant right
        'drawer-right': {
          '0%, 100%': { right: '-500px' },
          '100%': { right: '0' },
        },

        // if you are using drawer variant left
        'drawer-left': {
          '0%, 100%': { left: '-500px' },
          '100%': { left: '0' },
        },

        // if you are using drawer variant top
        'drawer-top': {
          '0%, 100%': { top: '-500px' },
          '100%': { top: '0' },
        },

        // if you are using drawer variant bottom
        'drawer-bottom': {
          '0%, 100%': { bottom: '-500px' },
          '100%': { bottom: '0' },
        },
      },
 
  
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: '475px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};





