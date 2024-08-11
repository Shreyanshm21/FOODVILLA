// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        ring: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        ring: 'ring 1s linear infinite',
        'spin-slow': 'bounce 2s linear 2',
      },
      colors: {
        custom: '#1b5b60',
        custom2: '#21AF99',
      },
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'], // Define the Barlow font with all weights
      },
    },
  },
  plugins: [],
};
