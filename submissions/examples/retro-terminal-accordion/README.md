# Liquid Ripple Accordion - Retro Terminal (Pure CSS)

A pure CSS animated accordion component designed for Hacker, CLI, and Retro Terminal interfaces. It features glowing phosphor-green typography, stark borders, CRT scanlines, and a "Phosphor Flare" Liquid Ripple interaction. 

## Features
- 📟 **Phosphor Flare Ripple**: A bright green CSS radial ripple triggered on the `:active` state to emulate screen flashes.
- 📺 **CRT Aesthetic**: Pre-configured with terminal greens (`#39ff14`), text-shadow glowing effects, and an authentic CSS scanline overlay.
- 📏 **Glitchy Height Animation**: Utilizes `grid-template-rows: 0fr` to `1fr` paired with `steps(10)` easing for a rigid, robotic, retro-computer feel.
- ⌨️ **Accessible**: Uses standard HTML `<input type="radio">` with labels to ensure full tab navigation and `:focus-visible` support.
- ⚡ **Zero JavaScript**: Completely driven by CSS state (`:checked`).

## CSS Custom Properties (Configurable)

| Variable | Default | Description |
|----------|---------|-------------|
| `--accordion-timing` | `0.3s` | Fast transition timing for quick terminal execution. |
| `--accordion-easing` | `steps(10, end)` | Rigid, stepped easing curve for a retro feel. |
| `--ripple-timing` | `0.6s` | Duration of the fluid ripple expansion. |
| `--ripple-color` | `rgba(57, 255, 20, 0.4)`| The glowing hacker-green flare effect. |

## Usage
Drop the HTML structure into your project and link the stylesheet. The global CSS file includes an authentic CRT `.scanlines` div overlay that should be placed just inside your `<body>` tag for maximum effect.