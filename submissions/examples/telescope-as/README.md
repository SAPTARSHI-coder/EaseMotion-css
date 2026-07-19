# Telescope

### What does this do?

It shows a telescope on a tripod slowly sweeping the night sky. The tube tilts up and down as if scanning, its lens glints, stars twinkle, and every so often a shooting star streaks past. Under reduced motion the telescope holds its aim and the shooting star is hidden.

### How is it used?

```html
<div class="scope">
  <span class="tube"><span class="lens"></span><span class="finder"></span></span>
</div>
<div class="mount"><span class="leg lg1"></span><span class="hinge"></span></div>
```

The tube is a rounded gradient barrel with brass bands and a glowing objective lens. The whole `scope` rotates around a pivot placed at the tripod hinge, so the barrel swings realistically about its mount rather than its own center. The tripod legs are rotated bars sharing that hinge, and a `streak` animation fires a shooting star across the sky on a long loop.

### Why is it useful?

Astronomy, discovery, and search or exploration themes use a telescope. This builds a scanning telescope with pure CSS shapes and animation, no images, with a reduced motion fallback.
