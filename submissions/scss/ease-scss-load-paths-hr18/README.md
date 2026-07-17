# SCSS `@use 'easemotion-css/scss'` Path Failures in Vite

A setup-focused SCSS submission documenting why `@use 'easemotion-css/scss'` fails in some Vite/Next.js projects, and how to fix it with reliable load-path patterns — including a live interactive demo.

> Submission track: `submissions/scss/ease-scss-load-paths-hr18/`  
> Contributor suffix: `hr18`  
> Resolves: Issue #47644

---

## What does this do?

This guide closes a common setup gap: SCSS path resolution failures when importing the official EaseMotion SCSS layer.

It provides:

- failure pattern explanations (`includePaths`, alias confusion, workspace paths)
- copy-ready Vite and Next.js snippets
- mini troubleshooting recipes (`error -> cause -> fix`)
- an interactive `demo.html` that shows the error/fix side by side, lets you copy either config snippet, replays the EaseMotion animation utilities the fix unlocks, and includes a live setup-validation checklist

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

---

## Why path failures happen

1. **Missing package install** — `easemotion-css` is not in `node_modules`.
2. **Wrong resolver context** — Sass runs from a different working directory (monorepo/workspace).
3. **Custom `includePaths` hides defaults** — Loader config points only to `src/styles`, not `node_modules`.
4. **Alias mismatch** — Trying `@use '@/scss/easemotion-css'` without a valid alias mapping.
5. **Mixing `@import` and `@use` incorrectly** — Legacy import patterns can produce duplicate-load or config errors.

---

## Working Vite snippet

```scss
/* src/styles/main.scss */
@use 'easemotion-css/scss' as ease;

.hero {
  @include ease.fade-in();
}
```

```js
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ['node_modules'],
      },
    },
  },
});
```

---

## Working Next.js snippet

```scss
/* app/globals.scss */
@use 'easemotion-css/scss' as ease;

.card {
  @include ease.slide-up();
}
```

```js
// next.config.js
const nextConfig = {
  sassOptions: {
    includePaths: ['./node_modules'],
  },
};

module.exports = nextConfig;
```

---

## Mini recipes (`error -> cause -> fix`)

### Recipe 1
- **Error:** `Can't find stylesheet to import` on `@use 'easemotion-css/scss'`
- **Cause:** Package missing
- **Fix:** `npm install easemotion-css`

### Recipe 2
- **Error:** Works locally, fails in CI
- **Cause:** CI runs from a different working directory in monorepo
- **Fix:** Ensure install in the app package and set consistent workspace root for Sass build

### Recipe 3
- **Error:** Sass resolves local files but not package paths
- **Cause:** Narrow `includePaths` excludes `node_modules`
- **Fix:** Add `node_modules` to the load path (see Vite snippet)

### Recipe 4
- **Error:** `Undefined mixin` after import succeeds
- **Cause:** Imported without the `as` namespace
- **Fix:** Use the namespaced call, e.g. `@include ease.fade-in();`

---

## Try it live — `demo.html`

Open `demo.html` directly in a browser (no build step). It walks through the same story as this README, interactively: a build-log transcript showing the failing `@use` next to the passing one, tabs to copy the Vite/Next.js snippets, live replays of `.ease-fade-in`, `.ease-slide-up`, and `.ease-scale-in`, and an interactive validation checklist with a running counter.

---

## Validation checklist

- [ ] `easemotion-css` is listed under `dependencies` in `package.json`
- [ ] Sass load path includes `node_modules`
- [ ] `@use` statement matches the package's documented export path exactly
- [ ] Lockfile is committed so CI installs match local installs
- [ ] Mixins/functions are called with the namespace (`ease.mixin-name()`), not bare

---

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Interactive, self-contained walkthrough of the error, fix, and resulting animations |
| `style.css` | Styling and the demoed `.ease-fade-in` / `.ease-slide-up` / `.ease-scale-in` utility classes |
| `README.md` | Path-failure troubleshooting guide |

---

## Note on this submission

Issue #47644 already has scaffold content under `submissions/scss/ease-scss-load-paths-sp/` (a partial README and an `_ease-scss-load-paths-sp.scss` helper). This submission is offered as a complementary, self-contained addition under its own folder — it does not modify or replace any existing files, and adds the interactive `demo.html` walkthrough that was not part of the original scaffold.

---

## Compliance notes

- Only new files inside `submissions/scss/ease-scss-load-paths-hr18/`
- No edits to `core/`, `components/`, workflows, root configs, or any other contributor's files
- Focused on setup/docs gap (not a mixin cookbook replacement)
