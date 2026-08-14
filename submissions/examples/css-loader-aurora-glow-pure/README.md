# CSS Loader: Aurora Glow

A smooth, hardware-accelerated loader featuring a mesmerizing aurora borealis styling using heavily blurred, spinning conic gradients and CSS masks.

## Features
- Pure CSS and HTML implementation without any JavaScript or SVG dependencies.
- **Component Architecture**: 
  - **The Conic Glow**: The core visual is achieved using a CSS `conic-gradient` mapping through four distinct aurora colors (Emerald, Blue, Violet, Cyan). 
  - **The Aurora Blur**: A heavy `filter: blur(15px)` is applied to the gradient to soften the hard edges, creating a smooth, ethereal, gaseous glow typical of an aurora borealis.
  - **The CSS Mask Ring**: To create the hollow ring shape out of a solid glowing circle, a CSS mask (`-webkit-mask-image: radial-gradient(circle, transparent 40%, black 45%)`) is applied. This punches a hole directly through the center of the blurred div.
  - **Overlapping Dynamics**: Two overlapping rings are used (`.outer-ring` and `.inner-ring`). The inner ring is scaled down slightly (`transform: scale(0.85)`), given a different blend mode (`mix-blend-mode: screen`), and spins in the opposite direction at a faster speed. This overlap creates complex, shifting color patterns as the gradients intersect.
  - **Hardware Acceleration**: Both spinning animations utilize `transform: translateZ(0)` to force the browser to render the heavy blur calculations on the GPU, ensuring smooth 60fps rotation even on lower-end devices.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The aurora effect is intentionally designed for dark backgrounds (`--loader-bg: #020617;`) to maximize contrast and glow intensity.
- Fully accessible semantic structure. The glowing rings are hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by stopping the rotation and slightly increasing the blur to present a static glowing orb instead.

## Usage
Open `demo.html` in your browser to view the aurora glow loading animation.

## Files
- `demo.html`: The HTML structure defining the overlapping outer and inner rings.
- `style.css`: The styling, the `conic-gradient` blur logic, and the hardware-accelerated keyframe rotations.
