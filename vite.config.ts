import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import postcssGlobalData from "@csstools/postcss-global-data";
import postcssPresetEnv from "postcss-preset-env";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import fs from "fs";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkgfm from "remark-gfm";
import { transformerNotationHighlight } from "@shikijs/transformers";
import rehypePrettyCode, { Options } from "rehype-pretty-code";
import netlify from "@netlify/vite-plugin-tanstack-start";
import { nitro } from "nitro/vite";
const options = {
  theme: JSON.parse(
    fs.readFileSync("./src/styles/hatchetsyntax.json", "utf-8")
  ),
  defaultLang: "plaintext",
  keepBackground: false,
  showLineNumbers: true,
  grid: true,
  transformers: [transformerNotationHighlight()],
} as Options;

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkgfm],
      rehypePlugins: [[rehypePrettyCode, options]],
      providerImportSource: "@mdx-js/react",
    }),
    tanstackStart(),
    nitro(),
    react(),
    netlify(),
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
