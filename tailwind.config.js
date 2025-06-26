/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#D6336C',
          secondary: '#6C63FF',
          accent: '#F7D6E0',
          'neutral-light': '#F5F5F5',
          'neutral-dark': '#333333',
        },
      },
    },
    plugins: [],
  }
  