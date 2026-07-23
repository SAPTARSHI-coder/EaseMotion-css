# Pocket Watch

### What does this do?

It shows a brass pocket watch swinging on its chain. The second hand ticks round in discrete jumps, the minute and hour hands creep at their proper speeds, and light glints off the crystal. Hovering or focusing it swings the watch faster, as if it were being dangled. Under reduced motion it hangs still.

### How is it used?

```html
<div class="watch" tabindex="0">
  <span class="dialW"></span>
  <span class="ticksW"></span>
  <span class="handS"></span>
</div>
```

The second hand uses `steps(60, end)` over 60 seconds, so it advances in sixty discrete jumps rather than sweeping smoothly, which is exactly how a mechanical tick reads. The other two hands run on real clock periods, 3600 seconds for the minute hand and 43200 for the hour, so the watch keeps honest relative time rather than spinning for show. The dial's minute ticks and the heavier hour markers are two `repeating-conic-gradient`s, each masked to its own radial band so one lands as a fine outer scale and the other as bolder markers further in.

### Why is it useful?

Vintage, timekeeping, and mechanical themes use a pocket watch. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
