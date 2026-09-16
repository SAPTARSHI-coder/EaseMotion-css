# CSS Rotate-Fade Toast (Minimalist Tech)

A pure CSS toast notification component designed for Minimalist Tech Layouts. It focuses on a highly physical, 3D "Rotate-Fade" entrance animation, where the notification hinges down into view like a panel dropping from a top notification bar.

## Features
- Pure CSS and HTML (No JavaScript required for the 3D entrance animation).
- **Minimalist Tech Aesthetic**: Clean panel layout, distinct semantic color variants (Success, Primary), sharp `Inter` typography, and prominent call-to-action buttons.
- **The Rotate-Fade 3D Hinge Effect**: 
- We establish a 3D context by applying `perspective` to the parent containers and `transform-style: preserve-3d` to the `.toast-container`.
- The entrance animation is applied directly to the `.toast` elements (`toast-rotate-in`).
- We set the `transform-origin` to `top center`. This is crucial, as it defines the axis the toast will rotate around, creating the "hinge" effect dropping from the top edge.
- The initial state of each toast is transparent (`opacity: 0`) and swung `60deg` backwards into the screen (`transform: rotateX(-60deg)`).
- When triggered, the animation uses a bouncy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function over `0.5s` to snap the toast down to flat (`rotateX(0deg)`). The overshoot of the bezier curve gives the panel physical weight as it locks into place.
- **Cascading Delays**: To create an elegant notification sequence, we utilize staggered `animation-delay` utility classes (`.delay-1`, `.delay-2`), causing the notifications to hinge down sequentially.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Trigger Toasts" button to allow users to easily re-trigger the entrance sequence without reloading the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the 3D rotations are completely disabled. The entrance safely falls back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock group of "Background Tasks". Upon load, they will hinge down into view. You can click the "Trigger Toasts" button to toggle the state and watch the 3D Rotate-Fade sequence run again.

## Files
- `demo.html`: The HTML structure for the toasts, detailing the pure CSS checkbox hack setup for the trigger button, the inline action buttons, and the application of the staggered delay classes.
- `style.css`: The styling, minimalist tech design tokens, the required `perspective` rules to establish the 3D space, and the specific `@keyframes` driving the `rotateX` hinge logic.
