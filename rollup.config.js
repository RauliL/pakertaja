import babel from '@rollup/plugin-babel';

export default {
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
