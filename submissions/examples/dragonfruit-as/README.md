# Dragonfruit

### What does this do?

It shows a dragonfruit cut in two on a board. It bobs gently, the green scales along its skin flutter, and sparkles pop around it. Hovering or focusing it swings the halves apart to show the speckled white flesh inside. Under reduced motion it sits closed and still.

### How is it used?

```html
<div class="dragon" tabindex="0">
  <div class="halfD dl">
    <span class="rindD"></span>
    <span class="fleshD"></span>
    <span class="seedsD"></span>
  </div>
</div>
```

Only one half is designed: the right one reuses the same markup flipped with `scaleX(-1)`, which is why its hover rule reads `translateX(-36px)` yet moves it to the right, since that transform is written in the flipped half's own coordinate space. The seeds are ten hard stop `radial-gradient` circles painted into one element that shares the flesh's `border-radius`, so they scatter across the cut face and clip to it for free rather than needing ten elements. Each leafy scale keeps its own angle in a `--dd` custom property that the flutter keyframe reads back, so the shared animation never flattens them.

### Why is it useful?

Fruit, tropical, and vivid colour themes use a dragonfruit. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
