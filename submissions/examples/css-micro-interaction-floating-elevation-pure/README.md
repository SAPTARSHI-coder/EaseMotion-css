# CSS Micro-interactions: Floating Elevation

A collection of hardware-accelerated, JavaScript-free micro-interactions focused on depth, Z-axis movement, and physical elevation shadows.

## Features
- Pure CSS and HTML implementation. Heavily relies on Material Design principles for drop shadows.
- **Component Architecture**: 
  - **Levitating Button**: A button that provides physical feedback on hover and press. It uses a base shadow (`--shadow-2`). On `:hover`, it translates upward (`transform: translateY(-6px)`) and the shadow expands and blurs (`--shadow-4`), creating the illusion of moving closer to the user. On `:active`, it pushes down past its resting state (`transform: translateY(2px)`) and the shadow tightens (`--shadow-1`).
  - **Elevated Focus Card**: A larger container element that uses the same elevation physics. When hovered or when a child element receives focus (`:focus-within`), the card lifts off the page, drastically increasing its `box-shadow` depth. This is a common and highly effective pattern for indicating interactivity on cards.
  - **Hover Bobbing Icon**: An infinite floating animation triggered by hover. This utilizes two `@keyframes` animations running simultaneously. The `.icon-bob` element translates up and down on the Y-axis. The `.bob-shadow` element (a blurred oval positioned underneath) scales down and decreases in opacity as the icon moves higher, accurately simulating a light source casting a shadow from above.
- **Theming**: Configured via CSS Custom Properties. Includes a robust 5-tier elevation shadow system (`--shadow-1` through `--shadow-5`) that automatically adjusts its opacity for Dark Mode via a `@media (prefers-color-scheme: dark)` query. Dark mode shadows must be darker and slightly larger to be visible against dark backgrounds.
- Fully accessible semantic structure. Honors the `prefers-reduced-motion` accessibility standard by disabling all `transform` transitions and floating keyframe animations for users who prefer less motion, while keeping the interactive color/shadow changes.

## Usage
Open `demo.html` in your browser to view the gallery of micro-interactions. Hover over the button and the card to see the Z-axis elevation, and hover over the icon to trigger the continuous bobbing physics.

## Files
- `demo.html`: The HTML structure defining the layout grid and the markup for each of the 3 elevation micro-interactions.
- `style.css`: The styling, the Material Design drop shadow system, the dark mode media queries, and the `@keyframes` logic for the bobbing shadow sync.
