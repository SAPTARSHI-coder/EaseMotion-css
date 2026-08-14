# CSS Variables Guide

Fixes #62617 — demonstrates the correct pattern for using EaseMotion CSS design tokens instead of hardcoded color values in submission files.

## Problem

Multiple SCSS submission files use hardcoded color values (e.g. `color: #fff;`, `background: #111827;`) instead of the project's CSS variables defined in `core/variables.css`. This breaks theme flexibility (no dark mode support) and creates a maintenance burden.

## Solution

This submission shows the recommended pattern:

```css
/* Bad — hardcoded */
color: #fff;

/* Good — CSS variable with fallback */
color: var(--ease-color-surface, #ffffff);
```

Every color value should reference the matching `--ease-color-*` token from `core/variables.css`, with the original hex value kept as the fallback for browsers/tools that don't resolve the variable.

## Files

- `demo.html` — live example using the card, button, and badge patterns
- `style.css` — all styles use `var(--ease-color-*, fallback)` instead of raw hex values

## How to view

Open `demo.html` in a browser. Toggle `prefers-color-scheme: dark` in devtools to see the tokens respond automatically via `core/variables.css`.
