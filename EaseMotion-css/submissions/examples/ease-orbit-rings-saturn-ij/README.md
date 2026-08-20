# Orbit Rings Saturn

A banded Saturn tilts and breathes while a moon circles it on an invisible orbital path.

## How is it used?

The rings are `border` circles squashed with `scaleY(0.35)` and tilted; the moon travels by rotating a zero-size orbit wrapper:

```css
.ring-ring {
  border: 10px solid rgba(224, 190, 130, 0.55);
  transform: translate(-50%, -50%) rotate(-18deg) scaleY(0.35);
}

.moon-orb {
  animation: moon-orbit 7s linear infinite;
}

.moon {
  position: absolute;
  left: 0;
  top: -108px;
}

@keyframes moon-orbit {
  100% {
    transform: rotate(360deg);
  }
}
```

## Why is it useful?

`scaleY` flattens a circle into an ellipse ring in one line — no SVG. Rotating the zero-size parent plus placing the moon at a fixed radius is the cleanest orbit pattern; pair it with the counter-rotation trick when the moon needs to stay upright.
