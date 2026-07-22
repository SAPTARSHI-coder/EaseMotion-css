# Shake Toast Example

## Overview

The **Shake Toast Example** is a lightweight notification component that demonstrates a smooth shake animation for drawing attention to important messages such as errors, warnings, or loading states. The example is implemented using standard HTML and CSS, with accessibility and reduced-motion support.

---

## Features

- 🔔 Toast notification component
- ✨ Smooth CSS shake animation
- 🎨 Customizable with CSS variables
- 📱 Responsive layout
- ♿ Accessibility-friendly implementation
- 🌙 Supports `prefers-reduced-motion`

---

## CSS Custom Properties

The component can be customized using the following CSS variables:

| Variable | Description |
|----------|-------------|
| `--primary` | Accent color |
| `--bg` | Toast background color |
| `--text` | Text color |
| `--duration` | Animation duration |

Example:

```css
:root {
    --primary: #ef4444;
    --bg: #ffffff;
    --text: #1f2937;
    --duration: 500ms;
}
```

---

## Folder Structure

```
feature-shake-toast-example-controlcoder/
├── demo.html
├── style.css
└── README.md
```

---

## How to Use

1. Open `demo.html` in any modern web browser.
2. Hover over or trigger the toast notification.
3. Observe the smooth shake animation.
4. Modify the CSS custom properties to customize colors and animation timing.

---

## Accessibility

- Semantic HTML structure
- Appropriate ARIA attributes where applicable
- Supports `prefers-reduced-motion: reduce`
- Responsive on desktop and mobile devices

---

## Technologies Used

- HTML5
- CSS3

---

## Browser Compatibility

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

## Why It Fits EaseMotion CSS

This example demonstrates how a simple notification component can be enhanced with expressive motion while remaining lightweight, responsive, and accessible. It follows EaseMotion CSS's animation-first philosophy and serves as a reusable UI pattern for modern interfaces.

---

## Related Issue

Closes #50766