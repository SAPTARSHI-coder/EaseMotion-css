# CSS 3D-Flip Hero Section (Minimalist Tech)

A pure CSS interactive hero section component designed for Minimalist Tech Layouts. It features a spatial "3D-Flip" entrance animation, where typographic elements and visual assets flip upward from a flat, invisible 3D plane into their final resting positions, mimicking physical cards snapping upright.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Tech Aesthetic**: Clean layout, massive sharp `Inter` typography for headers, and a stark, highly-technical rotating 3D Security Shield visualization.
- **The 3D-Flip Entrance Effect**: 
- A dedicated utility class `.flip-3d` handles the entrance animation on the hero elements.
- The parent containers establish a 3D context using the `perspective` property (`perspective: 1500px` on the body and `1000px` on the content column).
- The initial state of the elements is pushed backward and flipped 90 degrees flat on the X-axis (`transform: rotateX(90deg) translateZ(-50px)`).
- When triggered, an `@keyframes` animation (`flip-3d-entrance`) rotates the elements up to `rotateX(0deg)` while fading to `opacity: 1`. 
- The "snapping" feel is entirely driven by a complex `cubic-bezier(0.175, 0.885, 0.32, 1.275)` timing function, which allows the flip to wobble slightly past 0 degrees before settling.
- **Continuous 3D Visual**: The right-side visual element features two dashed rings rotating continuously in 3D space (`transform-style: preserve-3d` with `rotateX`, `rotateY`, and `rotateZ` keyframes) around a solid center icon, providing a highly technical aesthetic without JS canvas libraries.
- **Cascading Delays**: We utilize staggered `animation-delay` utility classes (`.delay-1` through `.delay-5`) incremented by `0.15s`. This ensures the elements flip up sequentially, creating a satisfying domino effect.
- **State Management (Demo)**: The demo uses a hidden checkbox hack (`<input type="checkbox">`) to allow users to toggle the animation state to replay the entrance effect without needing to refresh the page.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the 3D flipping and continuous ring rotations are completely disabled, safely falling back to a static 3D pose and a simple, immediate opacity cross-fade entrance.

## Usage
Open `demo.html` in your browser. You will see a mock Zero Trust Security hero section. Upon load, the typographic elements and the security shield will flip upright sequentially from a flat plane. You can click the "Reload Hero Section" button to immediately re-trigger the sequence.

## Files
- `demo.html`: The HTML structure for the hero section, detailing the application of the `.flip-3d` and staggered `.delay-*` utility classes.
- `style.css`: The styling, minimalist tech design tokens, the required `perspective` rules to establish the 3D space, the continuous 3D rotation keyframes for the visual, and the staggered keyframe delays driving the flipping entrance.
