# Soundbar Equalizer

Closes #74815

15-bar frequency equalizer with bouncing bars, gradient fills, and metadata row below.

## Technique

Each bar has its own `animation-delay` and base `height` so the visual pattern is varied. The `scaleY` keyframe creates the bouncing effect, alternating between a 0.3 compressed state and 1.2 stretched state.
