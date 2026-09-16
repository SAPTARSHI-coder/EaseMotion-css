# CSS Loader: Velvet Smooth Transition

A luxurious, ultra-soft loading animation relying on heavily blurred, slow-spinning gradients and custom cubic-bezier easing to simulate flowing liquid velvet.

## Features
- Pure CSS and HTML implementation without any JavaScript or canvas rendering.
- **Component Architecture**: 
  - **The Masked Container**: The `.velvet-wrapper` is a circular div with `overflow: hidden;`. It acts as a viewport into the swirling colors inside, keeping the loader cleanly constrained.
  - **The Velvet Orbs**: Inside the wrapper sit three oversized `.velvet-orb` divs. They are intentionally larger than the container so their edges are never visible. They are assigned irregular border radii (e.g., `40% 60% 70% 30%`) so they are not perfect circles.
  - **Extreme Blurring**: The core "velvet" texture is achieved by applying an extreme `filter: blur(20px)` to the orbs. This destroys any hard edges, causing the deep ruby, plum, and gold colors to bleed into one another seamlessly.
  - **Liquid Animation**: The `@keyframes velvet-flow` animation rotates the irregular orbs slowly over a long duration (12-15 seconds), translating and scaling them slightly. Because the shapes are irregular and spinning at different speeds/directions, the blurred colors constantly wash over each other in an unpredictable, liquid-like manner.
  - **Premium Easing**: The animations utilize a buttery-smooth custom timing function (`cubic-bezier(0.4, 0, 0.2, 1)`) rather than a standard `linear` loop, ensuring the movement feels graceful, heavy, and organic.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The deep jewel tones of the velvet effect are heavily optimized for dark mode backgrounds (`--loader-bg: #09090b;`), where the rich colors provide maximum visual impact.
- Fully accessible semantic structure. The decorative orbs are hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing all rotations, locking the orbs into a static, beautiful, blurred gradient mesh for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the velvet smooth transition loading animation.

## Files
- `demo.html`: The HTML structure defining the masked wrapper and the three internal velvet orbs.
- `style.css`: The styling, the extreme `filter: blur()` logic, the irregular `border-radius`, and the slow `cubic-bezier` rotation keyframes.
