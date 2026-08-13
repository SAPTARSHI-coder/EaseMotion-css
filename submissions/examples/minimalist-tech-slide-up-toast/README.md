# CSS Slide-Up Toast (Minimalist Tech)

A pure CSS toast notification component designed for Minimalist Tech Layouts. It focuses on a clean, snappy "Slide-Up" vertical entrance animation, common in modern dashboard interfaces.

## Features
- Pure CSS and HTML (No JavaScript required for the entrance animation).
- **Minimalist Tech Aesthetic**: Clean, structured layout, sharp `Inter` typography, distinct semantic color variants (Info, Error), perfectly aligned iconography, and inline action links.
- **The Slide-Up Effect**: 
- The entrance animation is applied directly to the `.toast` elements (`toast-slide-up`).
- The initial state of each toast is transparent (`opacity: 0`) and pushed significantly downwards (`transform: translateY(30px)`).
- When triggered, the animation uses a snappy easing curve (`cubic-bezier(0.16, 1, 0.3, 1)`) over `0.5s` to slide the toast up into its baseline position (`translateY(0)`) while fading to `opacity: 1`. This creates a crisp, responsive entrance.
- **Cascading Delays**: To create an elegant notification sequence (e.g., when multiple toasts fire at once on page load), we utilize staggered `animation-delay` utility classes (`.delay-1`, `.delay-2`).
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Trigger Toasts" button to allow users to easily re-trigger the entrance sequence without reloading the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the spatial translations are completely disabled. The entrance safely falls back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock group of "Action Alerts". Upon load, they will slide up into view. You can click the "Trigger Toasts" button to toggle the state and watch the vertical slide-up sequence run again.

## Files
- `demo.html`: The HTML structure for the toasts, detailing the pure CSS checkbox hack setup for the trigger button, the inline action links, and the application of the staggered delay classes.
- `style.css`: The styling, minimalist tech design tokens, the specific `@keyframes` driving the slide-up translation logic, and the semantic color setups.
