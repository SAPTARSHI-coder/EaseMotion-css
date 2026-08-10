# Ease Sand Dunes (#70079)

## 1. What does this do?
This component creates a multi-layered parallax animation simulating flowing desert sand dunes against a sunlit background using pure CSS.

## 2. How is it used?
SVG `path` vector data is URL-encoded directly into the CSS `background-image` property of each dune layer (`.ease-dune-back`, `.ease-dune-mid`, `.ease-dune-front`). Each layer moves horizontally using CSS keyframe animations at varying speeds and directions to achieve a multi-layered depth effect.

## 3. Why is it useful?
- **Clean HTML DOM**: Removes inline `<svg>` markup from the HTML completely.
- **High Performance**: Animating `background-position-x` natively loops tiled `repeat-x` vector gradients, achieving smooth 60fps parallax performance without JavaScript `requestAnimationFrame` render loops or extra dependencies.
- **Accessible**: Features reduced-motion support via `@media (prefers-reduced-motion: reduce)` to pause animations when requested by system settings.
