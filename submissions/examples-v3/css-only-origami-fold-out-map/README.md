# CSS-Only Origami Fold-Out Map

## What does this do?
This adds a highly advanced 3D folding UI component. Using a hidden checkbox hack (`<input type="checkbox">` + `<label>`), it simulates an interactive paper map folding and unfolding using sequential CSS `rotateY` transforms and `transform-origin` pivots. 

## How is it used?
Copy the `.scene` container and its contents. The logic is driven entirely by the `:checked` pseudo-class interacting with the general sibling combinator `~`. No JavaScript is required. You can place any content (like an actual SVG map or images) inside the `.map-content` divs.

## Why is it useful?
Complex 3D nesting (panels inside panels) demonstrates the limits of CSS `transform-style: preserve-3d`. It provides a stunning, high-performance micro-interaction for landing pages or digital brochures without relying on heavy WebGL or JavaScript animation libraries.
