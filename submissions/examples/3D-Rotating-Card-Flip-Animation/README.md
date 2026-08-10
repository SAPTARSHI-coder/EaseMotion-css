# 3D Rotating Card Flip Animation

A pure CSS 3D card flip animation that rotates the card along the Y-axis when hovered or focused, revealing a styled back face.

## Features

- Pure CSS implementation
- No JavaScript required
- Smooth 3D rotation animation
- Perspective depth effect
- Front and back card faces
- Responsive card sizing
- Keyboard-accessible interaction
- Customizable colors, dimensions, and animation speed

## How It Works

The animation uses CSS 3D transforms to create the card flip effect.

The main properties used are:

- `perspective` — creates the 3D depth
- `transform-style: preserve-3d` — maintains the 3D positioning of the card faces
- `transform: rotateY(180deg)` — rotates the card around the Y-axis
- `backface-visibility: hidden` — hides the reverse side of each face
- `transition` — creates the smooth flipping animation

## Structure

```text
3d-rotating-card-flip/
├── demo.html
├── style.css
└── README.md