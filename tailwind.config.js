/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        whitePrimary: '#F0F2F5',
		blackSecondary: '#1C1C22',
		blackInput: '#2D3546'
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slide2: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-200%)' },
        },
      },
      animation: {
        slideLoop: 'slide 40s -40s linear infinite',
        slideLoop2: 'slide2 40s -20s linear infinite',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
