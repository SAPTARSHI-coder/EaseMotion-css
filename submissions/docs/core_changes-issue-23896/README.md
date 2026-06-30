# ease-pointer-events

Utility classes for `pointer-events`, `touch-action`, and combined interaction control patterns.

## What

Single-purpose CSS utilities:

- **pointer-events**: 14 values including SVG-specific (visible, painted, fill, stroke, boundingBox, all)
- **touch-action**: 10 values (auto, none, manipulation, pan-x/y/directions, pinch-zoom)
- **Combined shortcuts**: `ease-clickable` (pointer + cursor), `ease-unclickable` (none + default), `ease-no-interaction` (none + no-select)
- **Media variants**: Hover-aware, touch-aware, and reduced-motion-aware pointer-events

## How

1. Include `style.css`.
2. Apply `.ease-pointer-events-{value}` or `.ease-touch-action-{value}`.

## Why

Provides a consistent naming scheme for interaction control. The SVG pointer-events values are useful for interactive graphics.

## Accessibility

- `pointer-events: none` removes keyboard focusability. Use `aria-hidden="true"` for decorative elements.
- `touch-action: manipulation` eliminates 300ms tap delay on mobile.
- Combined with `user-select: none` for fully inert UI surfaces.
