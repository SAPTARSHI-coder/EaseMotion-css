# Pulsing Radar Scanner

A classic retro green radar screen with a sweeping scanner beam and fading blips.

## Preview
Open `demo.html` in your browser. You will see a circular radar with crosshairs and concentric circles. A bright green sweeping beam continually rotates around it, lighting up two 'blip' targets as it passes them.

## Implementation
- The `.grid` uses multiple background gradients (`linear-gradient` for crosshairs and `radial-gradient` for concentric rings) to draw the radar layout.
- The `.sweep` element uses a `conic-gradient` that goes from transparent to solid green to create the trailing beam.
- The sweep is animated to rotate 360 degrees infinitely (`@keyframes scan`).
- The targets (`.dot`) use an animation with specific `animation-delay` times aligned with when the beam crosses their coordinates, simulating radar detection.
