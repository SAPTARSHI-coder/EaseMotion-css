# ease-diagonal-wipe-transition-sap

A card where hovering triggers a diagonal wipe — a second layer sweeps in from one corner via an animated `clip-path` triangle, fully covering the base layer.

## Usage
1. Include `style.css`.
2. Add markup: two stacked full-size layers, `.wipe-base` (bottom) and `.wipe-reveal` (top, clipped).
```html
   <div class="diagonal-wipe-sap">
     <div class="wipe-base">Base content</div>
     <div class="wipe-reveal">Revealed content</div>
   </div>
```

## Customization
- `clip-path` polygon points: change which corner the wipe originates from and its diagonal angle.
- Transition duration/easing for wipe speed.
- Colors/content of both layers.

## Notes
- The wipe animates a `clip-path: polygon()` from a collapsed triangle (all points at one corner) to a full-covering triangle, which CSS interpolates smoothly between matching point counts — this is what produces the diagonal sweep rather than a simple rectangular wipe.
- Both layers are full-size and stacked; only the top layer's visible clipped area changes, so no actual layout shift occurs during the wipe.
- Respects `prefers-reduced-motion`: `clip-path` animation is replaced with a simple opacity cross-fade between the two layers, avoiding the directional sweep motion.