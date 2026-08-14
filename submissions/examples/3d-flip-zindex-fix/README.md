# 3D Flip Z-Index Fix

A CSS architectural pattern resolving the infamous stacking context bug where absolute child elements inside a `transform: rotateY()` container get flattened, trapping their `z-index` inside the parent's plane and clipping into backgrounds during 3D rotations.

## Features
- **The Bug**: Applying any CSS `transform` creates a new stacking context. When doing a 3D flip (e.g. `rotateY(180deg)`), the browser takes all the children of that flipped element and mathematically flattens them onto a 2D plane. This means if you put a `z-index: 9999` on a badge inside the card, it is trapped *inside* that flat plane. During rotation, the badge will clip through the parent wrapper instead of floating above it.
- **The Fix**: 
  1. **Preserve 3D**: We apply `transform-style: preserve-3d` to the rotating parent container (`.flip-card`). This instructs the browser rendering engine to stop flattening the children and let them exist in true 3D space.
  2. **Translate Z**: Since we are now in true 3D space, `z-index` is no longer the correct tool for layering. Instead, we use `transform: translateZ(30px)` on the absolute badge to physically push it forward off the card's surface. When the card rotates, the badge will beautifully orbit above it.

## Usage
Open `demo.html` in your browser. 
- Hover over the **Buggy Flip** card. Watch the red "Sale!" badge carefully. Because it is flattened, it clips directly through the card edges and the background during the rotation.
- Hover over the **Fixed Flip** card. The badge physically hovers off the surface of the card in 3D space, preventing any clipping.

## Files
- `demo.html`: The HTML structure demonstrating the parent `.perspective-wrapper` and the `.flip-card` inner mechanics.
- `style.css`: The styling engine containing the `preserve-3d` and `translateZ` physics rules.
