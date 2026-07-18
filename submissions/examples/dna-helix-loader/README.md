# DNA Helix Loader

A loading animation shaped like a rotating DNA double helix — two strands of
glowing particles spiral around a shared vertical axis, with a light pulse
that travels down each strand.

## Files
- `demo.html` — working demo with the node-generation script
- `style.css` — all animation styling and CSS variables (pure CSS 3D transforms + keyframes)

## Usage

```html
<div class="dna-loader-tay" data-nodes="10" role="status" aria-label="Loading">
  <div class="dna-strand-tay dna-strand-a-tay"></div>
  <div class="dna-strand-tay dna-strand-b-tay"></div>
</div>
```

Include `style.css`, then run the small `buildDnaLoaderTay()` script from
`demo.html` (or your own equivalent) to populate each strand with particle
nodes based on `data-nodes`.

## How it works

Each particle's position is fixed relative to its strand: a vertical offset
(`--node-top-tay`) plus a rotation angle around the vertical axis
(`--node-angle-tay`) plus a fixed radius (`translateZ`). That's what gives
the spiral shape. The **strand itself** then continuously rotates
(`rotateY` 0→360°, infinite), spinning the whole spiral as one rigid piece.
Strand B starts at `-50%` of the animation duration, offsetting it exactly
half a turn behind strand A — that's what makes them read as two
intertwined helices instead of one.

## Customization (CSS variables)

| Variable | Default | Purpose |
|---|---|---|
| `--dna-height-tay` | `140px` | Total helix height |
| `--dna-radius-tay` | `30px` | Strand spacing / helix radius |
| `--dna-speed-tay` | `1.8s` | Duration of one full rotation |
| `--dna-particle-size-tay` | `10px` | Diameter of each node |
| `--dna-glow-tay` | `10px` | Glow blur radius |
| `--dna-color-a-tay` | `#22d3ee` | Strand A color |
| `--dna-color-b-tay` | `#a855f7` | Strand B color |
| `--dna-perspective-tay` | `400px` | 3D depth of the rotation |

`data-nodes` (on the `.dna-loader-tay` element) controls particle count per
strand — set at generation time via JS, default `10`.

## Accessibility
- `role="status"` + `aria-label="Loading"` on the loader so screen readers
  announce it as a loading indicator rather than silently skipping it.
- `prefers-reduced-motion: reduce` freezes all rotation and pulsing —
  nodes render at full opacity in their static helix positions instead of
  animating indefinitely.

## Dependency-free
No external libraries. JS is used only to generate and position the particle
nodes (~15 lines); all motion is driven by CSS `animation` and 3D transforms.