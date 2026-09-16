# ease-parallax-tilt-card-sap

A cursor-tracking 3D tilt card with two content layers at different `translateZ` depths, producing a parallax separation as it tilts.

## Usage
1. Include `style.css`.
2. Add markup: `.parallax-tilt-sap` with a `.layer-back` and `.layer-front`, each set at a different Z depth.
3. Attach the mousemove/mouseleave listeners from `demo.html`.

## Customization
- `maxTilt` (JS): tilt intensity.
- `translateZ()` values per layer: depth separation — larger gaps = more pronounced parallax.
- `perspective(900px)` on the card: overall 3D depth exaggeration.

## Notes
- Two content layers at different Z depths (rather than one flat surface) is what distinguishes this from a plain tilt card — as the card rotates, the layers visually separate and shift relative to each other.
- Tilt angle is computed from cursor position normalized against the card's own bounding box.
- Respects `prefers-reduced-motion`: the smoothing transition is removed; JS still updates `transform` directly on mousemove, so in a strict-compliance build this could be paired with disabling the mousemove listener entirely if fully static behavior is required.