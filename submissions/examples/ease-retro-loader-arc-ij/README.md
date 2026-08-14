# Retro Loader Arc

A retro-style loading arc/spinner with multiple variations, conic-gradient arcs, and speed control.

## Features

- Three loader variations: Classic Arc, Radar Scanner, Color-Cycling Arc
- Conic-gradient-based arcs for the radar style
- Border-based growing/shrinking arc for classic and cycling styles
- Speed control slider (0.5× to 3×)
- Continuous color cycling on the third loader via JS
- Variation showcase cards at the bottom

## Custom Properties

| Property | Default | Description |
|---|---|---|
| `--rla-duration` | `0.3s` | Transition duration for UI elements |
| `--rla-arc-color` | `#667eea` | Primary arc color |
| `--rla-track-color` | `#e2e8f0` | Track/background ring color |
| `--rla-size` | `60px` | Width and height of the loader |
| `--rla-speed` | `1.2s` | Base rotation duration |

## Usage

```html
<link rel="stylesheet" href="style.css">
<!-- Include one of the loader elements from demo.html -->
```

Apply the `rla-loader` class plus a variant class (`rla-loader--classic`, `rla-loader--radar`, or `rla-loader--cycle`). Override `--rla-speed-factor` per element to control speed relative to the base.
