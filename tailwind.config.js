/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-yellow": "#f8c44cff",
        "primary-blue": "#428fff",
        "primary-red": "#ff5145",
        "primary-green": "#3ebd5c",
      },
      animation: {
        "shake-fast": "shake 0.3s cubic-bezier(.36,.07,.19,.97) both",
      },
    },
    keyframes: {
      shake: {
        "0%, 100%": { transform: "translate3d(0px, 0, 0)" },
        "10%, 30%, 50%, 70%, 90%": {
          transform: "translate3d(6px, 0, 0)",
        },
        "20%, 40%, 60%, 80%": {
          transform: "translate3d(-8px, 0, 0)",
        },
      },
    },
  },
  plugins: [],
};
