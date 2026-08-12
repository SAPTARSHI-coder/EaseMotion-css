# ease-progress-ring-sap

A circular SVG progress ring that animates its fill to any percentage, with a centered live label.

## Usage
1. Include `style.css`.
2. Add markup: SVG with a background circle + fill circle, plus a centered label.
3. Call `setProgress(pct)` from `demo.html` with any 0–100 value.

## Customization
- `radius`/`stroke-width`: ring thickness and size — must recalculate `circumference` in JS if radius changes.
- Transition duration/easing on `.ring-fill` for animation speed.
- Colors on `.ring-bg`/`.ring-fill`.

## Notes
- Uses the standard SVG circle `stroke-dasharray`/`stroke-dashoffset` technique: the circle's full circumference is the dash length, and offsetting it reveals a proportional arc.
- `transform: rotate(-90deg)` on the SVG starts the fill from the top (12 o'clock) instead of the default 3 o'clock start point.
- Respects `prefers-reduced-motion`: fill jumps directly to the target percentage instead of animating there.