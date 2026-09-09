# Submarine Sonar Screen

Closes #74820

Animated radar/sonar display with rotating sweep beam, contact blips, and depth/heading telemetry.

## Technique

A line element rotates 360deg from a center anchor. Concentric rings use inset positioning. Contact blips animate with `scale` and `opacity` to simulate the ping fade.
