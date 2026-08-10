# CSS Interactive Folding Ticket

An interactive coupon or ticket that visually folds in half in 3D space when hovered.

## Features
- Hardware accelerated folding physics utilizing `perspective: 800px` and `rotateX()`.
- Flawless hinging achieved by setting `transform-origin: bottom center` on the top half and `top center` on the bottom half.
- Simulated light casting by darkening the `background` color of the top half when it tilts away from the light source.

## Files
- `demo.html`
- `style.css`
