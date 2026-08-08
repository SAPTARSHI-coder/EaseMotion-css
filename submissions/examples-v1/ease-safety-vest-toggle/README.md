# Ease Safety Vest Toggle

## Overview

The **Ease Safety Vest Toggle** is an interactive UI component that demonstrates smooth CSS-driven state transitions using hover, active, and focus interactions. JavaScript is responsible only for managing the toggle state, while CSS controls all visual styling and animation effects.

---

## Features

- 🦺 Interactive toggle component
- 🎨 Smooth hover, active, and focus transitions
- ⚡ JavaScript-based state management using class toggling
- 🎯 CSS-driven visual effects and animations
- 🎨 Easily customizable with CSS custom properties
- 📱 Responsive and self-contained implementation

---

## CSS Custom Properties

The appearance of the component can be customized using the following variables:

| Variable | Description |
|----------|-------------|
| `--primary` | Primary accent color |
| `--bg` | Background color |
| `--text` | Text color |
| `--duration` | Transition duration |

Example:

```css
:root {
    --primary: #f59e0b;
    --bg: #ffffff;
    --text: #1f2937;
    --duration: 300ms;
}
```

---

## Folder Structure

```
ease-safety-vest-toggle-ij/
├── demo.html
├── style.css
└── README.md
```

---

## How to Use

1. Open `demo.html` in any modern web browser.
2. Click the toggle to switch between states.
3. Hover over the component to view interaction feedback.
4. Use keyboard navigation to observe focus transitions.
5. Customize the component by modifying the CSS custom properties.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)

---

## Browser Compatibility

Tested on:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

---

## Why It Fits EaseMotion CSS

This component demonstrates EaseMotion CSS's animation-first approach by combining interactive UI behavior with smooth CSS transitions and customizable styling. JavaScript handles only the toggle logic, allowing CSS to manage all visual effects.

---

## Related Issue

Closes #48168