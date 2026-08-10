# CSS Skew-Active Accordion (Minimalist Tech)

A pure CSS accordion component designed for Minimalist Tech Layouts. It utilizes the radio button hack for state management (allowing only one section to be open at a time). When activated, the inner content block resolves a dynamic `skewX` transformation, creating a slick, modern entrance.

## Features
- Pure CSS and HTML (No JavaScript required).
- State management handled completely via hidden `<input type="radio">` buttons and the `~` general sibling selector.
- The accordion layout features an accented left border that expands slightly and changes color when hovered or activated.
- Content expands via a `max-height` transition on the wrapper, followed by a slightly delayed `transform: skewX()` and `translateX()` transition on the `.skew-element` content block, creating a snappy, technical entrance.
- Active panels gain a teal accent background that seamlessly connects the header and the content area.
- Fully responsive layout utilizing the 'Space Grotesk' font family.
- Fully accessible with `prefers-reduced-motion` support ensuring degraded, safe static layouts for users sensitive to motion.

## Usage
Open `demo.html` in your browser. Click any of the accordion headers. The accordion will open, the header background will change color, and the inner content will snap into place from a skewed, shifted angle. Selecting another item will automatically close the currently active one.

## Files
- `demo.html`: The HTML structure for the accordion, utilizing hidden radio buttons for mutually exclusive state management, and nested content blocks for the skew effect.
- `style.css`: The styling, flexbox layouts, and CSS `transition` logic for the skew-active content effects.
