# Fix: Merge conflict in SCSS variable overrides between _variables.scss and theme files

Resolves #30477

## The Problem

`_variables.scss` declared default design tokens using plain SCSS
variables (e.g. `$ease-color-primary: #7c5cff;`). Theme files
(`_theme-dark.scss`, `_theme-light.scss`) attempted to redeclare the same
variable names to override them for each theme. SCSS variables resolve
at **compile time**, based on `@import` order — they have no runtime
scoping mechanism. Depending on which theme partial happened to be
imported last, the default from `_variables.scss` could silently win
over a theme's intended override, or the wrong theme's values could leak
into a build. There was also no way to switch themes without a full Sass
recompile.

## The Fix

**Design tokens are now generated once as CSS custom properties on
`:root`, and themes are runtime-scoped attribute selectors — not
competing SCSS variables:**

```scss
// _variables.scss — single canonical default per token
$ease-color-bg:      #0f0f17;
$ease-color-primary: #7c5cff;
// ...

:root {
  --ease-color-bg: #{$ease-color-bg};
  --ease-color-primary: #{$ease-color-primary};
  // ...
}
```

```scss
// _theme-light.scss — no longer redeclares $ease-* SCSS variables
[data-theme="light"] {
  --ease-color-bg: #f8f8fb;
  --ease-color-primary: #6d4ee0;
  // ...
}
```

Because `[data-theme="x"]` is a runtime CSS selector rather than a
compile-time variable, there is no import-order ambiguity — only the
theme block matching the current `data-theme` attribute applies, and
switching themes is instant (just toggling the attribute), with **zero
recompilation**. All themes coexist in a single compiled CSS file.
Components reference `var(--ease-color-*)` exclusively, never a raw SCSS
variable, so they automatically pick up whichever theme is active.

## Files

| File | Purpose |
|---|---|
| `demo.html` | Theme switch buttons, a card/alert component preview, and a live custom-property readout |
| `style.css` | The actual fix — documents the SCSS source pattern, and implements `:root` defaults plus `[data-theme]`-scoped overrides for light/dark/high-contrast |
| `script.js` | Switches themes at runtime via a `data-theme` attribute on `<html>` and renders the live computed custom property values |

## How to Test

1. Open `demo.html` in a browser.
2. Click **Light**, **Dark**, and **High Contrast** — confirm the entire
   page (background, card, alert, buttons) updates colors instantly with
   no page reload or recompile.
3. Check the live readout — confirms the actual computed
   `--ease-color-*` values change correctly per theme, proving themes
   resolve at runtime via the cascade, not at SCSS compile time.

## Notes

- This pattern scales to any number of future themes without touching
  `_variables.scss` again — each new theme is simply a new
  `[data-theme="x"]` block redeclaring only the custom properties it
  needs to change, with everything else falling back to the `:root`
  defaults.
- No SCSS variable in the codebase should be treated as "themeable"
  going forward; only CSS custom properties scoped via `[data-theme]`
  should carry theme-specific values.