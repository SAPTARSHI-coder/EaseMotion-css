# Jackhammer Pound

A breaker hammer rocks back and forth while chips fly off a concrete slab at the point of impact.

## How is it used?

The hammer pivots on a top handle via `transform-origin: 50% 12px`; chips share a flick-loop with negative delays. A `.pounding` class starts and stops everything:

```css
.rig.pounding .jackhammer {
  animation: pound 0.45s ease-in-out infinite;
}

@keyframes pound {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(9deg);
  }
}

.rig.pounding .chip-2 {
  animation: chip-fly 0.45s linear infinite;
  animation-delay: -0.15s;
}
```

## Why is it useful?

Toggling one class on a parent controls every child animation at once — no per-element JS. Matching the chip loop to the hammer loop keeps the debris timed to each strike, the same pattern behind drills, presses, and percussion loaders.
