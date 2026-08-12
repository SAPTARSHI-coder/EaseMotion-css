# CSS Fade-In Navbar (Minimalist Tech)

A pure CSS top navigation bar component designed for Minimalist Tech Layouts. It features a highly performant, staggered "Fade-In" entrance animation and a modern frosted glass backdrop effect.

## Features
- Pure CSS and HTML (Zero JavaScript required for the entrance animation).
- **Minimalist Tech Aesthetic**: Clean layouts, subtle interactive underline effects on links, semantic iconography, and monospace (`JetBrains Mono`) for the logo text.
- **Frosted Glass Navbar**: Utilizes `backdrop-filter: blur(12px)` combined with a semi-transparent white background (`rgba(255, 255, 255, 0.85)`) to create a modern, sleek header that allows page content to subtly blur beneath it as the user scrolls.
- **The Staggered Fade-In Effect**: 
- The entrance animation focuses purely on opacity transitions to ensure maximum performance and avoid spatial layout shifts during page load.
- The initial state of the navigation elements (logo, links, buttons) is completely transparent (`opacity: 0`).
- A sequence of distinct `animation-delay` utility classes (`.delay-1` through `.delay-6`) orchestrates the reveal. The elements fade into view sequentially from left to right, drawing the user's eye across the navigation structure.
- **State Management (Demo)**: To allow easy previewing of the animation sequence without constantly reloading the page, the demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Replay Animation" button in the hero section.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the staggered delays are removed, and the animation duration is shortened, resulting in a single, fast, unified fade-in for all navigation elements simultaneously.
- **Responsive Design**: Gracefully handles smaller viewports by hiding the desktop links and actions, revealing a mobile menu toggle icon instead. (Note: The dropdown functionality for the mobile menu itself is outside the scope of this specific entrance animation demo).

## Usage
Open `demo.html` in your browser. Upon load, you will see the navigation bar at the top of the page. The internal elements (Logo, Links, Buttons) will sequentially fade into view from left to right. Click the "Replay Animation" button in the center of the page to re-trigger the cascading entrance sequence.

## Files
- `demo.html`: The HTML structure for the fixed navbar, the checkbox hack setup for the replay button, and the application of the staggered delay classes across the navigation items.
- `style.css`: The styling, tech-specific design tokens, responsive breakpoints, the frosted glass blur effect, and the specific `@keyframes` driving the pure opacity fade logic.
