# Ease Checkbox Focus Outline Fix (#59744)

This example provides a solution for issue #59744, where the focus outline of the `ease-checkbox` component gets clipped when placed inside a container with `overflow: hidden` or `overflow: auto`.

## The Problem

By default, the CSS `outline` property draws outside the element's bounding box. If a parent container has `overflow: hidden`, any part of the outline that extends beyond the parent's bounds will be clipped, resulting in a degraded accessibility experience.

## The Solution

To ensure the focus ring is always fully visible, we can use one of the following approaches:

1. **Inset `box-shadow`**: By using an `inset` box-shadow, the focus ring is drawn *inside* the element's bounding box, preventing it from ever being clipped by a parent.
2. **Negative `outline-offset`**: By setting a negative `outline-offset`, we can pull the standard outline inside the element's bounding box.

This example implements the inset `box-shadow` approach as the primary solution, but the negative `outline-offset` alternative is also provided in the CSS comments.
