# CSS-only Animated Radar Scanner Component

A high-tech, tactical radar scanner component created entirely with CSS gradients and keyframe animations.

## Overview
This component simulates a glowing green radar scanner. It uses a rotating `conic-gradient` to create a continuous sweeping beam. The "blips" (detected targets) are meticulously synchronized with the beam using calculated `animation-delay` offsets, making them pulse brightly exactly when the scanner beam passes over their coordinates.

## Features
- ✨ **100% CSS-only**: No JavaScript logic required to synchronize the blips.
- 📡 **Conic Gradient Beam**: A smooth sweeping effect achieved purely via `conic-gradient` and `rotate`.
- 🎯 **Synchronized Blips**: Mathematical precision syncing the sweep angle with the blip fading animations.
- 🎨 **Detailed Aesthetics**: Incorporates a grid background, crosshairs, deep shadows, and a convex glass reflection.

## Files
- `demo.html`: Structure containing the radar chassis, grid, beam, and individual target blips.
- `style.css`: All the styling rules, complex gradients, and synchronized keyframe animations.

## Usage
Simply copy the HTML structure and link the CSS file to use this component. The `.ease-radar-container` manages the layout and provides a subtle 3D hover effect on the entire chassis.

## Customization
- **Colors**: Replace the `#10b981` (emerald green) hex codes to change the radar's color scheme (e.g., to a red tactical scanner).
- **Sweep Speed**: Adjust the `4s` duration in the `.ease-radar-beam` and `.ease-blip` animations. Remember to scale the `animation-delay` on each blip proportionally.
- **Adding Blips**: To add a new blip at angle $\theta$ (0 is top, 90 is right), calculate its left/top position using sine/cosine, and set its `animation-delay` to `(\theta / 360) * total_sweep_time`.
