# CSS Grid `grid-template-rows` Accordion Animation

This submission solves one of the oldest problems in CSS: smoothly animating an element from a height of `0` to its intrinsic height (`height: auto`). 

## Features

- **No JavaScript Math**: Traditional accordions required JavaScript to calculate the pixel height of the expanded content before animating, or they relied on a hacky `max-height` transition that felt unnatural. This utility animates `height: auto` natively.
- **CSS Grid Magic**: By wrapping the content in an element with `display: grid` and transitioning `grid-template-rows` from `0fr` to `1fr`, the browser natively interpolates the expansion.
- **Overflow Protection**: The inner content block utilizes `overflow: hidden` to ensure content does not spill out during the `0fr` collapsed state.
- **Accessibility**: Reverts to instantaneous toggling if the user prefers reduced motion.

## Usage

1. Include `style.css` in your project.
2. Structure your HTML with three main components: the trigger, the `.em-accordion-wrapper`, and the `.em-accordion-content`.
3. Add the `.is-open` class to the `.em-accordion` parent container (or use a native `<details>` element) to trigger the expansion.
