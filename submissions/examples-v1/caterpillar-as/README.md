# Caterpillar

### What does this do?

It shows a caterpillar inching along a leaf it has already taken a bite out of. Each body segment humps up and down a beat after the one in front, so a wave travels down its whole body, and its antennae wiggle while it blinks. Under reduced motion the caterpillar holds still.

### How is it used?

```html
<div class="cater">
  <span class="seg sg1"></span>
  ...
  <div class="headc"><span class="antc ac1"></span></div>
</div>
```

The inching gait is the whole trick: every segment runs the same `hump` animation, but each one's `animation-delay` is a fraction of a second later than the segment ahead of it. That single staggered offset is what turns seven bobbing circles into a wave travelling down the body, exactly how a real caterpillar moves.

### Why is it useful?

Garden, growth, and progress or transformation themes use a caterpillar. This builds an inching caterpillar with pure CSS shapes and staggered animation, no images, with a reduced motion fallback.
