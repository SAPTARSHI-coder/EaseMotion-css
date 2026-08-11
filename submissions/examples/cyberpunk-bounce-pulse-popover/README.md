# CSS Bounce-Pulse Popover (Cyberpunk)

A pure CSS popover component designed for Cyberpunk Neon Layouts. It features a highly kinetic `bounce` and `pulse` combination animation on hover, giving the UI a feeling of active data transmission and scanning.

## Features
- Pure CSS and HTML (No JavaScript required).
- The `.popover` utilizes an `@keyframes popover-bounce` animation that simultaneously transitions `transform` (translating and scaling) while expanding and fading a `box-shadow` to create the pulse effect.
- Includes a customized `.warning-node` variant that maps the neon glow to pink/red to signify critical status.
- Immersive cyberpunk aesthetic featuring background grids, neon box-shadows, and monospace typography.
- Fully responsive. On mobile, the popovers automatically position to the right side of the nodes with a dedicated mobile keyframe animation.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts without the bounce/pulse for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Hover over any of the diagnostic nodes in the grid. The node will scale up, and the diagnostic popover will spring out with a bouncy entrance while simultaneously emitting a neon pulse ring. 

## Files
- `demo.html`: The HTML structure for the grid of modules and their nested popover elements.
- `style.css`: The styling, neon effects, and `@keyframes` logic for the bounce-pulse hover animations.
