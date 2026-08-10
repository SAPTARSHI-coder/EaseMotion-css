# Particle/Snowfall Background

**What does this do?**
Creates a reusable, pure-CSS ambient background animation with drifting particles using multiple `box-shadow` values and pseudo-elements.

**How is it used?**
Simply add a `div` with the class immediately inside your `body` (or any container with `overflow: hidden`):
```html
<body>
  <div class="particles-bg-ag"></div>
  <!-- Your content goes here -->
</body>
```

**Why is it useful?**
It provides a cinematic, immersive background for landing pages and hero sections without requiring JavaScript, WebGL, or Canvas, aligning perfectly with EaseMotion's CSS-only, zero-dependency philosophy. It utilizes a duplicate layer trick to achieve a perfectly seamless infinite loop.
