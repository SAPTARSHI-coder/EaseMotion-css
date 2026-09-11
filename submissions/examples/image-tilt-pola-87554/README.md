# Image Tilt Pola (#87554)

A gallery component showcasing Polaroid-style photo cards that sit at natural, playful tilt angles and smoothly straighten with elevated depth upon hover.

## Features
- **Realistic Polaroid Aesthetics:** White borders, realistic bottom margin text captions, and multi-layer drop shadows.
- **Dynamic Rotation & Lift:** Hardware-accelerated transitions that straighten rotation (`rotate(0deg)`) and elevate depth (`scale(1.05)` and `translateY(-8px)`).
- **Responsive Layout:** Flexbox grid with wrapping and interactive focus states.
- **Accessibility:** Includes `@media (prefers-reduced-motion: reduce)` support.

## Usage
Include `style.css` in your project and structure your cards using `.pola-card`.