# Pulse Number Counter

## Overview

The **Pulse Number Counter** is a responsive analytics dashboard component that displays animated numerical values with a subtle pulse effect. It is designed for dashboards, statistics sections, product analytics, and KPI cards.

JavaScript updates the displayed value, while CSS handles the pulse animation using transitions and keyframes. The component is lightweight, customizable, and easy to integrate into any project.

---

## Features

- 🔢 Animated number counter
- 💓 Pulse animation on value updates
- 📊 Dashboard-inspired design
- 🎨 Customizable with CSS custom properties
- 📱 Responsive layout
- ⚡ Lightweight implementation

---

## CSS Custom Properties

| Variable | Description |
|----------|-------------|
| `--primary` | Primary accent color |
| `--bg` | Background color |
| `--text` | Text color |
| `--duration` | Pulse animation duration |

Example:

```css
:root {
    --primary: #2563eb;
    --bg: #ffffff;
    --text: #1f2937;
    --duration: 300ms;
}
```

---

## Folder Structure

```
pulse-number-counter-cv/
├── demo.html
├── style.css
└── README.md
```

---

## How to Use

1. Open `demo.html` in any modern web browser.
2. Click the increment or update button.
3. Watch the number update with a smooth pulse animation.
4. Customize colors and animation timing using CSS variables.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## Browser Compatibility

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

## Why It Fits EaseMotion CSS

The Pulse Number Counter demonstrates how subtle motion can enhance dashboard metrics by drawing attention to changing values. It follows EaseMotion CSS's animation-first philosophy while remaining lightweight, reusable, and easy to customize.

---

## Related Issue

Closes #41746
