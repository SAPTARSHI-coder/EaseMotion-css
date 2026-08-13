# Jellyfish

### What does this do?

It shows a glowing jellyfish drifting through deep water. The translucent bell pulses as it swims, the whole body bobs up and down, and five tentacles trail below and sway out of phase with each other. Under reduced motion everything holds still.

### How is it used?

```html
<div class="jelly">
  <div class="bell"><span class="spot s2"></span></div>
  <div class="tentacles"><span class="tentacle t1"></span>...</div>
</div>
```

The bell is a rounded gradient dome with a soft glow, scaled by the `pulse` animation to mimic a swimming jellyfish. The `float` animation bobs the whole body, and each tentacle rocks around its top with the `wave` animation on a staggered delay.

### Why is it useful?

Ocean scenes, loaders, and ambient backgrounds use sea life. This builds a lively jellyfish with pure CSS shapes, gradients, and animation, no images, with a reduced motion fallback.
