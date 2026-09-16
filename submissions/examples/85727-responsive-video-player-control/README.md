# Minimalist Responsive Video Player Control Component (`ease-video-player-ctrl`)

A pure HTML + Vanilla CSS minimalist responsive video player control surface component featuring a glassmorphic floating control bar (`backdrop-filter: blur(14px)`), center overlay play trigger, timeline seek slider, duration readout (`02:14 / 04:30`), volume hover slider popup, settings gear and fullscreen affordances, keyboard focus states, dark/light theme adaptation, and reduced motion fallbacks without any JavaScript or external dependencies.

## Features

- **Pure HTML + CSS**: 100% responsive minimalist video player control surface without JavaScript, external fonts, canvas engines, or build scripts. Works offline.
- **Glassmorphic Floating Control Bar**: Minimalist control interface with `backdrop-filter: blur(14px)`, custom seek slider, and vector SVG control icons.
- **100% Accessible**: Includes `role="toolbar"`, `aria-label="Video Controls"`, `<input type="range">` accessibility attributes (`aria-valuenow`, `aria-valuetext`), explicit focus rings (`:focus-visible`), and `@media (prefers-reduced-motion: reduce)` fallbacks (`transition: none !important;`).
- **Theme Adaptability**: Supports dark space surface default presentation and light theme adaptation (`@media (prefers-color-scheme)`).

## Usage

Include `style.css` and use semantic HTML:

```html
<div class="ease-video-player-ctrl">
  <div class="ease-video-stage">
    <button
      type="button"
      class="ease-video-center-play"
      aria-label="Play Video"
    >
      <svg class="play-icon" viewBox="0 0 24 24" width="32" height="32">
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
  </div>

  <div
    class="ease-video-control-bar"
    role="toolbar"
    aria-label="Video Controls"
  >
    <input
      type="range"
      class="ease-video-seek-slider"
      min="0"
      max="100"
      value="48"
      aria-label="Seek Timeline"
    />
    <div class="ease-video-controls-row">
      <button
        type="button"
        class="ctrl-btn play-pause-btn"
        aria-label="Play / Pause"
      >
        ...
      </button>
      <span class="time-readout">02:14 / 04:30</span>
      <button
        type="button"
        class="ctrl-btn fullscreen-btn"
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
.ease-video-player-ctrl {
  --vp-primary: #0284c7;
  --vp-glass-bg: rgba(17, 24, 39, 0.85);
  --vp-border: #1f2937;
}
```

## How to View

Open [`demo.html`](file:///Users/tanvitiwari/EaseMotion-css/submissions/examples/85727-responsive-video-player-control/demo.html) directly in any modern web browser to view the video player control surface UI offline.
