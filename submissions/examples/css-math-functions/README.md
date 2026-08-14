# CSS Math Functions: `round()` · `mod()` · `rem()`

A production-quality demo showcasing CSS's stepped-value math functions, introduced as **Baseline 2024**.

## Overview

CSS `round()`, `mod()`, and `rem()` bring integer math to CSS, enabling patterns that previously required JavaScript or preprocessors.

| Function | Description | Signature |
|----------|-------------|-----------|
| `round()` | Rounds a value to the nearest multiple of a step | `round(<strategy>, A, B)` |
| `mod()` | Returns remainder with same sign as divisor | `mod(A, B)` |
| `rem()` | Returns remainder with same sign as dividend | `rem(A, B)` |

## Demo Sections

### 1. `round()` — Pixel Grid Snapping
- **Strategy comparison**: nearest, up, down, to-zero
- **8px grid snapping**: Cards with `round(down, 8px, 160px)` in `minmax()` for grid-perfect columns
- **Typography baseline**: Font sizes snapped to 4px multiples via `round(nearest, 4px, clamp(...))`
- **Progress chunking**: Fill width snapped to segment boundaries

### 2. `mod()` — Infinite Color and Layout Cycling
- **Rainbow color system**: `mod(index * 36, 360)` produces an infinite hue cycle
- **Alternating layout**: `mod(card-index, 2)` drives left/right image placement without `:nth-child()`

### 3. `rem()` — Staggered Animations
- **Animation delays**: `rem(index * 0.1, 1)` creates perfectly staggered wave patterns

### 4. Combined Usage
- Responsive gallery with snapped column widths
- Progress bar that combines all three functions

## Accessibility

- Skip link for keyboard navigation
- Semantic `<section>`, `<article>`, `<figure>` landmarks
- `aria-label` on visual-only components
- `prefers-reduced-motion` support (all animations disabled)
- `prefers-color-scheme` support (full light mode)
- `prefers-contrast: high` support
- `forced-colors: active` support
- `:focus-visible` visible focus indicators
- Print stylesheet included
- All decorative elements marked `aria-hidden="true"`

## Technology

- **Zero JavaScript** — entirely CSS-driven
- **Zero dependencies** — no frameworks, no libraries
- **Zero external resources** — self-contained demo
- **Semantic HTML5** with full ARIA annotations

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 125+ |
| Edge    | 125+ |
| Safari  | 17.4+ |
| Firefox | 131+ |
| Samsung Internet | 26+ |

Graceful degradation via `@supports not (width: rem(1, 2))` fallbacks. The demo is fully functional in all browsers.

## Files

- `demo.html` — semantic HTML5 with inline documentation
- `style.css` — full stylesheet with extensive comments explaining CSS math usage
- `README.md` — this file
