# CSS Split Flap Flip Animation

A vintage split-flap (Solari) display animation simulating flipping mechanical digits.

## Features
- Precise geometry slicing by splitting text baseline positioning using `line-height` and `overflow: hidden`.
- Hardware-accelerated mechanical flipping using `transform: rotateX()` anchored via `transform-origin: bottom center`.
- Realistic `backface-visibility: hidden` flipping to transition seamlessly from the front to the back of the digit.

## Files
- `demo.html`
- `style.css`
