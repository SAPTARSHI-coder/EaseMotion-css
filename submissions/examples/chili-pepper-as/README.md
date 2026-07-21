# Chili Pepper

### What does this do?

It shows a red chili hanging by its stem. It swings gently, heat shimmers rise off it, and a warm glow pulses behind it. Hovering or focusing the chili makes it shake fast, as if it is too hot to hold. Under reduced motion it hangs still.

### How is it used?

```html
<div class="chili" tabindex="0">
  <span class="stemc"></span>
  <span class="pod pd1"></span>
  <span class="pod pd2"></span>
</div>
```

The curved pod is four tapering segments, each pivoted from `transform-origin: 50% 0`, its own top edge, and each turned a little further than the one above it via a `--pc` custom property. Chaining the pivots that way bends the pepper into a natural hook without a single clip path, and because each segment is narrower and shorter than the last, the tip tapers to a point. The whole chili swings from `50% 6%`, the point where the stem attaches, so it arcs from where it actually hangs.

### Why is it useful?

Food, spice, and heat or "hot" themes use a chili. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
