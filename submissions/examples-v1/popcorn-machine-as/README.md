# Popcorn Machine

### What does this do?

It shows a red popcorn cart. Kernels pop out of the kettle one after another, arc through the air while tumbling, and drop into the pile below. The wheels roll. Under reduced motion the popping stops.

### How is it used?

```html
<div class="cabin">
  <span class="kettle"></span>
  <span class="pile"></span>
  <span class="kernel k1"></span>
  <span class="kernel k2"></span>
</div>
```

Every kernel shares one `popk` keyframe. What makes each arc different is two custom properties on the kernel itself: `--dx` for how far sideways it lands and `--kr` for how far it tumbles. The keyframe reads `translate(var(--dx), 66px) rotate(var(--kr))`, so one animation produces five distinct arcs instead of five near duplicate keyframe blocks. The popped pile is a stack of hard stop `radial-gradient` circles painted into one ellipse, so it clips to a mound for free.

### Why is it useful?

Cinema, carnival, and snack themes use a popcorn cart. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
