# `ease-scroll-progress`

A fixed-position reading progress bar at the top of the viewport that fills from 0% to 100% as the user scrolls down the page.

## Usage

```html
<div class="ease-scroll-progress" id="progress-bar"></div>

<script src="path/to/script.js"></script>
<script>initScrollProgress('#progress-bar');</script>
```

The bar automatically animates width via `requestAnimationFrame` for smooth performance.

## Size Variants

- `.ease-scroll-progress` (default, 3px)
- `.ease-scroll-progress--thin` (2px)
- `.ease-scroll-progress--thick` (4px)

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--ease-color-primary` | `#6366f1` | Start of gradient |
| `--ease-z-toast` | `1000` | Z-index |

## Accessibility

Respects `prefers-reduced-motion: reduce` — disables transition but width still updates.

## JavaScript API

```js
// Auto-initializes on DOMContentLoaded for .ease-scroll-progress
// Or manually:
initScrollProgress('.ease-scroll-progress');
```
