# Circle Progress Ring

Circular progress ring with animated SVG fill. The ring fills around the circle using `stroke-dasharray`/`stroke-dashoffset` driven by CSS custom properties.

## Features

- SVG circle progress ring with animated fill
- Customizable ring size, ring color, fill color, and fill duration
- Percentage label in center
- Range slider for interactive progress control
- Smooth CSS transitions

## Usage

Set CSS vars on `.pr-ring`:
- `--ring-size`: outer dimension (default `160px`)
- `--ring-color`: background track stroke (default `#334155`)
- `--fill-color`: progress fill stroke (default `#e94560`)
- `--fill-duration`: fill animation time (default `0.8s`)
