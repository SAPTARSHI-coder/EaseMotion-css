# Ease Volume Control Slider

## Description
A styled range-input volume slider with an animated fill, mute/unmute toggle button with icon swap, and a live percentage label.

## Features
- Custom-styled `<input type="range">` with animated gradient fill tracking the current value
- Mute button toggles volume to 0 and remembers the previous level to restore on unmute
- Icon morphs between speaker and muted-speaker states
- Fully keyboard accessible (native range input + focusable button)
- Customizable via CSS custom properties (colors, thumb size, track height)
- Respects `prefers-reduced-motion`

## Usage
```html
<div class="ease-volume" style="--volume-percent: 70%;">
  <button type="button" class="volume-icon-btn" aria-label="Mute/unmute volume">
    <svg class="icon-on">...</svg>
    <svg class="icon-muted">...</svg>
  </button>
  <div class="volume-track-wrap">
    <input type="range" class="volume-slider" min="0" max="100" value="70" aria-label="Volume" />
  </div>
  <span class="volume-percent-label">70%</span>
</div>
<script src="volume-slider.js"></script>
```

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--volume-fill-color` | `#38bdf8` | Filled portion of the track / accent color |
| `--volume-track-bg` | `#2a2a3f` | Unfilled track background |
| `--volume-thumb-color` | `#f5f7fa` | Slider thumb color |
| `--volume-height` | `6px` | Track thickness |
| `--volume-thumb-size` | `16px` | Thumb diameter |
| `--volume-duration` | `0.2s` | Transition speed |

## Files
- `demo.html` — live working example
- `style.css` — component styles
- `volume-slider.js` — fill/mute logic
- `README.md` — this file