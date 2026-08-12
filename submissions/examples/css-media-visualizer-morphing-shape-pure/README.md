# CSS Media Visualizer: Morphing Shape

A hardware-accelerated, JavaScript-free audio and media UI element. Features a highly fluid, organic "blob" animation driven entirely by complex CSS `border-radius` transitions.

## Features
- Pure CSS and HTML implementation. No Canvas, SVG morphing paths, or JavaScript required for the fluid organic shapes or the play/pause state logic.
- **Component Architecture**: 
  - **The 8-Point Border Radius**: The core of this effect relies on a lesser-known feature of the CSS `border-radius` property. By supplying 8 values separated by a slash (e.g., `border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%`), you define the horizontal and vertical radii for all four corners independently. This allows you to create highly irregular, organic "squashed" shapes instead of just rounded rectangles or perfect circles.
  - **The `@keyframes` Morph**: The `.morph-blob` elements use an infinite `@keyframes morph-shape` animation that smoothly transitions between several of these complex 8-point `border-radius` configurations over 6 seconds.
  - **The Rotation**: Simultaneously, the blobs are given a slow `@keyframes spin-blob` animation to rotate 360 degrees. Combining the rotation with the border-radius morphing creates an incredibly convincing, fluid, lava-lamp-like animation.
  - **The Parallax Aura**: We use two blob layers (`.blob-back` and `.blob-front`). The background blob is scaled up, blurred using `filter: blur()`, and given reversed, desynchronized animation timings. This creates a glowing, shifting aura behind the primary shape.
  - **The Counter-Spin**: Because the main blob is physically rotating, any content inside it (like the SVG icon) would rotate too. We fix this by applying a `counter-spin` animation to the `.album-icon` that rotates exactly opposite to the parent blob, keeping the icon perfectly upright at all times.
  - **The `:has()` Selector State Logic**: The play/pause button is a hidden `<input type="checkbox">` styled using the CSS checkbox hack. When the user "pauses" the music, we use the modern CSS `:has()` selector on the parent card (`.media-player-card:has(.play-toggle:not(:checked))`) to instantly apply `animation-play-state: paused` to the blobs. Furthermore, we use `!important` to override the animated `border-radius` and force it back to a perfect `50%` circle when paused. 
- **Theming**: Configured via CSS Custom Properties. Fully responsive to OS-level dark mode (`prefers-color-scheme`). 
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. For motion-sensitive users, the morphing and spinning animations are completely disabled, and the shape defaults to a static, perfect circle.

## Usage
Open `demo.html` in your browser. Watch the fluid, organic blobs continuously morph and rotate around the central icon. Click the Play/Pause button to see the blobs instantly halt their animation and smoothly transition back into a perfect, static circle when "paused", driven entirely by CSS state.

## Files
- `demo.html`: The HTML structure defining the morphing blobs, the counter-spinning SVG icon, and the hidden checkbox play/pause toggle logic.
- `style.css`: The styling, the complex 8-point `border-radius` keyframes, the counter-rotation logic, and the `:has()` selector state interactions.
