# CSS Bounce-Pulse Tooltip (Minimalist Tech)

A pure CSS interactive tooltip component designed for Minimalist Tech Layouts. It features a physical "Bounce-Pulse" entrance animation, where the tooltip structurally springs into view from its pointer hinge, followed by a continuous, subtle breathing scale effect to keep the interface feeling alive.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Tech Aesthetic**: Clean layout, sharp `Inter` typography, robust data metric cards, and a dark slate tooltip container for high contrast.
- **State Management**: The tooltip visibility is handled entirely via CSS `:hover` and `:focus-within` pseudo-classes on a wrapper element (`.tooltip-wrapper`), ensuring accessibility for keyboard navigation.
- **The Bounce-Pulse Entrance Effect**: 
- A dedicated utility class `.bounce-pulse-tooltip` handles the hover interactions and triggers the child animations.
- We set the hinge point using `transform-origin: bottom center` on the tooltip content so it scales outwards from the little pointer arrow.
- We chain two `@keyframes` animations when the wrapper is hovered.
- The first animation (`tooltip-bounce`) handles the structural entrance. The tooltip scales up from `0.7`, using a bouncy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function. Because the curve exceeds 1.0, it forces the browser to mathematically overshoot the final `scale(1)` position, creating a highly physical "spring" effect.
- The second animation (`tooltip-pulse`) runs infinitely (`infinite alternate`) after the bounce finishes. It continuously and subtly scales the tooltip up to `scale(1.02)` and back down, creating a breathing effect.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the bouncing scale, continuous pulse, and card hover-lifting animations are completely disabled, safely falling back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock "Metrics Dashboard" with two data cards. Hover your mouse over either card. The tooltip will appear by physically springing upwards from the top edge of the card, followed by the soft continuous breathing scale. Move your mouse away to hide the tooltip. You can also use the `Tab` key to navigate the cards and trigger the tooltips via keyboard focus.

## Files
- `demo.html`: The HTML structure for the tooltips, detailing the `.tooltip-wrapper` setup and the required DOM structure for the dashboard metric cards.
- `style.css`: The styling, minimalist tech design tokens, and the chained `@keyframes` driving the physical bounce and ambient pulse effects.
