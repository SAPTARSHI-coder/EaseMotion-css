# Liquid Ripple Accordion - Dark Minimalist (Pure CSS)

A pure CSS animated accordion component designed for Dark Minimalist interfaces. It features pure black backgrounds, stark hairline borders, ultra-clean sans-serif typography, and a ghostly, subtle Liquid Ripple interaction. 

## Features
- 👻 **Ghostly Liquid Ripple**: A highly understated CSS radial ripple triggered on the `:active` state to provide feedback without visual clutter.
- 🖤 **Stark Aesthetic**: Pre-configured with absolute blacks (`#000000`), muted greys, and crisp white accents.
- 📏 **Snappy Height Animation**: Utilizes `grid-template-rows: 0fr` to `1fr` with a fast cubic-bezier easing for a highly responsive feel.
- ⌨️ **Accessible**: Uses standard HTML `<input type="radio">` with labels to ensure full tab navigation and `:focus-visible` support.
- ⚡ **Zero JavaScript**: Completely driven by CSS state (`:checked`).

## CSS Custom Properties (Configurable)

| Variable | Default | Description |
|----------|---------|-------------|
| `--accordion-timing` | `0.35s` | Faster duration for a snappy, minimalist feel. |
| `--accordion-easing` | `cubic-bezier(...)` | Clean, responsive easing curve. |
| `--ripple-timing` | `0.5s` | Duration of the fluid ripple expansion. |
| `--ripple-color` | `rgba(255, 255, 255, 0.05)`| The ultra-subtle white click effect color. |

## Usage
Drop the HTML structure into your project and link the stylesheet. It uses a `gap: 1px` trick on the container background to create perfect, 1px hairline borders between the items.