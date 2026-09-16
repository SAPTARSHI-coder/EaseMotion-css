# Interactive Notification Alert Badge

A brutalist-style interactive notification badge built with pure HTML and CSS, featuring hover, active, focus, and reduced-motion states.

## Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Then use the notification component:

```html
<button
  class="notification-badge"
  type="button"
  aria-label="7 unread notifications"
>
  <span aria-hidden="true">7</span>
</button>
```

## Features

- Pure HTML and CSS
- No JavaScript dependencies
- Brutalist visual style
- Interactive hover and active states
- Keyboard-accessible focus state
- Notification pulse animation
- `prefers-reduced-motion` support
- Responsive layout for mobile, tablet, and desktop

## Why It Fits EaseMotion

The component combines expressive motion with a simple CSS-first implementation. Its interaction states provide visual feedback while respecting users who prefer reduced motion.

The component can be adapted into the EaseMotion CSS system by the maintainer using the project's standard `ease-*` naming convention.