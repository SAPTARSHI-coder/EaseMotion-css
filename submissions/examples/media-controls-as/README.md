# Media Player Controls

### What does this do?

It shows a music player control bar with track art, title and artist, a progress track with an elapsed fill and a knob, timestamps at each end, and transport buttons for previous, play, and next. The play button stands out as a filled circle.

### How is it used?

```html
<div class="player">
  <div class="pl-head">
    <div class="pl-art"><svg>...</svg></div>
    <div class="pl-meta"><span class="pl-title">Nightfall</span><span class="pl-artist">Aurora Lane</span></div>
  </div>
  <div class="pl-track" style="--played: 42%" role="progressbar" aria-valuenow="42"></div>
  <div class="pl-times"><span>1:47</span><span>4:12</span></div>
  <div class="pl-controls">
    <button class="pl-btn"><svg>...</svg></button>
    <button class="pl-btn pl-play"><svg>...</svg></button>
    <button class="pl-btn"><svg>...</svg></button>
  </div>
</div>
```

Set the elapsed amount with the `--played` custom property on the track. The knob follows the same value.

### Why is it useful?

Audio and video widgets need a clean control bar. This lays out a media player with a progress bar, times, and transport controls, using only CSS and inline SVG so a developer can wire real playback on top. Buttons are labeled and show a focus ring, and transitions are removed under reduced motion.
