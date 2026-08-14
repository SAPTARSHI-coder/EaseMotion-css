# CSS Neumorphism: Floating Elevation

A collection of hardware-accelerated, JavaScript-free Neumorphic (soft UI) components focusing on floating elevations and physical press states, with full support for Dark Mode.

## Features
- Pure CSS and HTML implementation. The interactions rely entirely on CSS `:hover`, `:active`, and the checkbox hack (`:checked ~`), avoiding any JavaScript state management.
- **Component Architecture**: 
  - **Elevated Card**: A standard container demonstrating high floating elevation. It uses a very large spread on two opposite `box-shadow` properties (one light for the highlight, one dark for the shadow). On `:hover`, the card physically compresses toward the surface by transitioning both the `transform: translateY()` and reducing the spread of the `box-shadow` simultaneously. It also features a recessed icon container using `inset` box-shadows.
  - **Action Button**: An interactive button that transitions smoothly between physical states. In its resting `.floating` state, it casts an outward shadow. On `:hover`, it lifts slightly. On `:active` (click/press), it transitions to deep `inset` shadows, making it look physically depressed into the screen material.
  - **Floating Switch**: A toggle control utilizing the CSS checkbox hack. The `.neu-track` acts as a trench using `inset` shadows, while the `.neu-handle` is a distinct floating element with standard drop shadows. Clicking toggles the state, sliding the handle smoothly using a bouncy `cubic-bezier` transition.
- **Theming**: Configured via CSS Custom Properties (`--bg-base`, `--shadow-light`, `--shadow-dark`). The CSS includes automatic Dark Mode support via `@media (prefers-color-scheme: dark)`, which swaps the background and shadow variables to darker, lower-contrast tones suitable for dark neumorphism.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling the physical press transitions, hover compressions, and bouncy switch slides for users who prefer less motion, ensuring the UI remains usable as static elements.

## Usage
Open `demo.html` in your browser to view the gallery of neumorphic elements. You can toggle the demo's Dark Mode switch to see how the CSS variables instantly adapt the shadows. Hover over the Elevated Card to see it compress, press and hold the Action Button to see the physical inset state, and click the Floating Switch to toggle the sliding handle.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for the 3 neumorphic variations (including the dark mode toggle demo).
- `style.css`: The styling, the complex `box-shadow` combinations (inset and drop shadows), the CSS Custom Property theme switching logic, and the transition mechanics.
