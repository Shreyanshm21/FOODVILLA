// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     extend: {
//       animation: {
//         'spin-slow': 'bounce 2s linear  2',
//       }
//     },
//   },
//   plugins: [],
// };

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
      },
      colors: {
        custom: '#1b5b60',
      },
    },
  },
  plugins: [],
};
