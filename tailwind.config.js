/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#FDFAF5',
          100: '#F9F4EA',
          200: '#F2EAD8',
          300: '#E8DCC4',
          400: '#D9C9A8',
          500: '#C9B48C',
          DEFAULT: '#F2EAD8',
        },
        forest: {
          50: '#EAF2EC',
          100: '#C5DEC9',
          200: '#8FC09A',
          300: '#5A9E6A',
          400: '#2E7D47',
          500: '#1A5C32',
          600: '#164E2A',
          700: '#113F22',
          800: '#0C2F19',
          900: '#071F10',
          DEFAULT: '#1A5C32',
        },
        sage: {
          100: '#E8EFE5',
          200: '#C8D9C2',
          300: '#A8C3A0',
          400: '#7FA87A',
          DEFAULT: '#7FA87A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
