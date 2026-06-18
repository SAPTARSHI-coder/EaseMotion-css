# Replace Hardcoded outline-offset with CSS Variable

## What does this do?
Replaces hardcoded `outline-offset` values in `components/buttons.css` with CSS variable `--ease-outline-offset` so the outline offset updates globally.

## How is it used?
```css
:root {
  --ease-outline-offset: 2px;
}
```
Override per scope:
```css
.dark-mode {
  --ease-outline-offset: 4px;
}
```

## Why is it useful?
Hardcoded values break design system consistency. Using a CSS variable allows global updates, theme overrides, and accessibility adjustments without editing component files. Falls back to `2px` when undefined.

Fixes #12453
