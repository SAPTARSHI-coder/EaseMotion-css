# Fix: Use Color Tokens for Scroll Progress Shadow Instead of Hardcoded rgba

## Problem

`--ease-scroll-progress-shadow` hardcoded rgba color values that duplicate the same colors already available via `--ease-color-primary`, `--ease-color-success` etc.:

```css
--ease-scroll-progress-shadow: 0 2px 10px rgba(108, 99, 255, 0.45);
```

If a user customises `--ease-color-primary`, the scroll progress shadow does not update to match — it always uses the hardcoded purple regardless of theme.

## Solution

Derive the shadow color from semantic color tokens using `color-mix()`:

```css
.ease-scroll-progress {
  --ease-scroll-progress-shadow: 0 2px 10px
    color-mix(in srgb, var(--ease-color-primary, #6c63ff) 45%, transparent);
}
```

A `@supports` fallback preserves the original hardcoded values for browsers without `color-mix()` support.

## Usage

No class changes needed. The shadow now follows `--ease-color-primary` automatically:

```css
/* Shadow updates automatically when primary color changes */
:root {
  --ease-color-primary: #ff6b6b;
}
```

## Why it fits EaseMotion CSS

EaseMotion CSS uses semantic color tokens so theme changes propagate automatically. Hardcoded rgba values that duplicate token colors break this propagation and require manual updates in multiple places.

Fixes #10424
