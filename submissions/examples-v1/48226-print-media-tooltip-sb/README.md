# Print-Optimized Tooltip Component

Tooltip components with print media query optimization. Tooltips are hidden when printing.

## Files

- `demo.html` - Tooltip demos with print optimization
- `style.css` - Tooltip styling with @media print rules

## Usage

Open `demo.html` in a browser and hover over buttons to see tooltips. Use Ctrl+P (Cmd+P on Mac) to see tooltips hidden in print mode.

## What This Does

Adds print media query optimization to tooltip components, hiding all tooltip text when printing. Tooltips are purely informational overlays that don't need to appear on printed pages.

## Why Useful

Tooltips are hover-triggered overlays that serve no purpose when printed. Hiding them produces cleaner output and saves ink.

Closes #48226
