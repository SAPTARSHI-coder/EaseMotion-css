# UFO

### What does this do?

It shows a flying saucer hovering in a starry sky. The UFO bobs and tilts as it hovers, the ring of lights under its rim chases around in sequence, a green tractor beam pulses beneath it, and the background stars twinkle. Under reduced motion everything holds still.

### How is it used?

```html
<div class="ufo">
  <span class="beam"></span>
  <div class="dome"></div>
  <div class="saucer"><span class="light p1"></span>...</div>
</div>
```

The saucer is a flattened gradient ellipse with a glassy dome on top, the beam is a `clip-path` trapezoid fading downward, and each rim light runs the `chase` animation on a staggered delay so the glow appears to travel around the ship.

### Why is it useful?

Space themes, 404 pages, and playful loaders use a flying saucer. This builds a hovering UFO with pure CSS shapes and animation, no images, with a reduced motion fallback.
