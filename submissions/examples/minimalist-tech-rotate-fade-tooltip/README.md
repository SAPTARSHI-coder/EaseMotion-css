# CSS Rotate-Fade Tooltip (Minimalist Tech)

A pure CSS interactive tooltip component designed for Minimalist Tech Layouts. It features a spatial "Rotate-Fade" entrance animation, where the tooltip container swings into view from the Z-axis, pivoting like a hinge connected to the trigger element.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Tech Aesthetic**: Clean layout, sharp `Inter` typography, robust subtitle descriptors, and a dark slate tooltip container for high contrast against a light UI.
- **State Management**: The tooltip visibility is handled entirely via CSS `:hover` and `:focus-within` pseudo-classes on a wrapper element (`.tooltip-wrapper`), ensuring accessibility for keyboard navigation.
- **The Rotate-Fade Entrance Effect**: 
- A dedicated utility class `.rotate-fade-tooltip` handles the hover interactions and triggers the child animations.
- We establish a 3D context by applying `perspective: 1500px` to the parent containers (all the way up to the body for a true global camera view) and `transform-style: preserve-3d` to the wrapper.
- We set the hinge point using `transform-origin: top center` on the tooltip content.
- The initial state of the tooltip is swung backwards `-60deg` into the screen (`transform: rotateX(-60deg)`) and faded out (`opacity: 0`).
- When hovered, an `@keyframes` animation (`tooltip-rotate`) rotates the tooltip down to `0deg` while fading to `opacity: 1`. We use a bouncy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function, allowing the tooltip to swing slightly past 0 degrees before settling flat, giving it physical weight.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the 3D hinge rotation and the hover-nudging on the buttons are completely disabled, safely falling back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock group of "Action Buttons". Hover your mouse over any of the buttons. The tooltip will appear by swinging outward from the screen towards you, hinging from its top edge. Move your mouse away to hide the tooltip. You can also use the `Tab` key to navigate the buttons and trigger the tooltips via keyboard focus.

## Files
- `demo.html`: The HTML structure for the tooltips, detailing the `.tooltip-wrapper` setup and the required DOM structure for the action buttons.
- `style.css`: The styling, minimalist tech design tokens, the required `perspective` rules to establish the 3D space, and the `@keyframes` driving the 3D hinge rotation.
