# CSS Elastic-Slide Navbar (Minimalist Tech)

A pure CSS top navigation bar component designed for Minimalist Tech Layouts. It features a highly kinetic, staggered "Elastic-Slide" entrance animation and a modern frosted glass backdrop effect.

## Features
- Pure CSS and HTML (Zero JavaScript required for the entrance animation).
- **Minimalist Tech Aesthetic**: Clean layouts, subtle interactive underline effects on links, semantic iconography, and monospace (`JetBrains Mono`) for the logo text.
- **Frosted Glass Navbar**: Utilizes `backdrop-filter: blur(12px)` combined with a semi-transparent white background to create a modern, sleek header that allows page content to subtly blur beneath it as the user scrolls.
- **The Elastic-Slide Animation System**: 
- The initial state of the navigation elements (logo, links, buttons) is hidden above their final resting place (`transform: translateY(-20px)`) and completely transparent (`opacity: 0`).
- The `elastic-slide-down` animation triggers the reveal. The key to the "elastic" feel is the use of a custom `cubic-bezier(0.34, 1.56, 0.64, 1)` easing function. The value `1.56` causes the element to overshoot its final `translateY(0)` position before springing back, creating a bouncy, physical feel.
- A sequence of distinct `animation-delay` utility classes (`.delay-1` through `.delay-6`) orchestrates the reveal. The elements bounce into view sequentially from left to right.
- **Interactive Elastic Hover**: The nav links feature an animated underline on hover. This underline also uses a similar elastic `cubic-bezier` function (`0.34, 1.56, 0.64, 1`) as it expands (`transform: scaleX()`), echoing the entrance physics.
- **State Management (Demo)**: To allow easy previewing of the animation sequence without constantly reloading the page, the demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Replay Animation" button in the hero section.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the elastic overshoots, spatial transforms, and staggered delays are completely disabled. The navbar safely falls back to a fast, simultaneous opacity fade for all elements.

## Usage
Open `demo.html` in your browser. Upon load, you will see the navigation bar at the top of the page. The internal elements (Logo, Links, Buttons) will sequentially drop into view from left to right, utilizing a bouncy, elastic animation curve. Hover over the navigation links to see the corresponding elastic underline effect. Click the "Replay Animation" button in the center of the page to re-trigger the cascading entrance sequence.

## Files
- `demo.html`: The HTML structure for the fixed navbar, the checkbox hack setup for the replay button, and the application of the staggered delay classes across the navigation items.
- `style.css`: The styling, tech-specific design tokens, responsive breakpoints, the frosted glass blur effect, the specific `@keyframes` driving the elastic-slide logic, and the custom `cubic-bezier` timing functions.
