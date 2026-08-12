# Pulse Glow Ring (#31843)

Concentric rings that pulse outward with a neon glow effect, creating a radar-like or ripple animation.

## Features
- Dual pseudo-element rings with staggered delays
- Scale + opacity fade-out keyframes
- Cyan glow via `box-shadow`
- Controlled via `--pulse` custom property (`0` = paused, `1` = running)

## Usage
Set `--pulse: 1` on `.pulse-ring` to activate the radiating ring animation.
