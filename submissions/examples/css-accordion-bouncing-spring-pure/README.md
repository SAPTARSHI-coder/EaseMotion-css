# CSS Accordion: Bouncing Spring

A hardware-accelerated, JavaScript-free accordion interface featuring playful, physics-based elastic bouncing animations and dynamic icon morphing.

## Features
- Pure CSS and HTML implementation. The accordion expand/collapse mechanism relies entirely on the CSS Checkbox Hack (`:checked ~`), eliminating the need for JavaScript state management.
- **Component Architecture**: 
  - **The Checkbox Hack Mechanics**: Hidden `<input type="checkbox">` elements control the state of each accordion item individually (allowing multiple to be open). The visible headers are `<label>` elements linked to these inputs.
  - **Bouncing Spring Physics**: The core of this aesthetic is driven by a custom CSS timing function: `--bounce-curve: cubic-bezier(0.68, -0.55, 0.265, 1.55)`. Notice that the Y values drop below 0 and exceed 1. This tells the browser to mathematically overshoot the target values before snapping back.
  - **Max-Height Bounce Transition**: The `.acc-content-wrapper` hides the panel content by default using `max-height: 0`. When the accordion is opened, the `max-height` transitions to `300px` using the `--bounce-curve`. This causes the panel to seemingly spring open past its final height, then bounce back up into place.
  - **Icon Morphing & Physical Lift**: When activated, the entire `.accordion-item` container lifts up slightly (`transform: translateY(-2px)`). The `+` icon undergoes a complex, spring-loaded transformation: its wrapper rotates 180 degrees while overshooting, and the vertical bar of the `+` rotates 90 degrees to lay flat, morphing seamlessly into a `-` symbol.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes a clean, modern aesthetic with indigo (`#5c6bc0`) and coral (`#ff7043`) accents. Fully supports automatic OS-level Dark Mode via `@media (prefers-color-scheme: dark)`.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard. If reduced motion is requested, all bouncy transforms, rotations, and sliding transitions are disabled, falling back to instant state switching to prevent discomfort.

## Usage
Open `demo.html` in your browser. Click any of the accordion headers (Hooke's Law, Elastic Potential Energy). Notice the extreme physical overshoot as the content panel slides down, the entire container lifting off the page, and the `+` icon spinning and snapping into a `-` symbol.

## Files
- `demo.html`: The HTML structure defining the checkbox hack inputs, the accordion headers, the custom icon wrapper, and the content containers.
- `style.css`: The styling, the `cubic-bezier` physics configuration, the `max-height` transition logic, and the icon rotation/morphing mechanics.
