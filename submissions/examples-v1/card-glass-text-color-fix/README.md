# Fix: ease-card-glass Hardcoded White Text Fails on Light Backgrounds

**Issue:** [#4965](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/4965)

## Problem

`.ease-card-glass` had `color: #ffffff` hardcoded. On light backgrounds,
white text on a semi-transparent white surface becomes completely invisible —
a WCAG AA contrast failure.

Additionally, `--ease-color-text-dark` referenced in issue #3659 was never
defined in `variables.css`.

## Fix

Replaced hardcoded color with a CSS variable and defined the missing token:

```css
:root {
  --ease-color-text-dark: #1a1a2e;
  --ease-color-text-light: #ffffff;
  --ease-card-glass-color: var(--ease-color-text-light, #ffffff);
}

/* ✅ Fixed */
.ease-card-glass {
  color: var(--ease-card-glass-color);
}

/* Light background variant */
.ease-card-glass.ease-glass-dark-text {
  --ease-card-glass-color: var(--ease-color-text-dark, #1a1a2e);
}
```

## Usage

```html
<!-- On dark background (default) -->
<div class="ease-card ease-card-glass">...</div>

<!-- On light background — add ease-glass-dark-text -->
<div class="ease-card ease-card-glass ease-glass-dark-text">...</div>

<!-- Custom color per card -->
<div
  class="ease-card ease-card-glass"
  style="--ease-card-glass-color: #1e293b;"
>
  ...
</div>
```

## How to Verify

1. Open `demo.html`
2. Look at the **light background** section
3. Buggy card: white text invisible on light glass
4. Fixed card: dark text clearly readable

## Files

- `style.css` — the fix + missing token definition
- `demo.html` — dark and light background comparison
