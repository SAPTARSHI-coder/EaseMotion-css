# Responsive Navbar: Dark Mode

A highly polished, JavaScript-free navigation bar featuring a premium dark mode aesthetic, a morphing hamburger menu, and smooth responsive dropdown mechanics.

## Features
- Pure CSS and HTML implementation. The mobile menu toggle and animations are managed entirely through the "Checkbox Hack".
- **Component Architecture & Styling Mechanics**: 
  - **Hamburger to X Morph**: The mobile menu button is drawn using a single `span` for the middle line and `::before`/`::after` pseudo-elements for the top and bottom lines. When the hidden `<input type="checkbox">` is checked, the CSS adjacent sibling selector (`~`) triggers the animation. The middle line turns transparent (`background-color: transparent`), while the top and bottom lines translate and rotate 45 degrees to perfectly form an 'X'.
  - **Responsive Dropdown**: On mobile, the navigation links stack vertically. Instead of a jarring display toggle, the menu's height smoothly transitions from `0` to its full height using a snappy `cubic-bezier` timing function, providing a premium slide-down effect.
- **Theming**: Configured via CSS Custom Properties. The palette features a sophisticated "Slate" dark theme (Slate 900 background, Slate 800 nav container) with a vibrant Blue 500 (`#3b82f6`) accent color for the active state and CTA button. The nav container itself features a subtle `backdrop-filter: blur(8px)` to allow background content to slightly bleed through when scrolling.
- Fully accessible semantic structure. Uses `<nav>` and standard lists. The hamburger label uses `aria-label="Toggle Navigation"` for screen readers. Honors the `prefers-reduced-motion` accessibility standard by disabling the morphing and sliding animations if requested by the OS.

## Usage
Open `demo.html` in your browser. On a desktop screen, you will see a sleek top navigation bar with horizontal links. Resize your browser window to a mobile width (below 768px) to see the hamburger menu appear. Click the hamburger to watch it seamlessly morph into an 'X' while the dark-themed links slide down in a smooth dropdown animation.

## Files
- `demo.html`: The HTML structure defining the semantic nav, the checkbox hack, and the SVG brand icon.
- `style.css`: The styling, the `backdrop-filter` glass properties, the complex `transform` math for the morphing icon, and the responsive dropdown logic.
