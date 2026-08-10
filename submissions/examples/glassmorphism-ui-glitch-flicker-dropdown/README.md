# CSS Glitch-Flicker Dropdown (Glassmorphism UI)

A pure CSS dropdown component designed for Glassmorphism UI Layouts. It features entirely JavaScript-free state management and an unstable, chaotic "Glitch-Flicker" entrance animation that simulates a faulty holographic UI starting up.

## Features
- Pure CSS and HTML (Zero JavaScript required for state or animations).
- **Glassmorphism Aesthetic**: 
- A deep, dark background with three slowly floating animated "blobs" of cyan, purple, and pink to create a vibrant backdrop for the glass elements.
- The main UI uses `backdrop-filter: blur(16px)` combined with a semi-transparent background color to create the signature frosted glass effect over the floating blobs.
- The dropdown menu itself features an even heavier blur (`20px`), a clipped sci-fi angled corner (`clip-path`), and a cyan-tinted border to lean into the terminal/HUD aesthetic.
- **Pure CSS State Management**: 
- Utilizes the "Checkbox Hack". A hidden checkbox (`#dropdown-toggle`) controls the state.
- The "Options" button is a `<label>` linked to this checkbox. Clicking it toggles the state.
- When checked, CSS sibling selectors (`~`) update the chevron rotation, reveal an invisible full-screen overlay (to handle clicking outside to close), and trigger the dropdown visibility.
- **The Glitch-Flicker Animation System**: 
- We avoid `display: none` because it cannot be animated. Instead, the menu is managed with `opacity: 0`, `visibility: hidden`, and `pointer-events: none`.
- When triggered, the `.dropdown-menu` container runs the `menu-glitch-flicker` animation.
- This complex `@keyframes` sequence simulates a holographic malfunction by rapidly and erratically toggling opacity (`0`, `0.8`, `0.2`, `1`), skewing the container (`10deg`, `-15deg`, `5deg`), and flashing red/cyan `box-shadow` artifacts across several rapid keyframe steps.
- As the container finishes its glitch sequence, the internal `.menu-item` elements stagger-slide into view (`item-slide-in`) using delayed utility classes, completing the startup sequence smoothly.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the chaotic glitching, skewing, and staggered sliding are completely disabled. The menu safely falls back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a "Command Interface" utilizing a rich frosted glass aesthetic. Click the "Options" button. The dropdown menu will erratically glitch and flicker into existence, mimicking a sci-fi HUD powering on. Click the invisible background overlay or the button again to dismiss the menu.

## Files
- `demo.html`: The HTML structure for the glassmorphism layout (including the background blobs), the checkbox hack setup for the dropdown trigger, the full-screen dismissal overlay, and the menu items.
- `style.css`: The styling, glassmorphism design tokens (blurs, transparency), and the specific `@keyframes` driving the erratic, multi-step glitch entrance logic.
