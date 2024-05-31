module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // You can add more paths here if you have other directories where you use Tailwind CSS
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          DEFAULT: '#6D28D9',
        },
        white: {
          DEFAULT: '#FFFFFF',
        }
      }
    },
  },
  plugins: [],
}
