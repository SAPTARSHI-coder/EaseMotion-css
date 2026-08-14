# Rainbow Prism Bend

A white beam enters a triangle prism and splits into red, green, and blue rays fanning out at different angles.

## How is it used?

The incoming beam fades in first; the three color rays appear together at 0.15s with each ray's `transform-origin` at the prism face so they grow outward along their own angle:

```css
.beam-r {
  transform: rotate(22deg);
  transform-origin: 0 50%;
}

.prism.lit .beam-r {
  animation: beam-flash 1.6s ease-out both;
  animation-delay: 0.15s;
}
```

## Why is it useful?

`transform-origin: 0 50%` at the split point makes each beam scale out from the prism — the cheap way to make rays radiate from a shared source. This pattern covers laser beams, audio visualization rays, and sun-shaft effects.
