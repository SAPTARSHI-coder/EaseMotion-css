# justify-self & justify-items — Grid Horizontal Alignment

Explores `justify-self` (per-item horizontal alignment) and `justify-items` (container-level horizontal alignment) in CSS Grid. Demonstrates stretch, center, start, and end values with individual overrides.

## Usage

Open `demo.html`. The first two grids show container-level `justify-items` (stretch and center). The third grid sets `justify-items: stretch` on the container but overrides each item individually with `justify-self`.

## Notes

- `justify-items` sets the default horizontal alignment for all grid items in a container.
- `justify-self` on a grid item overrides `justify-items` for that specific item.
- Values: `stretch` (default), `center`, `start`, `end`, `baseline`, `auto`.
- When `justify-self` is set to a non-stretch value, the item shrinks to fit its content width.
