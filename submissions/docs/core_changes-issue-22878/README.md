# ease-radar-loader — Radar-Inspired Loader Component

## What does this do?

Adds a radar-inspired loading animation with a rotating sweep over concentric circles, a pulsing center dot, and customizable size/color/speed via CSS custom properties.

## How is it used?

```html
<!-- Default radar loader -->
<div class="ease-radar-loader" aria-label="Loading"></div>

<!-- Custom size and color -->
<div
  class="ease-radar-loader"
  style="--ease-radar-size: 120px; --ease-radar-color: #6c63ff;"
  aria-label="Loading"
></div>

<!-- Fast speed -->
<div
  class="ease-radar-loader"
  style="--ease-radar-speed: 1s;"
  aria-label="Loading"
></div>
```

Open `demo.html` directly in a browser to see all variants in action.

## Why is it useful?

Loading indicators are essential for feedback during asynchronous operations. The radar loader provides a visually distinctive alternative to standard spinners, using pure CSS animations with concentric rings, a rotating sweep gradient, and a pulsing center dot — all customizable through CSS custom properties while respecting `prefers-reduced-motion`.

Fixes #22878
