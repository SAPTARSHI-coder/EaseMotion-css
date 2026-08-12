# Interactive Audio Waveform Player Control Bar

> A custom-styled media player card featuring animated CSS equalizer bars that react to playback state, a morphing play/pause toggle, and a custom range slider seek bar.

## Features

- **CSS-Driven Waveform Animations** — The equalizer bars bounce dynamically using `@keyframes`. Their `animation-play-state` is hooked to the `.is-playing` class on the parent container, pausing flawlessly when playback stops.
- **Play/Pause Icon Morphing** — Smoothly transitions between Play and Pause states using CSS `transform: scale()` and rotation, linked to semantic `aria-pressed` states.
- **Custom Range Slider Progress** — Fully styled `<input type="range">` that cross-browser supports WebKit and Firefox, complete with an interactive progress fill bar managed via JavaScript.
- **Accessibility Ready** — High-contrast focus rings and `aria-label` hooks make the player keyboard navigable.
- **Motion Safe** — Honors OS `prefers-reduced-motion` settings, completely disabling the bouncing equalizer animation for users who prefer static UI.

## Files

```
submissions/examples/audio-waveform-player-em/
├── demo.html    — Semantic HTML structure containing track metadata, buttons, and range slider
├── style.css    — Custom range slider styling, equalizer `@keyframes`, and icon morphing logic
├── script.js    — Toggles parent playback classes (`.is-playing`) and manages a simulated demo seek timer
└── README.md    — Component documentation
```

## Design Tokens

| Variable | Default Value | Purpose |
|---|---|---|
| `--player-bg` | `#1e293b` | Background color of the media player card |
| `--primary`   | `#8b5cf6` | Violet accent for buttons and progress fill |
| `--waveform-bar` | `#8b5cf6` | Color of the bouncing equalizer bars |

## Usage

```html
<article class="audio-player" aria-label="Audio Player">
  <div class="player-header">
    <!-- Artwork and Track Info -->
    <button type="button" class="player-toggle" aria-pressed="false">...</button>
  </div>
  <div class="player-waveform">
    <!-- CSS Equalizer Bars -->
    <div class="wave-bar" style="--anim-delay: 0.1s;"></div>
  </div>
  <div class="player-progress">
    <!-- Progress Tracking Input -->
  </div>
</article>
```

## Acceptance Criteria ✅

- [x] Equalizer bars animate dynamically via CSS keyframes when track is marked as playing.
- [x] Equalizer bars freeze in place immediately when the track is paused (`animation-play-state: paused`).
- [x] Play/Pause button updates icon state smoothly (morphing transitions).
- [x] Seek progress bar reflects current playback progress visually with a custom fill track.
- [x] Responsive layout adapts cleanly to small constraints.
- [x] Adheres to repository file constraints (`demo.html`, `style.css`, etc).

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) library.
