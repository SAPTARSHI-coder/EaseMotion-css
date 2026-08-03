# Activity Rings

### What does this do?

It shows three concentric activity rings, like the ones on a fitness watch. Each ring fills clockwise to its own percentage set by a `--p` custom property, in its own color, with a legend showing the underlying numbers. The rings are pure CSS, made from a conic gradient masked into a ring shape.

### How is it used?

```html
<div class="rings">
  <span class="ring move" style="--p: 85;"></span>
  <span class="ring exercise" style="--p: 65;"></span>
  <span class="ring stand" style="--p: 40;"></span>
</div>
```

Each ring is a circle filled with a `conic-gradient` up to `calc(var(--p) * 1%)`, then a radial `mask` cuts out the middle to leave a ring. The three rings are stacked and centered at different sizes.

### Why is it useful?

Fitness and habit apps show progress on several goals at once with concentric rings. This delivers that widget with pure CSS conic gradients and masks, driven by one custom property per ring, with no SVG or script.
