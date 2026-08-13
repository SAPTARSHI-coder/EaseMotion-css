# CSS Relative Color Syntax — Color Derivation from Tokens

A showcase of CSS Relative Color Syntax (`oklch(from ...)`,
`rgb(from ...)`) for deriving design-system colors from a single
base token. Change one variable and every hover, active, shadow,
and badge color recalculates automatically.

## What Relative Color Syntax does

Relative Color Syntax lets you take a base color and modify its
individual channels:

```css
/* Base token */
--brand: oklch(63% 0.18 264);

/* Lighter variant: same chroma/hue, different lightness */
background: oklch(from var(--brand) calc(l + 0.10) c h);

/* Translucent variant */
background: oklch(from var(--brand) l c h / 30%);

/* Different hue, same feel */
background: oklch(from var(--brand) l c 340);
```

## Demo sections

| Section | Description |
|---------|-------------|
| **Opacity Derivation** | 6-step opacity ramp from one token |
| **Lightness Ramp** | 7 tints/shades via `calc(l ± N)` |
| **Chroma Ramp** | 5 saturation levels keeping lightness and hue |
| **Hue Rotation** | Complete palette — pink, magenta, violet, cyan, teal, green |
| **Cross Color-Space** | Derive from sRGB using `rgb(from ...)` |
| **Design System** | Buttons, badges, and cards all derived from 2 tokens |

## Browser support

- Chrome 119+
- Safari 16.4+
- Firefox 128+
- Edge 119+

95%+ global support.

## Why it fits EaseMotion CSS

- **Genuinely missing** — zero `oklch(from ...)` or `rgb(from ...)`
  usage exists in `submissions/examples/`.
- **Pure CSS** — all color math happens in the browser.
- **Design-system focused** — real-world patterns for buttons,
  badges, borders, and shadows.
- **Modern CSS** — part of CSS Color Level 5.

## Accessibility

- Full dark mode, prefers-contrast, forced-colors, and print support.

## Files

- `demo.html` — six demo sections with swatches and a design system.
- `style.css` — all relative color declarations and theming.
- `README.md` — this file.
