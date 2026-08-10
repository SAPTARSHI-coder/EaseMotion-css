# CSS Rotate-Fade Stepper (Minimalist Tech)

A pure CSS stepper navigation component designed for Minimalist Tech Layouts. It features entirely JavaScript-free state management, a sleek dark aesthetic, and a continuous "Rotate-Fade" animation on the currently active step indicator.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management, progress bar fills, or animations).
- **Minimalist Tech Aesthetic**: Dark slate background (`#020617`), precise geometric borders, and sharp cyan/blue accents to indicate progress and active states.
- **Pure CSS State Management**: 
- Utilizes the "Radio Button Hack". A group of hidden radio buttons (`#step-1`, `#step-2`, etc.) ensures that only one step can be active at a time.
- The stepper labels act as `<label>` elements linked to these inputs.
- Depending on which radio button is checked, CSS sibling selectors (`~`) dynamically update:
  1. The width of the `.stepper-progress` background line (e.g., `33.33%`, `66.66%`), providing a smooth fill animation.
  2. The styling of "Completed" steps (changing icons to blue).
  3. The styling of the "Active" step (changing icon to cyan with a glowing box-shadow).
  4. The visibility and scaling of the corresponding content panel in the `.stepper-content-container`.
- **The Rotate-Fade Animation System**: 
- The `.step-icon-container` includes an invisible `.step-bg` element behind the main icon.
- This background element is styled as a ring using a `conic-gradient` combined with a CSS `mask-image` (radial-gradient) to hollow out the center.
- When a step becomes active (`:checked`), this background ring fades in (`opacity: 1`) and begins an infinite `@keyframes` rotation (`rotate-ring`).
- This creates a continuous, high-tech scanning/loading effect around the currently active step without relying on SVG SMIL or JavaScript.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the continuous rotation of the active ring is completely disabled and replaced with a static, semi-transparent highlight. The progress bar fill and content panel transitions are also simplified to remove spatial movement.

## Usage
Open `demo.html` in your browser. You will see a "System Configuration" dashboard. Click on the different steps (Layout, Settings, Features, Deploy) in the navigation bar. Notice how the background line smoothly fills to connect the completed steps, the content panels cross-fade below, and the currently active step features a continuously rotating, glowing cyan ring.

## Files
- `demo.html`: The HTML structure for the stepper, detailing the crucial radio button setup, the complex `.step-icon-container` (holding both the rotating ring and the static SVG icon), and the associated content panels.
- `style.css`: The styling, dark tech design tokens, the complex state logic driven by `:checked ~` selectors for both the progress line and completed/active steps, and the specific `@keyframes` and `conic-gradient` masking used to create the rotate-fade effect.
