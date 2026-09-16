# Draw-Border Line Modal (E-Commerce Checkout style)

A checkout confirmation modal where the border draws itself in with an SVG stroke animation on open.

## Usage
Include the markup and script from `demo.html`. Open/close logic is minimal vanilla JS; the border-draw animation and modal entrance transition are pure CSS/SVG.

## Customization (CSS variables)
| Variable | Purpose | Default |
|---|---|---|
| --modal-duration | Modal fade/scale transition speed | 260ms |
| --border-draw-duration | Border line draw animation speed | 900ms |
| --border-color | Color of the drawn border line | #16a34a |
| --accent | Brand/button accent color | #16a34a |
| --modal-scale-from | Starting scale before entrance | 0.94 |

## Accessibility
- `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
- Focus moves to modal on open, returns to trigger on close
- Closes on `Escape` key or clicking the overlay
- Visible focus rings via `:focus-visible`