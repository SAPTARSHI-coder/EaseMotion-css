# CSS Bounce-Pulse Dropdown (Minimalist Tech)

A pure CSS interactive dropdown component designed for Minimalist Tech Layouts. It features a physical "Bounce-Pulse" entrance animation, where the menu structurally springs into view, followed by a continuous, subtle breathing scale effect to keep the interface feeling alive.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Tech Aesthetic**: Clean layout, sharp `Inter` typography, robust subtitle descriptors, and distinct accent-colored icon boxes.
- **State Management**: The opening and closing of the dropdown is handled entirely via a hidden checkbox hack (`<input type="checkbox">`). A `<label>` acts as the trigger button.
- **Interactive Trigger Button**: The trigger button features a plus icon that smoothly rotates 45 degrees into an 'X' close state when the menu is opened. It also includes an infinitely pulsing notification dot (`.notification-dot`) indicating action is required.
- **The Bounce-Pulse Entrance Effect**: 
- A dedicated utility class `.bounce-pulse` handles the animation on the dropdown menu container.
- We chain two `@keyframes` animations when the menu is opened.
- The first animation (`menu-bounce`) handles the structural entrance. The menu scales up from `0.8`, using a bouncy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function. Because the curve exceeds 1.0, it forces the browser to mathematically overshoot the final `scale(1)` position, creating a highly physical "spring" effect.
- The second animation (`menu-pulse`) runs infinitely (`infinite alternate`) after the bounce finishes. It continuously and subtly scales the menu up to `scale(1.02)` and back down, creating a breathing effect.
- The inner menu content has a slight delayed fade-in (`content-fade`) to ensure the text doesn't look squished during the initial physical bounce phase.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the bouncing scale, continuous pulse, icon rotation, and notification dot animations are completely disabled, safely falling back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock "New Resource" action button with a pulsing notification dot. Click the button to toggle the dropdown. Watch closely as the menu physically springs outward, followed by the soft continuous breathing scale. Click the button again to close it.

## Files
- `demo.html`: The HTML structure for the dropdown, detailing the pure CSS checkbox hack setup and the structure for the pulsing notification dot.
- `style.css`: The styling, minimalist tech design tokens, the chained `@keyframes` driving the physical bounce and ambient pulse effects, and the logic to rotate the trigger icon.
