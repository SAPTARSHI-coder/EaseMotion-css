# CSS Spinning Globe

A true 3D wireframe sphere built entirely with CSS `transform-style: preserve-3d`. No JavaScript, Canvas, or WebGL required.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The 3D Scene**: The `.scene` container establishes a `perspective: 1000px` to define the "camera" distance from the 3D object. The inner `.globe` container is given `transform-style: preserve-3d`, ensuring all child elements are rendered in 3D space rather than being flattened into a 2D plane.
  - **Longitude Lines**: 6 vertical `.ring` divs are mapped along the Y-axis. By rotating each ring in 30-degree increments (`rotateY(0deg)`, `rotateY(30deg)`, etc.), they form the vertical slices of the sphere.
  - **Latitude Lines**: 7 horizontal `.ring` divs are rotated 90 degrees on the X-axis so they lay flat. To form the spherical curvature, they are translated up and down the Z-axis (relative to their rotation) and scaled down mathematically based on their distance from the equator (`r = R * cos(asin(h/R))`).
  - **The Animation**: The globe is given a permanent tilt (`rotateX(-15deg) rotateZ(10deg)`). A CSS `@keyframes` block animates the `rotateY` property from 0 to 360 degrees, smoothly spinning the entire 3D structure.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The neon wireframe aesthetic looks best on the default deep space background, but variables are provided to adapt cleanly to light mode environments.
- Fully accessible semantic structure. The 3D scene is a purely visual element and is wrapped in an `aria-label`. Honors the `prefers-reduced-motion` accessibility standard by entirely disabling the infinite spinning animation for motion-sensitive users, locking the globe at a static, tilted angle.

## Usage
Open `demo.html` in your browser. The globe will automatically spin on its axis upon page load.

## Files
- `demo.html`: The HTML structure defining the 3D scene, the globe container, and the individual latitude/longitude ring `div`s.
- `style.css`: The styling, the 3D transforms, the mathematical spherical scaling, and the continuous `@keyframes` rotation.
