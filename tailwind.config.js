/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        quicksand: ['"Quicksand ", sans-serif'],
        nunito: ['"Nunito", sans-serif'],
        poppins: ['"Poppins ", sans-serif'],
        open: ['"Open Sans", sans-serif'],
      },

      colors: {
        brand: "#1BBF00",
        primary: "#160C6D",
      },
    },
  },
  plugins: [],
};
