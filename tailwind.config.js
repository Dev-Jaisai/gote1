/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6faf5',
          100: '#ccf5eb',
          200: '#99ebd7',
          300: '#66e0c3',
          400: '#33d6af',
          500: '#02c39a',
          600: '#029c7b',
          700: '#01755c',
          800: '#014e3d',
          900: '#00271f',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      dropShadow: {
        glow: '0 0 24px rgba(2, 195, 154, 0.35)',
      },
    },
  },
  plugins: [],
}
