# Zoom Image Example

## Description
A standard HTML/CSS example demonstrating a "Zoom" hover effect on an image. The image is contained within a wrapper that has `overflow: hidden`. On hover, the image scales up (`transform: scale()`), creating a smooth zooming effect that stays within the bounds of the original image area. Commonly used on product cards or gallery thumbnails.

## Files
- `demo.html`: The markup containing the image wrapper and the image itself.
- `style.css`: Uses CSS transitions on `transform` applied to the inner image.

## Accessibility
- Wrapper is focusable (`tabindex="0"`) and has an `aria-label`.
- Focus is indicated clearly with `:focus-visible` on the wrapper.
- **Reduced Motion**: Disables the scaling transformation completely. Falls back to a subtle brightness change on hover to ensure interaction feedback remains without jarring motion.
