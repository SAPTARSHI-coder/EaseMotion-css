# Fix: Fragmented `prefers-reduced-motion` Implementation (#1714)

## The Bug

`core/base.css` only disables `scroll-behavior` under `prefers-reduced-motion: reduce`:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

There is no global animation/transition kill-switch. This means every component file has to remember to add its own `@media (prefers-reduced-motion: reduce)` guard individually. An audit of `components/*.css` found 9 files that do this correctly, and 17 that animate or transition something with **zero** reduced-motion handling at all:

`announce-bar.css`, `avatar.css`, `badges.css`, `breadcrumb.css`, `compare-table.css`, `connection-status.css`, `fab.css`, `loaders.css`, `navbar.css`, `pagination.css`, `password-strength.css`, `progress.css`, `read-more.css`, `skeleton.css`, `tabs.css`, `toast.css`, `view-transitions.css`

## Why this is a submissions/ entry, not a core/ edit

Per `CONTRIBUTING.md` and the repo's submission validator, contributors may only modify files inside `submissions/`. This folder demonstrates the bug and the highest-leverage fix in isolation, for a maintainer to apply to `core/base.css`.

## The Fix

Rather than patching all 17 files individually (which would also leave any future component file unprotected by default), add one global catch-all rule to the existing `@media (prefers-reduced-motion: reduce)` block in `core/base.css`:

```css
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This is the same pattern used by most modern CSS resets (e.g. `sanitize.css`, the classic CSS-Tricks reduced-motion snippet): rather than removing the animation/transition declaration entirely, it collapses the duration to effectively zero, so the end state still applies instantly without a visible motion effect. This protects every existing component automatically, and any future component file by default — without requiring every contributor to remember to add their own guard.

## Demo

`demo.html` shows a spinner with no guard today (always animates), plus a simulated toggle showing the same spinner with the global patch's effect applied.

## Files

- `style.css` — the exact CSS snippet to add to `core/base.css`, plus demo-only scoping classes
- `demo.html` — before/after comparison, the full list of 17 affected files, and the patch snippet
- `README.md` — this file

Closes #1714
