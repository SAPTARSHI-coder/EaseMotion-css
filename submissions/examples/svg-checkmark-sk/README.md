# Animated SVG Checkmark (`stroke-dashoffset`)

## What does this do?
Animates an SVG checkmark (and X, warning, info variants) by transitioning `stroke-dashoffset` from the full path length to 0, making the stroke appear to draw itself. Includes a pop-in circle background and a ring pulse effect.

## How is it used?

```html
<!-- Success (default) -->
<div class="checkmark">
  <svg viewBox="0 0 52 52" aria-label="Success">
    <circle class="checkmark__circle" cx="26" cy="26" r="25"/>
    <circle class="checkmark__ring"   cx="26" cy="26" r="25"/>
    <path  class="checkmark__stroke"  d="M14 26 l9 9 l15 -15"/>
  </svg>
</div>

<!-- Error variant -->
<div class="checkmark checkmark--error">…</div>

<!-- Size modifiers -->
<div class="checkmark checkmark--sm">…</div>
<div class="checkmark checkmark--lg">…</div>
```

CSS custom properties:
```css
--check-size: 80px;
--check-color: #22c55e;
--check-stroke-width: 5;
--check-draw-duration: 0.4s;
```

## Why is it useful?
`stroke-dashoffset` animation is a classic SVG technique for path-drawing effects. Pure CSS — no JS, no GSAP. The ring pulse adds a satisfying confirmation feel. Respects `prefers-reduced-motion` by skipping animation and showing the final state immediately. Hovering replays the animation.
