# Confetti Burst Effect

A celebration confetti burst effect triggered on button click. Particles burst outward from the center with randomized direction and distance, using CSS keyframe animations.

## Features

- 30 particle confetti burst on click
- Randomized angle and distance per particle
- Three configurable colors alternating across particles
- Staggered animation delays for natural feel
- Button hover/active scale feedback
- Google Fonts Inter integrated

## CSS Custom Properties

| Property | Default | Description |
|---|---|---|
| `--confetti-color1` | `#ef4444` | First confetti color (red) |
| `--confetti-color2` | `#fbbf24` | Second confetti color (yellow) |
| `--confetti-color3` | `#3b82f6` | Third confetti color (blue) |
| `--burst-duration` | `1.2s` | Duration of the burst animation |

## Usage

Click the button to spawn confetti. JavaScript creates 30 particles with randomized `--x` and `--y` CSS properties that the keyframe uses for absolute positioning.
