# Ease Sandwich Builder App

## Overview

The **Ease Sandwich Builder App** is a responsive, interactive demo that showcases how CSS transitions, custom properties, and minimal JavaScript can be combined to create an engaging form-based user interface.

Users can customize a sandwich by selecting bread, protein, and extras. JavaScript manages the selected values while CSS provides smooth hover, focus, and interaction animations.

---

## Features

- 🥪 Interactive sandwich builder interface
- 🎨 Smooth hover, focus, and selection transitions
- ✨ CSS-driven animations using `transition`, `transform`, and `opacity`
- 🎯 JavaScript-based state management with class toggling
- 📱 Responsive layout for desktop and mobile devices
- 🎨 Easily customizable through CSS variables

---

## CSS Custom Properties

The appearance of the component can be customized using the following CSS variables:

| Variable | Description |
|----------|-------------|
| `--primary` | Primary accent color |
| `--bg` | Background color |
| `--border` | Border color |
| `--text` | Text color |
| `--duration` | Animation duration |

Example:

```css
:root {
    --primary: #ff9800;
    --bg: #ffffff;
    --border: #dcdcdc;
    --text: #333333;
    --duration: 300ms;
}
```

---

## Folder Structure

```
ease-sandwich-builder-app-ij/
├── demo.html
├── style.css
└── README.md
```

---

## How to Use

1. Open `demo.html` in any modern web browser.
2. Select your preferred bread, protein, and extras.
3. Observe the smooth hover, focus, and selection animations.
4. Click the **Build Sandwich** button to update the current selection.

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

This example demonstrates EaseMotion CSS's animation-first philosophy by combining expressive UI interactions with clean, readable code. It highlights how form controls can be enhanced using CSS transitions and custom properties while keeping JavaScript focused on state management.

---

## Related Issue

Closes #48178