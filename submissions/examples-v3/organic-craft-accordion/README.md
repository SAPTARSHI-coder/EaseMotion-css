# Liquid Ripple Accordion - Organic Craft (Pure CSS)

A pure CSS animated accordion component designed for artisan, boutique, and organic craft layouts. It utilizes a CSS Grid hack for smooth structural transitions and a pseudo-element strategy to create a gentle, fluid "Liquid Ripple" interaction effect without any JavaScript.

## Features
- 🌿 **Organic Liquid Ripple**: A slower, softer CSS radial ripple triggered on the `:active` state.
- 🎨 **Earth-Toned Aesthetic**: Pre-configured with warm creams, sage greens, and terracotta accents.
- 📏 **Smooth Height Animation**: Utilizes `grid-template-rows: 0fr` to `1fr` for flawless opening/closing.
- ⌨️ **Accessible**: Uses standard HTML `<input type="radio">` with labels to ensure full tab navigation and `:focus-visible` support.
- ⚡ **Zero JavaScript**: Completely driven by CSS state (`:checked`).

## CSS Custom Properties (Configurable)

| Variable | Default | Description |
|----------|---------|-------------|
| `--accordion-timing` | `0.5s` | Duration of the structural slide transition. |
| `--accordion-easing` | `cubic-bezier(...)` | Easing curve for the accordion slide. |
| `--ripple-timing` | `0.8s` | Slower duration for a fluid, natural ripple effect. |
| `--ripple-scale` | `3` | How large the ripple scales relative to the container. |
| `--ripple-color` | `rgba(140, 153, 112, 0.25)`| The sage green liquid click effect color. |

## Usage
Simply drop the HTML structure into your project and link the stylesheet. To allow multiple panels to be open simultaneously, replace the `<input type="radio">` tags with `<input type="checkbox">`.