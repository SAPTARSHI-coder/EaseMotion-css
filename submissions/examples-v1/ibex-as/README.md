# Ibex

### What does this do?

It shows an ibex standing on a mountain ledge. It shifts its weight, its head turns to survey the valley, its tail flicks, it blinks, and pebbles come loose and tumble off the edge. Under reduced motion it stands still.

### How is it used?

```html
<div class="ibex">
  <span class="bodyI"></span>
  <div class="headI">
    <span class="skullI"></span>
    <span class="hornI hil"></span>
  </div>
</div>
```

The great ridged horns are one element each: a `repeating-linear-gradient` angled at 172 degrees gives the growth ridges, and an asymmetric `border-radius` tapers the horn from thick at the base to narrow at the tip. Each keeps its own sweep in a `--hi` custom property, with the two set a few degrees apart, so they read as a pair seen from the side rather than one horn drawn twice. The legs use a long-hold keyframe: they stand still for most of the cycle and shift only briefly, so the animal reads as balancing on the rock rather than pacing.

### Why is it useful?

Mountain, wildlife, and rugged themes use an ibex. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
