# Morphing SVG Blob

Organic shape morphing with smooth SVG path animations. A blob that seamlessly transitions between different organic shapes with synchronized color changes.

## Features

- 5 distinct blob shapes: Circle, Flower, Star, Triangle, Blob
- Smooth morphing via JavaScript-driven path interpolation
- Easing curves for organic, natural-feeling transitions
- Gradient color changes synchronized with shape morphs
- SVG filter (blur + color matrix) for gooey, liquid-like appearance
- Pause/Play toggle
- Adjustable morphing speed (0.1x – 3x)
- Direct shape selection buttons
- Auto-cycling through all shapes

## Usage

Open `demo.html` in any modern browser. The blob will begin cycling through shapes automatically.

### Controls

| Control     | Description                    |
| ----------- | ------------------------------ |
| Pause/Play  | Toggle auto-morphing on/off    |
| Speed       | Adjust morphing speed via slider |
| Shape buttons | Jump to a specific shape instantly |

## CSS Custom Properties

| Property               | Default    | Description                |
| ---------------------- | ---------- | -------------------------- |
| `--msb-duration`       | `2s`       | Transition duration for color changes |
| `--msb-blob-color-1`  | `#6c63ff`  | Primary blob color         |
| `--msb-blob-color-2`  | `#ff6584`  | Secondary blob color       |
| `--msb-blob-color-3`  | `#43e97b`  | Tertiary blob color        |
| `--msb-bg`            | `#0f0f1a`  | Page background color      |

## JavaScript API

Key variables (accessible via dev console):

| Variable         | Description                      |
| ---------------- | -------------------------------- |
| `SHAPES`         | Array of shape definitions       |
| `currentIndex`   | Index of the current shape       |
| `isPlaying`      | Whether auto-morph is active     |
| `morphProgress`  | Progress of current morph (0–1)  |
| `goToShape(n)`   | Jump to shape at index `n`       |

## Browser Support

- Chrome 50+
- Firefox 55+
- Safari 11+
- Edge 79+

Relies on `requestAnimationFrame`, SVG, CSS custom properties, and `linearGradient`.

## Credits

Built with vanilla JavaScript, SVG, and CSS custom properties. Inspired by organic liquid morphing effects.
