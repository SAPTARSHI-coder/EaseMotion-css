# Popsicle

### What does this do?

It shows a three flavour popsicle with a bite taken out of it, melting in the sun. It rocks on its stick, frost crystals twinkle on the ice, drips stretch down off the bottom edge, and a puddle spreads beneath it. Hovering or focusing it makes it rock faster, as if it is about to slide off the stick. Under reduced motion it holds still.

### How is it used?

```html
<div class="pop" tabindex="0">
  <span class="stickp"></span>
  <span class="ice"></span>
  <span class="layer2"></span>
  <span class="frost"></span>
</div>
```

The bite is a genuine hole, not a coloured circle pasted on top. A `mask-image` with a transparent circle punched into an otherwise opaque radial gradient removes that part of the ice, so whatever is behind the popsicle shows through it, which is why the sun can sit inside the bite. Each drip stretches from `transform-origin: 50% 0`, so it grows downward off the bottom edge rather than expanding from its own middle, and the whole popsicle rocks from `50% 100%`, the tip of the stick, so it pivots where a hand would hold it.

### Why is it useful?

Summer, dessert, and playful themes use a popsicle. This builds one with pure CSS gradients, masks and animation, no images and no JavaScript, with a reduced motion fallback.
