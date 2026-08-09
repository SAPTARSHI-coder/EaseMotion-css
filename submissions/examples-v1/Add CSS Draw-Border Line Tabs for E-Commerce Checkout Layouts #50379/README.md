# CSS Draw-Border Tabs - E-Commerce Checkout Layout

A pure CSS interactive tab component optimized for highly secure E-Commerce Checkout interfaces, featuring a crisp, constant-velocity sequential border drawing animation.

## Features
- **Secure Checkout Aesthetics**: Styled for maximum user trust with muted grays, crisp white panels, and a stark "Trust Blue" (`#2563eb`) accent color to guide users through the payment process.
- **Draw-Border Painting Effect**: The payment selection tabs have a default subtle `1px` border. When selected, a `2px` thick colored border rapidly "paints" itself sequentially clockwise over the default border, providing extremely clear, high-quality visual feedback.
- **Constant Velocity Sequential Drawing**: Unlike typical `ease` curves which slow down at corners, this implementation deliberately utilizes `linear` easing within the `transition` properties. This ensures the drawing "snake" maintains a constant speed as it traverses the perimeter, looking highly polished.
- **Pure CSS Input Binding**: Form views switch cleanly depending on the selected payment method using the `::checked` radio hack, with no JavaScript routing overhead.
- **Responsive Layout**: On mobile viewports, the horizontal tab grid smoothly collapses into a vertical list format, and the drawing border algorithm continues to work flawlessly around the newly shaped bounding boxes.

## Customization

The drawing physics and core checkout colors can be customized via standard CSS custom properties in the `:root`.

```css
:root {
  /* Draw-Border Line Physics */
  --draw-speed: 0.1s;       /* High speed for a snappy 0.4s total enclosure */
  --border-thickness: 2px;  /* Slightly thicker than default 1px border */
  
  /* Checkout Colors */
  --brand-primary: #2563eb; /* Royal Trust Blue */
}
```

## Architecture Notes
- The "drawing" effect utilizes the `box-sizing: border-box` property on absolute pseudo-elements (`::before` and `::after`).
- Crucially, the pseudo elements are positioned at `top: -1px; left: -1px` to perfectly overlap the underlying default `1px` border of the button. The math of `width: calc(100% + 2px)` guarantees the drawn border correctly encapsulates the entire component area.
- Delays are calculated dynamically using `calc(var(--draw-speed) * multiplier)` to ensure one line finishes exactly as the next begins.
