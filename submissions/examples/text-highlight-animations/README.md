# Text Selection & Highlight Animations

A collection of pure CSS typographic emphasis effects. These micro-interactions help guide users' eyes to important links, keywords, or contextual information within dense text blocks.

## Features
- **Marker Sweep**: Simulates a physical highlighter pen swiping across the text. Built using a pseudo-element (`::before`) layered beneath the text via `z-index: -1` and animated using `transform: scaleX()`.
- **Underline Reveal**: A clean, expanding underline perfect for inline hyperlinks. Uses `transform-origin: left` to draw the line organically outward.
- **Custom Native Selection**: Uses the `::selection` pseudo-selector to override the browser's default highlight color (usually blue) with a branded color, ensuring the text remains legible when selected by the user.

## Usage
Open `demo.html` in your browser.
- Hover over the "magic marker sweep" text to see the yellow highlight grow.
- Hover over the "smooth underline reveal" text to see the blue stroke expand.
- Click and drag your mouse across the final paragraph to see the custom purple `::selection` highlight.

## Files
- `demo.html`: The HTML structure applying the highlight classes to `<span>` tags.
- `style.css`: The styling rules defining the GPU-accelerated `scaleX()` transitions.
