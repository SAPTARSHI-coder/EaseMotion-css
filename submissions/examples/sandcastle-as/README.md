# Sandcastle

### What does this do?

It shows a sandcastle on a beach at sunset. The flag flaps on its pole, waves lap up the sand and pull back, the castle settles slightly as the sand shifts, the sun pulses, and a gull drifts across the sky. Under reduced motion the beach goes quiet.

### How is it used?

```html
<div class="castle">
  <span class="towr tl"></span>
  <span class="towr tc"></span>
  <span class="wallsc"></span>
  <span class="flagsc"></span>
</div>
```

The battlements are a single `clip-path` polygon that cuts the crenellations straight out of the wall, so the notched top costs no extra elements. The flag flaps from `transform-origin: 0 50%` at the pole using a `skewY`, so the cloth bends away from its anchor instead of pivoting as a rigid board, and its swallowtail notch is another clip-path. The shells are `repeating-conic-gradient` fans anchored at their hinge.

### Why is it useful?

Beach, summer, and holiday themes use a sandcastle. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
