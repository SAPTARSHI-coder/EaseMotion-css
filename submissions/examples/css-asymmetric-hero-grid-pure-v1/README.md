# CSS Asymmetric Hero Grid

A hardware-accelerated, JavaScript-free hero section layout demonstrating the power of CSS Grid for creating complex, masonry-style asymmetric designs that remain perfectly responsive.

## Features
- Pure CSS and HTML implementation. The entire layout and responsive reflow logic is handled by CSS Grid.
- **Component Architecture**: 
  - **Asymmetric Grid Foundation**: The `.hero-grid` container is defined with 4 equal columns (`repeat(4, 1fr)`) and 3 rows with specific fraction distributions (`0.8fr 1.2fr 1fr`). This unequal row height distribution immediately creates an asymmetric baseline.
  - **Grid Spanning Mechanics**: Individual children are explicitly placed using `grid-column` and `grid-row`. 
    - The `.main-content` spans columns 1-2 and rows 1-2.
    - The `.img-tall` spans column 3 and drops all the way from row 1 to row 3, creating a strong vertical element.
    - The `.img-wide` spans column 4 and rows 1-2.
    - The `.img-square` tucks into columns 1-2 on row 3, beneath the main text.
  - **Responsive Reflow**: Media queries elegantly redefine the grid structure. At Tablet breakpoints (`1024px`), the grid transforms into a 2-column layout, and the `grid-column`/`grid-row` assignments of the children are updated to stack nicely. At Mobile breakpoints (`600px`), it seamlessly collapses into a standard 1-column stack.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes a stark, modern, high-contrast aesthetic with vibrant gradient placeholders. Fully supports automatic OS-level Dark Mode via `@media (prefers-color-scheme: dark)`.

## Usage
Open `demo.html` in your browser. Note the complex, staggered layout on desktop. Resize your browser window horizontally to observe how the CSS Grid elegantly reflows the content into a 2-column tablet layout, and finally into a 1-column mobile stack, ensuring perfect legibility at all screen sizes.

## Files
- `demo.html`: The HTML structure defining the hero grid container and its uniquely styled child items.
- `style.css`: The styling, the `grid-template-areas` / span definitions, the hover animations, and the responsive media queries.
