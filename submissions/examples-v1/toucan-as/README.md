# Toucan

### What does this do?

It shows a toucan perched on a branch, showing off its huge banded beak. The bird bobs, tilts its head, shuffles its wing, and blinks, while the leaves either side of it rustle. Under reduced motion the toucan holds still.

### How is it used?

```html
<div class="toucan">
  <span class="bodyt"></span>
  <span class="bibt"></span>
  <div class="headt"><span class="beakt"></span><span class="eyet"></span></div>
</div>
```

The toucan's famous beak is a single element: one hard-stop `linear-gradient` paints the yellow, orange, red, and black bands in sequence, and asymmetric `border-radius` values curve it into the classic banana shape. Because the bands live in the background rather than as child elements, they follow the beak's curve automatically as the head tilts.

### Why is it useful?

Tropical, rainforest, and colorful or bold themes use a toucan. This builds a perched toucan with a gradient-banded beak in pure CSS, no images, with a reduced motion fallback.
