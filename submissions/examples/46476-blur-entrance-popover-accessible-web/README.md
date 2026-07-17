# Blur Entrance Popover for Accessible Web Layouts

A pure CSS popover demo that uses a native `details` disclosure element for keyboard and screen-reader friendly interaction. The panel enters with a soft blur, scale, and opacity transition while keeping the markup semantic and responsive.

## Features

- Native `details` and `summary` interaction, so the popover works with keyboard navigation without JavaScript.
- Blur-entrance motion controlled by CSS custom properties for timing, easing, scale, and blur distance.
- Accessible focus states, visible target sizing, semantic headings, and helper text.
- Responsive layout that keeps the trigger and popover readable on narrow screens.
- `prefers-reduced-motion` support to remove transform and blur animation for motion-sensitive users.

## CSS Custom Properties

```css
:root {
  --popover-duration: 280ms;
  --popover-easing: cubic-bezier(0.2, 0.8, 0.2, 1);
  --popover-start-scale: 0.94;
  --popover-start-blur: 14px;
}
```

## Usage

1. Open `demo.html` in a browser.
2. Tab to the "Open accessibility checklist" trigger.
3. Press `Enter` or `Space` to toggle the popover.
4. Adjust the custom properties in `style.css` to change the animation feel.
