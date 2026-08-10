# CSS Spotlight Button

A pure CSS implementation of a cursor-tracking spotlight glow. Achieved entirely without JavaScript by utilizing an invisible CSS Grid of hover targets to calculate approximate cursor position.

## Features
- Pure CSS and HTML.
- **Theming & Dark Mode**: Utilizes CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), generating a deep slate dark mode aesthetic that makes the cyan spotlight glow stand out.
- **Component Architecture (Documented in Code)**: 
  - **The Grid Hover Hack**: Because pure CSS cannot read raw mouse `(x, y)` coordinates, we have to simulate tracking. We do this by creating a wrapper and defining a 3x3 CSS Grid over it.
  - **The Invisible Zones**: We fill the grid with 9 invisible `<div>` elements (`.hover-zone`). Because they sit on top of the button via `z-index`, they intercept the mouse hover events.
  - **The Sibling Selector (`~`)**: When the user hovers over a specific zone (e.g., `.zone-tc` for top-center), we use the general sibling combinator to find the button element that comes after it in the DOM, and then target the `.spotlight-glow` element inside that button.
  - **The Movement**: Depending on which zone is hovered, we apply a specific `transform: translate()` calculation to the glow element, shifting it smoothly to that quadrant using a `cubic-bezier` transition. 
- Fully accessible semantic structure. The button itself is a native `<button>` element with an explicit `aria-label`, ensuring keyboard focus and screen reader compatibility are maintained despite the hacky overlay grid. The purely visual spotlight element is hidden from screen readers via `aria-hidden="true"`. Honors the `prefers-reduced-motion` accessibility standard by disabling the movement tracking for motion-sensitive users, falling back to a static, centered glow on hover.

## Usage
Open `demo.html` in your browser and move your cursor across the surface of the button to observe the glowing spotlight smoothly following your mouse position.

## Files
- `demo.html`: The HTML structure demonstrating the 9-zone layout and sibling DOM order required for the hack to function.
- `style.css`: The styling, Grid setup, and the extensive matrix of `~` selectors mapping zones to translation coordinates.
