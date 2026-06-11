# base.css: Body element uses var() without fallback values

**Issue:** #5950
**File:** `core/base.css`

## Problem

Lines 24-28 use `var(--ease-font-sans)`, `var(--ease-text-base)`, `var(--ease-leading-normal)`, `var(--ease-color-text)`, and `var(--ease-color-bg)` without fallback values. Without the base layer, the body gets invisible text.

## Expected

```css
body {
  font-family: var(--ease-font-sans, 'Inter', system-ui, sans-serif);
  font-size: var(--ease-text-base, 1rem);
  line-height: var(--ease-leading-normal, 1.6);
  color: var(--ease-color-text, #1e293b);
  background-color: var(--ease-color-bg, #f8fafc);
}
```

## Demo

Open `demo.html` without the variables layer to see the body render with `initial` values.
