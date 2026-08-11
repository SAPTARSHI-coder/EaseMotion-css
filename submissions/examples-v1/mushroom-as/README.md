# Mushroom

### What does this do?

It shows two spotted toadstools growing out of the forest floor. They sway from their bases on separate offsets, the grass blades bend, and spores drift up and fade. Under reduced motion the patch is still.

### How is it used?

```html
<div class="shroom big">
  <span class="cap"></span>
  <span class="stem"></span>
  <span class="ring"></span>
</div>
```

The cap and its white spots are one element: six hard stop `radial-gradient` circles are painted over the red base, so they clip to the dome shape for free and never spill off the edge, and the dome itself is an asymmetric `border-radius` rather than a clip path. The two mushrooms share the same markup and CSS, sized only by the parent's width and height, because every inner part is measured in percentages. Both sway from `transform-origin: 50% 100%` so they hinge at the soil rather than pivoting mid air.

### Why is it useful?

Forest, garden, and fantasy themes use toadstools. This builds a patch with pure CSS gradients and animation, no images, with a reduced motion fallback.
