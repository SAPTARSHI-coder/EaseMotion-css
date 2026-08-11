# CSS Ribbon Nav Bar

A horizontal navigation bar designed to look like a folded ribbon wrapping around its container, using advanced CSS border triangles and pseudo-elements.

## Features
- Pure CSS and HTML implementation without any JavaScript or SVG images.
- **Component Architecture**: 
  - **Negative Margins**: The `.ribbon-nav` is given a negative left and right margin (e.g., `-20px`), pulling it outside the bounds of its parent `.content-block`.
  - **The Border Triangle Trick**: We use `::before` and `::after` on the navigation wrapper to create BOTH the hanging tail AND the dark folded shadow triangle simultaneously using massive CSS borders. By setting `border-width: 15px 20px 20px 20px` and carefully assigning colors to the top and side borders while leaving the others `transparent`, we can instantly slice a perfect "v-shape" tail and a folded shadow corner in one single CSS rule.
  - **Z-Index Layering**: The pseudo-elements are pushed behind the main bar using `z-index: -1`, completing the illusion that the ribbon wraps around the back of the content container.
- **Theming & Dark Mode**: Configured via CSS Custom Properties. Automatically respects the OS-level system theme (`prefers-color-scheme: dark`), adapting the ribbon colors, shadows, and content backgrounds.
- Fully accessible semantic structure. The component uses a `<nav>` element with a proper `aria-label`, an unordered list (`<ul>`), and anchor links (`<a>`). It fully supports keyboard navigation and focus states.

## Usage
Open `demo.html` in your browser to view the folded ribbon navigation component.

## Files
- `demo.html`: The HTML structure defining the content container and the navigation list.
- `style.css`: The styling, negative margins, and the `::before`/`::after` border geometry tricks.
