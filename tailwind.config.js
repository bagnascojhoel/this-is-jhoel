const defaultTheme = require('tailwindcss/defaultTheme');

const env = process.env;
module.exports = {
  purge: {
    content: ['./src/**/*.svelte'],
    enabled: env === 'production',
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      mono: ['"Fira Code"', ...defaultTheme.fontFamily['mono']],
    },
    extend: {
      backgroundImage: {
        'wiggle-pattern':
          "url(\"data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.19'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
