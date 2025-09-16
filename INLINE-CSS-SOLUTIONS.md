# Using Custom Media Queries with Inline CSS and @scope

You're correct that PostCSS plugins don't parse inline CSS written as template literals in JavaScript/TypeScript files. Here are four practical solutions to use your custom media variables (`--1`, `--2`, `--3`) with inline CSS:

## Solution 1: JavaScript Media Query Utilities (Recommended)

**File: `src/utils/mediaQueries.ts`**

This approach provides the most flexibility and keeps your media queries centralized.

```typescript
import { media } from "~/utils/mediaQueries";

const css = {
  page: /*css*/ `
    @scope {
      .subgrid {
        .flex {
          --gap: 0.5rlh;
          
          ${media["--1"]} {
            --gap: 1rlh;
          }
          
          ${media["--2"]} {
            --gap: 1.5rlh;
          }
        }
      }
    }
  `,
};
```

**Pros:**

- ✅ Works immediately with your existing setup
- ✅ Type-safe with TypeScript
- ✅ Can be used in JavaScript logic too
- ✅ Centralized media query definitions

**Cons:**

- ❌ Template literal interpolation syntax
- ❌ No PostCSS processing of other features

## Solution 2: CSS Modules with @scope

**File: `src/routes/index.module.css`**

Move your scoped styles to a CSS module where PostCSS can process them.

```css
@scope {
  .subgrid {
    display: grid;
    grid-template-columns: subgrid;

    .flex {
      --gap: 0.5rlh;

      /* PostCSS processes these custom media queries */
      @media (--1) {
        --gap: 1rlh;
      }

      @media (--2) {
        --gap: 1.5rlh;
      }
    }
  }
}
```

Then import and use:

```typescript
import styles from "./index.module.css";

function Component() {
  return (
    <main>
      <style>{styles}</style>
      <div className={styles.subgrid}>
        {/* content */}
      </div>
    </main>
  );
}
```

**Pros:**

- ✅ Full PostCSS processing
- ✅ CSS Modules scoping
- ✅ Native custom media query syntax
- ✅ Better performance (CSS is processed at build time)

**Cons:**

- ❌ Requires separate CSS file
- ❌ Less dynamic than inline styles

## Solution 3: CSS Custom Properties

**Added to `src/styles/global.css`:**

```css
:root {
  --media-1: (min-width: 38em);
  --media-2: (min-width: 68em);
  --media-3: (min-width: 90em);
}
```

While you can't use these directly in `@media` rules, you can reference the values in your JavaScript utilities or documentation.

## Solution 4: Vite Plugin for Inline CSS Processing

**File: `src/utils/vite-inline-css-plugin.ts`**

A custom Vite plugin that transforms custom media queries in template literals.

```typescript
// In your inline CSS (before transformation)
const css = {
  page: /*css*/ `
    @scope {
      .flex {
        @media (--1) {
          --gap: 1rlh;
        }
      }
    }
  `,
};

// After plugin transformation
const css = {
  page: /*css*/ `
    @scope {
      .flex {
        @media (min-width: 38em) {
          --gap: 1rlh;
        }
      }
    }
  `,
};
```

To use this plugin, update your `vite.config.ts`:

```typescript
import { simpleInlineCssPlugin } from "./src/utils/vite-inline-css-plugin";

export default defineConfig({
  plugins: [
    simpleInlineCssPlugin(), // Add before other plugins
    // ... other plugins
  ],
  // ... rest of config
});
```

**Pros:**

- ✅ Native custom media syntax in inline CSS
- ✅ Processed at build time
- ✅ Works with your existing @scope setup

**Cons:**

- ❌ Requires custom build tooling
- ❌ More complex setup
- ❌ Debugging can be harder

## Recommendation

For your current setup, I recommend **Solution 1 (JavaScript Media Query Utilities)** because:

1. It works immediately without changing your build process
2. Provides type safety and IntelliSense
3. Can be used both in CSS and JavaScript logic
4. Maintains a single source of truth for breakpoints
5. Easy to maintain and debug

The CSS Modules approach (Solution 2) is also excellent if you're open to moving styles to separate files, as it gives you full PostCSS processing power.

## Usage Examples

All solutions are demonstrated in the following files:

- `src/routes/index.tsx` - Original with Solution 1
- `src/routes/index-alternative.tsx` - CSS Modules approach
- `src/routes/index-with-plugin.tsx` - Vite plugin approach

Choose the approach that best fits your project's architecture and requirements!

