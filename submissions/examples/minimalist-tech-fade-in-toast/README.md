# CSS Fade-In Toast (Minimalist Tech)

A pure CSS toast notification component designed for Minimalist Tech Layouts. It features entirely JavaScript-free state management and a clean, non-intrusive "Fade-In" entrance animation.

## Features
- Pure CSS and HTML (Zero JavaScript required for state management or animations).
- **Minimalist Tech Aesthetic**: Clean panel layouts, precise borders, semantic iconography, and high-contrast typography.
- **Pure CSS State Management**: 
- Utilizes the "Checkbox Hack". A hidden checkbox (`#toast-trigger`) controls the visibility state of the toast notification.
- The "Test Notification" button acts as a `<label>` to check the box (show the toast).
- The "Dismiss" (X) button inside the toast acts as another `<label>` to uncheck the box (hide the toast).
- Depending on the checkbox state, CSS sibling selectors (`~`) dynamically update the opacity and visibility of the `.toast-container`.
- **The Fade-In Entrance Animation**: 
- The entrance animation focuses purely on opacity transitions to ensure maximum performance and avoid spatial layout shifts or jarring movements on the screen.
- When triggered, the `.toast-notification` element runs the `toast-fade-in` animation, transitioning smoothly from `opacity: 0` to `opacity: 1`.
- A decorative `.toast-progress` bar at the bottom also begins a linear animation (`progress-drain`), simulating a timeout function often found in toast notifications.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the animation duration is shortened for an immediate fade, and the moving progress bar is completely disabled and hidden from view.

## Usage
Open `demo.html` in your browser. You will see a "System Notifications" dashboard. Click the "Test Notification" button. A toast notification will smoothly fade into view in the bottom right corner of the screen, accompanied by an animated progress bar. You can click the "X" button within the toast to dismiss it instantly.

## Files
- `demo.html`: The HTML structure for the toast container and notification content, detailing the crucial checkbox hack setup for CSS state management (triggering and dismissing).
- `style.css`: The styling, tech design tokens, the absolute positioning logic for placing the toast on the screen, and the specific `@keyframes` driving the smooth fade-in and the progress bar animation.
