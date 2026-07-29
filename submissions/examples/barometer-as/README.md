# Barometer

### What does this do?

It shows a brass aneroid barometer mounted on a plank. The needle drifts slowly between fair and change, as a real one does when pressure shifts, and the red set hand stays put as the reference you compare against. Hovering or focusing it swings the needle down into the storm zone. Under reduced motion the needle holds its reading.

### How is it used?

```html
<div class="baro" tabindex="0">
  <span class="dialB"></span>
  <span class="scaleB"></span>
  <span class="zoneStorm"></span>
  <span class="needleB"></span>
</div>
```

The coloured weather zones are `conic-gradient`s limited to a 70 degree wedge and masked to a narrow radial band, so each arc sits as a stripe of colour around the dial rather than filling it like a pie slice. The graduations are two more conic gradients masked to their own bands, one fine and one bold. The needle keeps its own resting sweep in the idle keyframe, and hovering swaps in a different keyframe entirely, so the pressure "falling" is a genuine change of animation rather than a nudge to the existing one.

### Why is it useful?

Weather, instrument, and dashboard themes use a barometer. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
