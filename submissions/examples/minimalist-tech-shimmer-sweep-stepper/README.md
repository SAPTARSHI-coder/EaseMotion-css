# CSS Shimmer-Sweep Stepper (Minimalist Tech)

A pure CSS stepper component designed for Minimalist Tech Layouts. It features entirely JavaScript-free state management and a dynamic "Shimmer-Sweep" animation that continuously plays across the currently active step node to draw user focus.

## Features
- Pure CSS and HTML (Zero JavaScript required for state or animations).
- **Minimalist Tech Aesthetic**: Clean layout, distinct semantic colors (Emerald for completed, Blue for active), sharp `Inter` typography, and smooth transitions between states.
- **Pure CSS State Management**: 
- Utilizes the "Radio Button Hack". A group of radio buttons (`name="step-demo"`) controls the simulation state.
- Depending on which radio button is checked (`#state-1`, `#state-2`, `#state-3`), CSS sibling selectors (`~`) dynamically update the width of the progress bar (`0%`, `50%`, `100%`) and change the colors and content of specific nodes.
- When a node transitions from "Active" to "Completed", the step number fades out and a checkmark smoothly scales into view (`transform: scale(1)`).
- **The Shimmer-Sweep Animation System**: 
- A purely decorative pseudo-element (`::before`) is placed on `.node-indicator`. 
- By default, it is hidden (`display: none`). 
- When a node becomes "Active" (based on the radio state logic), the pseudo-element is set to `display: block` and an infinite `@keyframes` animation (`sweep`) is applied.
- The animation sweeps a skewed, semi-transparent white linear gradient across the node from left to right, creating a looping, physical "shimmering" effect that highlights the current step in the pipeline.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the continuous shimmer animation is completely disabled. The smooth progress bar transitions and bouncy checkmark scale effects are also removed, snapping instantly between states instead.

## Usage
Open `demo.html` in your browser. You will see a mock "Deployment Pipeline" stepper. Use the control buttons at the top to toggle between the Build, Testing, and Deployment phases. Notice how the progress bar smoothly connects the nodes, completed nodes animate a checkmark, and the currently active node features a continuous shimmering highlight.

## Files
- `demo.html`: The HTML structure for the stepper, detailing the crucial radio button setup for CSS state management, the background track, and the individual step nodes.
- `style.css`: The styling, tech design tokens, the complex state logic driven by `:checked ~` selectors, and the specific `@keyframes` driving the infinite shimmer-sweep loop on active nodes.
