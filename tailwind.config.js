/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2',
        secondary: '#0F172A',
        accent: '#FACC15',
        heroGradientStart: '#4F46E5',
        heroGradientEnd: '#3B82F6',
        glowPink: '#F472B6',
        glowIndigo: '#6366F1',
        glowYellow: '#FACC15',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideLeft: {
          '0%': { transform: 'translateX(20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.7 },
          '50%': { transform: 'scale(1.1)', opacity: 1 },
        },
        pulseFast: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.8 },
          '50%': { transform: 'scale(1.05)', opacity: 1 },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounceLight: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 10px #fff' },
          '50%': { boxShadow: '0 0 20px #fff' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        slideUp: 'slideUp 1s ease-out forwards',
        slideDown: 'slideDown 1s ease-out forwards',
        slideLeft: 'slideLeft 1s ease-out forwards',
        slideRight: 'slideRight 1s ease-out forwards',
        pulseSlow: 'pulseSlow 3s infinite',
        pulseFast: 'pulseFast 1.5s infinite',
        blob: 'blob 8s infinite',
        rotateSlow: 'rotateSlow 20s linear infinite',
        bounceLight: 'bounceLight 2s infinite',
        glowPulse: 'glowPulse 2s infinite',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero-bg.jpg')",
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dark-gradient': 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
