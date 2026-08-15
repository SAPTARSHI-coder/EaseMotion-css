# Custom Neumorphism Video Player Control Component (`ease-neu-video-player`)

A pure HTML + Vanilla CSS Neumorphic video player control surface component featuring soft extruded dual shadows, inset timeline seek track (`box-shadow: inset ...`), soft embossed control buttons, time readout (`01:45 / 03:20`), volume hover slider popup, settings gear and fullscreen affordances, keyboard focus states, dark/light theme adaptation, and reduced motion fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive Neumorphic video player control surface without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Neumorphic Soft UI Aesthetic**: Soft background with dual raised box-shadows (`-6px -6px 14px var(--neu-shadow-light), 6px 6px 14px var(--neu-shadow-dark)`), inset slider tracks, and soft active button press states.
- **100% Accessible**: Includes `role="toolbar"`, `aria-label="Neumorphic Video Controls"`, `<input type="range">` accessibility attributes (`aria-valuenow`, `aria-valuetext`), explicit focus rings (`:focus-visible`), and `@media (prefers-reduced-motion: reduce)` fallbacks (`transition: none !important;`).
- **Theme Adaptability**: Supports light soft UI default presentation (`#e0e5ec`) and dark soft UI adaptation (`#1d212b`) using CSS custom properties (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<div class="ease-neu-video-player">
  <div class="ease-neu-video-stage">
    <button
      type="button"
      class="ease-neu-center-play"
      aria-label="Play Neumorphic Video"
    >
      <svg class="play-icon" viewBox="0 0 24 24" width="32" height="32">
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
  </div>

  <div
    class="ease-neu-control-bar"
    role="toolbar"
    aria-label="Neumorphic Video Controls"
  >
    <input
      type="range"
      class="ease-neu-seek-slider"
      min="0"
      max="100"
      value="52"
      aria-label="Seek Timeline"
    />
    <div class="ease-neu-controls-row">
      <button
        type="button"
        class="neu-ctrl-btn play-pause-btn"
        aria-label="Play / Pause"
      >
        ...
      </button>
      <div class="neu-time-readout">01:45 / 03:20</div>
      <button
        type="button"
        class="neu-ctrl-btn fullscreen-btn"
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
.ease-neu-video-player {
  --neu-surface: #e0e5ec;
  --neu-shadow-light: #ffffff;
  --neu-shadow-dark: #a3b1c6;
  --neu-primary: #0284c7;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/85725-neumorphism-video-player-control/demo.html) directly in any modern web browser to view the Neumorphic video player control surface UI offline.
