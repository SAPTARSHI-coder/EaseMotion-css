# Drone Flight HUD

Closes #74803

Drone telemetry HUD with altitude, speed, battery, signal readouts, plus a compass at the bottom showing bearing.

## Technique

Green phosphor color scheme with scan-line overlay (`::before` with `linear-gradient` repeats). Compass built with absolutely positioned N marker, a triangular needle, and a yellow center pivot.
