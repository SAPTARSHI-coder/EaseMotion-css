# ease-scroll-parallax-text-depth-sap

Stacked text layers that scroll at different speeds relative to each other (via `data-depth` multipliers), creating a sense of depth — nearer layers move less, farther layers move more.

## Usage
1. Copy `style.css` into your project.
2. Copy the `.parallax-depth-sap` markup from `demo.html`, stacking `.parallax-depth-sap__layer` elements each with a `data-depth` (0–1, higher = moves more).
3. Include the scroll listener from `demo.html` — depth-based movement needs live scroll position, which pure CSS can't read without `animation-timeline: scroll()` (not yet universally supported); this uses a `passive` scroll listener for broad compatibility.

## Customization
- Adjust each layer's `data-depth` value to change its parallax speed.
- Change the `-0.3` multiplier in JS to scale overall parallax intensity.
- Restyle layer `color`/`opacity`/`font-size` independently per layer.

## Accessibility
Respects `prefers-reduced-motion` by disabling all transform movement, leaving layers static.

## Browser support
All modern browsers (`scroll` event with passive listener).