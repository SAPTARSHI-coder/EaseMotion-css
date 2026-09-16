# Jet Engine Spool

A turbofan intake whose blades spin, the nacelle vibrates, and a shimmering heat-wave appears as the engine "spools up."

## How is it used?

Blades are rotated bars sharing one `blade-spin` keyframe; the engine class gates their `animation-play-state`:

```css
.blade {
  transform-origin: 50% 26px;
  animation: blade-spin 0.9s linear infinite;
  animation-play-state: paused;
}
.nacelle.running .blade {
  animation-play-state: running;
}
```

Starting the engine adds `.running` to the nacelle — blades turn on, a steps-based shake jitters the housing, and a sibling `.thrust` glow transitions to visible. The `~` sibling selector wires the thrust to the same class without extra JS.

## Why is it useful?

Gating infinite animations with `animation-play-state` and pairing them with a transitioned "effect" layer gives a believable multi-part state change from one toggle. The steps easing is a cheap vibration trick, and the conic-gradient shimmer is reusable for any "energy" surface.
