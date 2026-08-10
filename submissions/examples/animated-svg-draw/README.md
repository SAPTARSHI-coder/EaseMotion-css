# ease-svg-draw

An SVG path that appears to "draw itself" on load, using the stroke-dasharray/dashoffset trick — no JS.

## Usage
1. Include `style.css`.
2. Add any SVG with a `<path>` (or apply the same rule to `line`, `circle`, `polyline`):
```html
   <svg class="svg-draw" viewBox="0 0 200 200">
     <path d="M20,100 Q60,20 100,100 T180,100" />
   </svg>
```

## Customization
- `stroke-dasharray` value **must be ≥ the total path length** — set it generously high (1000 works for most simple paths; use `path.getTotalLength()` in JS for pixel-perfect matching on complex paths).
- `stroke-width`/`stroke` color for line styling.
- Animation duration for draw speed.

## Notes
- The technique: `stroke-dasharray` creates one dash equal to the whole path length, then `stroke-dashoffset` shifts it fully off-screen at start and animates to 0, revealing the stroke progressively.
- Works with any path shape/complexity, but very long/complex paths may need a JS-measured `stroke-dasharray` (via `getTotalLength()`) instead of a fixed guess, so the draw speed feels even along the whole path.
- Purely presentational — no JS dependency for the animation itself.