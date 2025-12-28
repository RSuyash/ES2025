/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f5a6b", // Academic Deep Teal
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#64748b", // Cool Slate
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#15803d", // Environmental Green
          foreground: "#ffffff",
        },
        background: "#f8fafc", // Paper White
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
}
