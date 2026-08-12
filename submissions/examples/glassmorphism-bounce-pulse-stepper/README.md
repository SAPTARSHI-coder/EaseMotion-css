# CSS Bounce-Pulse Stepper (Glassmorphism UI)

A pure CSS interactive stepper component designed for Glassmorphism UI Layouts. It features a highly physical "Bounce-Pulse" animation system, where the active node scales up elastically and emits continuous, staggered radar pulses.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- **Glassmorphism Aesthetic**: The main container (`.glass-card`) utilizes `backdrop-filter: blur(16px)` layered over glowing, ambient background orbs (`.bg-orb`).
- **State Management**: The entire flow of the multi-step form is managed via the hidden radio button hack (`<input type="radio">`). The "Next Step" and "Back" buttons in the panels are `<label>` elements wired to these hidden inputs.
- **The Bounce-Pulse Effect**: 
- **Active State**: The current active node physically scales up using a custom bouncy easing curve (`transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)`). 
- Additionally, two `.node-pulse` ring elements located behind the node trigger a continuous `@keyframes` animation (`pulse-ring`), expanding outward and fading out to simulate a radar ping. The second ring utilizes an `animation-delay` to create a staggered, continuous double-pulse effect.
- **Completed State**: Nodes sequentially *before* the active node transition into a "Completed" state. The node background solidifies, the number scales down to nothing, and a checkmark icon bounces into view using the same elastic cubic-bezier easing.
- **Animated Progress Line**: The connecting line between nodes (`.stepper-progress`) animates its width smoothly (`transition: width 0.5s cubic-bezier`) based on the currently active step.
- **Content Panels**: The actual form panels (`.step-panel`) utilize CSS opacity, visibility, and a subtle scaling transformation (`transform: scale(0.95)` to `scale(1)`) to elegantly pop in and out as the user navigates.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the continuous pulse rings are removed (`display: none`), the elastic bouncing is stripped, the progress line updates instantly, and the content panels cross-fade without the scaling transformation.

## Usage
Open `demo.html` in your browser. You will see a mock Server Deployment flow. Use the "Next Step" or "Back" buttons inside the panels to navigate. You can also click directly on the numbered step nodes at the top. Observe how the active node bounces into an enlarged state and begins emitting continuous radar pulses, while previously completed nodes seamlessly swap their numbers for checkmarks.

## Files
- `demo.html`: The HTML structure for the layout, detailing the complex `<input type="radio">` setup and the nested `.node-pulse` rings required for the radar effect.
- `style.css`: The styling, glassmorphism tokens, and the complex CSS sibling selector logic (`~`) driving the active/completed states, the bounce bezier curves, and the `pulse-ring` keyframes.
