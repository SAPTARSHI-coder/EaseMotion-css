# CSS Rotate-Fade Hero Section (Minimalist Tech)

A pure CSS hero section component designed for Minimalist Tech Layouts. It features a dark, ambient aesthetic with a continuous, complex "Rotate-Fade" background glow animation that creates a living, breathing environment without relying on JavaScript or WebGL.

## Features
- Pure CSS and HTML (Zero JavaScript required for the background animation loop).
- **Minimalist Tech Aesthetic**: Dark slate theme (`#020617`), vibrant gradient text highlighting (`#8b5cf6` / `#06b6d4`), a glassmorphism tech badge, and a subtle, faded grid overlay (`.grid-overlay`) to reinforce the technical feel.
- **The Rotate-Fade Background System**: 
- The ambient background is created using multiple `.glow` elements (large, heavily blurred circles) placed inside a `.rotate-fade-bg` container.
- These glows are positioned absolute center, but translated away from the center (`translate(-200px, -200px)`). Crucially, their `transform-origin` is kept at the top-left (`0 0`), which correlates to the exact center of the parent container.
- **Rotate (`rotate-orbit`)**: By applying a `rotate()` transform to these offset elements, they orbit around the center of the hero section rather than spinning in place.
- **Fade (`fade-pulse`)**: A secondary `@keyframes` animation simultaneously scales the `opacity` up and down (`0.2` to `0.7`) on a different timing cycle.
- By applying these two animations concurrently to multiple glows moving in opposite directions (`rotate-orbit` vs `rotate-orbit-reverse`) at different speeds, it creates a highly complex, non-repeating ambient lighting effect.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Toggle Ambient Rotation" button. This allows users to start and stop the infinite animation loops, demonstrating how you might control the state via CSS classes based on user preferences.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the continuous rotating and fading animations are completely disabled. The glows fall back to static, lower opacity values to maintain the ambient lighting effect without the distracting motion.

## Usage
Open `demo.html` in your browser. You will see a dark-themed hero section with a subtle grid overlay. Behind the text, vibrant violet and cyan blurred lights will slowly orbit the center of the section while independently fading in and out, creating a complex ambient background. You can click the "Toggle Ambient Rotation" button to pause or play the continuous effect.

## Files
- `demo.html`: The HTML structure for the hero section, detailing the layout for the typography, the grid overlay mask, and the dedicated `.rotate-fade-bg` container holding the glow `div`s.
- `style.css`: The styling, dark tech design tokens, vibrant gradients, and the specific, multi-layered `@keyframes` driving the complex orbit and opacity pulse logic of the background glows.
