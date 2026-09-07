import { defineConfig } from "vitest/config";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/pakertaja.mjs",
      formats: ["es"],
    },
  },
});
