# ease-sticky-note-peel-sap

A sticky-note styled card with a corner that peels up on hover, revealing a shadowed underside triangle — pure CSS, no images.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <div class="sticky-note-sap">Your note text here</div>
```

## Customization
- Note `background` color and slight `rotate()` for a "stuck on a wall" tilt.
- `::after` gradient stops: peel corner size/shadow depth.
- Peel size on hover (`width`/`height` in `:hover::after`).

## Notes
- The peel effect is a `::after` pseudo-element sized at `0` by default and grown on hover, using a diagonal gradient split (paper-white to note-yellow) to simulate the underside of curling paper.
- `overflow: hidden` on the note keeps the growing peel corner clipped to the note's own boundary.
- Respects `prefers-reduced-motion`: peel corner and shadow both apply instantly on hover instead of easing in.