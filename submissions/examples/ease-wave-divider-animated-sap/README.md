# ease-wave-divider-animated-sap

A section divider made of two overlapping SVG wave shapes drifting horizontally at different speeds/directions, for a layered ocean-wave effect.

## Usage
1. Include `style.css`.
2. Add markup: 2 SVG waves stacked inside `.wave-divider-sap` — a `.wave-back` (slower, semi-transparent) and `.wave-front` (faster, opaque).

## Customization
- Wave path `d` attribute for a different silhouette.
- Colors per layer.
- Animation duration/direction per wave for the parallax feel.

## Notes
- Each SVG is drawn at `width: 200%` and its own path is duplicated seamlessly across that width, so animating `translateX(0 → -50%)` produces a perfectly looping horizontal drift with no visible seam — same technique as a marquee.
- Two waves moving at different speeds and directions create a simple layered-parallax "ocean" effect without needing canvas or WebGL.
- Respects `prefers-reduced-motion`: both wave animations are disabled, leaving static overlapping wave shapes.