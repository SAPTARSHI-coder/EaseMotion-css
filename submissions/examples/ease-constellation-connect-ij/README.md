# Constellation Connect

A night-sky panel where five stars twinkle and connecting lines draw themselves between them, forming a constellation.

## How is it used?

Each `.line` is a 2px gradient bar anchored at its left end, then grown with a scaleX transition:

```css
.line {
  transform-origin: 0 50%;
  animation: line-draw 1.4s ease-out both;
}
@keyframes line-draw {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
```

The lines are rotated to their target angles with `transform: rotate(...)`, and staggered `animation-delay` makes them draw in sequence after the stars have twinkled on. Stars twinkle with a shared opacity/scale keyframe offset by their own delays.

## Why is it useful?

Line-drawing via `scaleX` from a `transform-origin` is a reusable entrance for SVG-like connectors, dividers, and timelines. Pairing it with staggered delays creates a natural "system coming online" sequence — a pattern that fits loading states, onboarding diagrams, and data-junction visualizations.
