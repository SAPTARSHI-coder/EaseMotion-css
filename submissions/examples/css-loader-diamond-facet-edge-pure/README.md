# CSS Loader: Diamond Facet Edge

A geometric, 3D-spinning gemstone loader utilizing sharp conic gradients to simulate physical light refracting across cut facets.

## Features
- Pure CSS and HTML implementation without any JavaScript, SVGs, or complex border hacks.
- **Component Architecture**: 
  - **The Facets**: The `.diamond-gem` is a simple square div. The four sharp, triangular interior facets are drawn entirely using a single `conic-gradient` set to 45 degrees. By mapping four distinct color stops (dark, mid, light, mid) perfectly to the 90-degree quadrants of the square, it instantly looks like a 3D pyramid or cut gemstone viewed from above.
  - **The Diamond Shape**: A simple `transform: rotateZ(45deg)` turns the square into a diamond shape, aligning the conic gradient perfectly to the new edges.
  - **True 3D Spinning**: The container (`.loader-container`) establishes a 3D context using `perspective: 800px`. The `@keyframes gem-spin` animation then rotates the gem simultaneously along both the Y and X axes (`rotateY(360deg) rotateX(360deg)`), while maintaining the `rotateZ` to keep the diamond shape intact. This creates a mesmerizing, complex tumbling motion.
  - **Reactive Ground Shadow**: A soft, blurred `.diamond-shadow` sits below the gem. Its `@keyframes shadow-pulse` animation is synced to the spinning of the gem—when the gem flips edge-on (and thus appears thinner to the viewer), the shadow shrinks in width (`scaleX(0.4)`) to match.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The emerald/teal gemstone theme adapts cleanly to the OS-level system theme (`prefers-color-scheme: dark`), shifting to slightly deeper, richer jewel tones for better contrast against dark backgrounds.
- Fully accessible semantic structure. The decorative gem and shadow are hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing the tumbling animation, locking the gemstone into a beautiful, static isometric view for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the diamond facet edge loading animation.

## Files
- `demo.html`: The HTML structure defining the 3D wrapper, the gem, and the ground shadow.
- `style.css`: The styling, the `conic-gradient` facet logic, the 3D `perspective`, and the synchronized tumbling/shadow keyframes.
