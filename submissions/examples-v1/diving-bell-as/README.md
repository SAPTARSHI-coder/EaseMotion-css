# Diving Bell

### What does this do?

It shows a brass diving bell hanging on its cable in deep water. It sways on the line, its lamp pulses, the trapped pocket of air breathes under the rim, bubbles escape and rise, and a fish swims past. Hovering or focusing it turns the searchlight on: the beam brightens and sweeps back and forth. Under reduced motion everything is still.

### How is it used?

```html
<div class="bell" tabindex="0">
  <span class="shellD"></span>
  <span class="lampD"></span>
  <span class="beamD"></span>
  <span class="airPocket"></span>
</div>
```

The searchlight is a `clip-path` wedge that is wide at the bottom and narrow where it leaves the lamp, faded out with a gradient. It sits dim by default and hovering both raises its opacity and starts a sweep keyframe, so one hover does two jobs: turning the light on and setting it moving. The pocket of trapped air under the rim is a single element whose only animation is `scaleY`, which reads as the air breathing against the water because a rounded bottom edge stretching and relaxing is what that actually looks like.

### Why is it useful?

Deep sea, exploration, and historical machinery themes use a diving bell. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
