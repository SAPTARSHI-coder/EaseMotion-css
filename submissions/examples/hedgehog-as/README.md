# Hedgehog

### What does this do?

It shows a hedgehog snuffling along the ground. Hovering or focusing it makes the spines along its back bristle up, the way a real hedgehog raises its quills. It blinks and shuffles as it goes, and it works with no JavaScript. Under reduced motion the quills bristle without easing.

### How is it used?

```html
<div class="hog" tabindex="0">
  <span class="spines"></span>
  <span class="quills"></span>
  <span class="body"></span>
  <div class="head">...</div>
</div>
```

The dense coat of spines is a `repeating-conic-gradient` fanning out from the belly, so hundreds of quills cost one property instead of hundreds of elements. The spiky silhouette along the top is a separate `clip-path` zigzag, anchored at its base, so a `:hover` `scaleY` makes just those outer quills stand up.

### Why is it useful?

Woodland, cute mascot, and defensive or "prickly" themes use a hedgehog. This builds an interactive hedgehog with pure CSS gradients and transitions, no images or JavaScript, with a reduced motion fallback.
