# Radial Circular Progress Indicator (Cyberpunk Theme)

A high-tech, futuristic web UI component designed with a striking cyberpunk aesthetic. It features a scalable SVG radial progress ring perfectly synchronized with an animated JavaScript percentage counter.

## Features

- **SVG Radial Progress**: Uses SVG `stroke-dasharray` and `stroke-dashoffset` for a crisp, resolution-independent circular loading animation.
- **JavaScript Animated Counter**: Features a smooth number counting animation using `requestAnimationFrame` with a custom ease-out mathematical function for a highly responsive feel.
- **Cyberpunk Aesthetics**: Incorporates defining characteristics of the genre:
  - Neon colors (Cyan, Yellow, Pink) against deep dark backgrounds.
  - Monospace typography (`Share Tech Mono`).
  - Scanline overlays and subtle CSS grid backgrounds.
  - Drop-shadow glows and glitch hover effects.
- **Interactive Re-initialization**: A styled interactive button allows you to trigger a system reboot simulation, randomizing the target progress value and playing a glitch effect.

## Files Included

- `demo.html`: The semantic structure containing the SVG ring, the JS logic for the animation, and the cyberpunk layout.
- `style.css`: The stylesheet packed with CSS variables, glowing effects, keyframe animations (blinking status, glitching), and the aesthetic overlay styling.

## Usage Guide

1. Open `demo.html` in your web browser.
2. Watch the initial loading sequence sync the progress ring and percentage number.
3. Hover over the progress ring to experience the glitch effect and scale transition.
4. Click the `INITIALIZE_REBOOT()` button to reset the animation to a new random value, simulating a system reboot.
