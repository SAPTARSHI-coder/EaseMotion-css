# Torii Gate

### What does this do?

It shows a torii gate standing in shallow water at dusk, with the moon behind it. Cherry petals drift down past the gate, the moon glows, and the gate's reflection ripples on the water. Under reduced motion everything is still.

### How is it used?

```html
<div class="torii">
  <span class="kasagi"></span>
  <span class="nuki"></span>
  <span class="pillarT ptl"></span>
  <span class="pillarT ptr"></span>
</div>
```

The top lintel uses `perspective(300px) rotateX(6deg)`, which tilts it slightly away from the viewer and gives the gate a sense of depth that a flat rectangle cannot. The two pillars lean outward by a degree and a half each, mirroring one another, because a real torii's posts are not vertical, and that small asymmetry is what keeps the gate from looking like a plain goalpost. Each falling petal takes its drift from a `--px2` custom property, so they share one keyframe but never trace the same path.

### Why is it useful?

Japanese, shrine, and calm or reflective themes use a torii gate. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
