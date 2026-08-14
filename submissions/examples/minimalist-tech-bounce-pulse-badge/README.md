# CSS Bounce-Pulse Badge (Minimalist Tech)

A pure CSS badge component designed for Minimalist Tech Layouts. It features a physical "Bounce-Pulse" entrance animation, where the badges structurally spring into view sequentially, followed by a continuous, ambient pulsing ring on the status indicator.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Tech Aesthetic**: Clean pill-shaped layout, sharp `Inter` typography, distinct semantic color variants, and inner data pills (`.badge-count`).
- **The Bounce-Pulse Effect**: 
- **The Entrance (Bounce)**: The initial state of each badge is scaled down (`transform: scale(0.5)`) and transparent. When triggered, an `@keyframes` animation (`badge-bounce-in`) uses a bouncy `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function. This forces the scale to overshoot `1.0` before settling, creating a highly physical "spring" effect.
- **The Ambient Ring (Pulse)**: An inner element (`.pulse-ring`) acts as the solid status dot. It uses a pseudo-element (`::after`) to create a secondary, transparent ring. This ring runs an infinite `@keyframes` animation (`ring-pulse`) that scales it up (`scale(2.5)`) while fading its opacity to `0`, creating a continuous radar-like pulse. The pulse animation is delayed by `1s` to ensure it only starts after the bouncy entrance has finished.
- **Cascading Delays**: To create the elegant entrance sequence, we utilize staggered `animation-delay` utility classes (`.delay-1` through `.delay-3`). This ensures the badges pop into view sequentially.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Replay Entrance" button to allow users to easily re-trigger the cascading bounce sequence without reloading the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the bouncing scale entrance and the continuous pulsing ring are completely disabled, safely falling back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock group of "Notification Badges". Upon load, they will spring into view sequentially. Once they settle, watch the status dots begin their continuous ambient pulsing. You can click the "Replay Entrance" button to toggle the state and watch the bouncy entrance sequence run again.

## Files
- `demo.html`: The HTML structure for the badges, detailing the pure CSS checkbox hack setup for the replay button, the application of staggered delay classes, and the `.pulse-ring` element.
- `style.css`: The styling, minimalist tech design tokens, the specific `@keyframes` driving the physical bounce and continuous pulse logic, and the utility classes for staggering the delays.
