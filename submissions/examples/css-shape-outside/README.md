# CSS `shape-outside` — Magazine Editorial Layouts

A production-quality demo showcasing CSS float shapes for magazine-style text wrapping — circle, ellipse, polygon, and inset paths. Zero JavaScript.

## Overview

`shape-outside` defines a non-rectangular float shape that inline content wraps around. Combined with `shape-margin` and `clip-path`, it enables professional editorial layouts directly in CSS.

| Shape | Syntax | Best For |
|-------|--------|----------|
| `circle()` | `circle(50% at 50% 50%)` | Profile images, round pull-quotes |
| `ellipse()` | `ellipse(50% 50% at 50% 50%)` | Horizontal feature images |
| `polygon()` | `polygon(x1 y1, x2 y2, ...)` | Dramatic diagonal layouts |
| `inset()` | `inset(top right bottom left round r)` | Rounded inset boxes |

## Demo Sections

### Individual Shape Demos
- **`circle()`**: Renaissance history article wrapping around a circular profile area
- **`ellipse()`**: Amazon rainforest article with elliptical image float
- **`polygon()`**: Diamond-hexagon shape wrapping a minimalism/design article
- **`inset()`**: Paired inset floats (left and right) around a lunar/tidal article — demonstrates `shape-margin` breathing room

### Full Magazine Spread
A deep sea exploration article combining all four shape functions in a single multi-column layout:
- Circle float for the opening section
- Ellipse float for the mid-article image
- Polygon float for the concluding paragraph
- Drop cap on the opening paragraph

## Typography

| Font | Use |
|------|-----|
| **Playfair Display** | Display headings, hero |
| **Source Serif 4** | Body copy (editorial serif) |
| **Inter** | UI elements, badges, footer |

All loaded from Google Fonts with `font-display: swap`.

## Accessibility

- Skip navigation link
- Semantic `<article>`, `<section>`, `<p>` with ARIA labels on decorative floats
- `prefers-reduced-motion` (all animations disabled)
- `prefers-color-scheme` (full light/dark support)
- `forced-colors: active` support
- `:focus-visible` focus indicators
- Print stylesheet (grayscale, no decorations)
- All decorative floats marked `aria-hidden="true"`

## Technology

- **Zero JavaScript** — entirely CSS-driven
- **Zero dependencies** — no frameworks, no libraries
- **Zero preprocessors** — vanilla CSS with shape functions
- Typography from Google Fonts (3 font families, optimized loading)

## Browser Support

| Browser | shape-outside |
|---------|--------------|
| Chrome  | 37+ |
| Edge    | 79+ |
| Safari  | 10.1+ |
| Firefox | 62+ |
| Samsung Internet | 5+ |

Universal support on modern browsers. Falls back to standard rectangular float on unsupported browsers — text still wraps, just without the shaped contour.

## Files

- `demo.html` — semantic HTML5 with rich editorial content
- `style.css` — full stylesheet with inline comments explaining each shape
- `README.md` — this file
