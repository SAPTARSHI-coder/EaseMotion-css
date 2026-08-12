# CSS Balloon Float

A realistic balloon shape crafted using advanced CSS border-radius manipulation, featuring continuous swaying and floating keyframe animations.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture**: 
  - **The Balloon Geometry**: The distinct teardrop shape of a balloon is achieved using an 8-value CSS `border-radius` configuration: `50% 50% 50% 50% / 40% 40% 60% 60%`. This controls the X and Y radii independently to flatten the top slightly and elongate the bottom.
  - **3D Depth**: An inset box-shadow (`box-shadow: inset -10px -10px 20px var(--balloon-dark)`) creates volumetric depth on the balloon body, while a blurred, rotated pseudo-element acts as the glossy light reflection (`.balloon-shine`).
  - **The Physics Animation**: The animation is split into two distinct, infinite keyframes to simulate physical movement. The parent `.balloon-group` uses `transform: translateY()` to continuously float the entire assembly up and down. Simultaneously, the `.balloon` body and `.balloon-string` use `transform: rotate()` to sway side-to-side, anchored by `transform-origin` values that pivot the balloon from its bottom knot, and the string from its top attachment point.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adapting the sky gradient to a night-time palette and adjusting the balloon contrast.
- Fully accessible semantic structure. The container uses an `aria-label` to provide context to screen readers, treating the animation as a decorative graphic. Honors the `prefers-reduced-motion` accessibility standard by freezing all swaying and floating animations for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the floating balloon animation.

## Files
- `demo.html`: The HTML structure defining the sky container, the balloon group, and the string.
- `style.css`: The styling, the 8-value `border-radius` trick, and the independent physics animations.
