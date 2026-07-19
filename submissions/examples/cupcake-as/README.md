# Cupcake

### What does this do?

It shows a birthday cupcake. The whole cake bobs gently, the candle flame flickers and casts a warm halo, and the sprinkles twinkle in sequence. Under reduced motion everything sits still.

### How is it used?

```html
<div class="cupcake">
  <span class="flamec"></span>
  <span class="swirl s3"></span>
  <span class="swirl s2"></span>
  <span class="swirl s1"></span>
  <div class="wrapper"><span class="pleats"></span></div>
</div>
```

The frosting is three rounded blobs stacked widest at the bottom and drawn in reverse DOM order, so each smaller layer paints on top and the pile reads as one piped swirl. The wrapper is a single `clip-path` trapezoid with a `repeating-linear-gradient` for the pleats, so the whole fluted paper cup is two properties. The sprinkles each store their tilt in a `--sr` custom property, which the shared twinkle keyframe reads inside `rotate()`, so one animation does not flatten five different angles.

### Why is it useful?

Birthday, bakery, and celebration themes use a cupcake. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
