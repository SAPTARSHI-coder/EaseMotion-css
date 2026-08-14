# Sound Waveform

An animated audio waveform visualization with equalizer-style bars that simulate sound frequencies. Bars animate randomly to create a dynamic audio visualizer effect.

## Features

- Play/pause simulation with animated bar heights
- Adjustable bar count (8–64)
- Gradient color across bars from indigo to cyan
- Staggered animation delays per bar
- CSS custom properties for full customization

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--sw-duration` | `0.4s` | Animation duration for bar height changes |
| `--sw-bar-color-1` | `#6366f1` | Start color of the bar gradient (indigo) |
| `--sw-bar-color-2` | `#06b6d4` | End color of the bar gradient (cyan) |
| `--sw-bar-gap` | `2px` | Gap between adjacent bars |
| `--sw-radius` | `4px` | Border radius of individual bars |

## Usage

Include `style.css` and ensure the HTML structure uses `.waveform` as the container and `.bar` for each bar element. The JavaScript handles bar creation, animation, and controls.
