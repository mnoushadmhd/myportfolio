/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '350px',     // Change the value for small (sm) breakpoint
      md: '768px',     // Change the value for medium (md) breakpoint
      lg: '1200px',    // Change the value for large (lg) breakpoint
    }
  },
  darkMode: 'class',
  plugins: [],
}

