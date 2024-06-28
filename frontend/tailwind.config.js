/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        house: "url('./src/images/Home/house.jpg')",
      },
      fontFamily: {
        body: ["Oswald"],
      },
    },
  },
  plugins: [],
};
