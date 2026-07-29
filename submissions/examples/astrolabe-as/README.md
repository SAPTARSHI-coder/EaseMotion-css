# Astrolabe

### What does this do?

It shows a brass astrolabe against a starfield. The rete, the openwork star map, turns slowly over the plate; the alidade, the sighting rule across the face, swings back and forth as if taking a reading; and the stars twinkle. Hovering or focusing the instrument spins the rete five times faster. Under reduced motion everything holds position.

### How is it used?

```html
<div class="astro" tabindex="0">
  <span class="mater"></span>
  <span class="ticks"></span>
  <div class="rete">
    <span class="ringA ra1"></span>
    <span class="pointerA pa1"></span>
  </div>
</div>
```

The degree scale around the rim is a `repeating-conic-gradient` masked to a thin ring: the mask is a `radial-gradient` that is transparent in the middle and opaque only between 44 and 47 percent, so the tick marks appear as a band around the edge instead of spokes across the whole disc. The plate's altitude circles come from a `repeating-radial-gradient`, so the concentric grid is one property. The rete's star pointers each keep their bearing in a `--pa2` custom property, and the rotation lives on the rete wrapper, so the pointers hold their relative positions as the whole star map turns.

### Why is it useful?

Astronomy, antique instrument, and navigation themes use an astrolabe. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
