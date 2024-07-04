const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      wpiblue: {
        50: "#0E57A6",
        100: "#007AFF",
      },
      wpigreen: {
        50: "#6DBE45",
        100: "#91C539",
        200: "#009418",
      },
    },
    extend: {},
    plugins: [],
  },
});
