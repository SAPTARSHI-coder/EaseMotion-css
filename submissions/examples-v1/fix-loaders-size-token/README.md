# Fix: Expose --ease-loader-size Custom Property in loaders.css

## Problem

`.ease-loader` hardcoded `width` and `height` at `32px` with no CSS custom property:

```css
.ease-loader {
  width: 32px;   /* hardcoded */
  height: 32px;  /* hardcoded */
}
```

Unlike other components (navbar exposes `--ease-navbar-glass-blur`, sidebar exposes `--ease-sidebar-width`), loaders had no exposed size token. Users who needed a different size had to override `.ease-loader` directly with higher specificity.

## Solution

Replace hardcoded values with `var(--ease-loader-size, 32px)`:

```css
.ease-loader {
  width: var(--ease-loader-size, 32px);
  height: var(--ease-loader-size, 32px);
}
```

## Usage

**Per-instance sizing:**
```html
<div class="ease-loader ease-loader-spin" style="--ease-loader-size: 16px;"></div>
<div class="ease-loader ease-loader-spin" style="--ease-loader-size: 64px;"></div>
```

**Per-component sizing:**
```css
.my-button .ease-loader {
  --ease-loader-size: 16px;
}
```

**Global override:**
```css
:root {
  --ease-loader-size: 48px;
}
```

## Why it fits EaseMotion CSS

EaseMotion CSS exposes key dimensions as CSS custom properties so users can customise components without specificity battles. Adding `--ease-loader-size` makes loaders consistent with the rest of the framework's token-driven approach.

Fixes #10247
