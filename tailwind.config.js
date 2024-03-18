/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      alexBrush: ["Alex Brush", "cursive"],
      montserrat: ["Montserrat"],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
        "soft-brown": "#69635E",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        fadeDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0%" },
          "100%": { transform: "translateY(0)", opacity: "100%" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        fadeDownDelay: "fadeDown 1s ease-in-out 2.5s forwards",
      },
    },
  },
  plugins: [],
};
