# CSS Pendulum Clock

A classic grandfather-style clock featuring a swinging pendulum and a ticking second hand, animated entirely with CSS keyframes.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture**: 
  - **The Swinging Pendulum**: The core physics of the pendulum is achieved using `transform-origin: top center;` combined with an `@keyframes` animation rotating between `12deg` and `-12deg`. The animation timing function uses `ease-in-out` to perfectly simulate gravity—slowing down the pendulum at the apex of its swing before falling back down.
  - **The Ticking Second Hand**: The red second hand simulates a mechanical watch movement. Instead of a smooth rotation, it utilizes the CSS `steps()` timing function (`animation: tick 60s steps(60) infinite`). This forces the hand to jump rigidly into 60 distinct positions over the course of 60 seconds.
  - **The Geometry & Depth**: The clock housing is constructed using pure CSS borders and gradients to simulate polished dark wood (`linear-gradient`) and heavy brass (`radial-gradient` on the pendulum bob). Heavy inset box-shadows are used inside the clock body to simulate a hollowed-out interior cavity.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), subtly darkening the wood and background colors.
- Fully accessible semantic structure. The animated decorative elements are hidden from screen readers using `aria-hidden="true"`, and the clock container includes an `aria-label`. Honors the `prefers-reduced-motion` accessibility standard by freezing the swinging and ticking animations for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the ticking pendulum clock animation.

## Files
- `demo.html`: The HTML structure defining the clock face, hands, and the hollowed body housing the pendulum.
- `style.css`: The styling, geometry rendering, and the physics keyframes for the pendulum and hands.
