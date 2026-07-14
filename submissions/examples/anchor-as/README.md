# Anchor

### What does this do?

It shows a ship's anchor hanging on its chain underwater. It swings slowly from the top of the chain, and bubbles rise past it. Under reduced motion it hangs still.

### How is it used?

```html
<div class="anch">
  <span class="ringa"></span>
  <span class="shank"></span>
  <span class="arc"></span>
  <span class="fluke2 f2l"></span>
</div>
```

The curved arms are one element: a box with only its bottom two corners rounded and its `border-top-color` set to `transparent`, so the visible border draws a U and the middle stays hollow with no clip path or mask. The chain is a single `repeating-linear-gradient` of links running the full height of the scene, and the whole anchor swings from `transform-origin: 50% 0`, so it pivots at the shackle where the chain actually holds it rather than around its own middle.

### Why is it useful?

Nautical, harbour, and travel themes use an anchor. This builds one with pure CSS gradients and animation, no images, with a reduced motion fallback.
