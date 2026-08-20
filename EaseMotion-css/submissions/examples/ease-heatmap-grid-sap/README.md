# ease-heatmap-grid-sap

A GitHub-style contribution heatmap grid — cells fade/scale in on load with a column-based stagger, and enlarge with a highlight ring on hover.

## Usage
1. Include `style.css`.
2. Add markup: a grid of `.heat-cell` divs, each optionally carrying `data-level="1"`–`"4"` for intensity color.
3. Populate cells via JS (see `demo.html`) or hardcode them directly in markup.

## Customization
- `data-level` color scale (1–4): edit the 4 background color rules.
- `grid-template-columns`: adjust column count/cell size for different grid dimensions.
- Stagger interval (`i % 20 * 0.02s`) for the load-in animation.

## Notes
- Intensity is driven entirely by a `data-level` attribute per cell — JS only decides the level number, CSS handles all coloring via attribute selectors.
- Stagger uses `i % 20` so the delay resets per row/column cycle rather than growing unboundedly across all 140 cells, keeping the total load-in animation short regardless of grid size.
- Respects `prefers-reduced-motion`: entrance animation is disabled (cells appear instantly), hover scale is removed while the highlight ring outline remains as a non-motion hover cue.