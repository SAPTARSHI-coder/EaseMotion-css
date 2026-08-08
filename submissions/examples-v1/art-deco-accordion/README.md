# Liquid Ripple Accordion - Art Deco (Pure CSS)

A pure CSS animated accordion component styled with the sharp, glamorous aesthetics of the 1920s Art Deco movement. It features a geometric double-border design, classic serif typography, and a shimmering metallic gold Liquid Ripple interaction.

## Features
- 🥂 **Gold Liquid Ripple**: A shimmering CSS radial ripple triggered on the `:active` state.
- 📐 **Geometric Aesthetic**: Pre-configured with sharp corners, double borders, and a midnight charcoal/gold color palette.
- 📏 **Smooth Height Animation**: Utilizes `grid-template-rows: 0fr` to `1fr` for flawless opening/closing.
- ⌨️ **Accessible**: Uses standard HTML `<input type="radio">` with labels to ensure full tab navigation and `:focus-visible` support.
- ⚡ **Zero JavaScript**: Completely driven by CSS state (`:checked`).

## CSS Custom Properties (Configurable)

| Variable | Default | Description |
|----------|---------|-------------|
| `--accordion-timing` | `0.45s` | Duration of the structural slide transition. |
| `--accordion-easing` | `cubic-bezier(...)` | Snappy, geometric easing curve. |
| `--ripple-timing` | `0.7s` | Duration of the fluid ripple expansion. |
| `--ripple-scale` | `2.8` | How large the ripple scales relative to the container. |
| `--ripple-color` | `rgba(212, 175, 55, 0.15)`| The metallic gold click effect color. |

## Usage
Simply drop the HTML structure into your project and link the stylesheet. It relies entirely on standard HTML inputs, meaning it works instantly without any build steps or framework configurations.