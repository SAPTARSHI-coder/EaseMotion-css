# Confetti Toggle Switch

## Overview

The **Confetti Toggle Switch** is an interactive toggle component inspired by modern dark mode switch designs. It provides smooth state transitions with a celebratory confetti animation whenever the switch is toggled on. The component demonstrates how CSS animations and custom properties can be combined with minimal JavaScript to create an engaging, reusable UI element.

---

## Features

- 🎉 Confetti animation on toggle
- 🌙 Dark mode inspired toggle switch
- ✨ Smooth hover, active, and focus transitions
- 🎨 Customizable using CSS custom properties
- 📱 Responsive and lightweight implementation
- ⚡ Minimal JavaScript for state management

---

## CSS Custom Properties

Customize the appearance using the following variables:

| Variable | Description |
|----------|-------------|
| `--primary` | Active toggle color |
| `--bg` | Background color |
| `--thumb` | Toggle thumb color |
| `--duration` | Transition duration |
| `--confetti` | Confetti particle color |

Example:

```css
:root {
    --primary: #6366f1;
    --bg: #e5e7eb;
    --thumb: #ffffff;
    --duration: 300ms;
    --confetti: #facc15;
}
```

---

## Folder Structure

```
confetti-toggle-switch-cv/
├── demo.html
├── style.css
└── README.md
```

---

## How to Use

1. Open `demo.html` in any modern web browser.
2. Click the toggle switch to change its state.
3. Observe the confetti animation and smooth transition effects.
4. Modify the CSS custom properties to customize the appearance.

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

## Accessibility

- Keyboard accessible
- Visible focus indicators
- Semantic form controls
- Responsive across desktop and mobile devices

---

## Why It Fits EaseMotion CSS

The Confetti Toggle Switch showcases an engaging UI interaction using CSS animations, transitions, and custom properties while keeping JavaScript limited to state management. It aligns with EaseMotion CSS by providing a reusable, animation-first component that is easy to customize and integrate into modern interfaces.

---

## Related Issue

Closes #41922