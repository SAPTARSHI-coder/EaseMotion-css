# Now Playing Bar

### What does this do?

It shows a now playing card with track art, title and artist, an animated equalizer of bars that bounce to fake the beat, and a play or pause button. Each equalizer bar animates on its own delay.

### How is it used?

```html
<div class="now-playing">
  <div class="np-art"><svg>...</svg></div>
  <div class="np-meta"><strong>Nightfall</strong><small>Aurora Lane</small></div>
  <div class="np-eq"><span></span><span></span><span></span><span></span></div>
  <button class="np-play" aria-label="Pause"><svg>...</svg></button>
</div>
```

The equalizer is a row of spans that animate their height up and down, each with a different `animation-delay` so they fall out of sync like real audio levels.

### Why is it useful?

Music widgets show an animated equalizer while a track plays. This builds a now playing card with a bouncing bar equalizer from staggered keyframes, using only CSS. Under reduced motion the bars rest at a steady height.
