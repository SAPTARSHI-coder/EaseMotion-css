# CSS Scale-Hover Popover (E-Commerce Checkout Aesthetics)

This example demonstrates how to create a highly polished, pure CSS animated Popover featuring a smooth Scale-Hover interaction transition. It leverages the latest web platform features such as the Native Popover API, CSS Anchor Positioning, and `@starting-style`.

## Features
- **Pure CSS**: Fully functional interactivity and rich animations without a single line of JavaScript.
- **Native Popover API**: Built on top of the native HTML `<div popover>` standard, yielding built-in accessibility, light-dismiss, and top-layer management.
- **Anchor Positioning API**: The popover is dynamically right-anchored to its trigger using pure CSS (`position-anchor`), eliminating the need for absolute positioning hacks.
- **Scale-Hover Transition**: A bouncy scale-up combined with a subtle Y-axis translation simulates a component "floating up" into view, offering a tactile and modern experience.
- **Checkout Aesthetics**: Incorporates modern e-commerce UI paradigms including clean lines, muted borders, deep shadows for floating elements, and a structured order summary layout.
- **Fully Customizable**: Timing, easing curves, scale factors, and translation offsets are all exposed via well-documented CSS Custom Properties (Variables).

## Custom Properties Configuration
You can easily tweak the flip animation behavior via these exposed CSS custom properties:
```css
:root {
  --popover-scale-duration: 0.4s;
  --popover-scale-easing: cubic-bezier(0.34, 1.56, 0.64, 1);
  --popover-scale-start: 0.85;
  --popover-hover-offset: 8px; /* Y-axis start position for the 'float' effect */
  --popover-start-opacity: 0;
}
```

## Browser Support
This demo uses the latest CSS features. For the full experience, it relies on:
- **Popover API** (Baseline Support across modern browsers)
- **CSS `@starting-style` & `allow-discrete`** (Supported in Chrome 117+, Edge 117+, Firefox 129+, Safari 17.4+)
- **CSS Anchor Positioning API** (Supported in Chrome 125+, Edge 125+)
