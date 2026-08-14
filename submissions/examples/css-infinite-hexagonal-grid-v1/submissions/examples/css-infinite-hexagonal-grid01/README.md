# Ease Infinite Hexagonal Grid

## Description
A pure CSS background pattern that tessellates layered `linear-gradient`s into a seamless honeycomb (hexagonal) grid — no images, no SVG, no JavaScript. An optional slow diagonal drift animation gives it an "infinite scrolling grid" feel, since the pattern tiles perfectly and the illusion of endless motion never reveals a seam.

## How it works
Six stacked `linear-gradient` layers form the top-left, top-right, and horizontal edges of a hexagon (using the mathematical `√3 ≈ 1.732` height-to-width ratio of a regular hexagon), tiled via `background-size`/`background-position`. The whole pattern sits on a `::before` pseudo-element sized at 300% and offset, so animating its `transform: translate()` drifts it diagonally without ever exposing an edge or discontinuity — combined with the seamless tiling, this reads as an infinite grid.

## Variants
- **Default** — pattern drifts slowly and continuously
- **`.is-static`** — same pattern, no animation, for contexts where motion isn't wanted even without `prefers-reduced-motion` active
- **`.has-glow`** — adds a soft pulsing radial spotlight layered over the grid for extra depth

## Usage
```html
<div class="ease-hex-grid" style="position: relative; width: 100%; height: 400px;">
  <!-- your content sits on top, since the grid is a background pseudo-element -->
</div>
```
Add `is-static` to disable the drift, or `has-glow` for a pulsing spotlight overlay.

## Customization (CSS custom properties)
| Property | Default | Description |
|---|---|---|
| `--hex-size` | `60px` | Width of a single hexagon cell |
| `--hex-line` | `rgba(148, 163, 184, 0.18)` | Hexagon border/line color |
| `--hex-fill` | `rgba(56, 189, 248, 0.05)` | Alternating cell fill tint |
| `--bg-color` | `#0a0f1a` | Base background color behind the pattern |
| `--drift-duration` | `40s` | Full drift animation cycle duration |

## Accessibility
Respects `prefers-reduced-motion` by disabling both the drift and glow-pulse animations, leaving a static honeycomb pattern.

## Files
- `demo.html` — live example showing default, static, and glow variants
- `style.css` — the gradient-based hex pattern and all animations
- `README.md` — this file