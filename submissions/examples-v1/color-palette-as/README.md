# Color Palette Card

### What does this do?

It shows a color palette card with a row of swatches, each with its hex code below. The swatch color comes from a custom property, and a copy hint appears over the swatch on hover and keyboard focus.

### How is it used?

```html
<div class="palette">
  <div class="sw" style="--c: #6c63ff">
    <div class="sw-chip"><span class="sw-copy">Copy</span><button aria-label="Copy #6C63FF"></button></div>
    <span class="sw-hex">#6C63FF</span>
  </div>
</div>
```

Set each swatch color with the `--c` custom property and put the same hex in the label. A real button covers the chip, so it is focusable and the copy hint shows with `:focus-within`.

### Why is it useful?

Design tools and brand pages present color palettes. This lays out a palette of swatches with hex labels and a hover copy hint, each driven by a custom property, using only CSS. The hint fade is removed under reduced motion.
