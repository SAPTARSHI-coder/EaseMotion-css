# CSS Blur-Entrance Toast (Minimalist Tech)

A pure CSS toast notification component designed for Minimalist Tech Layouts. It features a cinematic "Blur-Entrance" animation, where the notification smoothly resolves into focus from a blurred, scaled-down state.

## Features
- Pure CSS and HTML (No JavaScript required for the entrance animation).
- **Minimalist Tech Aesthetic**: Clean, structured layout, sharp `Inter` typography, distinct semantic color variants (Success, Warning), and perfectly aligned iconography.
- **The Blur-Entrance Effect**: 
- The entrance animation is applied directly to the `.toast` elements (`toast-blur-in`).
- The initial state of each toast is transparent (`opacity: 0`), slightly lowered (`transform: translateY(20px)`), scaled down (`scale(0.95)`), and heavily blurred (`filter: blur(8px)`).
- When triggered, the animation uses a smooth easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`) over `0.6s` to resolve the toast into perfect clarity. It simultaneously fades to `opacity: 1`, translates to its resting position `translateY(0)`, scales to `1.0`, and removes the blur filter `blur(0px)`. This combination creates a highly premium, cinematic entrance.
- **Cascading Delays**: To create an elegant notification sequence (e.g., when multiple toasts fire at once), we utilize staggered `animation-delay` utility classes (`.delay-1`, `.delay-2`).
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Trigger Toasts" button to allow users to easily re-trigger the entrance sequence without reloading the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the `filter: blur` and spatial translations are completely disabled. The entrance safely falls back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock group of "System Notifications". Upon load, they will smoothly blur into view. You can click the "Trigger Toasts" button to toggle the state and watch the cinematic blur entrance sequence run again.

## Files
- `demo.html`: The HTML structure for the toasts, detailing the pure CSS checkbox hack setup for the trigger button, and the application of the staggered delay classes.
- `style.css`: The styling, minimalist tech design tokens, the specific `@keyframes` driving the blur and spatial resolution logic, and the semantic color setups.
