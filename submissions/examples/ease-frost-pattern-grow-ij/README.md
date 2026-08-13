# Frost Pattern Grow

A cold pane fogs over as translucent frost blooms outward from the center of the glass.

## How is it used?

Two `::before`/`::after` overlays expand on offset timelines, one larger and softer to read as the haze, the other as the crystal core:

```css
.frost.grow::before {
  animation: frost-a 3.5s ease-out both;
}

@keyframes frost-a {
  0% {
    width: 0;
    height: 0;
  }
  100% {
    width: 340px;
    height: 300px;
  }
}
```

## Why is it useful?

Overlapping expanding radial gradients with different sizes fake branching frost for free. `ease-out` makes growth decelerate like real crystallization — reusable for blobs, liquid fills, and "spreading" state reveals.
