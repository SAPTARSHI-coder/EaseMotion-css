# ease-hover-card-border-trace-sap

On hover, a bright segment appears to "trace" around the card's border continuously, using a masked rotating `conic-gradient` on a `::before` layer — no SVG stroke animation needed.

## Usage
1. Copy `style.css` into your project.
2. Wrap your card content in `.border-trace-sap`, matching `demo.html`.

## Customization
- Adjust the `conic-gradient` stops (`15%`/`30%`) to change trace segment length.
- Change the `2.5s linear` duration for trace speed.
- Match `padding: 2px` on `::before` to your desired border thickness.

## Accessibility
Purely decorative hover effect; respects `prefers-reduced-motion` by showing a static full-opacity trace instead of animating.

## Browser support
Requires `mask-composite`/`-webkit-mask-composite` support (all modern evergreen browsers).