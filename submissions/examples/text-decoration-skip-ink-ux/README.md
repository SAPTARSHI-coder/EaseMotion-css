# Text Decoration Skip Ink UX

## What does this do?

Demonstrates the `text-decoration-skip-ink` CSS property which controls whether underlines skip over descenders (the tails on letters like g, j, p, q, y).

## How is it used?

```css
.tsi-skip-auto {
  text-decoration-skip-ink: auto;
} /* default — skips descenders */
.tsi-skip-none {
  text-decoration-skip-ink: none;
} /* draws through descenders */
```

```html
<p class="tsi-underline tsi-skip-auto">glyph jumping quickly</p>
<p class="tsi-underline tsi-skip-none">glyph jumping quickly</p>
```

## Why is it useful?

Underlines that cut through descenders reduce readability. `text-decoration-skip-ink: auto` (default in modern browsers) visually breaks the underline around descenders. This demo shows the difference and gives developers control with `none` for specific design needs.
