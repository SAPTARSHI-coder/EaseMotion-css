# Cassette Tape

### What does this do?

It shows a cassette tape with a handwritten label, two toothed reels that spin at different speeds, wound tape of different sizes on each side, corner screws, and the capstan holes along the bottom. The reels turn continuously, and stop under reduced motion.

### How is it used?

```html
<div class="cassette">
  <div class="label"><span class="brand">MIXTAPE</span><span class="line">Summer 2026</span></div>
  <div class="window">
    <div class="reel left"><span class="tape"></span><span class="hub"><i></i>...</span></div>
  </div>
</div>
```

Each reel has a `tape` ring and a `hub` with six spoke `i` elements rotated by a `--r` index. The hubs animate with `reel-spin`, the two sides using different durations so they turn at different rates like a real tape.

### Why is it useful?

Music apps, retro themes, and playlist covers use a cassette motif. This builds one with spinning reels, a label, and screws using only CSS, with no images and a reduced motion fallback.
