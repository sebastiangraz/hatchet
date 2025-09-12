export default {
  "@csstools/postcss-global-data": {
    files: ["./src/styles/global.css", "./src/styles/utils.css"],
  },
  // "postcss-custom-media": {},
  "postcss-preset-env": {
    autoprefixer: {
      flexbox: "no-2009",
    },
    stage: 1,
    features: {
      "custom-media-queries": true,
    },
  },
};
