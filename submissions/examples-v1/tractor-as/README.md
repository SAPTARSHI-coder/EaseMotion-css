# Tractor

### What does this do?

It shows a red farm tractor working a field. Both wheels turn, the body bounces over the ruts, exhaust puffs rise from the stack and drift away, and the headlamp glows. Under reduced motion the tractor parks.

### How is it used?

```html
<div class="tract">
  <span class="hood"></span>
  <span class="cabin2"></span>
  <span class="wheelt wbig"></span>
  <span class="wheelt wsmall"></span>
</div>
```

Each wheel is a single element. A `repeating-conic-gradient` paints the tread, a thick `border` becomes the tyre wall, an inset `box-shadow` adds the hub ring, and `border-radius: 50%` makes it round, so a treaded farm wheel costs one element rather than a dozen. Both wheels share the same `spint` rule, so the small front wheel and the big rear wheel stay in step. The exhaust puffs share one keyframe and take their drift from a `--px` custom property, so each one blows away on its own path.

### Why is it useful?

Farm, machinery, and rural themes use a tractor. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
