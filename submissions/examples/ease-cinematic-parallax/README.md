### What does this do?
This creates a true cinematic depth-of-field parallax effect by dynamically shifting the focal plane and translation of background, midground, and foreground layers natively via the CSS `animation-timeline: scroll()` API.

### How is it used?
```html
<div class="parallax-scene">
  <div class="parallax-layer layer-bg"></div>
  <div class="parallax-layer layer-mid"></div>
  <div class="parallax-layer layer-fg"></div>
</div>
```

### Why is it useful?
It aligns perfectly with EaseMotion's philosophy of delivering premium, high-performance UI animations without JavaScript overhead, pushing the boundaries of what is possible purely via CSS using modern web standards.
