# Trebuchet

### What does this do?

It shows a trebuchet loosing a stone at a castle wall. The counterweight drops, the arm whips over, the rock flies in an arc across the scene, and dust kicks up where it lands. Under reduced motion the machine sits loaded and still.

### How is it used?

```html
<div class="treb">
  <span class="frameT ft1"></span>
  <div class="armT">
    <span class="beam"></span>
    <span class="counter"></span>
  </div>
</div>
```

The arm rotates around a zero-sized wrapper pinned at `transform-origin: 0 0` exactly on the axle, with the beam and counterweight hung off it at negative offsets. Because the pivot is a point rather than the centre of a box, the long end of the beam sweeps a wide arc while the counterweight drops on the short end, which is what a real trebuchet does. The rock runs its own keyframe on the same four second clock and only leaves the sling at 46 percent, the exact moment the arm reaches the top of its swing, so the release lines up without any JavaScript. The dust waits until 84 percent, when the stone lands.

### Why is it useful?

Medieval, siege, and physics or launch themes use a trebuchet. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
