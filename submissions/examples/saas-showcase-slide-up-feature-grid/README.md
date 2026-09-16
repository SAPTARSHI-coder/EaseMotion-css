# CSS Slide-Up Feature Grid (SaaS Showcase)

A pure CSS feature grid component designed for SaaS Showcase Layouts. It focuses on a clean, cascading "Slide-Up" entrance animation, perfect for marketing landing pages displaying product capabilities.

## Features
- Pure CSS and HTML (No JavaScript required for the entrance animation).
- **SaaS Showcase Aesthetic**: Clean card layouts, vibrant but soft semantic icon colors, modern `Plus Jakarta Sans` typography, and subtle hover-lift interactions.
- **The Slide-Up Effect**: 
- The entrance animation is applied directly to the `.feature-card` elements (`grid-slide-up`).
- The initial state of each card is transparent (`opacity: 0`) and pushed significantly downwards (`transform: translateY(40px)`).
- When triggered, the animation uses a snappy easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`) over `0.6s` to slide the card up into its baseline position (`translateY(0)`) while fading to `opacity: 1`. This creates a premium, polished entrance.
- **Cascading Grid Sequence**: To create an elegant staggered effect across the grid, we utilize 6 distinct `animation-delay` utility classes (`.delay-1` through `.delay-6`), incrementing by `0.1s`. This causes the cards to slide up in a wave from top-left to bottom-right.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Replay Animation" button to allow users to easily re-trigger the cascading entrance sequence without reloading the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the spatial translations are completely disabled on both the entrance animation and the hover states. The entrance safely falls back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a 3x2 grid of SaaS features. Upon load, they will cascade into view using the slide-up animation. You can click the "Replay Animation" button to toggle the state and watch the sequence run again.

## Files
- `demo.html`: The HTML structure for the grid, detailing the pure CSS checkbox hack setup for the replay button, and the application of the staggered delay classes across the grid items.
- `style.css`: The styling, SaaS-specific design tokens, responsive grid layouts, and the specific `@keyframes` driving the slide-up logic.
