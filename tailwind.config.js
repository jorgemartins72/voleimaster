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
      },
      height: {
        '480': '480px',
        '540': '540px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
