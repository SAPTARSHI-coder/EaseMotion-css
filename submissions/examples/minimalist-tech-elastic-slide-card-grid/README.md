# CSS Elastic-Slide Card Grid (Minimalist Tech)

A pure CSS card grid component designed for Minimalist Tech Layouts. It focuses on a highly responsive, "Elastic-Slide" entrance animation, perfect for data-dense dashboards or integration hubs.

## Features
- Pure CSS and HTML (No JavaScript required for the entrance animation).
- **Minimalist Tech Aesthetic**: Structured card layouts, semantic status badges (Connected, Warning, Offline), and clean `Inter` typography separated by precise borders.
- **The Elastic-Slide Effect**: 
- The entrance animation is applied directly to the `.tech-card` elements (`grid-elastic-slide`).
- The initial state of each card is transparent (`opacity: 0`) and pushed significantly to the left (`transform: translateX(-60px)`).
- When triggered, the animation uses a highly bouncy easing curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`) over `0.7s`. This specific curve pulls the element past its final `0px` destination and snaps it back, creating a snappy "elastic band" effect as it slides into place.
- **Cascading Grid Sequence**: To create an elegant staggered effect across the grid, we utilize distinct `animation-delay` utility classes (`.delay-1` through `.delay-4`), incrementing by `0.15s`. This causes the cards to snap into view in a cascading wave.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Replay Animation" button to allow users to easily re-trigger the cascading entrance sequence without reloading the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the snappy horizontal translations are completely disabled. The entrance safely falls back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a 2x2 grid of tech integration cards. Upon load, they will snap into view sequentially from the left using the elastic slide animation. You can click the "Replay Animation" button to toggle the state and watch the sequence run again.

## Files
- `demo.html`: The HTML structure for the grid, detailing the pure CSS checkbox hack setup for the replay button, and the application of the staggered delay classes across the grid items.
- `style.css`: The styling, tech-specific design tokens, responsive grid layouts, and the specific `@keyframes` driving the elastic-bouncy slide-in logic.
