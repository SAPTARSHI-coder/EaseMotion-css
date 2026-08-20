# CSS Skew-Active Toast (Minimalist Tech)

A pure CSS toast notification component designed for Minimalist Tech Layouts. It focuses on an aggressive, diagonal "Skew-Active" entrance animation, giving it a dynamic, cybernetic feel perfect for system alerts.

## Features
- Pure CSS and HTML (No JavaScript required for the entrance animation).
- **Minimalist Tech Aesthetic**: Clean panel layout, stark left-border color accents for severity, sharp `Inter` typography, and prominent inline action buttons.
- **The Skew-Active Animation Effect**: 
- The entrance animation is applied directly to the `.toast` elements (`toast-skew-in`).
- The initial state of each toast is heavily distorted (`transform: skewX(-15deg)`) and offset diagonally (`translate(-20px, 10px)`). It is also transparent (`opacity: 0`).
- We set `transform-origin: bottom left`, which roots the animation to the bottom corner, causing the skew effect to aggressively whip upward and outward into view.
- When triggered, the animation uses a bouncy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function over `0.5s` to snap the toast to un-skewed and flat (`skewX(0deg) translate(0, 0)`). The overshoot of this curve gives the panel a physical "whip" effect as it locks into its final position.
- **Cascading Delays**: To create an elegant notification sequence, we utilize staggered `animation-delay` utility classes (`.delay-1`, `.delay-2`), causing the notifications to whip into view sequentially.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Trigger Toasts" button to allow users to easily re-trigger the entrance sequence without reloading the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the skewing and spatial translations are completely disabled. The entrance safely falls back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock group of "System Events". Upon load, they will aggressively whip into view along a diagonal skewed axis, snapping flat with a subtle bounce. You can click the "Trigger Toasts" button to toggle the state and watch the Skew-Active sequence run again.

## Files
- `demo.html`: The HTML structure for the toasts, detailing the pure CSS checkbox hack setup for the trigger button, the inline action buttons, and the application of the staggered delay classes.
- `style.css`: The styling, minimalist tech design tokens, and the specific `@keyframes` driving the aggressive `skewX` and `translate` entrance logic.
