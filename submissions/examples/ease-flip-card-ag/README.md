# 3D Flip Card

A 3D card that flips over smoothly when hovered, revealing a back face with more information.

## Preview

Open `demo.html` in your browser and hover over the card to see the 3D flip animation.

## Implementation Details

- **No JavaScript:** The interaction is powered entirely by the `:hover` pseudo-class.
- **3D Transform:** Uses `transform: rotateY(180deg)` to flip the card along the Y-axis.
- **Perspective:** The parent container `.flip-card` has `perspective: 1000px` to give the 3D effect depth.
- **Backface Visibility:** The front and back faces use `backface-visibility: hidden` so that they don't show through when they are turned around. The back face is pre-rotated by 180 degrees so that it is initially hidden and becomes visible when the parent container flips.
