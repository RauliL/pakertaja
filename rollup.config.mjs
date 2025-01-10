import babel from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/pakertaja.js",
  output: [
    {
      file: "dist/pakertaja.js",
      format: "cjs",
      exports: "default",
    },
    {
      file: "dist/pakertaja.mjs",
      format: "es",
    },
    {
      file: "dist/pakertaja.iife.js",
      format: "iife",
      name: "Pakertaja",
    },
  ],
  plugins: [
    babel({ babelHelpers: "bundled" }),
    /^prod/i.test(process.env.NODE_ENV) ? terser() : null,
  ],
};
