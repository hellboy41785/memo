/** @type {import('tailwindcss').Config} */

// const {fontFamily} = require("tailwind/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      incon:["var(--font-inconsolata)"],
      sans:["var(--font-indie)","sans"]
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "halloween",
  },
};
