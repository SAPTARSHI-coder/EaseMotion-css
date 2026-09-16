# Origami Fold Dropdown Menu

A 3D dropdown menu where items fold down one by one, like an accordion or origami paper.

## Preview
Open `demo.html` in your browser. Hover over the "Menu" button and watch the items swing down into place sequentially.

## Implementation
- The `.dropdown` container applies `perspective` to create the 3D space.
- Each link `.item` defaults to `transform: rotateX(-90deg)` (folded up out of view) and `transform-origin: top center` (hinged at the top).
- On `:hover` of the parent, they rotate down to `0deg`.
- The sequential staggered effect is achieved efficiently using a CSS variable `style="--i:1;"` in the HTML, multiplied by `0.1s` in the CSS `transition-delay`.
