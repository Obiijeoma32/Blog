/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
        roboto: '"Roboto", sans-serif',
      },
      screens: {
        "3xxS": "300px",
        "4xxS": "400px",
        "5xxS": "500px",
        "6xxS": "600px",
        "7xxS": "700px",
        "820xxS": "820px",
        "10inch": "960px",
        "1xS": "1050px",
        "1halfxS": "1150px",
        "13inch": "1248px",
        "14inch": "1320px",
        "2xS": "1440px",
        "3xS": "1600px",
        "6xS": "1700px",
        "4xS": "1920px",
        "5xS": "2555px",
      },
    },
  },
  plugins: [],
};
