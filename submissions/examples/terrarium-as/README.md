# Terrarium

### What does this do?

It shows a glass terrarium on a table. Ferns sway inside it, the succulent's leaves breathe, condensation runs down the inside of the glass, and light catches the curve of the jar. Hovering or focusing it makes the condensation run faster, as if the glass just fogged up. Under reduced motion everything is still.

### How is it used?

```html
<div class="terr" tabindex="0">
  <span class="glassT"></span>
  <span class="soilT"></span>
  <span class="fernT ft1"></span>
  <span class="succLeaf sc1"></span>
</div>
```

The glass is a single translucent element layered on top of everything with `pointer-events: none`, so it tints the plants beneath it without blocking hover on the container. The succulent is four copies of one leaf shape, each pivoting from `transform-origin: 100% 100%` at the base of the plant with its own angle in a `--sc2` custom property, so a rosette falls out of one rule. The pebble layer and the moss are both stacks of hard stop `radial-gradient` circles painted into single elements, so the gravel and the cushion of moss cost two nodes rather than twenty.

### Why is it useful?

Plant, cosy, and desk object themes use a terrarium. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
