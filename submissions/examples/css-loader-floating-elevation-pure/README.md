# CSS Loader: Floating Elevation

A minimalist loader utilizing synchronized Y-axis translations and dynamic drop-shadow scaling to create a convincing illusion of physical elevation.

## Features
- Pure CSS and HTML implementation without any JavaScript.
- **Component Architecture**: 
  - **The Hovering Object**: The primary visual element (`.float-shape`) utilizes a `cubic-bezier` keyframe animation (`float-up`) to translate upwards along the Y-axis (`translateY(-30px)`), while simultaneously rotating (`rotate(45deg)`) and rounding its corners (`border-radius: 12px`).
  - **The Ground Shadow**: The illusion of 3D depth and elevation is sold entirely by the ground shadow (`.float-shadow`). This is a separate, flattened elliptical div placed directly beneath the object.
  - **Shadow Scaling**: As the object moves up, the shadow must react to the changing distance from the virtual light source. A synchronized `@keyframes` animation (`shadow-shrink`) scales the shadow down (`transform: scale(0.4)`) and fades it out (`opacity: 0.2`) precisely as the object reaches its maximum height. 
  - **The Wave Delay**: Three identical shape/shadow groups are aligned horizontally. They share the same animation definitions but are assigned staggered `animation-delay` values (`0s`, `0.2s`, `0.4s`) to create a continuous, undulating wave pattern.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), cleanly adapting the background colors and adjusting the opacity of the ground shadow so it remains visible against a dark slate background.
- Fully accessible semantic structure. The floating shapes are hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing all animations, locking the three shapes into a static, staggered height configuration for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the floating elevation loading animation.

## Files
- `demo.html`: The HTML structure defining the wrapper and the three shape/shadow groups.
- `style.css`: The styling, the `cubic-bezier` timing functions, and the synchronized shape translation and shadow scaling keyframes.
