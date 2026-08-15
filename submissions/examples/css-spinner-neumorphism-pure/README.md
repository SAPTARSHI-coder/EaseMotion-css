# Spinner: Neumorphism

A pure CSS loading indicator featuring a soft, extruded aesthetic utilizing Neumorphic design principles and multi-layered CSS box shadows.

## Features
- Pure CSS and HTML implementation. No JavaScript, SVGs, or external libraries required.
- **Component Architecture & Styling Mechanics**: 
  - **Neumorphic Base**: The core of Neumorphism is setting the background color of the element to exactly match the background color of its container (`--base-color: #e0e5ec;`). The shape is entirely defined by manipulating shadows.
  - **The Outset Base**: The outer `.neumorphic-spinner` wrapper uses a dual `box-shadow` (one dark shadow on the bottom right, one light shadow on the top left) to create the illusion of a raised, extruded circular button.
  - **The Inset Core**: The inner `.spinner-inner` uses a dual `inset box-shadow` to create the illusion of a carved-out hole in the center of the raised button, resulting in a physical-looking ring.
  - **The Animated Indicator**: Sandwiched between the outset base and the inset core (managed via `z-index`) is the `.spinner-indicator`. This layer utilizes a `conic-gradient` with a sharp blue accent color that sweeps into transparency. Because the inset core is layered on top, the conic gradient is masked, turning it into a spinning track. An `::after` pseudo-element provides a bright, glowing, rounded cap to the leading edge of the spin.
- Fully accessible semantic structure. The wrapper uses `aria-busy="true"` and `aria-label="Loading data"` to properly notify screen readers. Honors the `prefers-reduced-motion` accessibility standard by disabling the high-speed rotation and instead rendering a static blue ring if requested by the OS.

## Usage
Open `demo.html` in your browser. You will see a soft, clay-like loading spinner tracking smoothly within its track.

## Files
- `demo.html`: The HTML structure defining the layers required to achieve the neumorphic sandwich effect.
- `style.css`: The styling, the critical `box-shadow` configurations, and the `z-index` layering logic.
