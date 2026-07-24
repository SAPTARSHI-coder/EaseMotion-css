# Easel

### What does this do?

It shows a painter's easel with a landscape on the canvas. The brush sweeps across the picture and, as it passes, the brush strokes paint themselves in from left to right. The sun in the painting pulses, paint blobs on the tray wobble, and the easel leans gently. Under reduced motion the brush rests and the strokes are simply shown finished.

### How is it used?

```html
<div class="canvas2" tabindex="0">
  <span class="paint"></span>
  <span class="hill h1"></span>
  <span class="stroke sk1"></span>
</div>
```

A stroke paints itself by growing from `transform-origin: 0 50%` with `scaleX`, starting at 0 and running to 1. Because the origin is the left end, the stroke extends the way a brush actually lays paint down, rather than expanding outward from its middle. The stroke and the brush share the same four second duration, so the paint appears exactly while the brush is over it. Under reduced motion the stroke is pinned at `scaleX(1)`, so the picture is still finished rather than blank.

### Why is it useful?

Art, creativity, and portfolio themes use an easel. This builds one with pure CSS gradients and animation, no images and no JavaScript, with a reduced motion fallback.
