# Focal-Point CSS Utility Demo

This directory contains a utility demo for implementing custom image focal points using the modern native CSS property `object-view-box` tailored for **EaseMotion**.

## Features Demonstrated
- **Focal Region Cropping**: Focuses on specified regions (`top-left`, `center`, `bottom-right`) without altering structural HTML markup or utilizing complex wrapper trickery.
- **EaseMotion Design Integration**: Implements the native design system's border-radius and box-shadow design tokens seamlessly on interactive card layouts.

## Files Structure
- `demo.html` - The markup playground hosting the component instances.
- `style.css` - Custom utility configurations utilizing modern CSS `object-view-box: rect()`.
- `README.md` - Documentation of the utility implementation.

## Browser Support Note
The `object-view-box` property is highly efficient but native to Chromium-based browsers (Chrome, Edge, Opera). Ensure testing is verified on standard supported environments.