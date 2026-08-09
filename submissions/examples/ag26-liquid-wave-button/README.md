# Liquid Wave Fill Button

A dynamic button that fills up with a liquid wave animation when hovered over.

## Preview
Open `demo.html` in your browser. Hover over the button and watch the blue liquid rise from the bottom, waving as it fills the button.

## Implementation
- The button uses `overflow: hidden`.
- Inside the button, there is a large `.wave` div which is a "squircle" (`border-radius: 40%`).
- On `:hover`, this shape is translated upwards (`translateY`) while simultaneously being rotated 360 degrees. Because it is not a perfect circle, the rotation creates the illusion of a sloshing liquid wave rising up.
