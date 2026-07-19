# CSS 3D Flip Popover (Product Catalog Aesthetics)

This example demonstrates how to create a crisp, pure CSS animated Popover tailored for E-commerce Product Catalogs. It leverages the latest web platform features such as the Native Popover API, CSS Anchor Positioning, and `@starting-style`.

## Features
- **Pure CSS**: Fully functional interactivity and rich animations without a single line of JavaScript.
- **Native Popover API**: Built on top of the native HTML `<div popover>` standard, yielding built-in accessibility, light-dismiss, and top-layer management.
- **Anchor Positioning API**: The popover is dynamically anchored to its trigger (`Quick Add` button) using pure CSS (`position-anchor`), eliminating the need for absolute positioning hacks.
- **3D Flip Transition**: A sharp, clean flip entry mapped to a 3D perspective, matching the fast and utilitarian feel of e-commerce layouts.
- **E-commerce Aesthetics**: Incorporates clean lines, neutral colors, sharper corners, and utilitarian UI patterns (like size selection grids).
- **Fully Customizable**: Timing, easing curves, angles, and colors are all exposed via well-documented CSS Custom Properties (Variables).

## Custom Properties Configuration
You can easily tweak the flip animation behavior via these exposed CSS custom properties:
```css
:root {
  --popover-flip-duration: 0.6s;
  --popover-flip-easing: cubic-bezier(0.25, 1, 0.5, 1);
  --popover-flip-perspective: 1000px;
  --popover-flip-start-angle: -90deg;
  --popover-flip-start-scale: 1;
  --popover-flip-start-opacity: 0;
}
```

## Browser Support
This demo uses the latest CSS features. For the full experience, it relies on:
- **Popover API** (Baseline Support across modern browsers)
- **CSS `@starting-style` & `allow-discrete`** (Supported in Chrome 117+, Edge 117+, Firefox 129+, Safari 17.4+)
- **CSS Anchor Positioning API** (Supported in Chrome 125+, Edge 125+)
