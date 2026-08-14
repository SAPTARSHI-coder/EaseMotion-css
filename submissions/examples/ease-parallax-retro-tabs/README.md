# Parallax Tab Bar with Retro Styling

## Abstract
The Parallax Retro Tab Bar component delivers a high-impact, cyber-brutalist interactive tabbed interface built purely with HTML5 and CSS3. Combining 2.5D brutalist design primitives (hard drop shadows, high-contrast neon palettes, monospace typography) with true CSS 3D perspective transforms, it provides a tactile spatial parallax experience upon hover without relying on JavaScript event listeners.

## Brutalist 3D Mechanics
The component creates depth through a multi-layered 3D spatial hierarchy:
- **Perspective Context**: The main wrapper (`.ease-retro-wrapper`) defines a 3D view space (`perspective: 1200px`).
- **Container Tilt**: The inner container (`.ease-retro-container`) utilizes `transform-style: preserve-3d` to rotate on hover (`rotateX(15deg) rotateY(-10deg)`), tilting the layout.
- **Extruded Elements**: Hard offset shadows (`box-shadow: 6px 6px 0px #00f3ff`) create a classic brutalist 2.5D outline, while `translateZ(40px)` physically pulls active tabs out toward the camera along the Z-axis.
- **CRT Overlay**: Content panels feature a pseudo-element (`::after`) with dual linear gradients creating hardware-accelerated scanline and RGB shadow effects.

## Zero-JS State Management
State control is achieved entirely in CSS using hidden `<input type="radio">` radio controllers paired with the general sibling combinator (`~`):
- Tab selections trigger active styles on corresponding `<label>` elements via `#rtab-x:checked ~ .ease-retro-container .ease-retro-header [for="rtab-x"]`.
- Panel visibilities and spatial transitions (`transform: translateZ(0) translateY(0)`, `opacity: 1`) are toggled via `#rtab-x:checked ~ .ease-retro-container .ease-retro-content-wrapper .r-panel-x`.
