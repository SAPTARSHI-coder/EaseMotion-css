# Content Card Slider

A horizontally scrollable content card slider with CSS scroll-snap behavior. Cards snap into place as the user scrolls, creating a smooth paginated browsing experience.

## Features

- `scroll-snap-type: x mandatory` for clean snap alignment
- Per-card accent color via `--card-color`
- Custom slim scrollbar styling
- Cards with number, title, and description
- Fully responsive to container width

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--card-width` | `220px` | Width of each card |
| `--card-gap` | `1rem` | Gap between cards |
| `--slider-height` | `320px` | Height of the slider container |
| `--snap-duration` | `0.3s` | Scroll snap duration (browser-level) |

## Usage

Place `.ccs-card` elements inside `.ccs-track` within `.ccs-slider`. Set `--card-color` per card for the top accent border. The slider supports mouse wheel, touch swipe, and scrollbar drag.
