# CSS Skew-Active Tabs (Minimalist Tech)

A pure CSS interactive tabs component designed for Minimalist Tech Layouts. It features a unique "Skew-Active" background indicator that physically deforms and wobbles as it slides between active tab states, creating a playful "jelly" effect.

## Features
- Pure CSS and HTML (No JavaScript required for state management or animations).
- State management is natively handled via the hidden radio-button hack (`input[type="radio"]:checked` paired with `<label>`), allowing the tabs to switch content panels instantly.
- **The Skew-Active Effect**: The `.skew-indicator` element provides a background highlight for the active tab. It utilizes CSS `transform: translateX()` to slide horizontally to the correct position based on which radio button is checked.
- To achieve the "jelly" wobble without JavaScript tracking the direction of the click, a clever CSS architecture is used. The `.skew-indicator` handles the translation, while an internal `::before` pseudo-element handles the deformation.
- Whenever a tab is clicked, the general sibling combinator triggers a `jelly-skew` `@keyframes` animation on the `::before` element. This animation temporarily warps the box using `skewX` and `scaleX`, creating the illusion of momentum and inertia before snapping back to `0deg`.
- Clean, structured aesthetic utilizing the `Inter` font, subtle borders, and a cohesive form layout within the tab panels.
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the horizontal sliding transition and the physical skew deformation are completely stripped. The interaction gracefully falls back to a safe, immediate opacity crossfade for the active indicator.

## Usage
Open `demo.html` in your browser. You will see a mock system configuration panel. Click the different tab headers ("General", "Network", "Security"). Watch as the background indicator block slides to the new active tab, stretching and skewing like jelly as it moves before settling into place. The content panels below will update simultaneously.

## Files
- `demo.html`: The HTML structure for the layout, detailing the critical `<input type="radio">` grouping required for the CSS-only tab switching.
- `style.css`: The styling, tab panel visibility logic, and the complex combination of `transform: translateX()` and `@keyframes jelly-skew` driving the animated mechanics.
