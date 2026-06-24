# Fix: Expose --ease-btn-spinner-duration Token for Button Loading Spinner

## Problem

`.ease-btn-loading::after` hardcoded the spinner animation duration:

```css
animation: ease-kf-btn-spin 0.7s linear infinite;
```

The `0.7s` value bypasses the `--ease-speed-*` token system and ignores `prefers-reduced-motion` — users who prefer reduced motion still see a spinning animation.

## Solution

Expose `--ease-btn-spinner-duration` with a `0.7s` default and add a `prefers-reduced-motion` override:

```css
.ease-btn-loading {
  --ease-btn-spinner-duration: 0.7s;
}

.ease-btn-loading::after {
  animation: ease-kf-btn-spin var(--ease-btn-spinner-duration, 0.7s) linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .ease-btn-loading::after {
    animation: none;
    border-top-color: currentColor;
    opacity: 0.5;
  }
}
```

## Usage

```html
<!-- Default spinner -->
<button class="ease-btn ease-btn-primary ease-btn-loading">Loading</button>

<!-- Fast spinner -->
<button class="ease-btn ease-btn-primary ease-btn-loading"
        style="--ease-btn-spinner-duration: 0.3s;">Loading</button>
```

```css
/* Global override */
:root {
  --ease-btn-spinner-duration: 1s;
}
```

## Why it fits EaseMotion CSS

EaseMotion CSS exposes animation parameters as CSS custom properties so users can customise behaviour without overriding component selectors. The spinner duration should follow the same token-driven approach as other animated components.

Fixes #10425
