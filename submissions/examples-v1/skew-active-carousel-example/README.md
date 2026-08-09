# Skew-Active Carousel

## Overview

The **Skew-Active Carousel** is a pure CSS animated carousel designed for modern product catalog interfaces. It features a smooth skew animation that highlights the active or hovered carousel item, creating a dynamic browsing experience without relying on JavaScript.

The component is fully responsive, keyboard accessible, and customizable through CSS custom properties, making it suitable for e-commerce websites, product showcases, and promotional sections.

---

## Features

- 🎠 Pure CSS carousel layout
- ✨ Smooth skew-active animation
- 🛍️ Product catalog inspired design
- 📱 Fully responsive
- ♿ Keyboard accessible
- ⚙️ Customizable using CSS custom properties
- 🚀 Zero JavaScript required

---

## CSS Custom Properties

Customize the component using the following variables:

| Variable | Description |
|----------|-------------|
| `--primary` | Accent color |
| `--bg` | Background color |
| `--text` | Text color |
| `--duration` | Animation duration |
| `--easing` | Transition easing |
| `--skew-angle` | Skew angle applied to the active card |

Example:

```css
:root {
    --primary: #3b82f6;
    --bg: #ffffff;
    --text: #1f2937;
    --duration: 300ms;
    --easing: ease;
    --skew-angle: -6deg;
}
```

---

## Folder Structure

```
feature-skew-active-carousel-controlcoder/
├── demo.html
├── style.css
└── README.md
```

---

## How to Use

1. Open `demo.html` in any modern web browser.
2. Hover over or focus on a carousel item.
3. Observe the smooth skew animation applied to the active card.
4. Customize colors, animation timing, easing, and skew angle using CSS custom properties.

---

## Accessibility

- Keyboard accessible using `:focus` and `:focus-visible`
- Semantic HTML structure
- Supports `prefers-reduced-motion: reduce`
- Responsive across desktop, tablet, and mobile devices

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

The Skew-Active Carousel demonstrates how engaging product catalog interactions can be achieved entirely with HTML and CSS. By combining smooth skew transitions, responsive layouts, and customizable CSS variables, it provides a lightweight, reusable component that aligns with EaseMotion CSS's animation-first philosophy.

---

## Related Issue

Closes #50497