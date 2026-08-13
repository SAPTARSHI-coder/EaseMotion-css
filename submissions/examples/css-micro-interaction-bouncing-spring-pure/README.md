# CSS Micro-interactions: Bouncing Spring

A collection of hardware-accelerated, JavaScript-free micro-interactions focused on elastic, bouncy physics using custom CSS `cubic-bezier` timing functions.

## Features
- Pure CSS and HTML implementation. No external animation libraries (like Framer Motion or GSAP) or JavaScript required.
- **Component Architecture**: 
  - **Elastic Press Button**: An interactive button that provides satisfying tactile feedback. It utilizes `box-shadow` for depth. Crucially, the `:active` state (when the mouse button is held down) uses a fast `ease` transition to instantly compress the button down. The default state, however, has a heavy `cubic-bezier` transition. This means when the user *releases* the click, the button springs back up past its original height and settles down, mimicking real-world elasticity.
  - **Bouncy Notification Badge**: A notification bell with a badge that pops in on hover. It uses a `@keyframes` animation (`spring-pop`) triggered by hovering the parent container. The keyframes explicitly define the scale bounces (e.g., `1` -> `1.4` -> `0.85` -> `1.15` -> `1`) combined with a spring easing function, creating a complex decaying bounce effect.
  - **Spring-Loaded Card**: A dramatic hover effect. On `:hover`, the card scales up, translates up, and slightly rotates. The magic is in the `--spring-wobbly` cubic-bezier (`cubic-bezier(0.68, -0.55, 0.265, 1.55)`), which has negative values (causing anticipation before the movement) and values > 1 (causing overshoot at the end of the movement).
- **Theming**: Configured via CSS Custom Properties. The physics engines (the `cubic-bezier` functions) are stored as variables at the top of the file, allowing you to easily reuse the exact spring tension across multiple elements.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling all bouncy transforms and keyframe animations for users who prefer less motion, replacing them with simple color/opacity changes or no transitions at all.

## Usage
Open `demo.html` in your browser to view the gallery of micro-interactions. Click and hold the "Click Me" button to see the squish, then release to see the spring. Hover the notification bell and the card to see the overshoot animations.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for each of the 3 bouncy micro-interactions.
- `style.css`: The styling, the complex `cubic-bezier` physics definitions, the `@keyframes` bouncing logic, and the transition handling for `:active` vs default states.
