# Clip Path Shapes

## What does this do?
Provides utility classes for common CSS `clip-path` polygon shapes — triangles, diamonds, hexagons, octagons, stars, pentagons, chevrons, arrows, crosses, and more — using EaseMotion CSS tokens for colours, sizing, and glow effects.

## How is it used?
Add `.clip-shape` (base) + any shape class to a container. Optionally add a colour variant (`.clip-primary`, `.clip-secondary`, `.clip-accent`, `.clip-success`, `.clip-warning`, `.clip-danger`, `.clip-info`), size variant (`.clip-sm`, `.clip-md`, `.clip-lg`), glow (`.clip-glow`, `.clip-glow-secondary`), or interactive variant (`.clip-hover-shift`, `.clip-hover-expand`).

```html
<div class="clip-shape clip-hexagon clip-success">hex</div>
```

## Why is it useful?
CSS clip-paths enable visually interesting layouts, badges, avatars, and decorative elements without images or SVGs. These utility classes provide a consistent, reusable set of shapes that integrate with EaseMotion's token system and respect reduced motion preferences.
