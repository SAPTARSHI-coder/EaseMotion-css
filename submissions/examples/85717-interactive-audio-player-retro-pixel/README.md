# Interactive Audio Player Widget with Retro Pixel Styling (`ease-pixel-audio-player`)

A pure HTML + Vanilla CSS Audio Player Widget featuring 8-bit retro arcade pixel styling (`box-shadow: 6px 6px 0 #000000`), blocky hard-shadowed controls (`.pixel-btn`), stepped pixel equalizer bars (`@keyframes ease-eq-bounce`), stepped timeline seek slider, volume hover slider popup, playback control cluster, duration readout (`01:28 / 03:30`), keyboard focus states, dark/light theme adaptation, and reduced motion fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Retro Pixel Audio Player Widget UI without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **8-Bit Retro Arcade Aesthetic**: Blocky 4px solid borders with hard-cast black pixel drop-shadows, stepped pixel range sliders, and retro arcade amber (`#f59e0b`) & emerald (`#10b981`) accents.
- **CSS Animated Equalizer**: Pure CSS animated waveform equalizer bars with stepped timing function (`animation: ease-eq-bounce 1.2s steps(4, end)`).
- **100% Accessible**: Includes `role="toolbar"`, `aria-label="Retro Pixel Playback Controls"`, `<input type="range">` accessibility attributes (`aria-valuenow`, `aria-valuetext`), explicit high contrast focus rings (`:focus-visible`), and `@media (prefers-reduced-motion: reduce)` fallbacks (`animation: none !important; transition: none !important;`).
- **Theme Adaptability**: Supports dark space surface default presentation and light theme adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<div class="ease-pixel-audio-player">
  <div class="pixel-card-surface">
    <div class="pixel-track-header">
      <div class="track-info">
        <h2 class="track-title">Pixel Chiptune 8-Bit</h2>
      </div>
    </div>
    <input
      type="range"
      class="ease-pixel-seek-slider"
      min="0"
      max="100"
      value="42"
    />
    <div class="pixel-controls-row">
      <div class="time-readout">01:28 / 03:30</div>
      <button
        type="button"
        class="pixel-btn ctrl-play-btn"
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
.ease-pixel-audio-player {
  --pixel-surface: #1a1d26;
  --pixel-border: #000000;
  --pixel-accent: #f59e0b;
  --pixel-secondary: #10b981;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/85717-interactive-audio-player-retro-pixel/demo.html) directly in any modern web browser to view the Retro Pixel Audio Player Widget UI offline.
