## What It Does

Explores CSS `mask-image` with gradient masks for content reveal effects. A linear wipe sweeps one layer across another, a radial mask expands from the center, and an interactive before/after comparison slider uses `clip-path` with a range input.

## Key Features

- `mask-image` with `linear-gradient` for horizontal wipe transitions
- `mask-image` with `radial-gradient` for circular reveal from the center
- `mask-size` and `mask-position` animation for smooth reveal motion
- Before/after comparison slider with `clip-path: inset()` and `<input type="range">`
- Custom range thumb styling for the slider handle
- No external image dependencies — all visuals are CSS gradients and text
- Fully respects `prefers-reduced-motion`

## Usage Notes

Open `demo.html` in any modern browser. The `mask-image` properties use both standard and `-webkit-` prefixed versions for maximum compatibility. The comparison slider requires minimal JavaScript for `clip-path` updates.
