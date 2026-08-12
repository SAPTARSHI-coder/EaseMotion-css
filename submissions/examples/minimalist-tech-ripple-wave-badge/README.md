# CSS Ripple-Wave Badge (Minimalist Tech)

A pure CSS status badge component designed for Minimalist Tech Layouts. It features a continuous, outward-expanding "Ripple-Wave" animation perfect for drawing attention to active processes, live connections, or urgent scanning tasks.

## Features
- Pure CSS and HTML (Zero JavaScript required for the animation loop).
- **Minimalist Tech Aesthetic**: Clean pill-shaped layouts, crisp `JetBrains Mono` typography for that developer-focused feel, and semantic color-coding (`live`, `sync`, `alert`, `neutral`).
- **The Ripple-Wave Effect**: 
- The ripple animation is achieved cleanly using the `::after` pseudo-element on the `.badge-dot`. This keeps the HTML markup minimal and avoids adding extra empty `<div>` tags just for the animation.
- The `::after` element inherits the dot's background color.
- The continuous `ripple-wave` keyframes animation scales the pseudo-element outward (`scale(1)` to `scale(3.5)`) while simultaneously fading it out (`opacity: 0.8` to `0`).
- The use of `cubic-bezier(0, 0.2, 0.8, 1)` creates a pulse that starts quickly and dissipates smoothly.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Toggle Animation" button. This allows users to start and stop the infinite animation loop, demonstrating how you might control the state via CSS classes in a real application.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the continuous, potentially distracting ripple animation is completely disabled. As a safe, accessible fallback, a static, subtle glowing `box-shadow` is applied to the active dots instead to maintain the visual hierarchy without the motion.

## Usage
Open `demo.html` in your browser. You will see a "Network Activity" list. The semantic badges (Live, Syncing, Scanning) feature the continuous ripple-wave animation, while the "Idle" badge remains static. You can click the "Toggle Animation" button to pause or play the continuous effect, observing how the UI responds.

## Files
- `demo.html`: The HTML structure for the activity list, detailing the pure CSS checkbox hack setup for the play/pause button, and the application of the specific badge variants (`badge-live`, etc.).
- `style.css`: The styling, tech-specific design tokens for the semantic states, and the specific `@keyframes` driving the continuous pseudo-element scaling logic.
