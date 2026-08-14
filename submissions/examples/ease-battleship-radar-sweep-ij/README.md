# Battleship Radar Sweep

A sonar-style radar scope with a rotating sweep, concentric range rings, and contact blips that ping as the beam passes.

## How is it used?

The sweep is a gradient bar rotated from the center point:

```css
.sweep {
  transform-origin: 0 50%;
  animation: sweep-turn 4s linear infinite;
}
@keyframes sweep-turn {
  to { transform: rotate(360deg); }
}
```

A translucent `::after` triangle extends the beam into a cone so the sweep reads as a moving sector. Blips are absolutely-positioned dots that run a `blip-ping` loop with staggered `animation-delay`, so contacts appear to activate as the sweep approaches them. The range rings are concentric circles laid over the disc with `inset: 0`.

## Why is it useful?

Radar is a great showcase for three cheap animation primitives — a rotating element, a pinging scale, and layered decoration. The same `transform-origin` trick translates directly to loading spinners, orbiting badges, and progress sectors, making this a compact visual reference for circular motion timing.
