# Ease Image Comparison Slider

## Description
A reusable before/after image comparison component controlled by a native `<input type="range">` handle, with the reveal effect powered entirely by CSS `clip-path`. Supports drag-to-reveal, an auto-animated demo sweep, vertical orientation, and before/after labels.

## Variants
- **Drag-to-reveal** (default) — user drags the range input to compare
- **`.is-auto-sweep`** — automatically sweeps back and forth to showcase the effect without interaction (pointer-events disabled on the range)
- **`.is-vertical`** — orientation flips to a top/bottom comparison instead of left/right

## How it works
The core interaction requires zero JavaScript for the visual reveal — a transparent `<input type="range">` sits on top of the component, and its `value` is used (via one tiny `input` event listener) to set a `--slider-position` CSS custom property. That single property drives the `clip-path` on the "before" image, the divider line position, and the handle position simultaneously. The script only reads the native range's value; all dragging, keyboard arrow-key support, and touch handling come free from the browser's native range input.

## Usage
```html
<div class="ease-image-comparison-slider">
  <img class="ease-after" src="after.jpg" alt="After" />
  <img class="ease-before" src="before.jpg" alt="Before" />
  <input type="range" class="slider-range" min="0" max="100" value="50" aria-label="Comparison position" />
  <div class="slider-divider"></div>
  <div class="slider-handle">
    <svg viewBox="0 0 24 24"><polyline points="9 6 15 12 9 18"></polyline></svg>
  </div>
  <span class="slider-label label-before">Before</span>
  <span class="slider-label label-after">After</span>
</div>
<script src="comparison-slider.js"></script>
```
For vertical orientation, add `is-vertical` to the outer container class. For an automatic showcase sweep with no user interaction required, add `is-auto-sweep`.

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--slider-handle-size` | `40px` | Diameter of the drag handle |
| `--slider-handle-color` | `#ffffff` | Handle background color |
| `--slider-handle-icon-color` | `#1e293b` | Handle icon color |
| `--slider-divider-width` | `3px` | Divider line thickness |
| `--slider-divider-color` | `#ffffff` | Divider line color |
| `--slider-radius` | `16px` | Outer container corner rounding |
| `--slider-position` | `50%` | Initial/current comparison position (kept in sync with the range input by the script) |

## Accessibility
Built on a native `<input type="range">`, so keyboard users get full arrow-key control and screen readers announce it as a standard slider via `aria-label`. Respects `prefers-reduced-motion` by disabling the auto-sweep animation.

## Files
- `demo.html` — live examples of all three variants (drag, auto-sweep, vertical)
- `style.css` — component styles, clip-path logic, and auto-sweep animation
- `comparison-slider.js` — minimal script binding the range value to `--slider-position`
- `README.md` — this file