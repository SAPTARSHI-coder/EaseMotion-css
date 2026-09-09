# Radial Circle-Wipe Card Reveal

Closes #6853

## Overview

A hover overlay effect for card components. The card holds two
overlapping layers:

- **`.em-card-state-base`** — the default visible layer.
- **`.em-card-state-overlay`** — a hidden reveal layer, clipped to a
  circle at its center using `clip-path: circle(0% at 50% 50%)`.

On hover, the overlay's `clip-path` radius expands to `75%`, creating a
"flashlight reveal" wipe that swaps the card's background, colors, and
content. Inner elements (`.analytics-metrics`, `.cta-button`) fade and
slide in with staggered transition delays for a layered reveal.

## Files

- `index.html` — markup with both card states.
- `style.css` — all styling and the circle-wipe transition.
- `script.js` — optional enhancement that lets the reveal origin follow
  the cursor position (flashlight effect). The base effect works with
  pure CSS even without this script.

## Usage

```html
<div class="em-circle-wipe-card">
  <div class="em-card-state-base">
    <!-- default content -->
  </div>
  <div class="em-card-state-overlay">
    <!-- revealed content -->
  </div>
</div>
```

Include `style.css` (required) and `script.js` (optional, for
cursor-following reveal origin).

## Customization

- Change the reveal origin by editing the `clip-path` coordinates
  (e.g. `circle(75% at 0% 0%)` for a top-left origin).
- Adjust `transition-delay` values on `.analytics-metrics` and
  `.cta-button` to change the stagger timing.
- Swap the overlay's `background` gradient to match your theme.

## Performance

Uses only `clip-path` and `opacity`/`transform` transitions — all
GPU-accelerated, avoiding layout recalculation for smooth 60fps
animation.
