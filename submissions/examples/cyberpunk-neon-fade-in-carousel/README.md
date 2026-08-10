# CSS Fade-In Carousel (Cyberpunk Neon)

A pure CSS carousel component designed for Cyberpunk Neon Layouts. It features entirely JavaScript-free state management and a smooth, scaling "Fade-In" entrance animation that perfectly matches a retro-futuristic data terminal aesthetic.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or animations).
- **Cyberpunk Neon Aesthetic**: Deep void backgrounds, vibrant neon accents (Cyan, Magenta, Yellow), sharp structural borders, glowing text/shadows, and `Share Tech Mono` typography.
- **Pure CSS State Management**: 
- Utilizes the "Radio Button Hack". A group of radio buttons (`name="cyber-carousel"`) controls which slide is currently active.
- The navigation dots at the bottom are `<label>` elements linked to these hidden radio buttons. Clicking a dot changes the checked radio button.
- Depending on which radio button is checked (`#slide-1:checked`, etc.), CSS sibling selectors (`~`) dynamically update the visibility of the corresponding slide and the active state of the navigation dots.
- **The Fade-In Animation System**: 
- We avoid `display: none` because it cannot be animated. Instead, inactive slides are managed with `opacity: 0`, `visibility: hidden`, and `pointer-events: none`.
- When a slide becomes active, it triggers the `cyber-fade-in` animation.
- This `@keyframes` animation scales the content slightly from `0.95` to `1` while simultaneously manipulating CSS filters (`brightness(0.5)` to `1`). This creates a cinematic "powering up" or "establishing connection" effect that fits the cyberpunk theme perfectly.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the scaling transform and filter transitions are completely disabled. The slide transition safely falls back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock "NEURAL_NET.CAROUSEL" terminal interface. Click the rectangular navigation dots at the bottom to transition between the data slides. Notice how the content fades in smoothly with a subtle scale and brightness shift, mimicking a digital display powering on.

## Files
- `demo.html`: The HTML structure for the carousel, detailing the crucial radio button setup for CSS state management, the slides container, and the navigation labels.
- `style.css`: The styling, cyberpunk design tokens (neon glows, grid backgrounds, monospace fonts), the complex state logic driven by `:checked ~` selectors, and the specific `@keyframes` driving the fade-in logic.
