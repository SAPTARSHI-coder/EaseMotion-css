# CSS Elastic-Slide Stepper (Glassmorphism UI)

A pure CSS stepper navigation component designed for Glassmorphism UI Layouts. It features entirely JavaScript-free state management, a distinct frosted glass aesthetic, and a satisfying "Elastic-Slide" transition for the active indicator.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management, content switching, or animations).
- **Glassmorphism Aesthetic**: Dark background with heavily blurred, brightly colored absolute shapes underneath to create the distinct frosted glass effect. The main card utilizes `backdrop-filter: blur(16px)` and translucent borders to complete the look.
- **Pure CSS State Management**: 
- Utilizes the "Radio Button Hack". A group of hidden radio buttons (`#step-1`, `#step-2`, etc.) ensures that only one step can be active at a time.
- The stepper labels (containing the icons and text) act as `<label>` elements linked to these hidden radio buttons. Clicking a step changes the active state.
- Depending on which radio button is checked (`#step-1:checked`, etc.), CSS sibling selectors (`~`) dynamically update:
  1. The color of the active text and icon.
  2. The horizontal position (`transform: translateX()`) of the `.stepper-indicator` background pill.
  3. The visibility (`opacity` and `transform: translateY()`) of the corresponding content panel in the `.stepper-content-container`.
- **The Elastic-Slide Animation**: 
- Instead of a simple linear translation, the `.stepper-indicator` uses a custom `cubic-bezier(0.34, 1.56, 0.64, 1)` transition timing function.
- This specific curve causes the indicator to move quickly towards the target, slightly overshoot it, and then snap back into place, mimicking the physics of a stretched rubber band.
- Additionally, the active icon features a quick `@keyframes` "pop" animation (`icon-pop`) that scales it up slightly right as the indicator arrives, reinforcing the snappy, elastic feel.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the elastic slide transition is completely disabled (the indicator snaps instantly to the next step), the icon pop is removed, and the content crossfade is simplified to remove any vertical sliding movement.

## Usage
Open `demo.html` in your browser. You will see a "Checkout Process" dashboard styled with a dark glassmorphism theme. Click on the different steps (Details, Shipping, Payment, Confirm) in the top navigation bar. Notice how the gradient pill indicator slides horizontally to the new selection with a bouncy, elastic physical feel, and the content below smoothly crossfades to match the active step.

## Files
- `demo.html`: The HTML structure for the stepper, detailing the crucial radio button setup for state management, the navigation labels, the animated indicator div, and the associated content panels.
- `style.css`: The styling, glassmorphism design tokens (backdrop filters, translucent borders), the complex state logic driven by `:checked ~` selectors, and the specific `cubic-bezier` transition driving the elastic slide effect.
