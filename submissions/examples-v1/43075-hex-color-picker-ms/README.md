# Hex Color Picker

A sleek, interactive CSS-only theme color picker component.

## Features
- **Pure CSS State Management**: Uses hidden `input[type="radio"]` elements to manage the selected color state exclusively without JavaScript.
- **Morphing Animations**: Color swatches morph from perfect circles to smooth "squircles" (rounded rectangles) when selected, providing excellent visual feedback.
- **Dynamic Preview**: Uses the modern CSS `:has()` pseudo-class to dynamically update a preview dot color based on which swatch is currently checked!
- **Hover Reveal**: Hovering over a swatch reveals its specific hex code elegantly sliding up from below.

## Files
- `demo.html`: The markup containing the accessible radio inputs and labels.
- `style.css`: The styling powering the interactions and `:has()` dynamic preview updates.

## Usage
Simply drop the `.ease-hex-picker` container into your project. You can add or modify swatches by creating new `.ease-hex-swatch` labels and adjusting the `:has()` selectors in the CSS for dynamic previews.
