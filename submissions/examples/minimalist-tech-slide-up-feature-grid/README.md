# CSS Slide-Up Feature Grid (Minimalist Tech)

A pure CSS interactive feature grid component designed for Minimalist Tech Layouts. It features a staggered, cascading "Slide-Up" entrance animation, where feature cards smoothly bounce up into position upon page load or trigger.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Aesthetic**: Clean layout, sharp `Inter` typography, subtle hover shadows, and distinct accent-colored icon boxes over a sterile `f8fafc` background.
- **The Slide-Up Entrance Effect**: 
- A dedicated utility class `.slide-up` handles the entrance animation on the `.feature-card` elements.
- The initial state of the cards is `opacity: 0` and pushed downward via `transform: translateY(40px)`.
- When triggered, an `@keyframes` animation (`slide-up-entrance`) translates the cards up to `translateY(0)` while fading to `opacity: 1`. 
- It utilizes a bouncy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function to give the cards a physical, snapping entrance.
- **Cascading Delays**: We utilize staggered `animation-delay` utility classes (`.delay-1`, `.delay-2`, etc.) incremented by `0.1s` across the grid items to create a satisfying, continuous cascading wave effect as the cards arrive.
- **State Management (Demo)**: The demo uses the hidden checkbox hack (`<input type="checkbox">`) to allow users to toggle the animation state to replay the entrance effect without needing to refresh the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the bouncy translation is completely disabled, safely falling back to a simple, immediate opacity cross-fade entrance.

## Usage
Open `demo.html` in your browser. You will see a mock Platform Capabilities grid. Upon load, the six feature cards will rapidly cascade into view, bouncing slightly as they settle into their final layout positions. You can click the "Reload Grid" button to immediately re-trigger the entrance animation.

## Files
- `demo.html`: The HTML structure for the grid, detailing the application of the `.slide-up` and staggered `.delay-*` utility classes.
- `style.css`: The styling, minimalist tech design tokens, the custom `cubic-bezier` timing logic, and the staggered keyframe delays driving the cascading entrance wave.
