# CSS Zoom-In Badge (Minimalist Tech)

A pure CSS status badge component designed for Minimalist Tech Layouts. It features a snappy, kinetic "Zoom-In" entrance animation perfect for highlighting critical system statuses or metric changes.

## Features
- Pure CSS and HTML (Zero JavaScript required for the entrance animation).
- **Minimalist Tech Aesthetic**: Clean pill-shaped layouts, crisp `JetBrains Mono` typography for that developer-focused feel, and semantic color-coding (`success`, `warning`, `error`, `neutral`) with subtly glowing status dots.
- **The Zoom-In Effect**: 
- The entrance animation is applied to the `.tech-badge` elements via the `badge-zoom-in` keyframes.
- The initial state of each badge is transparent (`opacity: 0`) and scaled down significantly (`transform: scale(0.5)`).
- When triggered, the animation scales the badge up to `1` using a custom `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function. The `1.275` value at the end of the curve causes the badge to slightly "overshoot" its final size before snapping back, giving the zoom a satisfying, physical "pop".
- **Cascading Sequence**: To draw the user's eye down the list of statuses, we utilize distinct `animation-delay` utility classes (`.delay-1` through `.delay-4`). This causes the badges to pop into view one after another.
- **Urgent Error State**: The `badge-error` variant features an additional, infinite `@keyframes` animation (`urgent-pulse`) applied to its status dot, causing it to throb and demand attention.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Replay Animation" button to allow users to easily re-trigger the cascading entrance sequence without reloading the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the snappy spatial scaling entrance and the urgent error pulsing dot are completely disabled, safely falling back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a "System Status" list. Upon load, the semantic badges (Operational, Degraded, Outage, Maintenance) will dynamically pop into view sequentially. Notice the subtle throbbing animation on the "Outage" badge's red dot. You can click the "Replay Animation" button to toggle the state and watch the sequence run again.

## Files
- `demo.html`: The HTML structure for the status list, detailing the pure CSS checkbox hack setup for the replay button, and the application of the specific badge variants (`badge-success`, etc.) and staggered delay classes.
- `style.css`: The styling, tech-specific design tokens for the semantic states, and the specific `@keyframes` driving the zoom-in logic and the custom bouncy `cubic-bezier`.
