# Custom Audio Player Widget with Gradient Glow Styling (`ease-audio-player-glow`)

A pure HTML + Vanilla CSS Audio Player Widget featuring a multi-color ambient gradient glow aura (`linear-gradient(135deg, #a855f7 0%, #ec4899 50%, #3b82f6 100%)`), CSS animated equalizer waveform bars, timeline seek slider, volume hover slider popup, playback control cluster, time readout (`01:24 / 03:45`), keyboard focus states, dark/light theme adaptation, and reduced motion fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Audio Player Widget UI without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Ambient Gradient Glow Aura**: Multi-colored glow backdrop (`filter: blur(20px)`) that intensifies on hover.
- **CSS Animated Equalizer**: Pure CSS animated waveform equalizer bars (`@keyframes ease-eq-bounce`).
- **100% Accessible**: Includes `role="toolbar"`, `aria-label="Audio Playback Controls"`, `<input type="range">` accessibility attributes (`aria-valuenow`, `aria-valuetext`), explicit focus rings (`:focus-visible`), and `@media (prefers-reduced-motion: reduce)` fallbacks (`animation: none !important; transition: none !important;`).
- **Theme Adaptability**: Supports dark space surface default presentation and light theme adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<div class="ease-audio-player-glow">
  <div class="audio-glow-halo" aria-hidden="true"></div>
  <div class="audio-card-surface">
    <div class="audio-track-header">
      <div class="track-info">
        <h2 class="track-title">Midnight Synthwave</h2>
        <p class="track-artist">Neon Echoes</p>
      </div>
    </div>
    <input
      type="range"
      class="ease-audio-seek-slider"
      min="0"
      max="100"
      value="38"
    />
    <div class="audio-controls-row">
      <div class="time-readout">01:24 / 03:45</div>
      <button
        type="button"
        class="audio-btn ctrl-play-btn"
        aria-label="Play / Pause Track"
      >
        ...
      </button>
    </div>
  </div>
</div>
```

### Customization Variables

```css
.ease-audio-player-glow {
  --ap-glow-1: #a855f7;
  --ap-glow-2: #ec4899;
  --ap-glow-3: #3b82f6;
  --ap-surface: #1e293b;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/85721-audio-player-gradient-glow/demo.html) directly in any modern web browser to view the Audio Player Widget UI offline.
