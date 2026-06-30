# ease-circuit-trace

Fixes #13757 — animated SVG circuit board trace lines with glowing
electricity dots travelling along the paths.

## Features

| Feature                     | Detail                                          |
| --------------------------- | ----------------------------------------------- |
| stroke-dashoffset animation | Traces draw themselves like electricity flowing |
| animateMotion glowing dot   | Dot travels along each circuit path             |
| 3 colour channels           | Green (power), Blue (data), Purple (signal)     |
| IC chip decoration          | Central chip with pins for tech theme           |
| Node pads                   | Pulsing connection points at junctions          |

## Files

- demo.html - live SVG circuit board demo
- style.css - all animation and glow styles
- README.md - this file

## Techniques Used

- SVG stroke-dasharray + stroke-dashoffset for trace draw animation
- SVG animateMotion for dot travelling along path
- CSS drop-shadow filter for glow effect
- Staggered animation-delay for multi-path flow
- prefers-reduced-motion support
