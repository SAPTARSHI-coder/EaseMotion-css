# CSS Scale-Hover Popover (Modern SaaS Aesthetics)

This example demonstrates how to create a highly polished, pure CSS animated Popover featuring a smooth Scale-Hover interaction transition. It leverages the latest web platform features such as the Native Popover API, CSS Anchor Positioning, and `@starting-style`.

## Features
- **Pure CSS**: Fully functional interactivity and rich animations without a single line of JavaScript.
- **Native Popover API**: Built on top of the native HTML `<div popover>` standard, yielding built-in accessibility, light-dismiss, and top-layer management.
- **Anchor Positioning API**: The popover is dynamically right-anchored to its trigger using pure CSS (`position-anchor`), eliminating the need for absolute positioning hacks.
- **Scale-Hover Transition**: A subtle scale-up combined with a gentle Y-axis translation simulates a component "floating up" into view, offering a tactile and premium experience.
- **SaaS Aesthetics**: Incorporates modern SaaS UI paradigms including clean borders, muted secondary text, crisp utility inputs, and structured layout rows typical of sharing or settings menus.
- **Fully Customizable**: Timing, easing curves, scale factors, and translation offsets are all exposed via well-documented CSS Custom Properties (Variables).

## Custom Properties Configuration
You can easily tweak the animation behavior via these exposed CSS custom properties:
```css
:root {
  --popover-scale-duration: 0.3s;
  --popover-scale-easing: cubic-bezier(0.175, 0.885, 0.32, 1.275);
  --popover-scale-start: 0.9;
  --popover-hover-offset: 12px; /* Floating translation */
  --popover-start-opacity: 0;
}
```

## Browser Support
This demo uses the latest CSS features. For the full experience, it relies on:
- **Popover API** (Baseline Support across modern browsers)
- **CSS `@starting-style` & `allow-discrete`** (Supported in Chrome 117+, Edge 117+, Firefox 129+, Safari 17.4+)
- **CSS Anchor Positioning API** (Supported in Chrome 125+, Edge 125+)
