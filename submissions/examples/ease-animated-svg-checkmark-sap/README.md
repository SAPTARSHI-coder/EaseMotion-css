# ease-animated-svg-checkmark-sap

A success checkmark that draws itself in — the circle traces first, then the checkmark strokes in right after, using the SVG stroke-dasharray technique.

## Usage
1. Include `style.css`.
2. Add markup:
```html
   <svg class="svg-check-sap" viewBox="0 0 80 80">
     <circle class="check-circle" cx="40" cy="40" r="35"/>
     <path class="check-mark" d="M24 41l10 10 22-22"/>
   </svg>
```

## Customization
- Circle/check stroke colors and thickness.
- `animation-delay` on `.check-mark` (0.5s): gap between circle finishing and checkmark starting.
- `stroke-dasharray` values must roughly match each path's actual length — recalculate if you change the circle radius or checkmark path shape.

## Notes
- Both shapes use the standard stroke-dasharray-equal-to-length / dashoffset-animate-to-zero technique; the checkmark's delay is timed to start right as the circle finishes, so the two draws read as one sequential success animation rather than simultaneous.
- Respects `prefers-reduced-motion`: both draw animations are disabled, and dashoffset is set directly to 0 so the complete checkmark displays immediately.