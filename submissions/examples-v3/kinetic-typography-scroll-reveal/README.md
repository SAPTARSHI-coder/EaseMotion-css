# Kinetic Typography Scroll Reveal

## What does this do?
This adds a highly advanced Kinetic Typography effect. It morphs, stretches, and skews text dynamically while simultaneously filling the text stroke with solid, vibrant colors using pseudo-elements and infinite CSS keyframes.

## How is it used?
Copy the `kinetic-wrapper` container. Set the text you want to animate inside the `<h1>` and ensure the `data-text` attribute exactly matches the text content (this is required for the pseudo-element overlay). The CSS handles all the transformations and coloring.

## Why is it useful?
Kinetic typography is a massive trend in brutalist and modern web design, usually requiring heavy WebGL or GSAP libraries. This pure CSS approach achieves a similar high-impact visual effect (variable font mimicking via `scaleX`/`scaleY` and `skewX`) with absolute minimal performance overhead.
