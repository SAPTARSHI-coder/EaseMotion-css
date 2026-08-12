# CSS Smoke Ring Animation

A pure CSS physics simulation of expanding and dispersing smoke rings. Built entirely without JavaScript, Canvas, or particle systems.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The Emitter System**: The HTML contains a central `.smoke-generator` with an `.emitter` anchor point. Inside, multiple `.ring` `<div>` elements are spawned.
  - **Staggered Animations**: Every ring utilizes the exact same CSS `@keyframes blowRing` animation. To create a continuous, overlapping stream of smoke, each ring is assigned a CSS Custom Property `--delay` in the HTML `style` attribute. The CSS applies this variable to the `animation-delay` property, perfectly staggering their emission.
  - **Simulating Gas Dispersion**: A sharp CSS border doesn't look like smoke. The critical trick is the progressive application of the `filter: blur()` property. In the `@keyframes`, the rings start with a small blur (`2px`), and as they expand (`transform: scale(8)`) and rise (`transform: translateY(-250px)`), the blur increases to `12px`. Simultaneously, the `border-width` thins and the `opacity` fades to `0`, perfectly mimicking the physical properties of dispersing gas.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme. In dark mode, it produces white translucent smoke against a dark slate background. In light mode (`@media (prefers-color-scheme: light)`), it automatically inverts to produce dark, wispy smoke against a light background.
- Fully accessible semantic structure. The smoke generator is a purely decorative visual effect and is explicitly hidden from screen readers via `aria-hidden="true"`. Honors the `prefers-reduced-motion` accessibility standard by disabling the continuous spawning and expansion animations for motion-sensitive users, rendering a single static, blurred ring for visual context instead.

## Usage
Open `demo.html` in your browser. The smoke rings will automatically spawn and animate in a continuous loop.

## Files
- `demo.html`: The HTML structure defining the emitter and the staggered `--delay` rings.
- `style.css`: The styling, the progressive blur logic, and the physics `@keyframes`.
