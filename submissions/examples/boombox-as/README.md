# Boombox

### What does this do?

It shows an eighties boombox playing a tape. Both speaker cones thump on alternating beats, the two cassette reels spin at different speeds, and a colored VU meter bounces between them. Under reduced motion the speakers, reels, and meter all rest.

### How is it used?

```html
<div class="body">
  <div class="speaker sl"><span class="cone"></span></div>
  <div class="deck"><span class="reel rl"></span><span class="tape"></span></div>
  <div class="vu"><span class="vb v1"></span></div>
</div>
```

The speaker grilles are a `repeating-radial-gradient` of concentric rings, so each cone's ridges come from one property. The cassette reels use a `repeating-conic-gradient` for their spokes and spin at deliberately different durations, the way a real tape's take-up and supply reels do.

### Why is it useful?

Retro, music, and party themes use a boombox. This builds a playing boombox with pure CSS gradients and animation, no images, with a reduced motion fallback.
