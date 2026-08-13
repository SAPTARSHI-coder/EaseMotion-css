# Animated Gradient Border Card

### What does this do?

It shows a card whose thin border is a conic gradient that rotates around the edge, with a soft matching glow.

### How is it used?

```html
<div class="gradient-card">
  <div class="gradient-card-inner">
    <h3>Featured Plan</h3>
    <p>A card with a rotating gradient border.</p>
    <a href="#" class="card-cta">Learn more</a>
  </div>
</div>
```

The outer `.gradient-card` has a small padding and a conic gradient background, and the inner `.gradient-card-inner` has an opaque background that covers the center, so only a thin gradient ring shows. A colored box shadow adds the glow.

### Why is it useful?

A rotating gradient border highlights a featured card or call to action. This animates a registered `@property` angle to spin the conic gradient, so it needs no JavaScript. If a browser does not support `@property` the border shows as a static gradient, and the rotation is disabled under `prefers-reduced-motion: reduce`.
