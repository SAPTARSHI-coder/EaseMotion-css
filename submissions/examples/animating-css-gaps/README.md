# Animating CSS Gaps

A modern CSS interaction pattern demonstrating how to natively animate the `gap` property in Flexbox and Grid layouts, completely eliminating the need for messy negative-margin hacks or JavaScript layout thrashing.

## Features
- **The Historical Context**: For years, `gap` (or `grid-gap`) was considered an un-animatable CSS property. If you tried to transition it, the browser would simply instantly snap from the starting value to the ending value. To simulate a fluidly expanding grid, developers had to use complex systems involving transitioning `margin` on all child items while wrapping the grid in a container with negative margins to hide the overflow.
- **The Modern Pattern**: Browsers engines have successfully implemented layout interpolation algorithms. You can now simply declare `transition: gap 0.5s ease;` and the browser will natively mathematically interpolate the spacing between every row and column simultaneously!

## Usage
Open `demo.html` in a modern browser (Chrome 107+, Safari 16.4+, Firefox 116+). 
- Hover anywhere inside the dashed boundary of the grid container.
- Watch as all 9 items push away from each other simultaneously, fluidly animating the internal gutter size from `8px` to `32px` with a slight spring bounce effect (`cubic-bezier`).
- If you run this in an outdated browser, it will safely degrade by simply snapping the gap to 32px instantly without breaking the layout.

## Files
- `demo.html`: The HTML structure demonstrating a standard 3x3 CSS grid.
- `style.css`: The styling engine containing the native `transition: gap` logic.
