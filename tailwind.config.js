/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#0B192C',
          900: '#0B192C',
          800: '#0F2238',
          700: '#13293F',
          600: '#1B3A5B',
        },
        cyan: {
          electric: '#00E5FF',
        },
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 229, 255, 0.25)',
        'glow-sm': '0 0 10px rgba(0, 229, 255, 0.2)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        pulseLive: 'pulseLive 1.5s ease-in-out infinite',
      },
      keyframes: {
        pulseLive: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
};
