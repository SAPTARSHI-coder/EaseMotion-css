# CSS Shimmer-Sweep Stepper (Glassmorphism UI)

A pure CSS interactive stepper component designed for Glassmorphism UI Layouts. It utilizes a continuous, metallic "Shimmer-Sweep" animation on active nodes to draw the user's attention, simulating a holographic or premium material reflection.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- **Glassmorphism Aesthetic**: The main container (`.glass-card`) utilizes `backdrop-filter: blur(16px)` layered over softly glowing, ambient background orbs (`.bg-orb`).
- **State Management**: The entire flow of the multi-step form is managed via the hidden radio button hack (`<input type="radio">`). The action buttons in the panels are simply `<label>` elements wired to these hidden inputs.
- **The Shimmer-Sweep Effect**: 
- We use a layered approach for the step nodes. The node base (`.node-bg`) provides the solid color/blur. On top of that, but behind the number/checkmark, we place a `.shimmer-overlay` element.
- The overlay is scaled to 200% size, rotated 45 degrees, and filled with a stark white, metallic linear gradient. 
- When a node becomes **Active**, the overlay triggers a continuous `@keyframes` animation (`sweep-shimmer`) that translates it vertically across the node. Because the parent node uses `overflow: hidden`, the sweep appears as a sharp metallic reflection traveling across the circle.
- **Completed State**: Nodes sequentially *before* the active node transition into a "Completed" state. The `.node-bg` solidifies to the gold accent color, the number shrinks away, and a checkmark icon morphs into view. The shimmer animation stops.
- **Animated Progress Line**: The connecting line between nodes (`.stepper-progress`) animates its width smoothly based on the currently active step.
- **Content Panels**: The actual form panels (`.step-panel`) utilize CSS opacity, visibility, and a combination of `filter: blur(8px)` and `transform: scale(0.95)` to smoothly fade and focus into view as the user navigates.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the continuous shimmer sweeps, scanning mockups, smooth width transitions, and spatial/blur panel sliding are disabled, safely falling back to immediate state changes and basic opacity cross-fades.

## Usage
Open `demo.html` in your browser. You will see a mock Product Authentication flow. Use the action buttons inside the panels to navigate, and observe how the active step node continuously reflects a sharp, metallic shimmer sweep.

## Files
- `demo.html`: The HTML structure for the layout, detailing the complex `<input type="radio">` setup and the layered `.shimmer-overlay` elements.
- `style.css`: The styling, glassmorphism tokens, and the complex CSS sibling selector logic (`~`) driving the active/completed states and the `sweep-shimmer` metallic reflection keyframes.
