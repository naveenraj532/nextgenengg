/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '5xl': ['64px', '80px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      textShadow: {
        'lg': '2px 2px 4px rgba(0, 0, 0, 0.5)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'text-pop-up-top': {
          '0%': {
            transform: 'translateY(-50%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        'slide-in-elliptic-left-bck': {
          '0%': {
            transform: 'translateX(-600px) rotate(-30deg) scale(0)',
            'transform-origin': '50% 50%',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0) rotate(0deg) scale(1)',
            'transform-origin': '50% 50%',
            opacity: '1',
          },
        },
        'gradient-move': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'tracking-in-contract-bck': {
          '0%': {
            'letter-spacing': '1em',
            transform: 'translateZ(400px) translateY(-300px)',
            opacity: 0,
          },
          '40%': {
            opacity: 0.6,
          },
          '100%': {
            transform: 'translateZ(0) translateY(0)',
            opacity: 1,
            'letter-spacing': 'normal',
          },
          'drop-shadow-glow': {
            '0%, 100%': { filter: 'drop-shadow(0 0 60px rgba(75, 0, 130, 0.7))' },  // Indigo
            '33%': { filter: 'drop-shadow(0 0 60px rgba(0, 127, 255, 0.7))' },  // Blue
            '66%': { filter: 'drop-shadow(0 0 60px rgba(23, 34, 77, 0.7))' },  // Navy
          },
        },
        'flip-scale-up-ver': {
          '0%': {
            transform: 'scale(0.5) rotateX(90deg)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'scale(1) rotateX(0)',
            opacity: '1',
          },
        },
        
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        'text-pop-up-top': 'text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-in-elliptic-left-bck': 'slide-in-elliptic-left-bck 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'tracking-in-contract-bck': 'tracking-in-contract-bck 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
        'gradient-text': 'gradient-move 3s ease infinite',
         'color-changing-glow': 'drop-shadow-glow 3s infinite',
         'flip-scale-up-ver': 'flip-scale-up-ver 0.5s linear both',
      },
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        Azonix: ['Azonix', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        charcoal: '#4D4856', 
        lightblack: '#1E1E1E', 
        blue: '#007FFF',     
        navy: '#17224D',     
        lightgray: '#F5FAFA', 
        forestgreen: '#4D9077', 
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        hero: "url('assets/images/collection-background.svg')",
        card: "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        wide: "1440px"
      }
    },
  },
  plugins: [],
}
