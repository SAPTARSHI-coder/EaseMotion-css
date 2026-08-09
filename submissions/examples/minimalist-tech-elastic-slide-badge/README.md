# CSS Elastic-Slide Badge (Minimalist Tech)

A pure CSS badge component designed for Minimalist Tech Layouts. It focuses on a snappy "Elastic-Slide" entrance animation, where a group of badges slides into view horizontally with a bouncy, physical overshoot effect.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Tech Aesthetic**: Clean, slightly squared layouts, semantic color variants, and a monospace font styling intended to mimic system logs or technical tags.
- **The Elastic-Slide Effect**: 
- The entrance animation is applied directly to the `.badge` elements (`badge-elastic-slide`).
- The initial state of each badge is transparent (`opacity: 0`) and pushed significantly to the right (`transform: translateX(40px)`).
- When triggered, the animation uses a highly bouncy easing curve (`cubic-bezier(0.175, 0.885, 0.32, 1.275)`) to translate the badge back to its baseline resting position (`translateX(0)`). Because the bezier curve exceeds `1.0`, the badge mathematically overshoots its target and snaps back, creating the "elastic" feel.
- **Cascading Delays**: To create the elegant entrance sequence, we utilize staggered `animation-delay` utility classes (`.delay-1` through `.delay-4`), incremented by `0.1s`. This ensures the badges whip into view sequentially from left to right.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Replay Entrance" button to allow users to easily re-trigger the cascading animation sequence without reloading the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the elastic horizontal translations (and the hover lift effect) are completely disabled. The entrance safely falls back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock group of "System Log Tags". Upon load, they will elastically slide into view from the right. You can click the "Replay Entrance" button to toggle the state and watch the staggered slide animation sequence run again.

## Files
- `demo.html`: The HTML structure for the badges, detailing the pure CSS checkbox hack setup for the replay button, and the application of the staggered delay classes.
- `style.css`: The styling, minimalist tech design tokens, the specific `@keyframes` driving the elastic slide logic, and the utility classes for staggering the delays.
