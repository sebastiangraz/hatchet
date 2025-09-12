import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import postcssGlobalData from "@csstools/postcss-global-data";
import postcssPresetEnv from "postcss-preset-env";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart({
      customViteReactPlugin: true,
    }),
    viteReact(),
  ],
  css: {
    postcss: {
      plugins: [
        postcssGlobalData({
          files: ["./src/styles/global.css", "./src/styles/utils.css"],
        }),
        postcssPresetEnv({
          autoprefixer: {
            flexbox: "no-2009",
          },
          stage: 2,
          features: {
            "custom-media-queries": true,
            "custom-properties": false,
          },
        }),
      ],
    },
  },
});
