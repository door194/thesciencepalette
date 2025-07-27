/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'coral': '#FF6B6B',
        'cobalt': '#4E6EFA',
        'mint': '#4AE0C2',
        'deep-purple': '#7D5FFF',
        'charcoal': '#2E2E2E',
        'light-beige': '#FDFDFD',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-coral-purple': 'linear-gradient(135deg, #FF6B6B 0%, #7D5FFF 100%)',
        'gradient-cobalt-mint': 'linear-gradient(135deg, #4E6EFA 0%, #4AE0C2 100%)',
        'gradient-mint-coral': 'linear-gradient(135deg, #4AE0C2 0%, #FF6B6B 100%)',
        'gradient-purple-cobalt': 'linear-gradient(135deg, #7D5FFF 0%, #4E6EFA 100%)',
      },
      animation: {
        'bounce-gentle': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(255, 107, 107, 0.3)' },
          'to': { boxShadow: '0 0 30px rgba(255, 107, 107, 0.6)' },
        }
      }
    },
  },
  plugins: [],
};