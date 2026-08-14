# CSS Drawer: 3D Perspective Tilt

A hardware-accelerated, JavaScript-free drawer/sidebar component featuring immersive 3D transformations. When opened, the entire main page tilts backward into 3D space, creating a physical sense of depth, while the drawer panel swings open like a door.

## Features
- Pure CSS and HTML implementation. The drawer toggle mechanism relies entirely on the CSS Checkbox Hack (`:checked ~`), eliminating the need for JavaScript state management.
- **Component Architecture**: 
  - **3D Perspective Scene**: The entire layout is wrapped in `.perspective-wrapper`, which applies `perspective: 1500px`. This establishes a 3D camera view, allowing child elements to use Z-axis transformations and Y-axis rotations accurately.
  - **Tilted Page Content**: The main page content acts as a rigid 3D plane. Its `transform-origin` is set to the right edge (`100% 50%`). When the hidden checkbox is checked, it transitions using `translateZ(-200px)` (pushing it backward away from the camera), `translateX(-250px)` (moving it left), and `rotateY(15deg)` (tilting the left side further back). This creates the illusion that the page is a physical object being pushed out of the way.
  - **Swinging Drawer Panel**: The drawer itself is initially rotated `90deg` on the Y-axis, making it invisible as it points directly away from the viewer. Its `transform-origin` is also on the right edge. When opened, it rotates back to `0deg`, swinging flush with the screen like a door on a hinge.
  - **Overlay Fade**: An absolute-positioned `.drawer-overlay` darkens the tilted page content to direct focus to the drawer and allows the user to click off to close.
- **Theming**: Configured via CSS Custom Properties. Supports Dark Mode automatically via `@media (prefers-color-scheme: dark)`. The `body` background color acts as the "void" color seen behind the page when it tilts backward.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. If reduced motion is requested, the complex 3D tilts and swings are disabled, and the drawer falls back to a standard, instantaneous 2D slide-in translation.

## Usage
Open `demo.html` in your browser. Click the "Open 3D Drawer" button to trigger the pure CSS drawer. Notice how the main content area physically tilts backward while the drawer swings in from the right edge.

## Files
- `demo.html`: The HTML structure defining the checkbox hack setup, the perspective wrapper, the tilting page content, and the swinging drawer panel.
- `style.css`: The styling, the CSS `perspective` setup, the complex `rotateY` and `translateZ` transformation mathematics, and the fallback logic for reduced motion.
