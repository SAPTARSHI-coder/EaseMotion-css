# Lighthouse Beam

A striped lighthouse whose lantern sweeps a light beam across a rocking bay at night.

## How is it used?

The beam is a gradient bar anchored at the lantern, sweeping between two angles:

```css
.beam {
  transform-origin: 0 50%;
  animation: beam-sweep 5s ease-in-out infinite;
}
@keyframes beam-sweep {
  0% { opacity: 0; transform: rotate(-24deg); }
  10% { opacity: 1; }
  50% { transform: rotate(24deg); }
  90% { opacity: 1; }
  100% { opacity: 0; transform: rotate(-24deg); }
}
```

Opacity is folded into the keyframes so the beam fades in and out at the extremes of its swing rather than popping. The sea and a little boat run their own slower loops, giving three different motion speeds in one scene.

## Why is it useful?

A `transform-origin` anchored rotate is the core of any sweeping indicator — searchlights, progress arcs, turrets. Layering a slow ambient loop (the sea) under a fast attention loop (the beam) is a solid recipe for believable, alive backgrounds.
