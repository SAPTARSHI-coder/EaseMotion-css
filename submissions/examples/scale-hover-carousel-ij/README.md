# Scale-Hover Carousel

## Overview

The **Scale-Hover Carousel** is a pure CSS animated carousel inspired by modern SaaS dashboards and landing pages. It highlights the active card with a smooth scale-on-hover animation while maintaining a clean, responsive layout. The component requires no JavaScript and is fully customizable using CSS custom properties.

---

## Features

- 🎠 Pure CSS carousel layout
- 🔍 Smooth scale-hover animation
- 🎨 Modern SaaS-inspired design
- 📱 Fully responsive
- ♿ Keyboard accessible
- ⚙️ Customizable using CSS custom properties
- 🚫 No JavaScript required

---

## CSS Custom Properties

Customize the component using the following variables:

| Variable | Description |
|----------|-------------|
| `--primary` | Accent color |
| `--bg` | Background color |
| `--text` | Text color |
| `--duration` | Animation duration |
| `--scale` | Hover scale factor |

Example:

```css
:root {
    --primary: #4f46e5;
    --bg: #f8fafc;
    --text: #1f2937;
    --duration: 300ms;
    --scale: 1.06;
}
```

---

## Folder Structure

```
feature-scale-hover-carousel-controlcoder/
├── demo.html
├── style.css
└── README.md
```

---

## How to Use

1. Open `demo.html` in any modern browser.
2. Hover over or focus on a carousel card.
3. Observe the smooth scale animation.
4. Customize colors, animation timing, and scale using the CSS custom properties.

---

## Accessibility

- Keyboard accessible using `:focus` and `:focus-visible`
- Semantic HTML structure
- Supports `prefers-reduced-motion: reduce`
- Responsive across desktop and mobile devices

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

The Scale-Hover Carousel demonstrates how modern interactive carousel layouts can be implemented using only HTML and CSS. It emphasizes smooth motion, responsive design, accessibility, and reusable styling while remaining lightweight and free from JavaScript.

---

## Related Issue

Closes #50480