# Grid Auto-Fit vs Auto-Fill

A visual CSS layout pattern that clarifies and resolves one of the most commonly misunderstood CSS Grid layout bugs: why responsive grid items unexpectedly stretch or leave awkward blank whitespace on wide screens.

## Features
- **The Bug Context**: Developers often write `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))` expecting a responsive, flexible grid. However, if the container is 1000px wide and there are only 2 items, the items will stay squished at 200px each, leaving 600px of awkward blank space on the right side of the screen. 
- **The Core Difference**: 
  - **`auto-fill`**: Fills the row with as many columns as it can fit. If you only have a few items, it creates invisible "ghost" columns to fill the rest of the space. Your items won't stretch because the space is occupied by ghost columns.
  - **`auto-fit`**: Creates the columns, but then mathematically collapses any completely empty columns down to 0px width. The `1fr` property then tells the browser to distribute the remaining free space to the existing items, making them stretch beautifully to fill the entire container.
- **The Fix**: In 95% of UI responsive card layouts, developers actually want `auto-fit`, not `auto-fill`.

## Usage
Open `demo.html` in your browser. 
- Ensure your browser window is wide (at least 800px).
- Look at the **Auto-Fill** grid. Notice how the two items are bunched up on the left side, leaving a huge empty void on the right.
- Look at the **Auto-Fit** grid. Notice how the two items dynamically stretch to divide the full width of the container evenly. 
- Slowly resize your browser window to make it narrow, and watch how both grids flawlessly wrap the items to the next row when they hit their `150px` minimum threshold.

## Files
- `demo.html`: The HTML structure demonstrating the side-by-side grid comparison.
- `style.css`: The styling engine contrasting `auto-fill` with `auto-fit`.
