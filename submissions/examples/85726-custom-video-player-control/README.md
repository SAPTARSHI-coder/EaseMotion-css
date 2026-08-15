# Custom Cyberpunk Video Player Control Component (`ease-cyber-video-player`)

A pure HTML + Vanilla CSS Cyberpunk video player control surface component featuring an angular cyan glowing control bar, hexagonal center play trigger, HUD scanlines, digital time readout (`03:42 // 08:15`), neon seek slider, volume hover popup, resolution badge, settings & fullscreen affordances, keyboard focus states, dark/light theme adaptation, and reduced motion fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Cyberpunk video player control surface without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Cyberpunk HUD Aesthetic**: Dark space canvas with CRT scanline overlay, ambient status badges (`SYS.MATRIX // ONLINE`), cyan (`#00ffff`) & magenta (`#ff007f`) neon glows, and digital monospace HUD time readout.
- **100% Accessible**: Includes `role="toolbar"`, `aria-label="Cyberpunk Video Controls"`, `<input type="range">` accessibility attributes (`aria-valuenow`, `aria-valuetext`), explicit cyan focus rings (`:focus-visible`), and `@media (prefers-reduced-motion: reduce)` fallbacks (`transition: none !important;`).
- **Theme Adaptability**: Supports dark space surface default presentation and light theme adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<div class="ease-cyber-video-player">
  <div class="ease-cyber-video-stage">
    <div class="cyber-scanline-overlay" aria-hidden="true"></div>
    <button
      type="button"
      class="ease-cyber-center-play"
      aria-label="Play Cyber Video"
    >
      <svg class="play-icon" viewBox="0 0 24 24" width="32" height="32">
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
  </div>

  <div
    class="ease-cyber-control-bar"
    role="toolbar"
    aria-label="Cyberpunk Video Controls"
  >
    <input
      type="range"
      class="ease-cyber-seek-slider"
      min="0"
      max="100"
      value="62"
      aria-label="Seek Timeline"
    />
    <div class="ease-cyber-controls-row">
      <button
        type="button"
        class="cyber-ctrl-btn play-pause-btn"
        aria-label="Play / Pause"
      >
        ...
      </button>
      <div class="hud-time-readout">03:42 // 08:15</div>
      <button
        type="button"
        class="cyber-ctrl-btn fullscreen-btn"
        aria-label="Toggle Fullscreen"
      >
        ...
      </button>
    </div>
  </div>
</div>
```

### Customization Variables

```css
.ease-cyber-video-player {
  --cyber-cyan: #00ffff;
  --cyber-pink: #ff007f;
  --cyber-amber: #ffaa00;
  --font-mono: monospace, ui-monospace;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/85726-custom-video-player-control/demo.html) directly in any modern web browser to view the Cyberpunk video player control surface UI offline.
