# Dashboard Interface Tada-Click Accordion

This submission resolves issue #33005.

## Features
- **Dashboard Interface Theme**: Specifically designed as a sidebar navigation menu for an admin dashboard. The design uses dark mode aesthetics with muted text, glowing active states, and small, compact layouts suited for sidebars.
- **Component Structure**: A nested unordered list (`<ul>`/`<li>`) structure mimicking a real dashboard sidebar, completely different from standalone accordions. State is toggled via JS adding an `expanded` class to the `<li>`.
- **Animation**: Implements the `ease-click-tada` animation. When a user clicks a sidebar category to expand it, the text performs a "tada" bounce, providing engaging interaction feedback within the dashboard context.

## File Structure
- `demo.html`: The HTML layout using semantic navigation lists.
- `style.css`: Dashboard-focused dark styling and the custom Tada keyframes for interaction.
