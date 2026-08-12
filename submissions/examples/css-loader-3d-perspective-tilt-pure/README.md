# CSS Loader: 3D Perspective Tilt

A hardware-accelerated loader utilizing CSS 3D transforms, nested perspectives, and multi-axis rotations to create a floating geometric effect.

## Features
- Pure CSS and HTML implementation without any JavaScript or WebGL.
- **Component Architecture**: 
  - **The 3D Scene**: The parent container `.perspective-scene` utilizes the CSS `perspective: 800px` property. This establishes a 3D viewport, defining the depth and intensity of the 3D warping effect for any transformed children.
  - **Preserving 3D Space**: The `.cube-wrapper` child, and all nested `.shape` children, utilize `transform-style: preserve-3d`. This is a critical CSS property that tells the browser that nested children should exist within the same unified 3D space, rather than being flattened onto their parent's 2D plane. Without this, the tumbling effect breaks entirely.
  - **Compound Rotations**: The geometric complexity is achieved through compound animations. The entire wrapper tumbles globally (`rotateX`, `rotateY`, `rotateZ`), while each individual nested shape simultaneously spins rapidly on a single isolated axis. 
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), cleanly adapting the background colors while preserving the neon blue wireframe look.
- Fully accessible semantic structure. The 3D scene is hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing all rotations and locking the wireframe into a static, pleasing 45-degree angle.

## Usage
Open `demo.html` in your browser to view the 3D perspective loading animation.

## Files
- `demo.html`: The HTML structure defining the 3D perspective scene and the nested geometric shapes.
- `style.css`: The styling, the `preserve-3d` logic, and the multi-axis rotation keyframes.
