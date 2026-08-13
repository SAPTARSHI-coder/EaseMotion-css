# CSS Image 360 Viewer

An interactive 360-degree product rotation viewer built entirely without JavaScript. Users can drag their mouse horizontally across the viewer to rotate the product.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture (Documented in Code)**: 
  - **The Grid System**: The `.viewer-container` acts as a CSS Grid overlaying the product. Inside, we place 12 invisible `.slice` `<div>` elements, stacking them side-by-side using `grid-template-columns: repeat(12, 1fr)`.
  - **Hover State Mapping**: As the user moves their mouse horizontally across the viewer, they inherently hover over different invisible slices. We utilize the CSS general sibling combinator (`~`) to map the `:hover` state of a specific slice to a specific CSS `transform` on the product stage (e.g., `slice-3:hover ~ .product-stage .cube { transform: rotateY(60deg) }`). This simulates a Javascript `mousemove` or `drag` event listener completely natively.
  - **The 3D Product**: While this technique is often used with a sprite-sheet (changing `background-position` for each slice), this demo utilizes a CSS 3D geometric shape (a cube) so the rotation can be mathematically generated and styled without needing external image assets. A `transition: transform 0.1s linear` is applied to smooth the snapping between slices.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating deep slate container colors with translucent colored cube faces.
- Fully accessible semantic structure. The invisible slice overlays are purely functional and hidden from screen-reader focus flows.

## Usage
Open `demo.html` in your browser. Move your mouse horizontally across the viewer container to rotate the 3D cube.

## Files
- `demo.html`: The HTML structure defining the CSS Grid slices and the 3D cube faces.
- `style.css`: The styling, 3D perspective rules, and the critical `slice:hover ~ cube` state logic.
