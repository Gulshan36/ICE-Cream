module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        blue: "#0473cb",
        lime: "#deecaa",
        green1: "#5896c7",
        green2: "#5a8c39"
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"]
      }
    }
  },
  plugins: []
};
