# Geyser

### What does this do?

It shows a geyser erupting on a cycle. Pressure builds, then a column of water blasts up out of the vent, droplets are flung out to both sides, steam billows away, and it all subsides back into the pool before the next eruption. Under reduced motion the geyser stays dormant.

### How is it used?

```html
<div class="blast">
  <span class="core"></span>
  <span class="drop dr1"></span>
</div>
<span class="vent"></span>
<span class="poolg"></span>
```

The column is one element anchored at the vent with `transform-origin: 50% 100%`, so scaling it on the Y axis makes it shoot upward out of the ground rather than growing in both directions. The eruption keyframes hold it flat for the first 40% of the cycle, which is what creates the long quiet build before it fires. Droplets and steam share the same 5 second clock so they only appear once the column is up.

### Why is it useful?

Nature, geology, and burst or "pressure release" themes use a geyser. This builds an erupting geyser with pure CSS shapes and animation, no images, with a reduced motion fallback.
