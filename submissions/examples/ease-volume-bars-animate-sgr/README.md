# Volume Bars Animate Animation

## What does this do?

Animate vertical equalizer bars up and down with staggered scale oscillations to represent audio playback, running only when the media player is in the 'playing' state.

## How is it used?

1. Wrap the equalizer bars in a visualizer container:

```html
<div class="volume-visualizer">
  <span class="bar bar-1"></span>
  <span class="bar bar-2"></span>
  <span class="bar bar-3"></span>
</div>
```

2. Playback state is controlled either CSS-only (via checkbox `:checked` sibling selector) or by toggling `.is-playing` class on the parent container:

```css
/* Animation runs only when playing */
.is-playing .bar {
  animation-play-state: running;
}
```

## Why is it useful?

A dynamic audio visualizer is a critical UX indicator for media, podcast, and music players, assuring users that audio is actively playing even if their system is muted. By pausing the oscillation when the media is paused, the UI clearly conveys the player state. Staggered keyframe durations and delays create a realistic, organic audio frequency visualization.

## Tech Stack

- HTML
- CSS (transform scaleY, transitions, keyframes, animation-play-state)

## Preview

Open `demo.html` directly in your browser to see the effect.
