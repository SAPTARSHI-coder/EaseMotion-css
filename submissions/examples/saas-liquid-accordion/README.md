# Liquid Ripple Accordion (Pure CSS)

A pure CSS animated accordion component designed for SaaS Pricing and FAQ layouts. It utilizes a CSS Grid hack for smooth height transitions and a pseudo-element strategy to create a high-performance "Liquid Ripple" interaction effect without any JavaScript.

## Features
- 💧 **Liquid Ripple Transition**: Pure CSS radial ripple triggered on the `:active` state.
- 📏 **Smooth Height Animation**: Utilizes `grid-template-rows: 0fr` to `1fr` for flawless opening/closing.
- ⌨️ **Keyboard Accessible**: Uses standard HTML `<input type="radio">` with labels to ensure full tab navigation and `:focus-visible` support.
- ⚡ **Zero JavaScript**: Completely driven by CSS state (`:checked`).

## CSS Custom Properties (Configurable)

| Variable | Default | Description |
|----------|---------|-------------|
| `--accordion-timing` | `0.4s` | Duration of the open/close slide transition. |
| `--accordion-easing` | `cubic-bezier(...)` | Easing curve for the structural transitions. |
| `--ripple-timing` | `0.6s` | Duration of the click ripple expansion. |
| `--ripple-scale` | `2.5` | How large the ripple scales relative to the container. |
| `--ripple-color` | `rgba(139...0.25)`| The color of the liquid click effect. |

## Usage
Simply drop the HTML structure into your project and link the stylesheet. To change it from an "exclusive" accordion (only one open at a time) to a "multi-select" accordion, simply change the `<input type="radio">` elements to `<input type="checkbox">`!