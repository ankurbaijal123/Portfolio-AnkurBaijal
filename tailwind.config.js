export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",
        secondary: "#64ffda",
        accent: "#FF6B6B",
        textPrimary: {
          light: "#2D3748",
          dark: "#ccd6f6"
        },
        textSecondary: {
          light: "#4A5568",
          dark: "#8892b0"
        }
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: []
}