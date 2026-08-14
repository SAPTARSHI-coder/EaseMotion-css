# CSS Skew-Active Feature Grid (Minimalist Tech)

A pure CSS interactive feature grid component designed for Minimalist Tech Layouts. It features a highly engaging "Skew-Active" hover state, where a subtle, angled structural block sweeps across the card's background to indicate interactivity, mimicking modern technical interfaces.

## Features
- Pure CSS and HTML (No JavaScript required for interactions or animations).
- **Minimalist Aesthetic**: Clean layout, sharp `Inter` typography, and distinct accent-colored icon boxes over a sterile `f8fafc` background.
- **The Skew-Active Hover Effect**: 
- A dedicated utility class `.skew-active` handles the interaction styling on the `.feature-card` elements.
- The effect utilizes a pseudo-element (`::before`) acting as a background layer that starts positioned entirely off-screen to the left (`left: -100%`).
- We apply `transform: skewX(-15deg)` to this pseudo-element to create a sharp, diagonal leading edge.
- When the user hovers over the card, the pseudo-element smoothly translates across the card (`transform: translateX(110%) skewX(-15deg)`), filling the background with a subtle hover color while maintaining its skewed structure. 
- By using a pseudo-element positioned *behind* the text (`z-index: 0`), the text itself remains perfectly legible and unskewed, providing a professional technical aesthetic.
- **Synchronized Micro-Interactions**: Alongside the background sweep, hovering the card also triggers a slight physical lift (`translateY(-4px)`), scales up the icon box slightly (`scale(1.1)`), and slides the directional arrow to the right (`translateX(5px)`).
- Fully accessible with `prefers-reduced-motion` support. For motion-sensitive users, the skewed background sweep, card lift, and micro-interactions are completely disabled, safely falling back to a simple, static background color change on hover.

## Usage
Open `demo.html` in your browser. You will see a mock Network Topology grid. Move your mouse over the feature cards. Observe how the angled background block swiftly sweeps across the card, accompanied by the synchronized micro-interactions of the icon, arrow, and card shadow.

## Files
- `demo.html`: The HTML structure for the grid, detailing the application of the `.skew-active` utility class.
- `style.css`: The styling, minimalist tech design tokens, and the complex `::before` pseudo-element logic driving the angled `skewX` background sweep.
