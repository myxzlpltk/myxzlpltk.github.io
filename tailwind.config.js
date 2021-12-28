module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
    },
    fontFamily: {
      mono: [
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
      spaceMono: ["Space Mono", "monospace"],
      sourceCodePro: ["Source Code Pro", "times new roman"],
    },
    extend: {},
  },
  plugins: [],
};
