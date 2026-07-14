# Harp

### What does this do?

It shows a golden harp being played. Eleven strings of decreasing length span the frame, and they pluck in sequence from the long bass strings to the short high ones, each blurring wide and brightening for a moment as it vibrates. Music notes rise from the strings. Under reduced motion the strings rest and no notes float.

### How is it used?

```html
<div class="harp">
  <div class="strings"><span class="str s1"></span>...</div>
  <span class="neck"></span>
  <span class="pillar"></span>
  <span class="board"></span>
</div>
```

The frame is three bars: an upright pillar, a neck across the top, and a soundboard rotated to close the triangle. The strings hang from the neck with a length that shortens toward the treble end, so their lower tips trace the soundboard's diagonal. Each string's `pluck` animation scales it wide on the X axis and brightens it, which reads as a vibrating string, and staggered delays run the pluck up the harp like a glissando.

### Why is it useful?

Music, calm, and classical or fantasy themes use a harp. This builds a played harp with pure CSS shapes and animation, no images, with a reduced motion fallback.
