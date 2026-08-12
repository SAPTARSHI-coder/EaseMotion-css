# CSS Ripple-Wave Hero Section (Minimalist Tech)

A pure CSS hero section component designed for Minimalist Tech Layouts. It features a dark, modern aesthetic with a continuous, expansive "Ripple-Wave" background animation that adds depth and motion without relying on JavaScript or heavy video assets.

## Features
- Pure CSS and HTML (Zero JavaScript required for the background animation loop).
- **Minimalist Tech Aesthetic**: Dark theme (`#0f172a`), high-contrast typography, a glowing tech badge, and clean call-to-action buttons. The text utilizes a subtle linear gradient clip for a premium feel.
- **The Ripple-Wave Background System**: 
- The animated background is composed of multiple `.ripple-ring` elements placed inside a `.ripple-background` container. This container uses `position: absolute` to sit behind the main `.hero-content`.
- The rings are styled with borders (`1px solid var(--ripple-color)`) rather than solid backgrounds to create the "wave" line effect.
- The continuous `hero-ripple-wave` keyframes animation scales each ring massively outward (`scale(1)` to `scale(15)`) while simultaneously fading it out (`opacity: 0.8` to `0`) and thickening the border slightly for visual weight as it expands.
- By staggering the `animation-delay` of the three rings (e.g., `0s`, `2.6s`, `5.3s`), we create a continuous, majestic outward flow of concentric waves.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) connected to a "Toggle Background Ripple" button positioned above the hero. This allows users to start and stop the infinite animation loop, demonstrating how you might control the state via CSS classes in a real application based on scroll position or user preference.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the continuous, expansive ripple animation is completely disabled. As a safe, accessible fallback, a static, subtle radial gradient is applied to the hero background to maintain visual depth without the potentially distracting motion. Button hover translations are also disabled.

## Usage
Open `demo.html` in your browser. You will see a dark-themed hero section. Behind the text content, large, faint blue rings will continuously expand outward from the center, creating a radar-like or sonic wave effect. You can click the "Toggle Background Ripple" button above the section to pause or play the continuous effect, observing how the UI responds.

## Files
- `demo.html`: The HTML structure for the hero section, detailing the layout for the typography, buttons, and the dedicated `.ripple-background` container holding the concentric ring `div`s.
- `style.css`: The styling, dark tech design tokens, typography treatments, and the specific `@keyframes` driving the continuous outward scaling and fading logic of the background rings.
