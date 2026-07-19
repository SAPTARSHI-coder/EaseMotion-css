# Starling

### What does this do?

It shows a starling perched on a wire at sunset while the rest of the flock murmurates behind it. The bird flutters a wing, wags its tail and blinks, and the whole flock drifts and skews across the sky as one body. Under reduced motion everything settles.

### How is it used?

```html
<div class="flock">
  <span class="birdS b1"></span>
  <span class="birdS b2"></span>
</div>
```

The murmuration is one animation, not twelve. Every distant bird sits at a fixed position inside a `flock` wrapper, and the wrapper itself translates and `skewX`es on a slow nine second loop: skewing the container slides the birds by different amounts depending on how high they sit in it, so the flock bends and shears like a real murmuration instead of moving as a rigid block. Each bird still flaps on its own delay, and keeps its heading in a `--br` custom property that the flap keyframe reads back, so wing beats never flatten the angles.

### Why is it useful?

Sky, wildlife, and flocking or "many small things" themes use starlings. This builds them with pure CSS gradients and animation, no images, with a reduced motion fallback.
