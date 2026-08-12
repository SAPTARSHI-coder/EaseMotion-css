# CSS Loader: Cyberpunk Neon

A high-tech, hardware-accelerated loader featuring glowing neon rings and text glitch effects built completely in CSS.

## Features
- Pure CSS and HTML implementation without any JavaScript or SVG dependencies.
- **Component Architecture**: 
  - **The Neon Rings**: The core loader visual utilizes nested spinning rings (`.ring-1`, `.ring-2`). These are constructed by making one border transparent (`border-top-color: transparent`) to create an open arc, and applying heavy normal and `inset` `box-shadow`s to the remaining borders to create a harsh, glowing neon tube effect (using classic Cyberpunk hot pink and cyan).
  - **The CSS Glitch Text**: The "LOADING" text features a classic cyberpunk glitch effect. This is achieved by duplicating the text content using `::before` and `::after` pseudo-elements via the `data-text` attribute. 
  - **Clip-Path Animation**: The duplicated text layers are colored neon pink and cyan using `text-shadow`, shifted slightly off-center, and animated using a complex `@keyframes` sequence that aggressively changes a `clip-path: polygon()` definition. This causes only thin, shifting horizontal slices of the neon text to be visible at any given time, simulating a broken digital signal.
  - **Hardware Acceleration**: The spinning ring animations utilize `transform: translateZ(0)` to force the browser to render the heavy glow calculations on the GPU, ensuring smooth 60fps rotation even on lower-end devices.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The neon effect is intentionally designed for dark backgrounds (`--loader-bg: #09090b;`) to maximize contrast and glow intensity.
- Fully accessible semantic structure. The glowing rings are hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing the rotating rings and hiding the glitching slices entirely for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the cyberpunk neon loading animation.

## Files
- `demo.html`: The HTML structure defining the neon rings and the text element with its `data-text` attribute.
- `style.css`: The styling, the `box-shadow` neon logic, and the `clip-path` keyframe animations.
