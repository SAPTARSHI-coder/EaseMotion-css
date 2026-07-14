# Gallery Lightbox Modal — Zoom-In Transition (#36680)

A click-to-open lightbox that reveals the full-size image with a smooth zoom-in and blur-backdrop transition.

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--overlay-bg` | `rgba(8, 8, 12, 0.92)` | Background color of the overlay |
| `--modal-bg` | `#1a1a22` | Background color of the modal card |
| `--zoom-scale` | `1.08` | Scale factor for the image pop-in |
| `--transition-speed` | `0.35s` | Duration of the zoom-in and overlay fade |

## Behavior

- Click a thumbnail to open the lightbox (uses `:target` for state).
- The overlay fades in with a backdrop blur; the image scales up from 0.6× to `--zoom-scale`.
- Close with the &times; button or by navigating away from the hash.
- Minimal JavaScript only to set the clicked image source.
