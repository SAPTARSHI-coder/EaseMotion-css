# Color Palette Picker

An interactive color palette with animated swatch selection. Click any circular swatch to select a color — it scales up with a pulsating ring animation. The selected hex value is displayed alongside a preview swatch.

## Features

- 16-color palette arranged in a responsive grid
- Scale + pulse-ring animation on selection
- Real-time hex value display
- Clear Selection button to reset

## CSS Custom Properties

| Property              | Default   | Description                 |
|-----------------------|-----------|-----------------------------|
| `--cp-picker-duration`| `0.3s`    | Transition/animation speed  |
| `--cp-swatch-size`    | `48px`    | Diameter of each swatch     |
| `--cp-swatch-radius`  | `50%`     | Border radius of swatches   |
| `--cp-selected-scale` | `1.2`     | Scale factor when selected  |
| `--cp-border-color`   | `#d1d5db` | Default swatch border color |
| `--cp-label-color`    | `#6b7280` | Label text color            |

## Usage

Open `demo.html` in any modern browser. Click any color circle to select it. The swatch scales up with a ring pulse animation and the hex value appears below. Press **Clear Selection** to reset.
