# CSS Glitch-Flicker Toast (Minimalist Tech)

A pure CSS toast notification component designed for Minimalist Tech Layouts. It focuses on a distressed, cyberpunk-inspired "Glitch-Flicker" entrance animation, perfect for critical system alerts, fatal errors, or security warnings.

## Features
- Pure CSS and HTML (No JavaScript required for the complex glitch animation).
- **Minimalist Tech Aesthetic**: Clean panel layout, stark left-border accents for severity, `JetBrains Mono` typography for system titles, and distinct semantic color variants (Fatal Red, Security Orange).
- **The Glitch-Flicker Effect**: 
- The entrance animation is applied directly to the `.toast` elements (`toast-glitch-in`).
- Unlike standard smooth easing curves, this animation uses a `linear` timing function over a short duration (`0.4s`) with 10 distinct keyframe steps (0%, 10%, 20%...100%). This creates a sharp, erratic, jumping feel rather than smooth motion.
- **Chromatic Aberration**: We simulate RGB color splitting using the `text-shadow` property, pushing Cyan (`--glitch-color-1`) and Magenta (`--glitch-color-2`) in opposite horizontal directions, quickly alternating sides at different keyframes.
- **Spatial Distortion**: The toast jumps erratically along the X and Y axes (`transform: translate`) and occasionally skews (`transform: skewX`) to simulate a corrupted visual signal.
- **Opacity Flickering**: The opacity drops to near-zero and spikes back to 1 repeatedly, simulating a failing backlight or CRT monitor.
- After `0.4s`, the animation resolves cleanly to `opacity: 1`, `translate(0,0)`, and `text-shadow: none`.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Trigger Toasts" button to allow users to easily re-trigger the entrance sequence without reloading the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the erratic translations, flickering opacity, and chromatic aberration text shadows are completely disabled. The entrance safely falls back to a simple, immediate opacity fade.

## Usage
Open `demo.html` in your browser. You will see a mock group of "Critical Alerts". Upon load, they will violently glitch into view. You can click the "Trigger Toasts" button to toggle the state and watch the cyberpunk glitch sequence run again.

## Files
- `demo.html`: The HTML structure for the toasts, detailing the pure CSS checkbox hack setup for the trigger button, and the application of the staggered delay classes.
- `style.css`: The styling, minimalist tech design tokens, the precise 10-step `@keyframes` driving the erratic spatial/opacity jumps, and the `text-shadow` chromatic aberration logic.
