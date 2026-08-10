# CSS Countdown Flip Tiles

A pure CSS mechanical flip-card countdown animation utilizing CSS 3D transforms (`rotateX`) and keyframes.

## Features
- Pure CSS and HTML (Zero JavaScript required for the mechanical flip animation).
- **Theming & Dark Mode**: Utilizes CSS Custom Properties (`--card-bg`, `--card-text`, etc.) for easy overriding. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`).
- **3D Transform Mechanics (Documented in Code)**: 
- The flip effect is achieved by splitting each number card into two halves: top and bottom.
- `perspective: 1000px;` is applied to the container to give the flip a realistic 3D depth.
- `transform-origin: bottom;` and `transform-origin: top;` are used so the halves swing from the center hinge.
- `backface-visibility: hidden;` ensures that when a half flips over past 90 degrees, it disappears naturally rather than showing backwards text.
- **Keyframe Choreography**: The top half rotates from 0 to -90 degrees over the first 50% of the animation. The bottom half starts at 90 degrees (invisible) and rotates to 0 degrees over the second 50% of the animation, creating a seamless mechanical flip.
- Fully accessible with `prefers-reduced-motion` support. The continuous animations are disabled for motion-sensitive users.

## Usage
Open `demo.html` in your browser. You will see a mechanical flip clock with a seconds card flipping continuously every 1 second, and a minutes card flipping every 60 seconds, demonstrating the pure CSS animation loop.

## Files
- `demo.html`: The HTML structure detailing the top/bottom halves of the mechanical cards.
- `style.css`: The styling, CSS Custom Property theming blocks, and heavily commented keyframe logic for the 3D transforms.
