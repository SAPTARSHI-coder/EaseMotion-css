# place-self — Grid Item Alignment

Demonstrates the `place-self` shorthand for aligning individual grid items. Shows how `place-self` overrides container-level `align-items` and `justify-items` with single-item control using values like center, stretch, start, and end.

## Usage

Open `demo.html`. The first grid uses `place-self: center` on all items via `place-items` on the container. The second grid shows mixed individual alignment. The third demonstrates combined axis values.

## Notes

- `place-self` sets both `align-self` (block axis) and `justify-self` (inline axis) in one declaration.
- When only one value is given, it applies to both axes.
- Individual `place-self` overrides the container's `place-items` / `align-items` / `justify-items`.
- Available values: `auto`, `normal`, `start`, `end`, `center`, `stretch`, `baseline`.
