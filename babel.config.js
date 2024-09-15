module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      '@babel/plugin-syntax-import-assertions',
      {
        disallowImportAttributes: true // Desabilita importAttributes
      }
    ]
  ]
}
