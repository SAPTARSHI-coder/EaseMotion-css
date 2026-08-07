# Dragonfly

### What does this do?

It shows a dragonfly hovering over a pond. Its four translucent wings beat so fast they blur, the body drifts and tilts as it hovers, and the reeds bend in the breeze. Under reduced motion the dragonfly and reeds hold still.

### How is it used?

```html
<div class="fly">
  <span class="wing wtl"></span>
  <span class="thorax"></span>
  <span class="tail"></span>
  <span class="head"></span>
</div>
```

Each wing stores its own resting angle in a `--wr` custom property, so one shared `beat` animation can flatten every wing with `scaleY` without wiping out its angle. Beating the lower pair on a small delay behind the upper pair gives the flight the staggered look real dragonflies have. The segmented tail comes from a repeating gradient.

### Why is it useful?

Nature, pond, and summer themes use a dragonfly. This builds a hovering dragonfly with pure CSS shapes, custom properties, and animation, no images, with a reduced motion fallback.
