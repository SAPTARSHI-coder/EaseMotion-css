# Bat

### What does this do?

It shows a bat flying across a full moon. Its scalloped wings beat, it swoops up and down as it flies, its eyes blink, and sonar rings pulse out from it and fade. Under reduced motion the bat hangs still and the sonar stops.

### How is it used?

```html
<div class="bat">
  <span class="wingb wgl"></span>
  <span class="wingb wgr"></span>
  <span class="bodyb"></span>
</div>
```

The scalloped wing edge is a `clip-path` polygon, so the classic bat silhouette comes from one property instead of stacked circles. Both wings share one `flapb` keyframe and hinge at the body because each stores its own pivot in `transform-origin: var(--wo) 30%`: the left wing pivots at its right edge, the right wing at its left. The beat itself is a `rotateX`, so the wings tilt through space and foreshorten rather than just squashing.

### Why is it useful?

Halloween, night, and spooky themes use a bat. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
