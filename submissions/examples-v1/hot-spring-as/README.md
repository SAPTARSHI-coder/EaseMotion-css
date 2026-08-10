# Hot Spring

### What does this do?

It shows a snow monkey soaking in an onsen at night. The monkey bobs in the water with a towel on its head, blinks, ripples spread out from it, steam curls up off the surface, and snow falls past the moon. Under reduced motion everything is still.

### How is it used?

```html
<div class="pool">
  <span class="waterH"></span>
  <span class="rippleH rp1"></span>
</div>
<div class="monkey">
  <span class="headH"></span>
  <span class="towel"></span>
</div>
```

The pool is an ellipse with `overflow: hidden`, which does the work that would otherwise need a clip path: the ripples inside it are plain rings that scale outward, and the pool's own rounded edge cuts them off at the waterline, so they never spill onto the rocks. The monkey sits in front of the pool rather than inside it, so its head stays above the surface while the ripples appear to come from where it meets the water. Each steam puff and snowflake takes its drift from a custom property, so they share one keyframe without tracing identical paths.

### Why is it useful?

Onsen, winter, and relaxation themes use a hot spring. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
