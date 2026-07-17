# Igloo

### What does this do?

It shows an igloo on the snow under the northern lights. Aurora ribbons shimmer and drift across the night sky, stars twinkle, snow falls, and a warm fire glow spills out of the entrance. Under reduced motion the aurora, snow, and glow all settle.

### How is it used?

```html
<div class="igloo">
  <span class="dome"></span>
  <span class="entry"></span>
  <span class="hole"></span>
</div>
```

The ice-block pattern on the dome is drawn entirely with gradients: a `repeating-conic-gradient` from the base draws the radial seams between blocks, and a `repeating-radial-gradient` draws the curved courses, layered over an ice-colored base. The entrance arch reuses the same trick at a smaller scale, and the aurora ribbons are blurred gradient bands that shimmer.

### Why is it useful?

Arctic, winter, and cozy shelter themes use an igloo. This builds an igloo with a gradient-drawn block pattern and a shimmering aurora, no images, with a reduced motion fallback.
