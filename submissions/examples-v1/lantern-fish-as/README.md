# Lantern Fish

### What does this do?

It shows an anglerfish in the deep, its glowing lure swinging in front of a mouthful of teeth. The fish drifts through the dark, its tail and fin wave, the lure and the halo around it pulse together, photophores along its flank blink, and marine snow drifts past. Under reduced motion it hangs still.

### How is it used?

```html
<div class="lfish">
  <span class="glowL"></span>
  <span class="lureL"></span>
  <span class="rodL"></span>
  <span class="bodyL"></span>
</div>
```

The lure and the halo behind it run the same `pulseL` keyframe on the same four second clock, so the light and the glow it casts brighten and fade as one thing rather than drifting out of phase. The teeth are `clip-path` triangles, each flipped upside down through its own `--tt2` angle of roughly 180 degrees with a few degrees of variation, so they hang from the jaw at slightly different tilts instead of looking like a stamped row. The rod swings from `transform-origin: 0 50%`, its root on the head, so the lure arcs out in front of the fish.

### Why is it useful?

Deep sea, dark mode, and eerie or mysterious themes use an anglerfish. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
