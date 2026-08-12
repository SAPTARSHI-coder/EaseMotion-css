# Tornado

### What does this do?

It shows a swirling tornado. Stacked funnel bands from a wide top down to a narrow tip sway back and forth on staggered timings so the whole vortex looks like it is spinning, chunks of debris orbit around it, and a cloud of dust puffs at the base. Under reduced motion the tornado holds its shape.

### How is it used?

```html
<div class="funnel">
  <span class="band bd1"></span>
  ...
  <span class="band bd6"></span>
</div>
<span class="debris d1"></span>
```

The funnel is six horizontal ellipse bands of decreasing width, each running the `swirl` animation that shifts and skews it side to side; a phase offset per band makes the sway travel down the funnel like a rotating column. Debris chunks run an `orbit` animation, circling and shrinking on the far side to fake depth, and the dust cloud puffs at the ground.

### Why is it useful?

Weather, storm, and dramatic loading states use a tornado. This builds a spinning tornado with pure CSS gradients and animation, no images, with a reduced motion fallback.
