# Hummingbird

### What does this do?

It shows a hummingbird hovering at a flower, its long bill dipped toward the bloom. The wings beat so fast they blur into a haze, the tail steers to hold position, the body bobs in place, and the flower sways on its stem. Under reduced motion everything holds still.

### How is it used?

```html
<div class="hummer">
  <span class="wing wup"></span>
  <span class="wing wdn"></span>
  <span class="bodyh"></span>
  <div class="headh"><span class="bill"></span></div>
</div>
```

The wingbeat is a 0.09 second `flap` that both rotates the wing and crushes it with `scaleY(0.34)`, so at speed the two wings read as a blur rather than distinct strokes. Each wing keeps its own rest angle in a `--wa` custom property, and running one wing on `alternate` and the other on `alternate-reverse` puts them permanently out of phase without a second keyframe block. The five petals fan around the bloom via a `--pf` angle.

### Why is it useful?

Garden, nature, and speed or delicacy themes use a hummingbird. This builds a hovering hummingbird with pure CSS shapes, custom properties, and animation, no images, with a reduced motion fallback.
