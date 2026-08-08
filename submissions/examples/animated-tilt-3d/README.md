# ease-3d-tilt

A card that tilts in 3D space to follow cursor position, with inner content lifted on the Z-axis for parallax depth.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <div class="tilt-card">
     <div class="tilt-content">
       <h3>Title</h3>
       <p>Description</p>
     </div>
   </div>
```
3. Attach the mousemove/mouseleave listener from `demo.html`.

## Customization
- `maxTilt` (JS): maximum rotation in degrees — lower for a subtler effect.
- `translateZ(40px)` on `.tilt-content`: how far inner content "pops" forward for parallax.
- `perspective(800px)`: lower values = more dramatic/exaggerated tilt.

## Notes
- Rotation is computed from cursor position relative to the card's own bounding box (0–1 normalized), not viewport position.
- `.tilt-content` is pushed forward on Z so it visually separates from the card surface as it tilts, reinforcing the 3D read.
- JS is required since CSS alone can't read live cursor coordinates; CSS handles all the actual transform/transition rendering.