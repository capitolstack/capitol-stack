/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode using a 'class' strategy (required for next-themes)
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts}',
    './posts/**/*.{mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007070',
        background: '#ffffff',
        darkBackground: '#0f172a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.800'),
            a: { color: theme('colors.primary') },
            strong: { color: theme('colors.gray.900') },
            blockquote: {
              borderLeftColor: theme('colors.primary'),
              fontStyle: 'italic',
              quotes: 'none',
            },
            h1: { fontWeight: '700' },
            h2: { fontWeight: '700' },
            h3: { fontWeight: '600' },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
