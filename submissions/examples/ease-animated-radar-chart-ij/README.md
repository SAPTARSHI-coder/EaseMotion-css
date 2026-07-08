# Animated Radar Chart

A radar/spider chart component with animated data point fills using CSS clip-path and keyframes.

## Features

| Feature | Description |
|---------|-------------|
| Animated Fill | Data polygon grows from center to final shape |
| CSS Clip-Path | Uses polygon clip-path for the radar shape |
| Replay Controls | Button to re-trigger the animation |
| Responsive | Scales with container size |

## Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--radar-duration` | 1.2s | Animation duration |
| `--radar-grid-color` | #e0e7ff | Grid line color |
| `--radar-fill-color` | #6366f1 | Data fill color |
| `--radar-stroke-color` | #4f46e5 | Border color |
| `--radar-bg` | #f8faff | Background color |

## How to Use

Open `demo.html` in a browser. The radar chart animates on load. Click "Replay Animation" to re-trigger.
