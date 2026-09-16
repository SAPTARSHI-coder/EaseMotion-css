# 3D Perspective Tilt Product Showcase Card (High-Contrast Accessibility Edition)

A cursor-following 3D tilt product card built with WCAG contrast in mind: pure black background, pure white 3px border, and a high-visibility yellow accent — all comfortably exceeding standard contrast ratios rather than relying on subtle glows or low-contrast grays.

## How it works
Same mechanism as the framework's base tilt card: a small script tracks cursor position and writes it into CSS custom properties (`--ease-tilt-rx`, `--ease-tilt-ry`, `--ease-tilt-shine-x/y`); CSS handles all rendering via `rotateX`/`rotateY` and a radial-gradient shine. The accessibility edition swaps the low-contrast dark-on-dark palette for pure black/white/yellow, and thickens the border from 1px to 3px so the card boundary stays clearly visible even without the glow.

## Files
`demo.html`, `style.css`, `README.md`

## Custom properties
`--ease-tilt-duration`, `--ease-tilt-easing`, `--ease-tilt-radius`, `--ease-tilt-bg`, `--ease-tilt-border`, `--ease-tilt-text`, `--ease-tilt-muted-text`, `--ease-tilt-accent`, `--ease-tilt-perspective`

## Notes
- Palette chosen for high contrast (pure black/white/yellow) rather than the original's more subdued purple-on-dark
- Border thickened to 3px so the card reads clearly without relying on the hover glow
- Respects `prefers-reduced-motion`