
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'media',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts}',
    './posts/**/*.mdx'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007070'
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      typography: (theme) => ({
        dark: {
          css: {
            color: theme('colors.gray.200'),
            a: { color: theme('colors.teal.400') },
            strong: { color: theme('colors.white') },
            h1: { color: theme('colors.gray.100') },
            h2: { color: theme('colors.gray.100') },
            h3: { color: theme('colors.gray.100') },
            h4: { color: theme('colors.gray.100') },
            code: { color: theme('colors.gray.100') },
            figcaption: { color: theme('colors.gray.400') },
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
};
