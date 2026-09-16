# CSS Scale-Hover Stepper (Glassmorphism UI)

A pure CSS interactive stepper component designed for Glassmorphism UI Layouts. It focuses on micro-interactions, specifically a clean "Scale-Hover" effect combined with a glowing interaction ring, making the nodes feel tactile and responsive.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- **Glassmorphism Aesthetic**: The main container (`.glass-card`) utilizes `backdrop-filter: blur(16px)` layered over softly glowing, ambient background orbs (`.bg-orb`).
- **State Management**: The entire flow of the multi-step form is managed via the hidden radio button hack (`<input type="radio">`). The "Continue" and "Back" buttons in the panels are simply `<label>` elements wired to these hidden inputs.
- **The Scale-Hover Effect**: 
- **Hover State**: When a user hovers over an interactive node, it smoothly scales up (`transform: scale(1.15)`) while slightly brightening. Simultaneously, a `.hover-ring` element behind the node scales up and fades in, providing a larger click target and a satisfying visual anchor.
- **Active State**: The current active node remains scaled up (`scale(1.1)`) with a persistent, glowing border and active pink drop shadow.
- **Completed State**: Nodes sequentially *before* the active node transition into a "Completed" state. The node background solidifies, the number shrinks away, and a checkmark icon morphs into view. Hover rings are forcibly disabled on completed nodes via CSS.
- **Animated Progress Line**: The connecting line between nodes (`.stepper-progress`) animates its width smoothly (`transition: width 0.5s cubic-bezier`) based on the currently active step.
- **Content Panels**: The actual form panels (`.step-panel`) utilize CSS opacity, visibility, and a subtle horizontal sliding transformation (`transform: translateX(20px)` to `translateX(0)`) to gracefully slide in as the user navigates the steps.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the scale hovering, smooth width transitions, and spatial panel sliding are disabled, safely falling back to immediate state changes and opacity cross-fades.

## Usage
Open `demo.html` in your browser. You will see a mock User Onboarding flow. Hover your mouse over the step nodes at the top to experience the tactile scale-hover interaction ring. Use the "Continue" or "Back" buttons inside the panels to navigate, and observe how the panels slide in horizontally while the progress bar smoothly updates its width.

## Files
- `demo.html`: The HTML structure for the layout, detailing the complex `<input type="radio">` setup and the nested `.hover-ring` elements.
- `style.css`: The styling, glassmorphism tokens, and the complex CSS sibling selector logic (`~`) driving the active/completed states and the hover micro-interactions.
