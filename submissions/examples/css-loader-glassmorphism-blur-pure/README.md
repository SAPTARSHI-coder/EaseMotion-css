# CSS Loader: Glassmorphism Blur

A premium, frosted-glass loading animation utilizing backdrop-filter blurs and vibrant, moving background meshes.

## Features
- Pure CSS and HTML implementation without any JavaScript.
- **Component Architecture**: 
  - **The Vibrant Mesh Background**: Glassmorphism requires a visually rich background to look good. This component uses several `.mesh-blob` divs with heavy `filter: blur(40px)` and drifting keyframe animations to create a dynamic, colorful canvas underneath the glass.
  - **The Frosted Glass Card**: The `.glass-card` uses `backdrop-filter: blur(16px)` to create the frosted glass effect, blurring the animated blobs as they pass underneath. It also includes subtle inset borders and shadows (`box-shadow: inset 0 1px 1px rgba(255,255,255,0.8)`) to provide the characteristic glass edge lighting.
  - **Hardware Acceleration**: The drifting mesh background animations utilize `transform: translateZ(0)` to force the browser to render the heavy blur calculations on the GPU, ensuring smooth 60fps movement.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adapting the frosted glass from a light translucent white to a dark translucent slate.
- Fully accessible semantic structure. The decorative background mesh is hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing the drifting background and the spinning loader for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the glassmorphism loading animation.

## Files
- `demo.html`: The HTML structure defining the animated mesh background and the frosted glass card containing the spinner.
- `style.css`: The styling, the `backdrop-filter` rules, and the hardware-accelerated drifting blob animations.
