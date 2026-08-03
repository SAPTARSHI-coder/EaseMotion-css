# Taco

### What does this do?

It shows a loaded taco on a plate. The whole taco rocks slowly as if someone is about to pick it up, and the cheese shreds shimmer in sequence. Under reduced motion it sits still.

### How is it used?

```html
<div class="taco">
  <span class="lettuce"></span>
  <span class="meat"></span>
  <span class="shell"></span>
  <span class="cheese cs1"></span>
</div>
```

The lettuce and the meat are each one element: overlapping hard stop `radial-gradient` circles give them a lumpy chopped edge without a pile of child nodes. The shell is a single element whose `border-radius` curves only the bottom two corners, so it reads as a folded tortilla. Every cheese shred and tomato cube keeps its tilt in a custom property (`--ct`, `--tt`) that the shimmer keyframe reads back inside `rotate()`, so the shared animation never flattens the angles.

### Why is it useful?

Food, menu, and restaurant themes use a taco. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
