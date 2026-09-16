# ease-gradient-text-shift-sap

Heading text filled with a continuously shifting animated gradient — the classic "shimmering rainbow text" effect, pure CSS.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <h1 class="gradient-text-sap">Your Heading Text</h1>
```

## Customization
- Gradient color stops in the `linear-gradient()`.
- `background-size: 300% auto`: how far the gradient travels — larger values = slower-feeling shift for the same duration.
- Animation duration (`6s`) for shift speed.

## Notes
- `background-clip: text` + `color: transparent` (with `-webkit-` prefixes for broader support) clips the gradient background to the text glyph shapes only.
- The gradient must repeat its first color at the end of the stop list (`#2563eb ... #2563eb`) for the looping `background-position` animation to cycle seamlessly with no visible seam.
- Respects `prefers-reduced-motion`: animation is disabled, gradient rests at a fixed position showing a static (non-shifting) gradient fill.