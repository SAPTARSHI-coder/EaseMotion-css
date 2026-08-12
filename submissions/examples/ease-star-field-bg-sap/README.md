# ease-star-field-bg-sap

A layered animated starfield background — multiple radial-gradient "star" layers drift at different speeds for a parallax depth effect, with a twinkling layer on top.

## Usage
1. Include `style.css`.
2. Add markup: a container with 3 stacked `.star-layer` divs (`small`, `medium`, `twinkle`).

## Customization
- Radial-gradient positions/sizes: star placement and density per layer.
- `animation` duration per layer: drift speed — slower for distant "small" stars, faster for closer "medium" stars (parallax illusion).
- `twinkle-sap` keyframes: flicker intensity/speed.

## Notes
- No images or canvas — stars are pure CSS `radial-gradient()` dots repeated via `background-size` tiling, animated by shifting `background-position`.
- Different drift speeds per layer (and one running in `reverse`) create a simple parallax depth cue without any 3D transforms.
- Respects `prefers-reduced-motion`: all drift/twinkle animations are disabled, leaving a static starfield at a fixed opacity.