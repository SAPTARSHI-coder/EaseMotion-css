# Ice Cube Melt

A glass of water with an ice cube that shrinks into a wide puddle while the water level and a condensation drip animate together.

## How is it used?

Melting and water rise are both transitions triggered by the same toggle:

```css
.ice-cube {
  transition: transform 1.6s ease-in-out, height 1.6s ease-in-out, opacity 1.6s ease-in-out;
  transform-origin: 50% 100%;
}
.ice-cube.melted {
  height: 12px;
  opacity: 0.4;
  transform: scaleX(1.35);
}
```

The cube's `transform-origin` sits at its base so it appears to settle into the water rather than float away. `.water.risen` raises the fill height over the same 1.6s easing, and a looping drip animates down the glass wall independently.

## Why is it useful?

Two elements changing at matched durations tells a single story — one state, multiple coordinated outputs. The `transform-origin` + `height` squash is a reusable "settle into place" move for accordions, drawers, and collapse states.
