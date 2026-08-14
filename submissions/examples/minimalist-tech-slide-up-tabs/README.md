# CSS Slide-Up Tabs (Minimalist Tech)

A pure CSS tabs component designed for Minimalist Tech Layouts. It features entirely JavaScript-free state management and a clean, responsive "Slide-Up" entrance animation for the content panels.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or animations).
- **Minimalist Tech Aesthetic**: Clean header navigation, precise borders, subtle structural icons, and an animated active indicator line.
- **Pure CSS State Management**: 
- Utilizes the "Radio Button Hack". A group of radio buttons (`name="tech-tabs"`) controls which tab is currently active.
- The tab headers are `<label>` elements linked to these hidden radio buttons. Clicking a header changes the checked radio button.
- Depending on which radio button is checked (`#tab-1:checked`, etc.), CSS sibling selectors (`~`) dynamically update:
  1. The text color of the active tab label.
  2. The `transform: translateX()` position of the active indicator line.
  3. The visibility and animation of the corresponding content panel.
- **The Slide-Up Animation System**: 
- We avoid `display: none` because it cannot be animated. Instead, inactive panels are managed with `opacity: 0`, `visibility: hidden`, and `pointer-events: none`. They are positioned absolutely within a relative container.
- When a panel becomes active via the radio state, it triggers the `tab-slide-up` animation.
- This `@keyframes` animation transitions the panel's opacity from `0` to `1` while translating it upwards (`translateY(20px)` to `0`). We use a snappy `cubic-bezier(0.16, 1, 0.3, 1)` easing curve for a responsive, tech-oriented feel.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the spatial transforms on the sliding indicator line and the panel slide-up animations are completely disabled, safely falling back to simple, immediate transitions.

## Usage
Open `demo.html` in your browser. You will see a mock "System Dashboard" with three tabs (Overview, Metrics, Settings). Click the tab headers to navigate between them. Notice how the blue indicator line smoothly glides to the active tab, and the content panel elegantly slides up into view.

## Files
- `demo.html`: The HTML structure for the tabs, detailing the crucial radio button setup for CSS state management, the navigation headers, and the content panels.
- `style.css`: The styling, tech design tokens, the complex state logic driven by `:checked ~` selectors, and the specific `@keyframes` driving the slide-up logic.
