/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#000",
        "black-2": "#404a3d",
        "black-3": "#6e6f70",
        "black-4": "#bbbdbf",
        "black-5": "#E2E8F0",
        "background-color": "#F1F5F9",

        primary: "#eddd5e",
        secondary: "#5B8C51",
        "primary-dark": "#063994",
        "primary-light": "#668bcc",
        "primary-lighter": "#668bcc",

        green: "#089226",

        success: "#219653",
        danger: "#D34053",
        "danger-dark": "#b32033",
        "danger-light": "#ffd5db",
        warning: "#FFA70B",
      },
    },
    transitionProperty: {
      width: "width",
      stroke: "stroke",
      "three-all": "all 0.3s ease",
      "six-all": "all 0.6s ease",
    },
  },
  plugins: [],
};
