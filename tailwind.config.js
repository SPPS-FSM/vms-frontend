const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      fsmblue: {
        50: "#019EDB",
      },
      fsmblue: {
        500: "#00034F",
      },
    },
    extend: {},
    plugins: [],
  },
});
