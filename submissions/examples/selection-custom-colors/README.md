# ::selection Custom Colors

## Description
Demonstrates the `::selection` pseudo-element with per-element-type highlight colors. Headings use teal, paragraphs use purple (with an amber variant for alternates), code blocks use green, and list items use cyan — all against the dark theme background. A global fallback provides the default blue selection for untyped elements.

## Usage
Open `demo.html` and select text across different sections to see unique color combinations per element type. Each section includes headings, paragraphs, code, or lists with their own `::selection` rules defined in the stylesheet.

## Browser Support
`::selection` is supported in all modern browsers (Chrome 1+, Firefox 1+, Safari 1.3+, Edge 12+, Opera 10+). Note that Firefox requires the `::-moz-selection` prefix (included in the stylesheet as needed). The `prefers-reduced-motion` query disables all transitions for accessibility.
