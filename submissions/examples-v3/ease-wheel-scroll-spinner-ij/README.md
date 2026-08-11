# Wheel Scroll Spinner

A scroll wheel/picker with items that scale and highlight based on scroll position.

## Features

- Vertical and horizontal scroll variants
- Items scale up and gain opacity as they approach center
- Selected item highlights with accent color and glow
- Smooth CSS scroll-snap to nearest item
- Fully customizable via CSS custom properties

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--wss-duration` | `0.3s` | Animation duration |
| `--wss-item-color` | `#1e293b` | Default item background |
| `--wss-selected-color` | `#6366f1` | Selected item background |
| `--wss-highlight-color` | `#818cf8` | Toggle button hover color |
| `--wss-radius` | `12px` | Border radius for items |

## Usage

Open `demo.html` in any modern browser. Scroll through the list to select items. Click the toggle button to switch between vertical and horizontal orientation.

## Browser Support

Chrome, Firefox, Safari, Edge — any modern browser supporting CSS custom properties, scroll-snap, and animations.

## Author

IJ
