# Ease Salt Shaker Animation

## Overview

The **Ease Salt Shaker Animation** is a self-contained CSS animation example that demonstrates how `@keyframes`, CSS custom properties, and minimal JavaScript can be combined to create an interactive visual effect.

The animation simulates a salt shaker shaking and dispensing salt when triggered. JavaScript is only responsible for toggling the animation state, while CSS manages all timing, easing, movement, and visual effects.

---

## Features

- 🧂 Animated salt shaker visual effect
- 🎞️ CSS `@keyframes` driven animation
- ⚡ JavaScript class toggling to trigger animations
- 🎨 Customizable using CSS variables
- 📱 Responsive and lightweight implementation
- ✨ Smooth easing and animation sequencing

---

## CSS Custom Properties

The animation can be customized using the following variables:

| Variable | Description |
|----------|-------------|
| `--duration` | Animation duration |
| `--delay` | Animation delay |
| `--primary` | Primary shaker color |
| `--salt-color` | Salt particle color |

Example:

```css
:root {
    --duration: 700ms;
    --delay: 100ms;
    --primary: #f5f5f5;
    --salt-color: #ffffff;
}
```

---

## Folder Structure

```
ease-salt-shaker-animation-ij/
├── demo.html
├── style.css
└── README.md
```

---

## How to Use

1. Open `demo.html` in any modern web browser.
2. Click the **Shake** button.
3. Watch the salt shaker animate using CSS keyframes.
4. Modify the CSS custom properties to customize colors and animation timing.

---

## Technologies Used

- HTML5
- CSS3
- CSS `@keyframes`
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

This component demonstrates EaseMotion CSS's animation-first philosophy by using CSS keyframes, easing functions, and custom properties to create a reusable visual effect. JavaScript remains minimal, handling only the animation trigger while CSS controls all visual motion.

---

## Related Issue

Closes #48174