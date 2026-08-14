# ease-scroll-image-compare-slider-sap

A before/after image comparison slider. Dragging the handle (backed by a native `<input type="range">` for accessibility/touch support) reveals more or less of the "before" image layered on top of the "after" image.

## Usage
1. Copy `style.css` into your project.
2. Copy the `.compare-slider-sap` markup from `demo.html`, swapping in your own before/after images (same dimensions recommended).
3. Include the `input` listener script from `demo.html` — dragging position requires JS to resize the before-image clip width; CSS handles layout/visuals.

## Customization
- Adjust `width: 480px` / `aspect-ratio` on `.compare-slider-sap` to resize.
- Restyle `.compare-slider-sap__handle` and its `::after` circle for a different handle look.

## Accessibility
Uses a real `<input type="range">` (visually hidden but interactive) so it's keyboard-operable and works with assistive tech, rather than a custom pointer-only drag handle.

## Browser support
All modern browsers.