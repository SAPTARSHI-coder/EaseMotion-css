const plugin = require('tailwindcss/plugin');

module.exports = plugin(
  function ({ addUtilities }) {
    addUtilities({
      '.motion-safe-only': {
        '@media (prefers-reduced-motion: reduce)': {
          animation: 'none !important',
          transition: 'none !important',
        },
      },
    });
  },
  {
    theme: {
      extend: {
        keyframes: {
          'em-bounce': {
            '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
            '50%': { transform: 'none', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
          },
          'em-fade-in': {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          }
        },
        animation: {
          'em-bounce': 'em-bounce 1s infinite',
          'em-fade-in': 'em-fade-in 0.4s ease-out forwards',
        },
      },
    },
  }
);
