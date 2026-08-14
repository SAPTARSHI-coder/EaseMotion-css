# Fix: ease-code-inline Focus Outline Clipped (#59750)

## Description
The `ease-code-inline` component previously suffered from a clipping issue where its focus ring (outline) was cut off when placed inside a container with `overflow: hidden` or `overflow: auto`. This degraded the accessibility experience.

## Fix Applied
This submission demonstrates how to fix the focus ring clipping by applying a negative `outline-offset` when the `ease-code-inline` element is focused. This ensures the focus ring is contained within the element's bounding box and remains fully visible, even inside overflow containers.

## Files Included
- `demo.html`: Contains both the original (buggy) behavior and the fixed behavior for side-by-side comparison.

## How to Test
1. Open `demo.html` in your browser.
2. Use the keyboard (`Tab`) to focus the first `code-inline` component. Notice the focus ring is clipped.
3. Press `Tab` again to focus the second (fixed) `code-inline` component. The focus ring should be fully visible and unclipped.
