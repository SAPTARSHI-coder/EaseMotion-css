# Umbrella

### What does this do?

It shows an open umbrella in the rain. The canopy has alternating red and white panels with a scalloped edge and a curved handle, while raindrops fall past it at varied speeds. Under reduced motion the rain is hidden and the umbrella stands still.

### How is it used?

```html
<div class="umbrella">
  <span class="canopy"></span>
  <span class="scallop"></span>
  <span class="pole"></span>
  <span class="hook"></span>
</div>
```

The canopy is the top half of a circle filled with a `repeating-conic-gradient`, which paints the radiating red and white panels and their seams in one property. The scalloped edge is a repeating radial-gradient strip, and the handle is a curved border. Each raindrop is a thin gradient line running the `fall` animation with its own duration and delay so the rain looks natural.

### Why is it useful?

Weather, seasonal, and cozy themes use an umbrella. This builds an umbrella in falling rain with pure CSS gradients and animation, no images, with a reduced motion fallback.
