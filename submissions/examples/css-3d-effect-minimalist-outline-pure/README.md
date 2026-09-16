# CSS 3D Effect: Minimalist Outline

A hardware-accelerated, JavaScript-free 3D animation. Features a spinning isometric cube constructed entirely of crisp, minimalist CSS borders.

## Features
- Pure CSS and HTML implementation. No Canvas, WebGL, or JavaScript rendering loops required.
- **Component Architecture**: 
  - **The 3D Scene**: The parent `.scene` element establishes the 3D space using `perspective: 800px`. This gives the cube realistic foreshortening as it spins.
  - **The 3D Object**: The `.cube` container uses `transform-style: preserve-3d`. This is critical: it tells the browser that the children of this container exist in actual 3D space, rather than being flattened onto the 2D plane of the parent. The spinning animation (`rotateX`, `rotateY`, `rotateZ`) is applied to this container.
  - **The Faces**: The cube is made of 6 `.cube-face` elements. To achieve the "Minimalist Outline" aesthetic, these faces have `background: transparent` and a thin `border`. They are positioned into a cube shape using `rotateX/Y` and `translateZ` (pushing them outward by exactly half the width of the cube).
  - **Wireframe Depth**: To make the overlapping wireframe lines legible, a subtle `box-shadow: inset` creates a faint glow inside the edges, and a `backdrop-filter: blur(2px)` creates a tiny amount of distortion when lines cross behind other faces.
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). The outline colors swap from a deep slate in light mode to a bright neon cyan in dark mode.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the continuous multi-axis spinning is disabled, and the cube is locked into a static, visually pleasing isometric angle (`transform: rotateX(-30deg) rotateY(45deg)`).

## Usage
Open `demo.html` in your browser. Watch the wireframe cube spin infinitely through all 3 axes, showcasing true CSS 3D rendering.

## Files
- `demo.html`: The HTML structure defining the 3D scene, the object wrapper, and the 6 structural faces.
- `style.css`: The styling, the 3D positioning mathematics (`translateZ`), the wireframe border definitions, and the `preserve-3d` animation logic.
