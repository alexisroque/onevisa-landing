/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#c1ff00",
          dark: "#a8e600",
          light: "#d1ff33",
        },
        dark: {
          DEFAULT: "#0a0e17",
          lighter: "#111827",
          lightest: "#1e293b",
        },
        gray: {
          DEFAULT: "#64748b",
          light: "#94a3b8",
          dark: "#475569",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "linear-gradient(to bottom, rgba(10, 14, 23, 0.9), rgba(10, 14, 23, 1)), url('/images/hero-bg.jpg')",
        "card-gradient": "linear-gradient(to bottom right, rgba(17, 24, 39, 0.8), rgba(10, 14, 23, 1))",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-in-out forwards',
        'pulse-slow': 'pulse 3s infinite',
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
      },
    },
  },
  plugins: [],
}; 