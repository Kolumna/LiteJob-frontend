/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          md: '640px',
          lg: '768px',
          xl: '992px',
          '2xl': '1280px',
          '3xl': '1536px',
        },
      },
    },
  },
  plugins: [],
}