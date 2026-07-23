# Coconut

### What does this do?

It shows a coconut drink on the beach with a striped straw, a paper umbrella and a wedge of pineapple. The coconut sways, the liquid inside sloshes, the umbrella twirls, and bubbles rise from the straw. Hovering or focusing it tips the whole drink faster, as if someone picked it up. Under reduced motion it sits still.

### How is it used?

```html
<div class="coco" tabindex="0">
  <span class="shellC"></span>
  <span class="fibre"></span>
  <span class="straw"></span>
  <span class="umbrella"></span>
</div>
```

The paper umbrella is a `repeating-conic-gradient` anchored at `50% 100%`, the point of the parasol, so the alternating red and white panels fan out from the tip exactly as they would on a real one, in a single element. The coir husk is a `repeating-linear-gradient` clipped by the shell's own `border-radius`, so the fibres curve around the nut instead of running flat across it. The wedge of fruit is a plain `conic-gradient` limited to 60 degrees, which cuts a slice shape without a clip path.

### Why is it useful?

Beach, tropical, and summer drink themes use a coconut. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
