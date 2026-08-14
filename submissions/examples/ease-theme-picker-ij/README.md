# Theme Picker

An interactive color theme picker that previews themes on a sample card with smooth CSS transitions.

## Features

- Click color swatches to switch between preset themes (Light, Dark, Ocean, Forest, Sunset, Lavender)
- Custom color picker for real-time theming
- All page elements transition smoothly using CSS custom properties
- Interactive hover and active states on swatches and buttons

## CSS Custom Properties

| Variable | Default | Description |
|---|---|---|
| `--tp-duration` | `0.45s` | Transition duration for all themed elements |
| `--tp-swatch-size` | `48px` | Diameter of each color swatch |
| `--tp-swatch-border` | `3px` | Border width on swatches |
| `--tp-active-scale` | `1.18` | Scale factor on swatch hover |
| `--tp-radius` | `12px` | Border radius on the preview card |

## Usage

Open `demo.html` in any modern browser. Click a swatch or pick a custom color to see the theme preview animate.
