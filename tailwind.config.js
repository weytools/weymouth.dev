module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nicepink: {
          DEFAULT: '#b447eb'
        },
        niceblue: {
          DEFAULT: '#57aeff'
        },
        nicepurp: {
          DEFAULT: '#7047eb'
        }
      },
      fontFamily: {
        inter: 'Inter, sans-serif',
        mulish: 'Mulish, sans-serif',
      }
    },
  },
  plugins: [],
}