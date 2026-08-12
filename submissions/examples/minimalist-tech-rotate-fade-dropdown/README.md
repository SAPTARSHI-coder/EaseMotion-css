# CSS Rotate-Fade Dropdown (Minimalist Tech)

A pure CSS interactive dropdown component designed for Minimalist Tech Layouts. It features a spatial "Rotate-Fade" entrance animation, where the menu swings downward like a hinge in 3D space, coupled with custom interactive checkboxes and hover nudging.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Tech Aesthetic**: Clean layout, sharp `Inter` typography, robust subtitle descriptors, and fully custom SVG checkbox inputs.
- **State Management**: The opening and closing of the dropdown is handled entirely via a hidden checkbox hack (`<input type="checkbox">`). A `<label>` acts as the trigger button.
- **The Rotate-Fade Entrance Effect**: 
- A dedicated utility class `.rotate-fade` handles the animation on the dropdown menu container.
- We establish a 3D context by applying `perspective: 1000px` to the parent containers and `transform-style: preserve-3d` to the dropdown menu.
- We set the hinge point using `transform-origin: top center`.
- The initial state of the menu is swung backwards `-60deg` into the screen (`transform: rotateX(-60deg)`) and faded out (`opacity: 0`).
- When triggered, an `@keyframes` animation (`menu-rotate`) rotates the menu down to `0deg` while fading to `opacity: 1`. We use a bouncy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function, allowing the menu to swing slightly past 0 degrees before settling flat, giving it physical weight.
- **Interactive Checkbox Items**: The list items feature custom-styled checkboxes. We hide the native input and style a sibling `div` (`.box`) to act as the visual box. When checked (`input:checked ~ .box`), it fills with an accent color and scales in an SVG checkmark with a bouncy bezier curve.
- **Hover Interactions**: Hovering over the list items (`.menu-item:hover`) triggers a slight physical nudge to the right (`transform: translateX(4px)`) alongside a background color shift, providing strong tactile feedback.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the 3D hinge rotation, the hover nudging, and the checkbox scaling animations are completely disabled, safely falling back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock "Filter Results" action button. Click the button to toggle the dropdown. Watch closely as the menu swings out of the screen towards you. Try hovering over the list items to see the nudge effect, and click them to see the custom bouncy checkmark animations.

## Files
- `demo.html`: The HTML structure for the dropdown, detailing the pure CSS checkbox hack setup and the markup structure for the custom checkboxes.
- `style.css`: The styling, minimalist tech design tokens, the required `perspective` rules to establish the 3D space, the `@keyframes` driving the 3D hinge rotation, and the interactive logic for the custom checkboxes and hover states.
