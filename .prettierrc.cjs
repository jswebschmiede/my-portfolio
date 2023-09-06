/** @type {import("prettier").Config} */
module.exports = {
  plugins: ["prettier-plugin-astro"],
  htmlWhitespaceSensitivity: "strict",
  printWidth: 100, // Setzen Sie dies auf einen geeigneten Wert
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
