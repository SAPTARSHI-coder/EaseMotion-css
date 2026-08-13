# CSS Loader: Foucault Pendulum Swing

A classic physics-inspired loader utilizing 3D transform origins and sweeping cubic-bezier arcs to simulate gravity and precession.

## Features
- Pure CSS and HTML implementation without any JavaScript or physics engines.
- **Component Architecture**: 
  - **The Pendulum**: The `.pendulum-system` consists of a string line and a circular bob. It utilizes `transform-origin: top center` to create a hinge at the very top of the string.
  - **The Gravity Swing**: A custom `cubic-bezier(0.4, 0, 0.2, 1)` easing curve is applied to a `rotateZ` keyframe animation (`@keyframes gravity-swing`). This perfectly simulates the physics of a pendulum—it moves fastest at the bottom of the arc and slows down/hovers momentarily at the peaks before falling back down.
  - **The Foucault Precession**: To make it a true Foucault pendulum, the parent `.pendulum-wrapper` container slowly rotates in 3D space (`rotateY(360deg)` over 20 seconds). This simulates the Earth rotating beneath the swinging pendulum, adding a beautiful, slow, three-dimensional depth to the loader.
  - **Reactive Ground Shadow**: A soft, blurred `.ground-shadow` sits below the pendulum. Its `@keyframes shadow-track` animation perfectly matches the cubic-bezier timing of the gravity swing, translating back and forth across the ground. It scales up and becomes darker when the bob is closest to the ground (the center), and shrinks/fades as the bob swings up and away.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. The component adapts cleanly to the OS-level system theme (`prefers-color-scheme: dark`), shifting the string, bob, and shadow to appropriate high-contrast variations for dark backgrounds.
- Fully accessible semantic structure. The decorative pendulum elements are hidden from screen readers using `aria-hidden="true"`, and the loader container provides an `aria-label` detailing the loading status. Honors the `prefers-reduced-motion` accessibility standard by freezing all rotations, locking the pendulum into a static pose slightly off-center for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the foucault pendulum swing loading animation.

## Files
- `demo.html`: The HTML structure defining the 3D wrapper, the pendulum system (string + bob), and the ground shadow.
- `style.css`: The styling, the `transform-origin` hinge, the physics-based `cubic-bezier` gravity swing, and the slow Foucault precession keyframes.
