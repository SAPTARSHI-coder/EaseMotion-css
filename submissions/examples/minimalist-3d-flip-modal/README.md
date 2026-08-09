# CSS 3D-Flip Modal (Minimalist Tech)

A pure CSS interactive modal component designed for Minimalist Tech Layouts. It features a highly polished "3D-Flip" entrance animation that mimics a physical card flipping down from the top edge of the screen.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- **State Management**: The modal's open/closed state is managed entirely via the hidden checkbox hack (`input[type="checkbox"]:checked`).
- Multiple `<label>` elements are linked to the same checkbox to create versatile triggers: the main dashboard button opens it, while the overlay backdrop, the "X" close icon, and the "Cancel" button all act to close it.
- **The 3D-Flip Effect**: The `.modal-perspective` container establishes a 3D context using `perspective: 1200px`. 
- The `.modal-content` card initially rests in a hidden state, rotated backwards (`transform: rotateX(-90deg)`) and translated slightly downwards. Because of `transform-origin: top center`, it hinges from its top edge.
- When triggered, it flips down to `0deg`. A custom `cubic-bezier(0.34, 1.56, 0.64, 1)` transition timing function forces the card to overshoot its target rotation before settling, creating a highly satisfying, physical bounce.
- Clean, structured aesthetic utilizing the `Inter` font, subtle borders, and distinct header/body/footer data layouts.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the aggressive spatial rotation and flipping are completely disabled. The complex transforms are locked to their final state, and the interaction safely falls back to an immediate opacity cross-fade.

## Usage
Open `demo.html` in your browser. You will see a mock dashboard area. Click the "View Diagnostics" button on the yellow alert card. Watch as the dark overlay fades in, and the detailed diagnostics modal snaps down from the top of the screen with a snappy, bouncy 3D hinge effect. Click the overlay background or the cancel buttons to reverse the animation and close the modal.

## Files
- `demo.html`: The HTML structure for the layout, detailing the critical `<input type="checkbox">` placement and the various `<label>` triggers used to control it.
- `style.css`: The styling, background overlay logic, `perspective` settings, and the custom `cubic-bezier` transition driving the 3D flip mechanics.
