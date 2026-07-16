# Fig

### What does this do?

It shows a fig cut in two on a plate. It bobs gently and a drop of juice runs off each half. Hovering or focusing it swings the halves apart, showing the pink pulp and its radiating seeds. Under reduced motion it sits still.

### How is it used?

```html
<div class="figw" tabindex="0">
  <div class="halfF hfl">
    <span class="skinF"></span>
    <span class="pulp"></span>
    <span class="seedsF"></span>
  </div>
</div>
```

The seeds are the interesting bit. A fig's seeds radiate from the centre of the fruit, so they are drawn with a `repeating-conic-gradient` whose origin sits at `50% 62%`, the heart of the pulp, then masked with a `radial-gradient` so they only appear inside the pink core and stop at its edge. That gives dozens of fine radiating strands from one element and one mask, instead of a scatter of nodes. Only the left half is designed: the right reuses the same markup flipped with `scaleX(-1)`, which is why its hover rule reads `translateX(-34px)` yet moves it right on screen.

### Why is it useful?

Fruit, Mediterranean, and cut-open reveal themes use a fig. This builds one with pure CSS gradients and a transition driven hover, no images and no JavaScript, with a reduced motion fallback.
