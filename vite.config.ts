import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
//import dts from "vite-plugin-dts";
import { resolve } from "path";
import pkg from "./package.json";

export default defineConfig({
  plugins: [react({ jsxRuntime: "classic" })],
  build: {
    target: "ES2017",
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: (format, name) => `${name}.${format === "umd" ? "cjs" : "mjs"}`,
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
      input: "./src/index.ts",
      output: [
        {
          format: "es",
          preserveModules: true,
          preserveModulesRoot: "src",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
        {
          format: "umd",
          name: "EmentoIconsReact",
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      ],
    },
  },
});
