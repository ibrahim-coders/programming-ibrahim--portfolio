// tailwind.config.js
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      animation: {
        type: 'type 2s infinite steps(12)',
      },
      keyframes: {
        type: {
          '40%, 60%': { left: '100%' },
          '100%': { left: '0' },
        },
      },
    },
  },
  plugins: [],
};
