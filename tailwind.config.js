module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
