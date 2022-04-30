module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
          sm: '480px',
          md: '811px',
          lg: '976px',
          xl: '1440px',
      },
      fontSize: {
        'xxs': '.65rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
