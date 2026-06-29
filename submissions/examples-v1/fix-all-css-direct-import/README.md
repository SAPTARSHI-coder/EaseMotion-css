# Fix: Import core/variables.css Directly in easemotion/all.css

## Problem

`easemotion/all.css` imports `./variables.css` which is a thin wrapper that only re-exports `core/variables.css` with no modifications. This adds an unnecessary file resolution hop with no benefit.

Meanwhile `easemotion.css` (the main entry point) already imports `core/variables.css` directly — `all.css` should be consistent.

## Solution

Replace `@import "./variables.css"` with `@import "../core/variables.css"` in `easemotion/all.css`:

```css
/* Before */
@import "./variables.css";

/* After — direct import, consistent with easemotion.css */
@import "../core/variables.css";
```

## Why it fits EaseMotion CSS

Consistency and simplicity. Removing the indirection makes the import chain easier to understand and maintain, and keeps `all.css` consistent with the main `easemotion.css` entry point.

## Impact

- No functional CSS changes — all design tokens load identically
- Eliminates one unnecessary file resolution hop
- Makes `all.css` consistent with `easemotion.css`

Fixes #10248
