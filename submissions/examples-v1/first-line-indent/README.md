# ::first-line Indent

## Description
Demonstrates the `::first-line` pseudo-element to style the first line of each paragraph with distinct typography — serif font, gold color, increased letter-spacing, and text indentation. A companion section uses a `<span>`-based approach to highlight the limitations of HTML-level first-line styling when the viewport resizes.

## Usage
Open `demo.html` in any modern browser. Resize the window to observe how `::first-line` reflows correctly while the `<span>`-based simulation does not. The page uses a dark theme with a maximum-width container for comfortable reading.

## Browser Support
`::first-line` is supported in all modern browsers, including Chrome 1+, Firefox 1+, Safari 1+, Edge 12+, and Opera 7+. The `<span>` comparison works universally. The `prefers-reduced-motion` media query disables all transitions and animations for users who request reduced motion.
