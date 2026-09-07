import { defineConfig } from "vitest/config";

export default defineConfig({
  build: {
    minify: "terser",
    terserOptions: {
      compress: { passes: 2, unsafe: true },
      mangle: { toplevel: true },
    },
    lib: {
      entry: "./src/pakertaja.mjs",
      formats: ["es"],
      fileName: "pakertaja",
    },
    rollupOptions: {
      output: {
        entryFileNames: "pakertaja.mjs",
        comments: false,
      },
    },
  },
});
