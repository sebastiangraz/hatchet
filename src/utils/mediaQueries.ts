/**
 * Media query utilities that mirror the custom media queries from global.css
 * These can be used in inline CSS and JavaScript
 */

// Mirror the custom media queries from global.css
export const mediaQueries = {
  "--1": "(min-width: 38em)",
  "--2": "(min-width: 68em)",
  "--3": "(min-width: 90em)",
} as const;

/**
 * Generate CSS @media rules for inline styles
 */
export const media = {
  "--1": `@media ${mediaQueries["--1"]}`,
  "--2": `@media ${mediaQueries["--2"]}`,
  "--3": `@media ${mediaQueries["--3"]}`,
} as const;

/**
 * Check if a media query matches (for JavaScript logic)
 */
export const useMediaQuery = (query: keyof typeof mediaQueries): boolean => {
  if (typeof window === "undefined") return false;

  return window.matchMedia(mediaQueries[query]).matches;
};

/**
 * Helper to get current breakpoint
 */
export const getCurrentBreakpoint = (): string => {
  if (typeof window === "undefined") return "base";

  if (window.matchMedia(mediaQueries["--3"]).matches) return "--3";
  if (window.matchMedia(mediaQueries["--2"]).matches) return "--2";
  if (window.matchMedia(mediaQueries["--1"]).matches) return "--1";

  return "base";
};

/**
 * Type-safe media query keys
 */
export type MediaQueryKey = keyof typeof mediaQueries;
