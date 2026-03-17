/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        'brutal-bg': '#FFFFFF',
        'brutal-text': '#212121',
        'brutal-border': '#000000',
        'brutal-accent-blue': '#0055FF',
        'brutal-accent-yellow': '#FFE000',
        'brutal-gray': '#F4F4F4',
        // Dark mode colors
        'dark-bg': '#212121',
        'dark-text': '#FFFFFF',
      },
      fontFamily: {
        'mono': ['"IBM Plex Mono"', '"Roboto Mono"', '"Courier New"', 'monospace'],
        'sans': ['"Inter"', '"Roboto"', '"Helvetica Neue"', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '6px 6px 0px #000000',
        'brutal-hover': '4px 4px 0px #000000',
        'brutal-sm': '4px 4px 0px #000000',
        'brutal-sm-hover': '2px 2px 0px #000000',
        'brutal-lg': '8px 8px 0px #000000',
        'brutal-lg-hover': '12px 12px 0px #000000',
        'brutal-xl': '16px 16px 0px #000000',
        // Dark Mode Variant Shadows
        'dark-brutal': '6px 6px 0px #FFFFFF',
        'dark-brutal-hover': '4px 4px 0px #FFFFFF',
        'dark-brutal-sm': '4px 4px 0px #FFFFFF',
        'dark-brutal-sm-hover': '2px 2px 0px #FFFFFF',
        'dark-brutal-lg': '8px 8px 0px #FFFFFF',
        'dark-brutal-lg-hover': '12px 12px 0px #FFFFFF',
        'dark-brutal-xl': '16px 16px 0px #FFFFFF',
      },
      borderWidth: {
        'brutal': '3px',
      }
    },
  },
  plugins: [],
}
