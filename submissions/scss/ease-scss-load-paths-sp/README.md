# SCSS `@use 'easemotion-css/scss'` Path Failures in Vite

A setup-focused SCSS submission documenting why `@use 'easemotion-css/scss'` fails in some Vite/Next.js projects, and how to fix it with reliable load-path patterns.

> Submission track: `submissions/scss/ease-scss-load-paths-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #47644

---

## What does this do?

This guide closes a common setup gap: SCSS path resolution failures when importing the official EaseMotion SCSS layer.

It provides:

- failure pattern explanations (`includePaths`, alias confusion, workspace paths)
- copy-ready Vite and Next.js snippets
- mini troubleshooting recipes (`error -> cause -> fix`)
- a tiny SCSS helper partial for safer fallback imports

---

## Common error symptoms

Typical failures beginners see:

```text
Can't find stylesheet to import.
  @use 'easemotion-css/scss';
```

```text
[sass] Can't find stylesheet to import.
```

```text
This module was already loaded, so it can't be configured using "with".
```

---

## Why path failures happen

1. **Missing package install**
   - `easemotion-css` is not in `node_modules`.

2. **Wrong resolver context**
   - Sass is executed from a different working directory (monorepo/workspace).

3. **Custom `includePaths` hides defaults**
   - Loader config points only to `src/styles`, not `node_modules`.

4. **Alias mismatch**
   - Trying `@use '@/scss/easemotion-css'` without a valid alias mapping.

5. **Mixing `@import` and `@use` incorrectly**
   - Legacy import patterns can produce duplicate-load or config errors.

---

## Working Vite snippet

Use plain package import first:

```scss
/* src/styles/main.scss */
@use 'easemotion-css/scss' as ease;

.hero {
  @include ease.fade-in();
}
```

Optional Vite config (only if your setup has custom load paths):

```js
// vite.config.js
import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [
          path.resolve(process.cwd(), 'node_modules'),
          path.resolve(process.cwd(), 'src/styles')
        ]
      }
    }
  }
});
```

---

## Working Next.js snippet

```scss
/* app/globals.scss (or styles/globals.scss) */
@use 'easemotion-css/scss' as ease;

.card {
  @include ease.slide-up();
}
```

```jsx
// app/layout.js (App Router)
import './globals.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

---

## Mini recipes (`error -> cause -> fix`)

### Recipe 1

- **Error:** `Can't find stylesheet to import` on `@use 'easemotion-css/scss'`
- **Cause:** Package missing
- **Fix:** `npm install easemotion-css` (or `pnpm add easemotion-css`, `yarn add easemotion-css`)

### Recipe 2

- **Error:** Works locally, fails in CI
- **Cause:** CI runs from a different working directory in monorepo
- **Fix:** Ensure install in the app package and set consistent workspace root for Sass build

### Recipe 3

- **Error:** Sass resolves local files but not package paths
- **Cause:** Narrow `includePaths` excludes `node_modules`
- **Fix:** Add absolute `node_modules` path (see Vite snippet)

### Recipe 4

- **Error:** Duplicate load/config warning around `@use ... with (...)`
- **Cause:** Module already loaded elsewhere
- **Fix:** Load once at the top-level stylesheet and avoid multiple configured `@use` calls

---

## Included SCSS helper partial

This submission includes:

- `_ease-scss-load-paths-sp.scss`

It demonstrates:

- preferred package import with `@use 'easemotion-css/scss' as ease;`
- optional local fallback for unusual workspace setups
- tiny diagnostic helpers that keep output readable

---

## Files

| File | Purpose |
|------|---------|
| `_ease-scss-load-paths-sp.scss` | SCSS helper + safe import recipe examples |
| `README.md` | Path-failure troubleshooting guide |

---

## Compliance notes

- Only new files inside `submissions/scss/ease-scss-load-paths-sp/`
- No edits to `core/`, `components/`, workflows, or root configs
- Focused on setup/docs gap (not a mixin cookbook replacement)
