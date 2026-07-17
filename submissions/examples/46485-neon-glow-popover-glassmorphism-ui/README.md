# Neon Glow Popover for Glassmorphism UI Layouts

A pure CSS popover demo that pairs a frosted-glass surface with a soft neon glow entrance. The example uses the native `details` and `summary` elements, so the interaction remains keyboard accessible without JavaScript.

## Features

- Native disclosure behavior for keyboard and screen-reader friendly toggling.
- Glassmorphism panel styling with backdrop blur, translucent borders, and layered gradients.
- Neon glow entrance animation controlled with CSS custom properties.
- Responsive layout that keeps the popover readable on narrow screens.
- Reduced-motion support that removes glow and transform animation when requested.

## CSS Custom Properties

```css
:root {
  --popover-duration: 320ms;
  --popover-easing: cubic-bezier(0.2, 0.85, 0.25, 1);
  --popover-glow-color: #22d3ee;
  --popover-start-scale: 0.92;
}
```

## Usage

1. Open `demo.html` in a browser.
2. Tab to the "Open neon status card" trigger.
3. Press `Enter` or `Space` to reveal the popover.
4. Adjust the custom properties in `style.css` to tune the glow, scale, and timing.
