# CSS Loader: Particle Burst

A dynamic explosion of colorful particles simulating a localized big bang, utilizing precise CSS transform translations and synchronized keyframe timing.

## Features
- Pure CSS and HTML implementation without any JavaScript, canvas, or SVG particles.
- **Component Architecture**: 
  - **The Pulsing Core**: The `.center-core` div acts as the hub of the explosion. It pulses using a `cubic-bezier` timing function to simulate absorbing energy and swelling right before the burst.
  - **Directional Particles**: 8 individual `.particle` divs are absolutely positioned behind the core. Each particle is assigned a specific compass direction class (e.g. `.p-nw` for North-West) and a unique color from the CSS Custom Properties palette.
  - **Synchronized Trajectories**: 8 separate `@keyframes` rules (e.g. `shoot-nw`) define the exact X/Y `transform: translate()` coordinates required to shoot that specific particle outward. 
  - **Phase Alignment**: The core pulse and the particle bursts share the exact same `animation-duration` (1.5s). The particles remain hidden (`opacity: 0`) and stationary (`translate(0,0)`) for the first 50% of the keyframe timeline, matching exactly when the core reaches its maximum swollen size, creating the illusion of a reactive explosion.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The vibrant particles are legible on light mode, but visually pop much harder when the OS-level system theme switches to `prefers-color-scheme: dark`.
- Fully accessible semantic structure. The decorative burst wrapper is hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing all pulse and shoot animations, locking the loader into a static, stylized starburst pattern for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the particle burst loading animation.

## Files
- `demo.html`: The HTML structure defining the center core and the 8 directional particles.
- `style.css`: The styling, the `cubic-bezier` timing functions, and the precise X/Y translation keyframes.
