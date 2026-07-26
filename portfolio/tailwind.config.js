/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',   // add this line
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fF6A64F",
        secondary: "#b56141",
        background: "#FFFCF8",
        white: "#FBFBFB",
        dark: {
          bg: "#000000",
          card: "#0a0a0a",
          border: "#1a1a1a",
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #f4a44f, #ac573f)',
      },
    },
  },
  plugins: [],
}


  

