# ease-chip Focus Outline Fix

### Issue Description
The `ease-chip` component suffers from a clipping issue where its focus ring (outline or box-shadow) is cut off if placed inside a container with `overflow: hidden` or `overflow: auto`. This degrades the accessibility experience. (Issue #59746)

### Solution
This example demonstrates a fix by ensuring the focus ring is contained within the element's bounding box. We achieve this by using `outline-offset: -2px` on the `:focus-visible` pseudo-class.

### Usage
Open `demo.html` in your browser and use the `Tab` key to focus the chip. You'll observe that the focus ring is completely visible and not clipped by the parent container.
