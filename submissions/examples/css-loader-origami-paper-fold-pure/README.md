# CSS Loader: Origami Paper Fold

A 3D loader utilizing CSS border-width triangles and transform origins to simulate paper flaps folding and unfolding continuously.

## Features
- Pure CSS and HTML implementation without any JavaScript or SVG assets.
- **Component Architecture**: 
  - **The Triangles**: The loader is constructed from four `.origami-flap` divs. Instead of background colors, the classic CSS border trick is used (`border-top: 30px solid color; border-left: 30px solid transparent;`, etc.) to draw four perfect triangles that form a 60x60 square.
  - **The 3D Hinge**: The crucial step is setting the `transform-origin` for each flap to its outer edge (`top`, `right`, `bottom`, `left`). This creates a physical hinge. 
  - **The Folding Animation**: When `rotateX` or `rotateY` is applied to these flaps via keyframes, they fold inward or outward like the flaps of a cardboard box, rather than just spinning flatly.
  - **The Isometric View**: The parent `.origami-wrapper` applies a `perspective` to enable the 3D depth, and then tilts the entire assembly forward (`transform: rotateX(45deg) rotateZ(45deg)`). This isometric view allows the user to clearly see the flaps opening up toward the camera.
  - **Staggered Timing**: The folding animations use staggered `animation-delay` values (0s, 0.2s, 0.4s, 0.6s) so the flaps open and close in a mesmerizing sequential pattern rather than all at once.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The amber paper theme automatically adapts to the OS-level system theme (`prefers-color-scheme: dark`), ensuring the high-contrast bright yellow/oranges remain legible and vibrant against deep backgrounds.
- Fully accessible semantic structure. The decorative flaps are hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing the folding animation, locking the flaps into a partially open, static paper flower shape for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the origami paper fold loading animation.

## Files
- `demo.html`: The HTML structure defining the 3D wrapper and the four triangular flaps.
- `style.css`: The styling, the CSS border triangle logic, the `transform-origin` hinges, and the staggered 3D fold keyframes.
