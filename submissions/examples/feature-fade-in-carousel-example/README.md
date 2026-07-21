# Fade-In Carousel

## Overview

The **Fade-In Carousel** is a pure CSS carousel component inspired by modern responsive dashboard interfaces. It highlights carousel items with a smooth fade-in animation, creating an elegant browsing experience without requiring JavaScript.

Designed for analytics dashboards, SaaS landing pages, feature showcases, and product galleries, the component is fully responsive, keyboard accessible, and customizable through CSS custom properties.

---

## Features

- 🎠 Pure CSS carousel layout
- ✨ Smooth fade-in interaction animation
- 📱 Fully responsive design
- ♿ Keyboard accessible
- ⚙️ Customizable with CSS custom properties
- 🚀 No JavaScript required

---

## CSS Custom Properties

Customize the appearance using the following variables:

| Variable | Description |
|----------|-------------|
| `--primary` | Primary accent color |
| `--bg` | Background color |
| `--text` | Text color |
| `--duration` | Fade animation duration |
| `--easing` | Animation easing function |
| `--opacity` | Default card opacity |

Example:

```css
:root {
    --primary: #4f46e5;
    --bg: #ffffff;
    --text: #1f2937;
    --duration: 300ms;
    --easing: ease;
    --opacity: 0.7;
}
```

---

## Folder Structure

```
feature-fade-in-carousel-controlcoder/
├── demo.html
├── style.css
└── README.md
```

---

## How to Use

1. Open `demo.html` in any modern web browser.
2. Hover over or focus on any carousel item.
3. Observe the smooth fade-in transition.
4. Modify the CSS custom properties to customize colors, timing, and opacity.

---

## Accessibility

- Keyboard accessible using `:focus` and `:focus-visible`
- Semantic HTML structure
- Supports `prefers-reduced-motion: reduce`
- Responsive on desktop, tablet, and mobile devices

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

The Fade-In Carousel demonstrates how elegant carousel interactions can be achieved entirely with HTML and CSS. By combining responsive layouts, smooth opacity transitions, and customizable CSS variables, it provides a lightweight and reusable UI pattern that aligns with EaseMotion CSS's animation-first philosophy.

---

## Related Issue

Closes #50415