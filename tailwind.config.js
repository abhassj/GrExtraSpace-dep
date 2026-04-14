/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#050A14',
          navy: '#0A192F',
          'navy-deep': '#061226',
          red: '#D90429',
          'red-deep': '#A00320',
          gold: '#FFB703',
          mist: '#F8F9FA',
          paper: '#F2F1EC',
          slate: '#1E293B',
          charcoal: '#111827',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      boxShadow: {
        glass: '0 16px 40px rgba(5, 10, 20, 0.32)',
        editorial: '0 30px 80px -30px rgba(10, 25, 47, 0.45)',
      },
      keyframes: {
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1.18)' },
        },
      },
      animation: {
        'float-slow': 'float-slow 12s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 6s ease-in-out infinite',
        'spin-slow': 'spin-slow 26s linear infinite',
        'ken-burns': 'ken-burns 8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
