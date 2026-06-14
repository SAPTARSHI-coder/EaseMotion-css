# Cyberpunk Glitch Button Effect

A futuristic, high-tech button that "glitches" rapidly on hover, shifting its red and cyan color channels.

## Files
- `demo.html`: The HTML structure for the glitch button.
- `style.css`: The CSS that generates the glitch layers and the clip-path animations.
- `README.md`: This file.

## Features
- **Pure CSS Glitch:** Uses `::before` and `::after` pseudo-elements to duplicate the button text.
- **Color Channel Shift:** The pseudo-elements are colored red and cyan and offset slightly to mimic a broken chromatic aberration effect.
- **Keyframe Slicing:** Uses `clip-path: polygon()` inside an `@keyframes` animation to randomly slice and shift the layers on hover.

## Usage
Simply add the `.cyberpunk-glitch-btn` class to your button. The button relies on standard HTML text content.
