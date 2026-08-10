# CSS Fade-In Badge (Minimalist Tech)

A pure CSS badge component designed for Minimalist Tech Layouts. It focuses on a clean, staggered "Fade-In" entrance animation, where a group of badges elegantly cascades into view from a slightly offset vertical position.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Tech Aesthetic**: Clean, slightly squared layouts, sharp `Inter` typography, distinct semantic color variants, and inner data pills (`.badge-count`).
- **The Staggered Fade-In Effect**: 
- The entrance animation is applied directly to the `.badge` elements (`badge-fade-in`).
- The initial state of each badge is transparent (`opacity: 0`) and slightly lowered (`transform: translateY(10px)`).
- When triggered, the animation uses a smooth easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`) to fade the badge in while simultaneously translating it back to its baseline resting position (`translateY(0)`).
- **Cascading Delays**: To create the elegant sequence, we utilize staggered `animation-delay` utility classes (`.delay-1` through `.delay-5`), incremented by `0.1s`. This ensures the badges reveal themselves sequentially rather than all at once.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Replay Entrance" button to allow users to easily re-trigger the cascading animation sequence without reloading the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the vertical translations (both on entrance and on hover) are completely disabled. The entrance safely falls back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock group of "Filter Tags". Upon load, they will cascade into view. You can click the "Replay Entrance" button to toggle the state and watch the staggered fade-in animation sequence run again. Hover over the badges to see a slight physical lift interaction.

## Files
- `demo.html`: The HTML structure for the badges, detailing the pure CSS checkbox hack setup for the replay button, and the application of the staggered delay classes.
- `style.css`: The styling, minimalist tech design tokens, the specific `@keyframes` driving the fade and translate logic, and the utility classes for staggering the delays.
