# Print-Optimized Loader Component

A collection of animated loader/spinner components with print media query optimization. All loaders are hidden when printing to save ink.

## Files

- `demo.html` - Loader demos with print optimization
- `style.css` - Loader styling with @media print rules

## Usage

Open `demo.html` in a browser to see the animated loaders. Use Ctrl+P (Cmd+P on Mac) to see loaders hidden in print mode.

## What This Does

Adds print media query optimization to loader components, hiding all loader variants (spin, pulse, ping, dots) when printing to save ink and prevent unnecessary elements from appearing on paper.

## Why Useful

Loader animations are purely decorative and serve no purpose on printed pages. Hiding them saves ink and produces cleaner printed output.

Closes #48281
