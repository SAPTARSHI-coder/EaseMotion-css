# CSS Split Typography Section

A dramatic hero section featuring large typography that dynamically inverts its color as it spans across a split two-column background layout.

## Features
- Pure CSS and HTML implementation.
- **Component Architecture**: 
  - **The Split Background**: Instead of using complex grid structures to color the left and right sides of the screen independently, the `.split-typography-section` uses a single `linear-gradient` background with a hard color stop at exactly 50% (`linear-gradient(to right, black 50%, white 50%)`).
  - **The Blend Mode Magic**: The typography and paragraph text is placed directly over this split background. By setting the text color to `#ffffff` and applying `mix-blend-mode: difference`, the browser mathematically inverts the text color based on whatever pixels are directly behind it. 
    - Over the dark background (black), white - black = white text.
    - Over the light background (white), white - white = black text.
  - This eliminates the need for duplicated text layers with `overflow: hidden`, which is the traditional, messy way of achieving this effect.
- **Responsive Behavior**: On mobile screens (`max-width: 768px`), the horizontal split layout naturally becomes too cramped. The CSS automatically rotates the background gradient to split vertically (`to bottom`), and collapses the paragraph text into a single column stack, maintaining the dramatic split typography effect across the horizontal axis instead.
- Fully accessible semantic structure. Standard `<section>`, `<h1>`, and `<p>` tags are used. Honors the `prefers-reduced-motion` accessibility standard by freezing the typography slide-in animation for motion-sensitive users.

## Usage
Open `demo.html` in your browser to view the split typography effect. Resize the window to see how it cleanly adapts to mobile portrait orientations.

## Files
- `demo.html`: The HTML structure defining the section container, the heading, and the two-column grid.
- `style.css`: The styling, the 50% linear-gradient, and the `mix-blend-mode` rules.
