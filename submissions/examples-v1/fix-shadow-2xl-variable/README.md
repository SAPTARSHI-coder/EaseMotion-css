# Fix: Undefined `--ease-shadow-2xl` Variable (#11625)

## The Bug

`components/modals.css` references:

```css
box-shadow: var(--ease-shadow-2xl, 0 25px 50px -12px rgba(0, 0, 0, 0.25));
```

but `--ease-shadow-2xl` is never defined anywhere in `core/variables.css`. The shadow scale only goes up to `--ease-shadow-xl`. As a result, the modal silently always uses the hardcoded fallback value in every theme, and never gets a dark-mode-specific 2xl shadow like every other shadow token does.

## Why this is a submissions/ entry, not a core/ edit

Per `CONTRIBUTING.md` and the repo's submission validator, contributors may only modify files inside `submissions/`. This folder demonstrates the bug and the exact fix in isolation, with the patch documented below for a maintainer to apply to `core/variables.css`.

## The Fix

Add `--ease-shadow-2xl` to all three theme contexts in `core/variables.css`, following the existing `sm`/`md`/`lg`/`xl` pattern:

```css
/* In :root (light theme) */
--ease-shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* In @media (prefers-color-scheme: dark) :root block */
--ease-shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.50);

/* In [data-theme="dark"] block */
--ease-shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.50);
```

The dark value follows the same opacity progression already used for `sm`/`md`/`lg`/`xl` in dark mode.

## Demo

`demo.html` shows a fake modal before and after the patch.

## Files

- `style.css` — contains the exact CSS snippet to add to `core/variables.css`
- `demo.html` — visual before/after comparison plus the patch snippet
- `README.md` — this file

Closes #11625
