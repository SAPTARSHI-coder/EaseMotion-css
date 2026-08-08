# Wind Chime

### What does this do?

It shows a wind chime hanging from a hook. The whole chime sways in the breeze, its five metal tubes tilt on staggered timings so the motion ripples along the row, the clapper and sail swing beneath, and faint rings pulse out as the tubes are struck. Under reduced motion everything hangs still.

### How is it used?

```html
<div class="chime">
  <span class="disc"></span>
  <span class="tube tb1"></span>
  <span class="clapper"></span>
  <span class="sail"></span>
</div>
```

The clapper and sail hang far below their pivots, which is achieved by pushing `transform-origin` well outside the element itself (`50% -130px`). That makes them swing on a long invisible string from the disc rather than spinning about their own centers. Each tube keeps its rest tilt in a `--tt` custom property so one `tilt` animation can rock them all around their own angles.

### Why is it useful?

Calm, garden, and ambient or meditative themes use a wind chime. This builds a swaying wind chime with pure CSS shapes and animation, no images, with a reduced motion fallback.
