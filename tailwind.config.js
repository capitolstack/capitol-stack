/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables dark mode using a 'class' strategy (required for next-themes)
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts}', // If you're using utility libraries like posts.js
    './posts/**/*.{mdx}', // For Tailwind to scan MDX files if needed
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
      },
    },
  },
  plugins: [],
};
