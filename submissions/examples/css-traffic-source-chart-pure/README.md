# CSS Traffic Source Chart

A hardware-accelerated, JavaScript-free horizontal bar chart component that natively animates data visualization on page load.

## Features
- Pure CSS and HTML implementation. No charting libraries (like Chart.js) or inline SVG manipulations are required.
- **Component Architecture**: 
  - **Data-Driven CSS Variables**: The core magic lies in the inline CSS Custom Property injected into the HTML (`<li style="--percent: 45%;">`). This elegantly passes the data value directly to the CSS engine without requiring JavaScript DOM manipulation.
  - **Load Animation**: The `.bar-fill` element uses an `@keyframes` animation (`fill-bar`) that transitions its `width` from `0%` to `var(--percent)`. This creates a smooth, native slide-in effect when the component mounts.
  - **Staggered Cascade**: By using the `:nth-child()` pseudo-selector, staggered `animation-delay`s are applied to each row. This results in a beautiful cascading load effect where the bars slide in sequentially from top to bottom.
- **Theming**: Configured via CSS Custom Properties. The palette utilizes a clean, professional dashboard aesthetic with distinct color classes (`.color-primary`, `.color-secondary`, etc.) for categorizing data. Fully supports automatic OS-level Dark Mode via `@media (prefers-color-scheme: dark)`.
- Fully accessible semantic structure. The main chart container uses `role="region"` and an `aria-label` for screen reader context. The data itself is cleanly structured as an unordered list (`<ul>`). Honors the `prefers-reduced-motion` accessibility standard by disabling the load animation and instantly rendering the bars at their final widths if requested by the OS.

## Usage
Open `demo.html` in your browser. Upon loading, watch the horizontal bars smoothly expand from `0%` to their designated percentage widths in a staggered, cascading sequence. To update the data, simply change the `--percent: X%;` inline style in the HTML, and the CSS will automatically handle the animation to the new value.

## Files
- `demo.html`: The HTML structure defining the semantic list, the inline CSS variables for the data values, and the label layouts.
- `style.css`: The styling, the `@keyframes` animation utilizing the `--percent` variable, and the `:nth-child` staggered delay logic.
