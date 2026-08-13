# CSS Morph-Glow Stepper (Glassmorphism UI)

A pure CSS interactive stepper component designed for Glassmorphism UI Layouts. It features a polished "Morph-Glow" animation system, where state transitions (Inactive -> Active -> Completed) are handled via smooth morphing keyframes and ambient pulsing glows.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- **Glassmorphism Aesthetic**: The main container (`.glass-card`) utilizes `backdrop-filter: blur(16px)` layered over softly glowing, ambient background orbs (`.bg-orb`).
- **State Management**: The entire flow of the multi-step form is managed via the hidden radio button hack (`<input type="radio">`). The "Next" and "Back" buttons in the panels are simply `<label>` elements wired to these hidden inputs.
- **The Morph-Glow Effect**: 
- Based on which radio button is currently checked, the CSS `~` sibling selector determines the state of every node in the stepper.
- **Active State**: The current active node physically scales up (`transform: scale(1.15)`). Additionally, a `.node-glow` layer located behind the node content fades in and triggers a continuous `@keyframes` animation (`glow-pulse`), creating an ambient, breathing halo effect around the active step.
- **Completed State**: Any nodes sequentially *before* the active node transition into a "Completed" state. The node background solidifies, the number fades out and shrinks (`transform: scale(0.5)`), and a checkmark icon morphs into view (`opacity: 1`, `transform: scale(1)`).
- **Animated Progress Line**: The connecting line between nodes (`.stepper-progress`) animates its width smoothly (`transition: width 0.5s cubic-bezier`) based on the currently active step.
- **Content Panels**: The actual form panels (`.step-panel`) utilize CSS opacity, visibility, and vertical translation to smoothly slide in and out as the user navigates the steps.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the pulsing glow animation stops, the progress line updates instantly, and the content panels fade without the spatial translation.

## Usage
Open `demo.html` in your browser. You will see a mock e-commerce checkout flow. Use the "Proceed", "Back", or "Continue" buttons inside the panels to navigate. You can also click directly on the numbered step nodes at the top. Observe how the active node pulses with a glowing halo, while previously completed nodes seamlessly morph their numbers into checkmarks.

## Files
- `demo.html`: The HTML structure for the layout, detailing the complex `<input type="radio">` setup required to handle both direct node navigation and in-panel relative navigation without JavaScript.
- `style.css`: The styling, glassmorphism tokens, and the complex CSS sibling selector logic (`~`) driving the active/completed states and the `glow-pulse` keyframes.
