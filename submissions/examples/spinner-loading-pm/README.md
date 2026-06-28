# Animated Spinner/Loader Component with Multiple Variants

A ready-to-use loading indicator component with four animated variants for buttons, forms, and async content — with sizes and color customization.

## Features

- **`.ease-spinner`** — rotating border-based circle (default)
- **`.ease-spinner-dots`** — three bouncing dots with staggered animation
- **`.ease-spinner-pulse`** — pulsing circle (scale + opacity)
- **`.ease-spinner-ring`** — rotating ring with transparent segments
- **Sizes** — sm, base (default), lg via `--ease-spinner-size` custom property
- **Color** — customizable via `--ease-spinner-color` (defaults to `--ease-primary`)
- **`prefers-reduced-motion`** — all animations are disabled for accessibility
- **CSS-only** — no JavaScript required

## Files

- `style.css` — all spinner variants and demo layout
- `demo.html` — working demo showing all 4 variants in 3 sizes and custom colors
- `README.md` — this file

## Usage

```html
<!-- Border spinner -->
<div class="ease-spinner"></div>
<div class="ease-spinner ease-spinner-sm"></div>
<div class="ease-spinner ease-spinner-lg"></div>

<!-- Custom color -->
<div class="ease-spinner" style="--ease-spinner-color: #22c55e;"></div>

<!-- Bouncing dots -->
<div class="ease-spinner-dots">
  <span></span><span></span><span></span>
</div>

<!-- Pulse -->
<div class="ease-spinner-pulse"></div>

<!-- Rotating ring -->
<div class="ease-spinner-ring"></div>
```
