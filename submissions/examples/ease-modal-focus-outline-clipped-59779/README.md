# Fix: ease-modal focus outline is clipped by parent overflow

### Description
The `ease-modal` component suffers from a clipping issue where its focus ring (outline or box-shadow) is cut off if placed inside a container with `overflow: hidden` or `overflow: auto`. This degrades the accessibility experience.

### Expected Behavior
The focus ring should be fully visible, either by using a negative outline offset or an inset box-shadow, so it is contained within the element's bounding box and avoids clipping from a parent container.

### Implementation
- `style.css`: Uses `outline-offset: -2px` on `:focus-visible` to ensure the focus outline is rendered inward and is not clipped by any parent `overflow` container.
- `demo.html`: Demonstrates the `ease-modal` component inside an `overflow: hidden` wrapper.

### Testing
Open `demo.html` in a browser and press `Tab` to focus the modal. Verify that the focus outline is completely visible and not truncated.
