# CSS Fade-In Modal (Minimalist Tech)

A pure CSS interactive modal component designed for Minimalist Tech Layouts. It features a classic, gentle "Fade-In" entrance animation combined with a subtle scaling effect, offering a clean and professional interaction.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- **State Management**: The modal's open/closed state is managed entirely via the hidden checkbox hack (`input[type="checkbox"]:checked`).
- Multiple `<label>` elements are linked to the same checkbox, providing flexible triggers. The "Edit" button in the dashboard opens the modal, while the dark overlay backdrop, the "X" close icon, the "Cancel" button, and the "Save Changes" button all act to safely close it.
- **The Fade-In Effect**: The `.modal-content` element initially rests in a hidden state, completely transparent (`opacity: 0`) and slightly scaled down (`transform: scale(0.95)`). 
- When triggered, both the `opacity` and `transform` properties are animated simultaneously using a smooth `cubic-bezier(0.25, 0.46, 0.45, 0.94)` transition. This creates a gentle, expanding fade-in that feels polished and unobtrusive.
- Clean, structured aesthetic utilizing the `Inter` font, subtle borders, and properly styled mock form elements (select dropdowns, checkboxes).
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the spatial scaling is completely disabled, locking the modal to its final `scale(1)` size. The interaction gracefully falls back to a simple, immediate opacity cross-fade.

## Usage
Open `demo.html` in your browser. You will see a mock user management dashboard. Click the active "Edit" button next to Michael Chen. Watch as the dark overlay fades in, and the permissions modal gently scales and fades into view. Click the overlay background or any of the action buttons to reverse the animation and close the modal.

## Files
- `demo.html`: The HTML structure for the layout, detailing the critical `<input type="checkbox">` placement and the various `<label>` triggers used to control the state.
- `style.css`: The styling, background overlay logic, and the custom `cubic-bezier` transition driving the subtle fade and scale mechanics.
