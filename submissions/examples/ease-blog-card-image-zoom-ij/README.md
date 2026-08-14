# Ease Blog Card Image Zoom

A clean, modern, and highly responsive blog card component built with semantic HTML and optimized CSS transitions. On hover, the image scales smoothly while a configurable translucent overlay eases in over the asset.

## Features
- **Smooth Interaction:** Utilizes a highly fluid `cubic-bezier` timing function for a professional feel.
- **Customizable Core Engine:** Configured entirely through modular CSS custom properties (variables).
- **Responsive Architecture:** Perfectly drops into multi-column modern layouts natively using flexbox and grid metrics.

## Acceptance Criteria Met
- [x] **Smooth CSS transition:** Leverages hardware-accelerated `transform: scale()` transformations.
- [x] **Interactive trigger:** Hooks directly into card context `:hover` events safely.
- [x] **Customizable via CSS variables:** Allows runtime adjustments across scales, durations, and coloring configurations.
- [x] **Responsive design:** Includes variable grid structures dropping seamlessly onto variable mobile constraints.

## Configuration API (CSS Variables)

You can customize the card behavior globally or on an individual card instance by passing styles directly into your markup/stylesheet:

| CSS Variable | Description | Default Value |
| :--- | :--- | :--- |
| `--zoom-scale` | The maximum scale size of the card image on trigger. | `1.1` |
| `--transition-duration` | Animation duration speed. | `0.4s` |
| `--transition-timing` | Custom ease interpolation. | `cubic-bezier(0.25, 1, 0.5, 1)` |
| `--overlay-color` | Translucent background configuration. | `rgba(0, 0, 0, 0.3)` |
| `--card-radius` | Card border boundary radius metrics. | `12px` |

## How to use

1. Drop the HTML blueprint into your document.
2. Embed the stylesheet inside your `<head>` tags.
3. Overwrite properties inline if explicit targeted overrides are preferred:
   ```html
   <article class="blog-card" style="--zoom-scale: 1.25; --overlay-color: rgba(59, 130, 246, 0.4);">
       </article>