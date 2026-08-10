# Neon Glow Popover

## Overview

The **Neon Glow Popover** is a pure CSS animated popover designed for modern creative portfolio interfaces. It features a smooth neon glow transition that highlights additional information without requiring JavaScript. The component is responsive, keyboard accessible, and customizable through CSS custom properties.

---

## Features

- 💡 Pure CSS implementation (No JavaScript)
- ✨ Smooth neon glow animation
- 🎨 Responsive design
- ♿ Keyboard accessible with focus support
- ⚙️ Customizable using CSS custom properties
- 📱 Works across desktop and mobile devices

---

## CSS Custom Properties

Customize the appearance using the following variables:

| Variable | Description |
|----------|-------------|
| `--primary` | Neon accent color |
| `--bg` | Popover background color |
| `--text` | Text color |
| `--duration` | Animation duration |
| `--scale` | Popover scale effect |

Example:

```css
:root {
    --primary: #00f5ff;
    --bg: #111827;
    --text: #ffffff;
    --duration: 300ms;
    --scale: 1.05;
}
```

---

## Folder Structure

```
feature-neon-glow-popover-controlcoder/
├── demo.html
├── style.css
└── README.md
```

---

## How to Use

1. Open `demo.html` in any modern browser.
2. Hover over or focus on the trigger element.
3. Observe the neon glow popover animation.
4. Customize colors, timing, and scaling through the CSS custom properties.

---

## Accessibility

- Keyboard accessible
- Visible focus styles
- Semantic HTML structure
- Supports `prefers-reduced-motion: reduce`

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

The Neon Glow Popover demonstrates how modern interface elements can be created using only HTML and CSS. It combines accessibility, responsive design, and customizable animations into a reusable component suitable for creative portfolios and personal websites.

---

## Related Issue

Closes #46491