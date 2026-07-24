# Zeppelin

### What does this do?

It shows an airship cruising through the clouds. The envelope drifts forward and upward as it flies, the propeller spins, the cabin windows glow in sequence, birds flap past, and clouds slide behind it. Under reduced motion it holds position.

### How is it used?

```html
<div class="zep">
  <span class="envelope"></span>
  <span class="finZ fz1"></span>
  <span class="gondola"></span>
  <div class="propZ">
    <span class="bladeZ bz1"></span>
  </div>
</div>
```

The tail fins are `clip-path` triangles, which give them the straight edges and sharp points a `border-radius` cannot. The propeller is two blades sharing one hub, each parked at its own angle in a `--zb` custom property, with the spin applied to the wrapper rather than the blades, so the 0 and 90 degree offsets survive the animation instead of being overwritten by it. The cruise keyframe translates on both axes, so the airship actually makes way rather than bobbing on the spot.

### Why is it useful?

Retro, travel, and sky themes use an airship. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
