# Birdcage

### What does this do?

It shows a canary on a swing inside a hanging birdcage. The cage sways on its hook, the swing rocks, the bird hops and flutters a wing, its tail wags, it blinks, and notes drift out between the bars. Under reduced motion everything is still.

### How is it used?

```html
<div class="cage">
  <span class="domeC"></span>
  <span class="barsC"></span>
  <div class="swingC">
    <span class="perch"></span>
    <div class="birdC">...</div>
  </div>
</div>
```

The bars are one `repeating-linear-gradient` clipped by the same `border-radius` as the cage dome, so they follow the curve of the roof and stop at its edge, which means the whole cage costs one element instead of twenty. The motion is a chain of nested pivots: the cage swings from its hook at `50% 0`, the swing rocks from its own anchor inside the cage, and the bird hops within the swing. Because each pivot lives on a separate wrapper, the movements compound the way they physically would rather than fighting over one transform.

### Why is it useful?

Pet, vintage, and decorative themes use a birdcage. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
