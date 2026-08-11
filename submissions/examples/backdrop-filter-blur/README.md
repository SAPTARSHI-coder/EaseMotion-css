## What

Five glassmorphism cards demonstrating stacked `backdrop-filter` effects — blur, brightness, contrast, saturate, sepia, and hue-rotate — over a layered gradient background. Each card applies a unique filter combination to show how `backdrop-filter` alters the backdrop behind an element.

## How

Each `.glass-card` uses `backdrop-filter` (with `-webkit-` prefix for Safari) on a semi-transparent `rgba` background. A `::before` pseudo-element adds a subtle inner highlight gradient. The page background uses fixed radial gradients and a repeating grid pattern. A `@supports` block provides a fallback for browsers that lack backdrop-filter support.

## Why

`backdrop-filter` enables performant frosted-glass UI without pre-composited overlays. This demo shows how combining filters (blur + brightness, blur + contrast) creates distinct visual textures while the fallback ensures the content stays accessible on older browsers or when `prefers-reduced-motion` is active.
