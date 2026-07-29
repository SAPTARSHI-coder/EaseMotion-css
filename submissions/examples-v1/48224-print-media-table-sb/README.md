# Print-Optimized Table Component

Table component with print media query optimization. Tables render with borders and simplified styling when printed.

## Files

- `demo.html` - Table demo with print optimization
- `style.css` - Table styling with @media print rules

## Usage

Open `demo.html` in a browser to see the styled table. Use Ctrl+P (Cmd+P on Mac) to see simplified print styling.

## What This Does

Adds print media query optimization to table components:
- Ensures table fits on printed page
- Adds borders for readability
- Simplifies badges to bordered elements
- Removes hover backgrounds

## Why Useful

Tables with colored cells and shadows don't print well. This optimization ensures tables render as clean, readable data tables on paper.

Closes #48224
