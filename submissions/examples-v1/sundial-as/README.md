# Sundial

### What does this do?

It shows a stone sundial telling the time. The sun travels in an arc overhead, and the gnomon's shadow sweeps across the hour marks in step with it, stretching long at the edges of the day and shortening at noon. Under reduced motion the sun and shadow rest at one time of day.

### How is it used?

```html
<div class="dial">
  <div class="marks"><span class="mark mk1"></span>...</div>
  <span class="shade"></span>
  <span class="gnomon"></span>
</div>
```

The twelve hour marks are one shape placed with `rotate()` plus `translateY()` around the face. The `shade` is a tapered `clip-path` shadow anchored at the base of the gnomon; its `cast` animation rotates it across the dial while also scaling it vertically, so the shadow lengthens near sunrise and sunset and shortens at midday, in step with the sun's `arc`.

### Why is it useful?

Time, history, and garden themes use a sundial. This builds a working sundial with pure CSS shapes and animation, no images, with a reduced motion fallback.
