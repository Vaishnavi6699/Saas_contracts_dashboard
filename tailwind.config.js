
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d4e9ff",
          500: "#2575fc",
          600: "#1f5bd8",
        },
      },
      keyframes: {
        // Horizontal gradient animation
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        // Subtle slow bounce for particles
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'bounce-slow': 'bounce-slow 20s linear infinite',
      },
      backgroundSize: {
        '200%': '200% 200%',
      },
    },
  },
  plugins: [],
};
