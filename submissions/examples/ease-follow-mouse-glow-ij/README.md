# Follow Mouse Glow

A radial gradient glow that follows the cursor with smooth interpolation and a trailing effect.

## Features

- Real-time cursor tracking with lerp-based interpolation
- Smooth trailing delay for a polished feel
- Toggle button to enable/disable the glow
- Custom properties for color, size, blur, and opacity

## Custom Properties

| Property           | Default   | Description                |
| ------------------ | --------- | -------------------------- |
| `--mg-duration`    | `0.15s`   | Opacity transition speed   |
| `--mg-glow-color`  | `#6366f1` | Glow radial color          |
| `--mg-glow-size`   | `200px`   | Diameter of glow element   |
| `--mg-blur-radius` | `80px`    | Blur applied to glow       |
| `--mg-opacity`     | `0.45`    | Glow opacity               |

## Usage

Include `style.css` and wrap content in a `#glowArea` container with a child `#glow` element.
