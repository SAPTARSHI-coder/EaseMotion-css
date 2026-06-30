# Waveform Pulse Animation

## What does this do?

Animates a series of vertical bars representing a symmetrical audio waveform profile, which pulsates symmetrically from its center to reflect active sound playback.

## How is it used?

1. Wrap the audio waveform bars in a visualizer container:

```html
<div class="waveform-visualizer">
  <span class="bar bar-1"></span>
  <span class="bar bar-2"></span>
  <span class="bar bar-3"></span>
  <!-- etc -->
</div>
```

2. Playback state is controlled either CSS-only (via checkbox `:checked` sibling selector) or by toggling `.is-playing` class on the parent container:

```css
/* Symmetrical center-origin pulse */
.is-playing .bar {
  animation-play-state: running;
}
```

## Why is it useful?

Unlike volume/equalizer bars that scale from the bottom-up, a waveform visualizer oscillates symmetrically from the vertical center (mirroring actual sound wave recordings). Each bar is styled with different peak heights to build a realistic audio track signature, and staggered durations create an organic, fluid motion during playback.

## Tech Stack

- HTML
- CSS (transform-origin center, scaleY animations)

## Preview

Open `demo.html` directly in your browser to see the effect.
