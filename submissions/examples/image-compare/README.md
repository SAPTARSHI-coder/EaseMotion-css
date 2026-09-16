# Pure CSS Before/After Image Comparison Slider

Resolves Issue #59860.

This submission provides an elegant and lightweight image comparison slider component.

## Implementation Details
- Relies on CSS `clip-path` and a custom CSS variable (`--slider-value`) to crop the "After" image dynamically.
- Uses a visually hidden HTML `<input type="range">` overlaid on top of the images. This provides native, accessible touch and mouse dragging interactions for free.
- The range slider updates the CSS variable using a tiny inline `oninput` handler (`this.parentNode.style.setProperty(...)`), completely avoiding external JS script files or complex event listeners.
- The visual handle and thumb circle are entirely rendered using the `.ease-image-compare::before` and `::after` pseudo-elements.

## Included Files
- `style.css`: The stylesheet defining the component layout, clipping, and custom handle rendering.
- `demo.html`: A functional example demonstrating the slider on an actual image.

## Integration
Once the core engine contribution freeze is lifted, `style.css` can be seamlessly integrated into the `easemotion/components` directory.
