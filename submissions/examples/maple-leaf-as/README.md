# Maple Leaf

### What does this do?

It shows a maple leaf on its stem swaying in an autumn breeze, while smaller leaves tumble down past it and out of frame. Each falling leaf spins as it drops, so it flutters rather than dropping flat. Under reduced motion the leaf rests and none fall.

### How is it used?

```html
<div class="hero">
  <div class="maple big">
    <span class="lobe lb1"></span>
    <span class="vein v1"></span>
  </div>
  <span class="stemm"></span>
</div>
```

The leaf is five broad lobes fanned around a single point at the base of the stem: each lobe shares one `transform-origin` and is rotated out by its own angle, so they overlap near the base and separate into distinct lobes at the tips. Veins are thin bars fanned on the same origin, so they line up with the lobes for free. The falling leaves nest two elements, one handling the downward path and one the spin, so the leaf can tumble without disturbing its fall.

### Why is it useful?

Autumn, seasonal, and nature themes use a maple leaf. This builds a swaying maple leaf with falling leaves in pure CSS, no images, with a reduced motion fallback.
