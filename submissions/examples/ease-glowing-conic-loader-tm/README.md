# Glowing Conic Loader

Closes #75012

Rotating conic gradient ring with pink/purple/cyan stops, an inner solid cutout, and an outer box-shadow glow.

## Technique

`conic-gradient` produces the colored ring. The full circle rotates 360deg on an infinite loop. A `::after` with matching background color creates the donut hole.
