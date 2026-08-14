# CSS 3D Effect: Laser Ray Trace

A hardware-accelerated, JavaScript-free 3D animation utilizing `transform-style: preserve-3d`. Features linear-gradients and mask compositing to simulate a laser beam tracing the edges of a rotating 3D wireframe cube.

## Features
- Pure CSS and HTML implementation. No JavaScript or SVG line tracing required.
- **Component Architecture**: 
  - **The 3D Scene Container**: The `.scene-3d` element establishes the depth using `perspective: 1000px`. The `.cube-assembly` wrapper applies `transform-style: preserve-3d` and continuously tumbles on all 3 axes (`rotateX`, `rotateY`, `rotateZ`) via a CSS `@keyframes` animation.
  - **Wireframe Construction**: The 6 faces of the cube are constructed by translating and rotating standard `div` elements on the X, Y, and Z axes. They are made transparent with a thin border to create a wireframe aesthetic.
  - **The Laser Trace Engine**: Simulating a line drawing around the border of a div without SVG is challenging. This component achieves it via background compositing:
    1. A `.laser-trace` child element is created inside each face. It is made twice as large as the face and positioned in the center.
    2. It is given a `conic-gradient` background that sweeps from transparent to a solid neon laser color.
    3. It is rotated infinitely via `@keyframes spin-laser`.
    4. An `::after` pseudo-element is applied to the face itself. It is inset by exactly `2px` (the desired thickness of the laser) and given a solid, slightly blurred background.
    5. **The Result**: The spinning conic gradient is completely hidden by the inset pseudo-element *except* for the outer 2px border. As the gradient spins, it looks exactly like a laser beam tracing the perimeter of the face.
  - **Staggered Delays**: Each face's laser trace animation is staggered with an `animation-delay` so they don't all spin in perfect unison, adding to the chaotic, energetic sci-fi aesthetic.
- **Theming**: Configured via CSS Custom Properties. Best viewed on a dark background. Features a subtle CSS grid background pattern to match the technical aesthetic.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by freezing the 3D tumbling and swapping the spinning laser animations for a static, glowing neon border for motion-sensitive users.

## Usage
Open `demo.html` in your browser. Watch the continuous 3D rotation and observe the pseudo-element masking technique that creates the laser trace effect along the edges of the cube.

## Files
- `demo.html`: The HTML structure defining the 3D scene, the 6 cube faces, the laser trace elements, and the inner glowing core.
- `style.css`: The styling, the `preserve-3d` mechanics, the conic-gradient masking technique, and the `@keyframes` for the spinning lasers and 3D tumbling.
