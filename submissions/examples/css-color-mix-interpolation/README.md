# CSS `color-mix()` — Hue Interpolation & Palette Generation

A showcase of the CSS `color-mix()` function with OKLCH color space
and hue interpolation methods. Demonstrates how `shorter`,
`longer`, `increasing`, and `decreasing` hue produce entirely
different intermediate colors from the same endpoints.

## What `color-mix()` does

`color-mix()` mixes two colors in a specified color space:

```css
/* Basic mix: 50% blue + 50% white */
background: color-mix(in oklch, var(--blue) 50%, #fff);

/* Choose the hue path for the blend */
background: color-mix(in oklch longer hue, var(--blue) 50%, var(--orange));
```

The `in oklch` argument selects the OKLCH color space (perceptually
uniform, better for gradients than sRGB). The optional `shorter hue`,
`longer hue`, `increasing hue`, or `decreasing hue` controls the
angular direction of the hue interpolation.

## Demo sections

| Section | What it shows |
|---------|--------------|
| **Tint Ramps** | 5-stop lightness ramps from pure color to white |
| **Hue Interpolation: Blue→Orange** | Four different 50%-blend midpoints from the same endpoints (264°→60°) |
| **Hue Interpolation: Purple→Pink** | Shows how `shorter`/`increasing` and `longer`/`decreasing` diverge |
| **Generated 5-Stop Palettes** | Full palette generation from two endpoints |
| **Real-World Design System** | Buttons and badges using `color-mix()` for hover/active states |

## Browser support

- Chrome 111+
- Firefox 113+
- Safari 16.2+
- Edge 111+

94%+ global support.

## Why it fits EaseMotion CSS

- **Pure CSS** — zero JavaScript, all color computation in the browser.
- **Modern CSS** — `color-mix()` with OKLCH and hue interpolation
  represents the modern CSS approach to color systems.
- **Practical** — the design system demo shows real-world button/badge
  tokenization patterns.
- **Educational** — hue interpolation is the least-understood part of
  `color-mix()`, and this demo makes it visible.

## Accessibility

- All demos respect `prefers-color-scheme`, `prefers-contrast`,
  `forced-colors`, and `@media print`.
- Semantic HTML structure with proper headings and accessible labeling.

## Files

- `demo.html` — tint ramps, hue interpolation side-by-sides, palettes, design system demo.
- `style.css` — all color-mix() declarations and theming.
- `README.md` — this file.
