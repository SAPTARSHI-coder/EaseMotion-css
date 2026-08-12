# CSS `text-decoration-*` — Full Control Demo

A production-quality demo showcasing all CSS text-decoration sub-properties with side-by-side comparisons and real-world use cases. Zero JavaScript.

## Overview

CSS provides fine-grained control over every aspect of text decoration lines — thickness, offset, color, style, position, and ink-skipping behavior. This demo covers all six properties:

| Property | Controls |
|----------|----------|
| `text-decoration-thickness` | Line weight: `auto`, `from-font`, or explicit `px`/`em` |
| `text-underline-offset` | Distance from baseline: positive moves down, negative moves up |
| `text-decoration-skip-ink` | Whether lines skip over glyph descenders (`auto`) or draw through (`none`) |
| `text-underline-position` | Vertical placement: `auto` or `under` (below all glyphs) |
| `text-decoration-style` | Line pattern: `solid`, `double`, `dotted`, `dashed`, `wavy` |
| `text-decoration-color` | Independent line color, separate from text `color` |

## Demo Sections

### Per-Property Showcases
- **thickness**: Side-by-side comparison of `auto`, `from-font`, `2px`, and `5px`
- **offset**: Default, `6px`, `3px`, and negative (`-0.15em`) — plus a descender highlighter-overlay effect
- **skip-ink**: Visual comparison of glyph-piercing vs clean skip behavior with enlarged 5px underline
- **underline-position**: `auto` vs `under` with descender-heavy words
- **style**: All five styles (`solid`, `double`, `dotted`, `dashed`, `wavy`) + `overline` and `line-through` demos
- **color**: Independent colors plus semantic color coding (spelling errors in red wavy, grammar in blue wavy, hyperlinks in green, revision marks in amber)

### Combined Showcase
Three real-world patterns:
- **Branded links** — thick colored underline with offset
- **Editing marks** — `del` with red line-through, `ins` with green offset underline
- **Annotations** — dotted underline with offset for academic markup

## Accessibility

- Skip navigation link
- Semantic `<section>`, `<del>`, `<ins>`, `<mark>` elements
- `aria-label` on visual-only components
- `prefers-reduced-motion` support
- `prefers-color-scheme` (full light mode)
- `prefers-contrast: high`
- `forced-colors: active`
- `:focus-visible` on interactive links
- Print stylesheet

## Technology

- **Zero JavaScript** — entirely CSS-driven
- **Zero dependencies** — no frameworks, libraries, or preprocessors
- Typography from Google Fonts (Inter + Source Serif 4)

## Browser Support

| Browser | All sub-properties |
|---------|-------------------|
| Chrome  | 87+ |
| Edge    | 87+ |
| Safari  | 12.1+ |
| Firefox | 70+ |
| Samsung | 14+ |

Universal across modern browsers.

## Files

- `demo.html` — semantic HTML5
- `style.css` — full stylesheet with inline comments explaining each property
- `README.md` — this file
