# CSS Loader: Holographic Flicker

A sci-fi inspired loader featuring a semi-transparent, cyan glowing orb with CRT scanlines and erratic opacity flickering.

## Features
- Pure CSS and HTML implementation without any JavaScript or images.
- **Component Architecture**: 
  - **The Holographic Orb**: The `.holo-orb` is constructed using a transparent center and a solid cyan border. Heavy normal and `inset` `box-shadow`s are applied to create a diffuse, ethereal glowing volume. 
  - **The CRT Scanlines**: Inside the orb, a `.holo-scanlines` pseudo-element uses a `repeating-linear-gradient` to draw horizontal black lines (`2px` solid, `2px` transparent) over the glowing cyan background. A continuous `background-position` keyframe animation scrolls these lines upwards, simulating the refresh rate of an old CRT monitor or failing sci-fi hologram.
  - **The Flicker Physics**: The core glitch effect is achieved through an erratic `@keyframes` animation (`holo-flicker`). This keyframe rapidly drops the `opacity` of the orb to near-zero at irregular percentage intervals (e.g. `55% { opacity: 0.1; }`, `60% { opacity: 1; }`). 
  - **The Projector Base**: An elliptical base (`.holo-base`) sits below the orb and casts a heavy cyan shadow upwards. The base and the loading text share the same erratic flicker keyframe, but with slight `animation-delay`s (`0.1s`, `0.2s`) to create a cascading electrical failure effect rather than everything blinking uniformly.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The holographic effect is intentionally designed for dark backgrounds (`--loader-bg: #09090b;`) to maximize contrast and glow intensity.
- Fully accessible semantic structure. The glowing orb wrapper is hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing the erratic flickering and scrolling scanlines for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the holographic flickering loading animation.

## Files
- `demo.html`: The HTML structure defining the projector base, the orb, and the internal scanline div.
- `style.css`: The styling, the `repeating-linear-gradient` scanline logic, and the erratic opacity keyframe animations.
