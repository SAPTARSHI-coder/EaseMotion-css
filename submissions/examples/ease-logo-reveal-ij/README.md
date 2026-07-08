# Logo Reveal

Interactive SVG logo reveal with stroke-dash path drawing animation and staggered multi-path support.

## Features

- SVG paths animate from invisible to drawn using `stroke-dasharray` / `stroke-dashoffset`
- Multiple logo style options (Hex Star, Ease Mark, Diamond Arc)
- Staggered path draw with configurable delay
- Fill color fades in after stroke completes
- Replay button to retrigger animation
- Speed slider (0.25x – 3x)

## Usage

Include `style.css` and `demo.html`. The component uses CSS custom properties for theming.

### Custom Properties

| Property | Default | Description |
|---|---|---|
| `--lr-duration` | `2s` | Stroke draw duration |
| `--lr-stroke-color` | `#6366f1` | Path stroke color |
| `--lr-fill-color` | `#6366f1` | Path fill color (appears after stroke) |
| `--lr-stagger` | `0.15s` | Delay between each path start |
| `--lr-bg` | `#0f0f1a` | Background color |

### JavaScript API

- `replayBtn` – retriggers the draw animation
- `speedSlider` – adjusts `--lr-speed` which scales animation timing
- `styleSelect` – switches between logo SVGs

## Browser Support

Chromium, Firefox, Safari. Requires `getTotalLength()` support.
