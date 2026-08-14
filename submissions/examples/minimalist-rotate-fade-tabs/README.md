# CSS Rotate-Fade Tabs (Minimalist Tech)

A pure CSS interactive tabs component designed for Minimalist Tech Layouts. It features a sophisticated "Rotate-Fade" transition on the content panels, treating them as 3D cards that hinge into view.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- **State Management**: The active tab and corresponding panel are managed entirely via the hidden radio button hack (`input[type="radio"]:checked`).
- **The Rotate-Fade Transition**: The `.tab-content-wrapper` establishes a 3D context using `perspective: 1000px`. 
- By default, `.tab-panel` elements are hidden: `opacity: 0`, scaled down slightly, and rotated backwards (`rotateX(-15deg)`). They hinge from their center using `transform-origin: center center`.
- When a tab is activated (its associated radio button is `:checked`), the corresponding panel transitions to full opacity, `scale(1)`, and `rotateX(0deg)`. 
- We utilize a highly bouncy custom `cubic-bezier(0.175, 0.885, 0.32, 1.275)` transition. This forces the panel to rotate slightly past `0deg` before settling, creating a snappy, physical "flip-up" feel as it fades in.
- **Icon Animations**: The SVG icons within the tab labels also receive a subtle rotation and scale effect when their tab becomes active, adding a layer of polish to the interaction.
- Clean, structured aesthetic utilizing the `Inter` font, subtle rounded borders, and heavily stylized mock data layouts (metrics grids, bar charts, and data lists).
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the 3D rotation, scaling, and bouncy cubic-bezier animations (on both the panels and the icons) are completely disabled. The interactions safely fall back to an immediate opacity cross-fade.

## Usage
Open `demo.html` in your browser. You will see a mock data analytics dashboard. Click between the "Overview", "Audience", and "Acquisition" tabs. Watch as the active tab icon playfully rotates, and the new data panel hinges forward into view from a 3D rotated state with a satisfying, bouncy snap.

## Files
- `demo.html`: The HTML structure for the layout, detailing the critical placement of the hidden `<input type="radio">` elements and the complex mock data components required for the showcase.
- `style.css`: The styling, radio-state logic, `perspective` settings, and the custom bouncy transitions driving the 3D panel mechanics.
