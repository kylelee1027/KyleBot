/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        typewriter: "typewriter 2s steps(10) forwards",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          },
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1'
          },
          '50.1%': {
            opacity: '0'
          },
          '100%': {
            opacity: '0'
          }
        }
      }
    },
  },
  plugins: [],
}

