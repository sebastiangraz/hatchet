import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import postcssCustomMedia from "postcss-custom-media";
import postcssGlobalData from "@csstools/postcss-global-data";
import postcssPresetEnv from "postcss-preset-env";
import viteReact from "@vitejs/plugin-react";

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        postcssGlobalData({
          files: ["./src/styles/global.css", "./src/styles/utils.css"],
        }),
        postcssCustomMedia(),
        postcssPresetEnv({
          autoprefixer: {
            flexbox: "no-2009",
          },
          stage: 1,
          features: {
            "custom-media-queries": true,
          },
        }),
      ],
    },
  },
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart(),
    viteReact(),
  ],
});
