# Collapse Button Example (Standard)

## Description
A standard HTML/CSS example demonstrating an Entrance Animation where a button "unfolds" or expands into view. It utilizes the modern CSS Grid `grid-template-rows: 0fr` to `1fr` technique to seamlessly animate height without hardcoding pixel values.

## Files
- `demo.html`: Contains the button and a wrapper div essential for the grid layout animation.
- `style.css`: Implements the `@keyframes expand-down-ag` animation that unfolds the wrapper, while fading in the text content simultaneously.

## Accessibility
- Native `<button>` element is focusable and keyboard-accessible out of the box.
- The text is visibly hidden at the start of the animation to prevent screen-reader artifacts before the button is "ready".
- **Reduced Motion**: Disables the scale and grid-expansion layout shifting. Replaces the entrance with a simple opacity fade (`simple-fade-ag`) to prevent jarring layout changes on page load for users with motion sensitivity.
