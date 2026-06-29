# Liquid Fill Animation Button

A button that features a highly organic "liquid wave" filling animation on hover.

## Files
- `demo.html`: The HTML structure for the button.
- `style.css`: The styling that creates the rotating, morphing border-radius wave.
- `README.md`: This file.

## Features
- **Organic Wave:** Instead of a simple `height` transition, it uses a massive pseudo-element that rotates endlessly with a skewed `border-radius`, creating the illusion of sloshing liquid.
- **Pure CSS:** No SVG or Canvas necessary. Uses basic CSS `transform` and `@keyframes`.
- **Text Contrast:** The text seamlessly stays above the liquid layer and changes color as the liquid rises behind it.

## Usage
Simply use the `.liquid-fill-btn` class on a button or link.
