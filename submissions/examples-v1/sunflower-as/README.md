# Sunflower

### What does this do?

It shows a sunflower in a field, slowly turning its head to follow the sun across the sky. Twelve golden petals ring a seeded brown center, the leaves flutter on the stem, and the sun glows. Under reduced motion the flower and leaves hold still.

### How is it used?

```html
<div class="flower">
  <div class="petals"><span class="petal p1"></span>...</div>
  <span class="core"></span>
</div>
<span class="stem"></span>
```

The twelve petals share one shape and are placed with `rotate()` plus `translateY()` from a common center, so they ring the head evenly. The seeded center is a dotted radial-gradient pattern. The whole flower runs the `track` animation, rotating around a pivot at the top of the stem so the head sweeps toward the sun and back.

### Why is it useful?

Garden, summer, and growth themes use a sunflower. This builds a sun-tracking sunflower with pure CSS shapes and animation, no images, with a reduced motion fallback.
