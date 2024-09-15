/* eslint-disable no-undef */
module.exports = {
  // Lint & Prettify TS and JS files
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.map((file) => `"${file}"`).join(' ')}`,
    `npm run lint --fix . ${filenames.map((file) => `"${file}"`).join(' --file ')}`,
    `npm run test -- --findRelatedTests ${filenames.join(' ')}`
  ]
}
