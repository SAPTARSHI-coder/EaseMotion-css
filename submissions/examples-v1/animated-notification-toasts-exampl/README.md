# Animated Notification Toasts

## Overview

The **Animated Notification Toasts** example demonstrates a collection of responsive notification toasts built with HTML and CSS, enhanced using EaseMotion CSS utility classes. It showcases smooth slide-in animations, icon pop effects, animated progress bars, and multiple toast variants suitable for modern web applications.

The component is lightweight, responsive, accessible, and easy to customize using CSS custom properties.

---

## Features

- 🔔 Four notification toast variants
  - Success
  - Error
  - Warning
  - Information
- ✨ Smooth slide-in animations
- 🎯 Animated icon pop effect
- ⏳ Auto-dismiss progress bar animation
- 📱 Responsive layout
- ♿ Accessible with `aria-live`
- 🌙 Supports `prefers-reduced-motion`
- 🎨 Easily customizable using CSS variables

---

## CSS Custom Properties

Customize the appearance using the following variables:

| Variable | Description |
|----------|-------------|
| `--success` | Success toast color |
| `--error` | Error toast color |
| `--warning` | Warning toast color |
| `--info` | Information toast color |
| `--duration` | Animation duration |
| `--radius` | Border radius |

Example:

```css
:root {
    --success: #22c55e;
    --error: #ef4444;
    --warning: #f59e0b;
    --info: #3b82f6;
    --duration: 350ms;
    --radius: 12px;
}
```

---

## Folder Structure

```
animated-notification-toasts/
├── demo.html
├── style.css
└── README.md
```

---

## How to Use

1. Open `demo.html` in a modern web browser.
2. Click the trigger buttons to display different toast notifications.
3. Observe the slide-in animation, icon pop effect, and progress bar.
4. Customize colors, timing, and styling using the CSS custom properties.

---

## Accessibility

- Uses `aria-live` regions for screen reader announcements.
- Keyboard accessible trigger controls.
- Supports `prefers-reduced-motion: reduce`.
- Responsive across desktop and mobile devices.

---

## Technologies Used

- HTML5
- CSS3
- EaseMotion CSS
- CSS Keyframes
- CSS Transitions

---

## Browser Compatibility

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

## Why It Fits EaseMotion CSS

This example demonstrates how EaseMotion CSS utility classes can be combined with modern CSS animations to build polished notification toasts without external libraries. It showcases reusable animation patterns suitable for dashboards, forms, e-commerce sites, and administrative interfaces.

---

## Related Issue

Closes #53773