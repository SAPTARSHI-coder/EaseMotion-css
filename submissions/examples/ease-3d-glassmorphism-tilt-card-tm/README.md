# 3D Glassmorphism Tilt & Flip Card

Closes #75298

Card that flips on hover to reveal a back face, with a glassmorphism front and a gradient back.

## Technique

`transform-style: preserve-3d` + `backface-visibility: hidden` on each face. The card rotates 180deg on Y axis on hover. Front uses `backdrop-filter: blur` for the glass effect, back has a colorful gradient.
