# NPM Badge Shimmer

Small status badges (npm version, downloads, build status) with a continuous
diagonal shimmer sweep to suggest live/refreshing data, similar to skeleton
loaders but applied to compact metadata badges.

**Level:** Beginner

## Usage

Add the `shimmer` class to any `.badge-value` element. The sweep is a
pseudo-element (`::after`) so it doesn't interfere with the badge text.

## Accessibility

- Shimmer is purely decorative and doesn't affect readability of the badge text.
- `prefers-reduced-motion` removes the animation and hides the sweep layer
  entirely (`display: none`) so no static artifact is left behind.

## Notes

- The gradient sweep runs from -150% to 150% of the element's own width so it
  fully clears the badge on both ends, avoiding a hard cut-off at the edges.
- `overflow: hidden` on `.badge-value` keeps the sweep clipped to each badge
  individually rather than bleeding across the row.