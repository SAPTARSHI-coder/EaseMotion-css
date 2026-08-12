# Skew-Active Tooltip – Minimalist Tech Layouts

Pure CSS tooltip component with skew-in animation for clean, light UI designs.

## What It Does

- **Skew transition**: Tooltips skew and slide into view from the appropriate side
- **Four positions**: Supports top, bottom, left, and right tooltip placement
- **Three trigger styles**: Default, dark, and outline button variants
- **Minimalist palette**: Clean whites, soft grays, and sky-blue accents

## Implementation

The tooltip uses `skewX()` transform on its initial state. On hover, it transitions to `skewX(0)` with a spring-eased cubic-bezier for a natural, bouncy feel. Each position variant sets its own `transform-origin` to ensure the skew originates from the correct direction.

## Responsive

Side tooltips (`--left`, `--right`) reposition to top on mobile screens. Transitions respect `prefers-reduced-motion`.
