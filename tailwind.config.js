// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class',
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
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: {
              color: theme('colors.primary'),
              '&:hover': {
                color: '#005050',
              },
            },
            h1: { fontWeight: '700', letterSpacing: '-0.025em' },
            h2: { fontWeight: '600', letterSpacing: '-0.02em' },
            h3: { fontWeight: '600' },
            strong: { color: theme('colors.gray.900') },
            code: {
              backgroundColor: theme('colors.gray.100'),
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
};
