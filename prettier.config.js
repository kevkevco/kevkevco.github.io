/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'es5',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  htmlWhitespaceSensitivity: 'css',
  bracketSpacing: true,
  plugins: ['prettier-plugin-tailwindcss']
}

module.exports = config;