# CSS Fade-In Card Grid (Minimalist Tech)

A pure CSS card grid component designed for Minimalist Tech Layouts. It focuses on a highly responsive, pure "Fade-In" entrance animation, perfect for displaying architecture diagrams, microservice statuses, or system components where spatial animation is unnecessary or distracting.

## Features
- Pure CSS and HTML (No JavaScript required for the entrance animation).
- **Minimalist Tech Aesthetic**: Clean card layouts, semantic icon background accents, subtle `Inter` typography, and monospace (`JetBrains Mono`) version tags for a developer-focused feel.
- **The Pure Fade-In Effect**: 
- The entrance animation is applied directly to the `.tech-card` elements (`grid-fade-in`).
- The initial state of each card is completely transparent (`opacity: 0`). Unlike our other grid examples, there are zero spatial transforms (`translateX`, `translateY`, etc.) applied to the initial state.
- When triggered, the animation uses a simple `ease` timing function over `0.6s` to transition the `opacity` from `0` to `1`. This provides a highly performant, visually stable reveal.
- **Cascading Grid Sequence**: To create an elegant staggered effect across the grid, we utilize distinct `animation-delay` utility classes (`.delay-1` through `.delay-6`), incrementing by `0.1s`. This causes the cards to fade into view in a cascading wave from top-left to bottom-right.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Replay Animation" button to allow users to easily re-trigger the cascading entrance sequence without reloading the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the fade duration is reduced to `0.3s` for a faster, immediate appearance, and the subtle hover-lift effect is completely disabled to ensure absolute spatial stability.

## Usage
Open `demo.html` in your browser. You will see a 3x2 grid detailing a mock "System Architecture". Upon load, the cards will elegantly fade into view sequentially. You can click the "Replay Animation" button to toggle the state and watch the sequence run again.

## Files
- `demo.html`: The HTML structure for the grid, detailing the pure CSS checkbox hack setup for the replay button, and the application of the staggered delay classes across the grid items.
- `style.css`: The styling, tech-specific design tokens, responsive grid layouts, and the specific `@keyframes` driving the pure opacity fade logic.
