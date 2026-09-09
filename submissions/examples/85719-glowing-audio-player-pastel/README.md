# Glowing Audio Player Widget with Pastel Styling (`ease-pastel-audio-player`)

A pure HTML + Vanilla CSS Audio Player Widget featuring soft pastel glow styling (`linear-gradient(135deg, #fbcfe8 0%, #e9d5ff 50%, #bae6fd 100%)`), CSS animated equalizer waveform bars, timeline seek slider, volume hover slider popup, playback control cluster, duration readout (`02:15 / 04:10`), keyboard focus states, dark/light theme adaptation, and reduced motion fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Pastel Audio Player Widget UI without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Pastel Glow Aesthetic**: Soft pastel aura backdrop (`filter: blur(20px)`) with pink (`#fbcfe8`), purple (`#e9d5ff`), and blue (`#bae6fd`) tones.
- **CSS Animated Equalizer**: Pure CSS animated waveform equalizer bars (`@keyframes ease-eq-bounce`).
- **100% Accessible**: Includes `role="toolbar"`, `aria-label="Pastel Audio Playback Controls"`, `<input type="range">` accessibility attributes (`aria-valuenow`, `aria-valuetext`), explicit focus rings (`:focus-visible`), and `@media (prefers-reduced-motion: reduce)` fallbacks (`animation: none !important; transition: none !important;`).
- **Theme Adaptability**: Supports dark space surface default presentation and light theme adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<div class="ease-pastel-audio-player">
  <div class="pastel-glow-halo" aria-hidden="true"></div>
  <div class="pastel-card-surface">
    <div class="pastel-track-header">
      <div class="track-info">
        <h2 class="track-title">Pastel Dreamscape</h2>
      </div>
    </div>
    <input
      type="range"
      class="ease-pastel-seek-slider"
      min="0"
      max="100"
      value="45"
    />
    <div class="pastel-controls-row">
      <div class="time-readout">02:15 / 04:10</div>
      <button
        type="button"
        class="pastel-btn ctrl-play-btn"
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
.ease-pastel-audio-player {
  --pastel-pink: #fbcfe8;
  --pastel-purple: #e9d5ff;
  --pastel-blue: #bae6fd;
  --pastel-accent: #d946ef;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/85719-glowing-audio-player-pastel/demo.html) directly in any modern web browser to view the Pastel Audio Player Widget UI offline.
