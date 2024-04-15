const babel = require('@rollup/plugin-babel');

module.exports = {
  input: 'src/pakertaja.js',
  output: [
    {
      file: 'dist/pakertaja.js',
      format: 'cjs',
      exports: 'default'
    },
    {
      file: 'dist/pakertaja.mjs',
      format: 'es'
    },
    {
      file: 'dist/pakertaja.iife.js',
      format: 'iife',
      name: 'Pakertaja'
    }
  ],
  plugins: [babel({ babelHelpers: 'bundled' })]
};
