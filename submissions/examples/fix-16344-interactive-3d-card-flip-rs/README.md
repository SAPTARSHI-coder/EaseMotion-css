# Interactive 3D Card Flip Classes

This submission adds utility classes for 3D card flipping animations.

## Bug / Feature Description
3D card flips are an engaging way to show more information on hover without taking up extra screen real estate. Implementing them requires careful management of CSS 3D contexts (`perspective`, `transform-style`, and `backface-visibility`).

## Fix / Implementation Details
- Added `.ease-flip-container` to establish a 3D perspective context.
- Added `.ease-flip-card` to hold the `preserve-3d` transform style and transition logic.
- Added `.ease-flip-front` and `.ease-flip-back` to manage visibility and initial rotations.
- Supported horizontal (`rotateY`) and vertical (`rotateX`) flipping via `.ease-flip-container-vertical`.

## How to Test
1. Open `demo.html` in your browser.
2. Hover over the first card to see it flip horizontally.
3. Hover over the second card to see it flip vertically.
