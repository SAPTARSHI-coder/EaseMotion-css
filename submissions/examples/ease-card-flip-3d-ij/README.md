# Card Flip 3D

A 3D flip card with front and back faces. Flip state via `--cf-flipped` (0 or 1). CSS uses `perspective`, `rotateY`, `preserve-3d`, and `backface-visibility` for the 3D effect.

## Features

- 3D card flip animation
- Flip state via `--cf-flipped` CSS variable
- Perspective for realistic depth
- Gradient front face, dark back face
- Bounce cubic-bezier transition

## Usage

Set `--cf-flipped` (0 or 1) on `.flip-card`. CSS rotates the inner container 180° on the Y axis when flipped. Uses `backface-visibility: hidden` and `preserve-3d`.
