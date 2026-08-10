# CSS Rotate-Click Popover (Product Catalog Aesthetics)

This example demonstrates how to create a highly polished, pure CSS animated Popover featuring a smooth Rotate-Click interaction transition. It leverages the latest web platform features such as the Native Popover API, CSS Anchor Positioning, and `@starting-style`.

## Features
- **Pure CSS**: Fully functional interactivity and rich animations without a single line of JavaScript.
- **Native Popover API**: Built on top of the native HTML `<div popover>` standard, yielding built-in accessibility, light-dismiss, and top-layer management.
- **Anchor Positioning API**: The popover is dynamically right-anchored to its trigger using pure CSS (`position-anchor`), aligning cleanly with the "Sort & Filter" button.
- **Rotate-Click Transition**: Combining `scale()` and `rotate()` with a bouncy `cubic-bezier` creates a dynamic swinging effect, making the popover feel like it hinges on its top-right corner.
- **Catalog Aesthetics**: Designed for modern e-commerce product catalogs featuring minimalist radio buttons, a clean typography hierarchy, and a sticky footer for applying filters.
- **Fully Customizable**: Timing, easing curves, start angles, and scale factors are all exposed via well-documented CSS Custom Properties (Variables).

## Custom Properties Configuration
You can easily tweak the rotation animation behavior via these exposed CSS custom properties:
```css
:root {
  --popover-rotate-duration: 0.4s;
  --popover-rotate-easing: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --popover-start-angle: 15deg;
  --popover-start-scale: 0.9;
  --popover-start-opacity: 0;
}
```

## Browser Support
This demo uses the latest CSS features. For the full experience, it relies on:
- **Popover API** (Baseline Support across modern browsers)
- **CSS `@starting-style` & `allow-discrete`** (Supported in Chrome 117+, Edge 117+, Firefox 129+, Safari 17.4+)
- **CSS Anchor Positioning API** (Supported in Chrome 125+, Edge 125+)
