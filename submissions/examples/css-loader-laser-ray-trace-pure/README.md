# CSS Loader: Laser Ray Trace

A continuous, high-speed laser beam tracing the perimeter of a container, built purely with CSS conic gradients and mask compositing.

## Features
- Pure CSS and HTML implementation without any JavaScript, SVG paths, or `stroke-dashoffset` tricks.
- **Component Architecture**: 
  - **The Laser Edge Trick**: Tracing the perimeter of a rectangle purely in CSS is famously difficult without SVG. This component solves it using a layered compositing trick. 
  - **The Spinning Beam**: A large `.laser-beam` div is placed at the back. It utilizes a `conic-gradient` that transitions sharply from transparent to solid cyan, creating a defined "laser head" and a fading "tail". A continuous linear rotation keyframe makes this gradient sweep in a circle.
  - **The Solid Mask**: A solid `.laser-center` div is placed exactly over the spinning beam. By utilizing `inset: 2px;`, it perfectly covers the beam except for a 2px gap around the entire outer edge of the container. 
  - **The Result**: Because only the outer 2px edge of the spinning conic gradient is visible, it perfectly creates the illusion of a laser beam rapidly tracing the rectangular border, automatically handling the difficult corner math without any complex keyframes.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The laser effect is intentionally designed for dark backgrounds (`--loader-bg: #020617;`) to maximize contrast and glow intensity.
- Fully accessible semantic structure. The decorative bounding box is hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing the rotating beam and converting it into a static, glowing green border for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the laser ray trace loading animation.

## Files
- `demo.html`: The HTML structure defining the wrapper, the spinning beam layer, and the masking center layer.
- `style.css`: The styling, the `conic-gradient` beam logic, and the `inset` border masking trick.
