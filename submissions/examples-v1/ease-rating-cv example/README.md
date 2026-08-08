# Ease Rating

## Overview

The **Ease Rating** component is an animated star rating interface built with HTML, CSS, and minimal JavaScript. It provides an interactive and responsive way for users to submit ratings while demonstrating smooth animations inspired by the EaseMotion CSS library.

The component is suitable for product reviews, testimonials, feedback forms, course ratings, restaurant reviews, and similar user interfaces.

---

## Features

- ⭐ Interactive 1–5 star rating
- ✨ Smooth hover and selection animations
- 🎨 Customizable using CSS custom properties
- 📱 Responsive layout
- ♿ Keyboard accessible
- ⚡ Lightweight and easy to integrate

---

## CSS Custom Properties

Customize the appearance using CSS variables.

| Variable | Description |
|----------|-------------|
| `--primary` | Active star color |
| `--inactive` | Inactive star color |
| `--duration` | Animation duration |
| `--scale` | Hover scale factor |

Example:

```css
:root {
    --primary: #fbbf24;
    --inactive: #d1d5db;
    --duration: 250ms;
    --scale: 1.15;
}
```

---

## Folder Structure

```
ease-rating-cv/
├── demo.html
├── style.css
└── README.md
```

---

## How to Use

1. Open `demo.html` in any modern browser.
2. Hover over the stars to preview the rating.
3. Click a star to select a rating.
4. Modify the CSS variables to customize colors and animation speed.

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

The Ease Rating component demonstrates how subtle animations and transitions can improve user interaction while keeping the implementation lightweight and reusable. It aligns with EaseMotion CSS by emphasizing smooth motion, accessibility, and easy customization.

---

## Related Issue

Closes #48228