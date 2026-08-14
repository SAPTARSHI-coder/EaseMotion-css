# CSS 3D Effect: Particle Burst

A hardware-accelerated, JavaScript-free 3D animation utilizing `transform-style: preserve-3d`. Features a synchronized explosion of independent particles mapped to a spherical vector field using pure CSS variables and staggered delays.

## Features
- Pure CSS and HTML implementation. No JavaScript required for particle generation, physics, or 3D coordinate mapping.
- **Component Architecture**: 
  - **The 3D Scene Container**: The `.scene-3d` element establishes the depth perspective (`perspective: 800px`). The `.burst-emitter` wrapper applies `transform-style: preserve-3d` and tumbles continuously so the viewer can appreciate the full 3D spherical volume of the explosion.
  - **The Particle Engine**: The explosion consists of 24 individual `.particle` elements. Each particle shares the same core `@keyframes explode` animation, which scales the particle up, translates it outward on the Z-axis, and fades it out.
  - **Spherical Vector Field Hack**: To make the particles explode outward in a sphere rather than all in a straight line, we must rotate each particle on the X and Y axes *before* translating on the Z-axis. Because standard CSS `@keyframes` override inline transforms, we utilize CSS Custom Properties (`--rx`, `--ry`) injected directly into the `@keyframes` definition. 
  - **The Coordinate Matrix**: Using `:nth-child` selectors, we assign unique `--rx` (elevation) and `--ry` (azimuth) angles to each of the 24 particles, distributing them perfectly into three rings (an equator, an upper ring, and a lower ring) to form a complete 3D sphere.
  - **Organic Timing**: We apply slight, staggered `animation-delay` values (0.0s to 0.3s) to the particles so the explosion feels chaotic and organic, rather than perfectly rigid.
- **Theming**: Configured via CSS Custom Properties. Supports both light and dark OS themes (`prefers-color-scheme`). The particles use an energetic, hot color palette (Amber, Red, Pink).
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by freezing the continuous tumbling and stopping the explosion loop. For motion-sensitive users, the CSS falls back to hardcoded, static Z-translations, presenting the particles frozen in mid-air as a beautiful, static starburst sculpture.

## Usage
Open `demo.html` in your browser. Watch the continuous particle burst animation and observe how the tumbling emitter container reveals the true 3D spherical volume of the exploding particles.

## Files
- `demo.html`: The HTML structure defining the 3D scene, the preserve-3d emitter container, the 24 independent particles, and the inner pulsating core.
- `style.css`: The styling, the `preserve-3d` mechanics, the CSS Custom Property hack for 3D vector mapping (`--rx`, `--ry`), the coordinate matrix assigning those vectors via `:nth-child`, and the core `@keyframes` governing the Z-axis explosion physics.
