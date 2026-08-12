# ease-card-zoom-xk

Card component with a zoom-in image effect and overlay content reveal on hover.

Resolves: #35126

## Overview

An image card where hovering (or clicking, for touch devices) smoothly
zooms the background image and slides/fades in a gradient overlay containing
a title, description, and call-to-action link.

## Markup

```html
<article class="ease-card-zoom-xk">
  <div class="ecz-media">
    <img src="..." alt="..." />
  </div>
  <div class="ecz-overlay">
    <h3 class="ecz-title">Card Title</h3>
    <p class="ecz-desc">Short supporting description text.</p>
    <a class="ecz-cta" href="#">Explore &rarr;</a>
  </div>
</article>
```

For the touch-friendly click variant, add `ease-card-zoom-xk--click`,
`tabindex="0"`, `role="button"`, and `aria-pressed="false"` to the root
element, then toggle an `is-active` class via JS on click/Enter/Space
(see `demo.html` for the exact script).

## CSS Variables

| Variable                | Default   | Description                                       |
|---------------------------|-----------|------------------------------------------------------|
| `--ecz-zoom`             | `1.15`    | Scale applied to the image on hover/active           |
| `--ecz-speed`            | `0.45s`   | Duration of the zoom and overlay transitions          |
| `--ecz-radius`           | `14px`    | Corner radius of the card                             |
| `--ecz-overlay-color`    | `0, 0, 0` | RGB triplet (no `rgb()` wrapper) used to tint the overlay gradient — override per card, e.g. `124, 92, 255` for a violet tint |

Example override:

```html
<article class="ease-card-zoom-xk" style="--ecz-zoom: 1.25; --ecz-speed: 0.6s; --ecz-radius: 4px; --ecz-overlay-color: 251, 191, 36;">
  ...
</article>
```

## Interactive Triggers (Acceptance Criteria)

Two variants are demonstrated in `demo.html`:

1. **Hover / focus** (default) — the image scales up via
   `transform: scale(var(--ecz-zoom))` and the overlay fades in while
   sliding up from `translateY(12px)` to `translateY(0)`. Works with both
   mouse hover and keyboard `:focus-visible`.
2. **Click** (`--click` modifier) — since hover doesn't exist on touch
   devices, this variant toggles an `is-active` class on tap/click (and on
   `Enter`/`Space` for keyboard users), producing the same zoom + overlay
   reveal without relying on `:hover`.

## Accessibility

- Card root uses `role="button"`, `tabindex="0"`, and `aria-pressed` for the
  click variant so screen readers and keyboard users get correct semantics.
- `:focus-visible` triggers the same zoom/overlay reveal as hover, so
  keyboard-only users see the same content.
- The CTA link inside the overlay is a real `<a>`, independently focusable
  and operable.
- Respects `prefers-reduced-motion: reduce` by collapsing transition
  durations to near-zero.

## Files

- `demo.html` — hover-triggered card grid (3 color-tinted examples), a
  click-toggle touch-friendly variant, and a CSS-variable customization
  example.
- `style.css` — component styles, zoom/overlay transitions, both
  interaction variants, responsive grid breakpoints, and reduced-motion
  handling.
- `README.md` — this file.