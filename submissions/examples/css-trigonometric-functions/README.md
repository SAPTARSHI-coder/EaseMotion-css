# CSS Trigonometric Functions: `sin()` · `cos()` · `tan()` · `atan2()`

A production-quality demo showcasing CSS trigonometric functions — **Baseline 2024** features that bring real math to CSS layouts, animations, and directional calculations.

## Overview

CSS `sin()`, `cos()`, `tan()`, and `atan2()` compute trigonometric values directly in stylesheets, eliminating the need for JavaScript geometry calculations or preprocessor math.

| Function | Purpose | Example |
|----------|---------|---------|
| `sin()` | Sine of an angle | `sin(45deg)` → `0.7071` |
| `cos()` | Cosine of an angle | `cos(45deg)` → `0.7071` |
| `tan()` | Tangent of an angle | `tan(45deg)` → `1` |
| `atan2()` | Angle from rise & run | `atan2(y, x)` → angle |

## Demo Sections

### `sin()` / `cos()` — Circular Layouts & Orbits
- **Circular dot menu**: 8 dots arranged evenly on a circle using `sin(angle)` and `cos(angle)`. Focus on a dot and it scales up.
- **Orbital motion**: Three satellites at different radii/speeds. `@property`-typed `--orbit-angle` drives smooth CSS-only orbits — no JavaScript.
- **Scroll-driven gauge**: A needle that sweeps an arc as you scroll, with the needle tip tracing a circular path via `sin()`/`cos()`.

### `tan()` — Slope, Tilt & Perspective
- **Perspective card tilt**: Cards that tilt realistically using `tan()` to preserve a consistent light-source direction.
- **Dynamic shadow angle**: A light source orbits a cylinder and the shadow length is calculated from `tan(light-angle)`.

### `atan2()` — Point-to-Point Direction
- **Scroll-driven compass**: Needle rotates as you scroll, with angle driven by `atan2()` directional calculation.
- **Angle tracker**: An interactive target where the arrow always points toward the cursor position.

### Combined Dashboard
Three stat gauges arranged in a circle — combines all four trig functions in a practical radial layout.

## Accessibility

- Skip navigation link
- Semantic `<section>`, `<article>`, `role="img"` with `aria-label`
- `prefers-reduced-motion` (all animations disabled)
- `prefers-color-scheme` (full light mode)
- `prefers-contrast: high` support
- `forced-colors: active` support
- `:focus-visible` focus indicators on all interactive elements
- Print stylesheet
- `@supports` fallbacks for older browsers (hardcoded positions when `sin()`/`cos()` unavailable)
- `@supports not (animation-timeline: scroll())` fallbacks for scroll-driven features

## Technology

- **Zero JavaScript** — entirely CSS-driven, including the orbital animation, gauge, and compass
- **Zero dependencies** — no frameworks, no libraries, no preprocessors
- **Zero external resources** — self-contained in three files
- Uses `@property` for smooth CSS-only animation of angles
- Uses `animation-timeline: scroll(root)` for scroll-driven interactions

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 111+ |
| Edge    | 111+ |
| Safari  | 15.4+ |
| Firefox | 108+ |
| Samsung Internet | 22+ |

All patterns degrade gracefully with `@supports` fallbacks.

## Files

- `demo.html` — semantic HTML5 with inline documentation
- `style.css` — full stylesheet with extensive inline comments explaining trig usage
- `README.md` — this file
