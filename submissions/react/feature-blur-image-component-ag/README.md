# Blur Image Component (React)

## Description
A React component that displays an image with a smooth blur-in entrance animation as it loads. The image starts heavily blurred and slightly scaled up, resolving to a clear, unscaled state once the browser finishes downloading it. This provides a polished, modern loading experience often seen on platforms like Medium or modern portfolios.

## Files
- `BlurImageAG.jsx`: The React component tracking the `onLoad` event to trigger the animation class.
- `style.css`: The CSS transitions for `filter` (blur) and `transform` (scale).

## Accessibility
- Passes through `alt` text to the native `<img>` element.
- **Reduced Motion**: Disables the blur and scale transitions, replacing them with a simple opacity fade when the image loads.
