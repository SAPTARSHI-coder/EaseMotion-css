# CSS Solar System

A pure CSS demonstration of orbital mechanics using nested rotations and counter-rotations to keep planetary bodies upright as they revolve. This method relies entirely on standard CSS transforms (`rotate`, `translate`) and avoids complex trigonometric functions.

## Features
- Pure CSS and HTML.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), switching from a light presentation mode to a deep space black aesthetic.
- **Component Architecture (Documented in Code)**: 
  - **The Nested Orbit Technique**: Instead of calculating mathematical paths, this system uses nested containers. Each planet sits inside an `.orbit` container (a circle). The planet is positioned absolutely at the top-center (`top: 0; left: 50%`) of this container.
  - **The Spin**: An infinite `@keyframes` animation (`spin`) rotates the entire `.orbit` container 360 degrees. Because the planet is attached to the edge of this container, it is carried along in a perfect circle.
  - **The Counter-Spin**: If we only spin the orbit container, the planet itself will rotate upside down as it revolves. To fix this, we apply a second `@keyframes` animation (`counter-spin`) directly to the planet. This animation rotates the planet in the exact *opposite* direction (`-360deg`) at the exact same speed. This perfectly negates the container's rotation, keeping the planet "upright" relative to the page.
  - **Moons & Sub-orbits**: The Earth-equivalent planet demonstrates how this system can be infinitely nested. The planet itself becomes the relative container for a smaller `.orbit-moon` ring, which carries its own satellite.
- Accessible semantic structure. The wrapper utilizes an explicit `aria-label` to describe the visual animation to screen readers, while individual planets are labeled. Honors the `prefers-reduced-motion` accessibility standard by disabling all orbit and counter-orbit animations for motion-sensitive users, falling back to a static diagram view.

## Usage
Open `demo.html` in your browser to view the nested orbital system. 

## Files
- `demo.html`: The HTML structure demonstrating the nested orbit rings and planetary bodies.
- `style.css`: The styling, CSS Custom Property theming blocks, and the heavily commented `spin` and `counter-spin` transform logic.
