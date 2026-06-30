# ease-mosaic-tile-scatter

A grid of tiles fly in from four different directions (top, right, bottom, left) with staggered delays, assembling into a mosaic on load. Direction is assigned per-tile using `nth-child(4n+N)` mod cycling. Pure CSS — no JavaScript.

## Usage

```html
<div class="mosaic-grid">
  <div class="mosaic-tile"></div>
  <div class="mosaic-tile"></div>
  <!-- repeat for desired tile count -->
</div>
```

## How it works

- Four `@keyframes` define entrance from each compass direction with a slight `scale(0.7)` start
- `nth-child(4n+1/2/3/0)` assigns a different animation name to every 4th tile, rotating through the four directions
- Per-tile `animation-delay` steps in ~0.05s increments, creating the cascading assembly
- `cubic-bezier(0.34, 1.56, 0.64, 1)` gives each tile a gentle overshoot on landing
- `animation-fill-mode: both` keeps tiles invisible before their delay fires

## Customization

| Property            | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| Grid columns / rows | Adjust `grid-template-columns` and add/remove `.mosaic-tile` divs |
| Tile size           | Change `width` / `height` on `.mosaic-tile`                       |
| Per-tile background | Set via `nth-child` rules or inline styles                        |
| Delay step          | Edit the `animation-delay` on each tile's rule                    |
| `cubic-bezier`      | Controls the spring overshoot on landing                          |

## Accessibility

Respects `prefers-reduced-motion`. All tiles render in their final position with no animation when reduced motion is preferred.
