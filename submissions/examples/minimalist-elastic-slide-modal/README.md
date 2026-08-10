# CSS Elastic-Slide Modal (Minimalist Tech)

A pure CSS interactive modal component designed for Minimalist Tech Layouts. It features a playful, dynamic "Elastic-Slide" entrance animation on the X-axis, bringing energy to otherwise static settings panels.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- State management is natively handled via the hidden checkbox hack (`input[type="checkbox"]` paired with `<label>`), allowing the modal to be toggled open and closed smoothly.
- **The Elastic-Slide Effect**: The modal is initially positioned off-screen to the right using `transform: translateX(100px)`. When triggered, it slides into place at `translateX(0)`. 
- The magic happens in the `transition` timing function. By using a custom `cubic-bezier(0.34, 1.56, 0.64, 1)`, the animation forces the modal to vastly overshoot its final target position before "snapping" back into place, creating a rubber-band/elastic bounce effect exclusively using CSS math.
- The layout utilizes a fixed `.modal-wrapper` to perfectly center the modal on the screen regardless of the sliding animation.
- Clean, structured aesthetic utilizing the `Inter` font, custom-styled `<select>` dropdowns, and a distinct footer layout.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the spatial horizontal translation and its aggressive elastic bounce are entirely disabled. The interaction gracefully falls back to a safe, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock data export configuration panel. Click the "Configure Export" button to trigger the pure CSS modal. Watch as the modal slides in rapidly from the right side, overshoots its center mark, and bounces elastically back into place. Click the overlay background, the "Cancel" button, or the "X" to close the modal.

## Files
- `demo.html`: The HTML structure for the layout, detailing the critical `<input type="checkbox">` and `<label>` pairing required for the CSS-only modal trigger, as well as the `.modal-wrapper` container.
- `style.css`: The styling, form element customizations, modal centering logic, and the custom `cubic-bezier` transition driving the elastic bounce mechanics.
