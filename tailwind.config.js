module.exports = {
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      colors: {
        gray: {
          900: '#2d2d2d',
          200: '#eeeeee',
          300: '#e0e0e0',
          400: '#bdbdbd',
          500: '#9e9e9e',
          600: '#757575',
          700: '#616161',
          800: '#ffffff',
          100: '#212121',
        },
        blue: {
          100: '#d7d7d7',
          200: '#bcbcbc',
          300: '#a1a1a1',
          400: '#8d8d8d',
          500: '#797979',
          600: '#6d6d6d',
          700: '#5d5d5d',
          800: '#000000',
          900: '#3e3e3e',
        },
      },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover'],
    borderStyle: ['responsive', 'last', 'hover'],
    borderWidth: ['responsive', 'hover'],
    margin: ['responsive', 'first'],
    transform: ['responsive', 'hover'],
  },
  plugins: [],
};
