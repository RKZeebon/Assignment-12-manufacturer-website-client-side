module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#35b0ab",
          secondary: "#c5efa3",
          accent: "#f9ffb7",
          neutral: "#000000",
          "base-100": "#faf9f6",
        },
      },

    ],
  },
  plugins: [require("daisyui")],
}
