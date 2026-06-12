# Explicit CSS Layer Cascade Order Declaration

## What does this do?

Introduces a global `@layer` order declaration at the beginning of the EaseMotion CSS bundle to establish a predictable, rock-solid cascade hierarchy between framework layers.

```css
@layer easemotion-base, easemotion-components, easemotion-utilities;
```

By explicitly declaring this hierarchy, styles remain completely consistent regardless of how files are bundled, compiled, imported, or concatenated. This improves maintainability and prevents unexpected overrides caused by physical source-order differences.

---

## Why is this useful for EaseMotion CSS?

EaseMotion CSS emphasizes composability and developer-friendly styling. In modern CSS layouts, separating base resets, modular component styles, and utility classes is standard practice.

However, standard CSS cascade rules dictate that if a utility class is defined _physically before_ a component style in a stylesheet, the component's styles will win due to source order—forcing developers to use fragile `!important` overrides.

### Cascade Layers solve this:

1. **Source-Order Independence** — Decouples style specificity from file ordering.
2. **Predictable Resets & Utilities** — Ensures utility classes (`.ease-mt-4`) always override component properties (`.ease-btn`) without using `!important`.
3. **Bundler Safety** — Build tools (Webpack, Vite, Esbuild, Sass preprocessors) can sometimes alter import concatenation order. Cascade layers eliminate this risk entirely.
4. **Developer Extension** — Custom developer styles can easily hook before, between, or after EaseMotion layers.

---

## How is it used?

### 1. Framework Definition (at bundle root)

```css
/* Declared once at the very top of variables.css or index.css */
@layer easemotion-base, easemotion-components, easemotion-utilities;
```

### 2. Wrapping Rules inside Scoped Layers

```css
/* Base resets */
@layer easemotion-base {
  body {
    margin: 0;
  }
}

/* Component definitions */
@layer easemotion-components {
  .ease-btn {
    padding: 0.75rem 1rem;
    margin-top: 0.5rem;
  }
}

/* Utility overrides */
@layer easemotion-utilities {
  .ease-mt-4 {
    margin-top: 1rem;
  }
}
```

Even though `.ease-btn` defines a `margin-top: 0.5rem`, applying both `.ease-btn` and `.ease-mt-4` on the same HTML element will result in a predictable `margin-top: 1rem` because the `easemotion-utilities` layer has higher cascade priority than `easemotion-components`.

---

_Submitted by: dv_
