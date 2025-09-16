import type { Plugin } from "vite";
import postcss from "postcss";
import postcssPresetEnv from "postcss-preset-env";

/**
 * Vite plugin to process CSS within template literals
 * This allows PostCSS to process inline CSS including custom media queries
 */
export function inlineCssPlugin(): Plugin {
  const cssProcessor = postcss([
    postcssPresetEnv({
      stage: 2,
      features: {
        "custom-media-queries": true,
        "custom-properties": false,
      },
    }),
  ]);

  return {
    name: "inline-css",
    enforce: "pre",
    async transform(code, id) {
      // Only process TypeScript/JavaScript files
      if (!id.match(/\.(ts|tsx|js|jsx)$/)) return null;

      // Look for CSS template literals with /*css*/ comment
      const cssRegex = /\/\*css\*\/\s*`([^`]+)`/g;
      let match;
      let transformedCode = code;

      while ((match = cssRegex.exec(code)) !== null) {
        const [fullMatch, cssContent] = match;

        try {
          // Process the CSS content with PostCSS
          const result = await cssProcessor.process(cssContent, {
            from: undefined,
          });

          // Replace the original CSS with the processed version
          transformedCode = transformedCode.replace(
            fullMatch,
            `/*css*/ \`${result.css}\``
          );
        } catch (error) {
          // Log error but don't break the build
          console.warn(`Failed to process inline CSS in ${id}:`, error);
        }
      }

      return transformedCode !== code ? transformedCode : null;
    },
  };
}

/**
 * Alternative simpler approach - just replace custom media queries manually
 */
export function simpleInlineCssPlugin(): Plugin {
  const customMedia = {
    "--1": "(min-width: 38em)",
    "--2": "(min-width: 68em)",
    "--3": "(min-width: 90em)",
  };

  return {
    name: "simple-inline-css",
    enforce: "pre",
    transform(code, id) {
      if (!id.match(/\.(ts|tsx|js|jsx)$/)) return null;

      // Check if this file contains any @media (--X) patterns
      const hasCustomMedia = /@media\s*\(\s*--[123]\s*\)/.test(code);
      if (!hasCustomMedia) return null;

      console.log(`📁 Processing file: ${id}`);
      console.log(`📝 Code contains custom media queries`);

      let transformedCode = code;
      let hasChanges = false;

      // Replace @media (--X) with actual media queries
      Object.entries(customMedia).forEach(([key, value]) => {
        // More flexible regex that handles whitespace variations
        const regex = new RegExp(
          `@media\\s*\\(\\s*${key.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")}\\s*\\)`,
          "g"
        );

        const matches = code.match(regex);
        if (matches) {
          console.log(
            `🔧 Found ${matches.length} instances of @media (${key})`
          );
          console.log(`🔧 Transforming @media (${key}) → @media ${value}`);
          transformedCode = transformedCode.replace(regex, `@media ${value}`);
          hasChanges = true;
        }
      });

      if (hasChanges) {
        console.log(`✅ Transformation complete for ${id}`);
        // Log a snippet of the transformation
        const snippet = transformedCode.substring(
          transformedCode.indexOf("@media (min-width"),
          transformedCode.indexOf("@media (min-width") + 50
        );
        console.log(`📋 Sample output: ${snippet}...`);
      }

      return hasChanges ? transformedCode : null;
    },
  };
}
