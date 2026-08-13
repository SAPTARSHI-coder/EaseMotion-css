# ease-loading-progress-circle-sap

A circular loading indicator filling with a gradient stroke, showing the live percentage in the center — same technique as a progress ring, applied to a gradient stroke via SVG `<linearGradient>`.

## Usage
1. Include `style.css`.
2. Add markup: SVG with `<defs><linearGradient>` + background circle + gradient-stroked fill circle + a centered label.
3. Call `setProgress`-style logic (see `demo.html`) to update `strokeDashoffset` and the label text.

## Customization
- Gradient color stops in `<linearGradient>`.
- Ring thickness/radius (`stroke-width`, `r`) — `circumference` must be recalculated in JS if radius changes.
- Progress source — demo uses a simulated random increment; swap for real upload/download progress events.

## Notes
- The gradient stroke uses `stroke: url(#pc-gradient-sap)` referencing an SVG `<linearGradient>` id defined in `<defs>` — this is the standard way to apply a gradient (rather than a flat color) to an SVG stroke.
- `transform: rotate(-90deg)` on the SVG starts the fill from 12 o'clock rather than the default 3 o'clock.
- Respects `prefers-reduced-motion`: the dashoffset transition is removed, so progress updates apply instantly rather than easing.