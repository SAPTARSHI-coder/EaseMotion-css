# Helix 3D Rotation

A pure CSS, 3D animated DNA-like helix. 

## Features
- **True 3D Space**: Utilizes `transform-style: preserve-3d` and `perspective` to create a genuine 3D visual space entirely in CSS.
- **Parametric Modeling**: Uses structural DOM elements (`.ease-helix-strand`) layered sequentially with incrementing `translateY` and `rotateY` degrees to form a perfect spiral curve.
- **Infinite Rotation**: The wrapper container spins continuously along the Y-axis, creating the optical illusion of an ascending/descending double-helix.
- **Neon Glows**: Colored gradients and `box-shadow` emit a bright, cyberpunk-inspired neon look.

## Files
- `demo.html`: The HTML structure comprising a wrapper and 20 individual helix strands.
- `style.css`: The 3D CSS rendering and keyframe rotation animations.

## Usage
Add the `.ease-helix-container` wrapper to your project. Since the animation is entirely driven by keyframes and structural rotations, you can easily increase or decrease the height/density of the helix by adding more strands and adjusting their Y translation and rotation degrees in CSS.
