# Custom Audio Player Widget with Dark Mode Styling (`ease-dark-audio-player`)

A pure HTML + Vanilla CSS Audio Player Widget featuring a deep obsidian dark mode styling (`#090d16` background, `#131a29` surface), sky-blue active accent highlights (`#38bdf8`), CSS animated equalizer waveform bars, timeline seek slider, volume hover slider popup, playback control cluster, duration readout (`03:12 / 05:40`), keyboard focus states, dark/light theme adaptation, and reduced motion fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Dark Mode Audio Player Widget UI without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Dark Mode Obsidian Aesthetic**: Deep obsidian background with midnight slate card surface, sky-blue accent indicators, and high contrast text readability.
- **CSS Animated Equalizer**: Pure CSS animated waveform equalizer bars (`@keyframes ease-eq-bounce`).
- **100% Accessible**: Includes `role="toolbar"`, `aria-label="Dark Mode Playback Controls"`, `<input type="range">` accessibility attributes (`aria-valuenow`, `aria-valuetext`), explicit focus rings (`:focus-visible`), and `@media (prefers-reduced-motion: reduce)` fallbacks (`animation: none !important; transition: none !important;`).
- **Theme Adaptability**: Supports dark space surface default presentation and light theme adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<div class="ease-dark-audio-player">
  <div class="dark-glow-halo" aria-hidden="true"></div>
  <div class="dark-card-surface">
    <div class="dark-track-header">
      <div class="track-info">
        <h2 class="track-title">Obsidian Resonance</h2>
      </div>
    </div>
    <input
      type="range"
      class="ease-dark-seek-slider"
      min="0"
      max="100"
      value="55"
    />
    <div class="dark-controls-row">
      <div class="time-readout">03:12 / 05:40</div>
      <button
        type="button"
        class="dark-btn ctrl-play-btn"
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
.ease-dark-audio-player {
  --dark-bg: #090d16;
  --dark-surface: #131a29;
  --dark-accent: #38bdf8;
  --dark-text: #f8fafc;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/85718-custom-audio-player-dark-mode/demo.html) directly in any modern web browser to view the Dark Mode Audio Player Widget UI offline.
