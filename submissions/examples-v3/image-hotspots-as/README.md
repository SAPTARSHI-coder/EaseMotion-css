# Image Hotspots

### What does this do?

It shows a shoppable scene with interactive hotspots. Pulsing dots sit on top of the artwork at set positions; hovering or focusing a dot pops a tooltip card with the item name and price, complete with a little pointer arrow. The scene itself is drawn with CSS so the demo needs no image file.

### How is it used?

```html
<button class="hotspot" style="--x: 34%; --y: 66%;">
  <span class="hs-dot"></span>
  <span class="hs-card"><b>Velvet Sofa</b><em>$899</em></span>
</button>
```

Each hotspot is positioned with `--x` and `--y` percentages over the scene. The `hs-dot` pulses with a keyframe, and `.hotspot:hover .hs-card` (plus `:focus-visible` for keyboards) reveals the tooltip.

### Why is it useful?

Shoppable images, product tours, and interactive diagrams pin details to points on a picture. This provides the hotspot and tooltip pattern with pure CSS positioning and reveal, ready to place over any real image.
