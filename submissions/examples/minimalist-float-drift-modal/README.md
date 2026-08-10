# CSS Float-Drift Modal (Minimalist Tech)

A pure CSS interactive modal component designed for Minimalist Tech Layouts. It features a continuous, subtle "Float-Drift" animation that keeps the modal feeling alive and lightweight while active on the screen.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- State management is handled natively via the hidden checkbox hack (`input[type="checkbox"]` paired with `<label>`), allowing the modal to be toggled open and closed smoothly.
- **The Float-Drift Effect**: Once the modal finishes its snappy entrance transition (dropping in from above using a `cubic-bezier`), an infinite `@keyframes` animation takes over. This animation continuously and slowly manipulates the `translateY` and `rotate` properties, causing the modal to gently bob up and down while slightly tilting, mimicking an object floating in a calm fluid or zero-gravity environment.
- The animation is triggered via the `:checked` sibling selector and is deliberately delayed (`animation-delay: 0.4s`) to ensure it only starts *after* the initial entrance transition completes, avoiding visual conflict.
- The layout utilizes a fixed `.modal-wrapper` to handle perfect screen centering, isolating the positional math from the animated `.modal` element itself.
- Clean, structured aesthetic utilizing the `Inter` font, subtle drop shadows, and a distinct footer layout.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, both the spatial entrance transition and the continuous float-drift animation are entirely disabled. The interaction gracefully falls back to a safe, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock deployment configuration panel. Click the "Deploy Now" button to trigger the pure CSS modal. Watch as the modal drops into the screen and then begins its continuous, subtle floating animation. Click the overlay background, the "Cancel" button, or the "X" to close the modal.

## Files
- `demo.html`: The HTML structure for the layout, detailing the critical `<input type="checkbox">` and `<label>` pairing required for the CSS-only modal trigger, as well as the `.modal-wrapper` container.
- `style.css`: The styling, modal centering logic, and the delayed `@keyframes` timeline driving the continuous drift mechanics.
