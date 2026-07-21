# Gecko

### What does this do?

It shows a gecko clinging to a wall under a porch light, watching a fly buzz around. Its four legs scamper in sequence, its tail flicks, its head tracks the movement, and it blinks. Under reduced motion it holds still.

### How is it used?

```html
<div class="gecko">
  <span class="bodyg"></span>
  <span class="spots"></span>
  <span class="legg lg1"></span>
  <div class="headg"><span class="eyeg"></span></div>
</div>
```

All four legs share one rule, one pivot at the body and one `scamper` keyframe. Each leg keeps its own splay angle in `--gl`, and the keyframe steps to `rotate(calc(var(--gl) + 12deg))`, so every leg swings from wherever it already sits rather than snapping to a shared pose, and staggered delays turn that into a crawling gait. The toes are a `box-shadow` offset on the same element, so each foot costs nothing extra. The gecko's spots are hard stop radial gradients painted into a body shaped element, so they clip to its outline for free.

### Why is it useful?

Wildlife, reptile, and night or garden themes use a gecko. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
