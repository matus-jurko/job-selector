const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      animation: {
        gradient: 'gradient 10s ease infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': 'left center',
            'background-size': '400% 400%',
          },
          '50%': {
            'background-position': 'right center',
            'background-size': '200% 200%',
          },
        },
      },
    },
  },
};
