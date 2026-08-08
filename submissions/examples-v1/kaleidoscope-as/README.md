# Kaleidoscope

### What does this do?

It shows a kaleidoscope you can look into. Eight coloured wedges turn slowly inside the barrel, mirror lines cut across them, the glow around the lens breathes, and stars twinkle behind it. Hovering or focusing the scope spins the pattern four times faster, as if you gave the barrel a twist. Under reduced motion the pattern holds still.

### How is it used?

```html
<div class="scope" tabindex="0">
  <div class="drum">
    <span class="wedge wd1"></span>
    <span class="wedge wd2"></span>
  </div>
  <span class="facets"></span>
</div>
```

Each wedge is a `clip-path` triangle pinned at the centre with `transform-origin: 0 0`, then turned to its own angle from a `--kw` custom property, so eight elements tile a full circle with no gaps. The spin lives on the wrapping drum rather than on the wedges, so it never overwrites their individual angles. The mirror lines are a single `repeating-conic-gradient` laid over the top, which is what sells the reflection without duplicating any of the artwork underneath.

### Why is it useful?

Toy, pattern, and visual interest themes use a kaleidoscope. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
