# Interactive Audio Waveform Visualizer & Player Control

> A feature-rich, high-performance audio waveform player component built with pure HTML5, CSS flex/grid keyframe animations, and JavaScript Web Audio API synthesis. Perfect for voice message players, podcast widgets, AI audio generators (e.g., ElevenLabs, Spotify, Loom), and media apps.

## Features

- **Multi-Bar Animated Waveform** — Renders 50 vertical CSS bars with dynamic heights representing speech or audio frequency spectrums. Bars display distinct completed (vibrant violet-cyan gradient glow) vs. remaining colors.
- **Rhythmic Equalizer Animation** — When playing, equalizer bars execute organic `@keyframes` bounce animations with staggered CSS delay variables (`--bar-delay`). Automatically pauses animation when playback stops or reduced motion is preferred.
- **Play/Pause Icon Morphing** — Smoothly transitions between Play and Pause states using CSS transitions and SVG transformations, paired with an animated pulse ring.
- **Pointer Scrubbing & Hover Tooltip** — Hovering over the waveform dynamically displays a floating timestamp tooltip (`01:23`) and scrub line. Pointer down/drag instantly seeks to exact timestamp.
- **Sound Generator Engine** — Includes a built-in Web Audio API tone synthesizer helper so the demo generates synthesized audio soundscapes out of the box without external audio dependencies.
- **Audio Preset Switcher** — Allows switching between 4 distinct audio soundscapes (*AI Speech*, *Synth Pad*, *Chiptune Arp*, *Lo-Fi Beats*), dynamically recalculating waveform patterns and metadata.
- **Accessible & Motion-Safe** — Full keyboard focus rings (`:focus-visible`), ARIA slider role hooks (`aria-valuenow`, `aria-valuetext`), keyboard shortcuts, and OS `prefers-reduced-motion` compliance.

---

## File Structure

```
submissions/examples/audio-waveform-player-hl/
├── index.html    — Semantic HTML5 structure with SVG icons, track metadata, and controls
├── style.css    — Glassmorphism card, equalizer `@keyframes`, waveform bar gradients, and responsive layout
├── script.js    — Playback timer loop, pointer scrubbing, Web Audio synth engine, and keyboard shortcuts
└── README.md    — Component documentation
```

---

## Design Tokens (CSS Variables)

| Variable | Default Value | Purpose |
|---|---|---|
| `--card-bg` | `rgba(18, 24, 38, 0.75)` | Glassmorphic background color for player card |
| `--primary-violet` | `#8b5cf6` | Violet gradient accent for buttons and waveform |
| `--primary-cyan` | `#06b6d4` | Cyan accent for progress fill and status glow |
| `--bar-unplayed` | `rgba(255, 255, 255, 0.14)` | Background color of remaining/unplayed waveform bars |
| `--bar-hover-color` | `#f43f5e` | Crimson highlight color for pointer scrub indicator |
| `--radius-card` | `24px` | Border radius of the main player card |

---

## Usage

```html
<article class="audio-player-card" id="audio-player" aria-label="Interactive Audio Player">
  <!-- Track Metadata Header -->
  <header class="player-header">
    <h1 class="track-title">Aetherial Neural Voice #042</h1>
  </header>

  <!-- Interactive Waveform Scrubber -->
  <section class="waveform-section">
    <div class="waveform-container" tabindex="0" role="slider" aria-valuenow="0">
      <div class="bars-wrapper" id="bars-wrapper">
        <!-- Vertical bars generated dynamically or semantically -->
        <div class="waveform-bar is-played" style="--bar-height: 65%; --bar-delay: 0.2s;"></div>
      </div>
    </div>
  </section>

  <!-- Controls -->
  <footer class="player-controls">
    <button type="button" class="btn-play-pause" id="btn-play-pause" aria-pressed="false">
      <!-- Icon SVG -->
    </button>
  </footer>
</article>
```

---

## Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| <kbd>Space</kbd> / <kbd>K</kbd> | Toggle Play / Pause |
| <kbd>←</kbd> / <kbd>J</kbd> | Skip Back 5 seconds |
| <kbd>→</kbd> / <kbd>L</kbd> | Skip Forward 5 seconds |
| <kbd>M</kbd> | Toggle Mute / Unmute |
| <kbd>1</kbd> - <kbd>4</kbd> | Switch Soundscape Preset (Speech, Synth, Chiptune, Lo-Fi) |

---

## Acceptance Criteria Checklist ✅

- [x] Completely self-contained in `submissions/examples/audio-waveform-player-hl/`.
- [x] Play/Pause button switches state smoothly with icon morph transition and pulse animation.
- [x] Waveform bars reflect playback progress with distinct completed (gradient glow) vs remaining colors.
- [x] Equalizer bars exhibit subtle rhythmic animation during active playback state (`.is-playing`).
- [x] Hover timestamp tooltip displays pointer position time during pointer scrubbing over waveform.
- [x] Keyboard focusable with spacebar play/pause keybinding support and ARIA attributes.
- [x] Built-in mock audio generator helper (Web Audio API) works out of the box without external assets.

---

## License

MIT — Part of the [EaseMotion-css](https://github.com/SAPTARSHI-coder/EaseMotion-css) library.
