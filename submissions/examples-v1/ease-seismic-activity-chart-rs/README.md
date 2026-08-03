# Seismic Activity Chart

A pure CSS + SVG animated seismograph chart for visualizing earthquake activity, styled for monitoring dashboards.

## Features

- **SVG seismograph wave** — Smooth line chart with draw animation using `stroke-dasharray`/`stroke-dashoffset`
- **Earthquake event markers** — Circles pop in at event positions with staggered delays
- **Magnitude color coding** — Green (minor), yellow (moderate), orange (strong), red (major)
- **Summary statistics** — Auto-counted breakdown by magnitude category
- **Data table** — Chronological list with date, location, magnitude badge, and depth
- **Time range controls** — Switch between 7, 14, and 30-day views
- **Replay button** — Re-triggers the draw animation
- **Dark/light mode** — Automatic via `prefers-color-scheme`
- **Forced colors** — Respects `forced-colors: active`

## Custom Properties

| Property              | Default | Description                      |
| --------------------- | ------- | -------------------------------- |
| `--sac-draw-duration` | `2s`    | SVG line draw animation duration |
| `--sac-line-width`    | `2`     | Seismograph stroke width         |
| `--sac-rad`           | `12px`  | Card border radius               |

## Usage

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/easemotion-css/easemotion.min.css"
/>
<link rel="stylesheet" href="style.css" />

<div class="sac-card">
  <div class="sac-chart">
    <svg class="sac-svg" viewBox="0 0 800 400">
      <path class="sac-wave sac-wave-path" id="wave-path" d="" />
    </svg>
  </div>
  <button class="sac-replay" onclick="replay()">Replay</button>
</div>
```
