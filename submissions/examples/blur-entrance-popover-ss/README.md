# CSS Blur Entrance Popover

A modern **Blur Entrance Popover** built using only **HTML** and **CSS** for creative portfolio layouts. The component features a smooth blur entrance animation, responsive design, CSS custom properties for easy customization, and accessibility support through `prefers-reduced-motion`.

---

## Features

- ✨ Pure HTML & CSS (No JavaScript required)
- 🌫️ Smooth blur entrance animation
- 🎨 Modern portfolio-inspired design
- 📱 Fully responsive across desktop, tablet, and mobile
- ♿ Accessibility support with `prefers-reduced-motion`
- 🎯 Lightweight and easy to integrate
- 🎭 CSS custom properties for easy customization

---

## Folder Structure

```
blur-entrance-popover-ss/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern web browser.
2. Hover over the **View Details** button to display the blur entrance popover.
3. Customize the styles using the CSS variables in `style.css`.

No JavaScript or external libraries are required.

---

## CSS Custom Properties

The following variables can be customized in `style.css`:

```css
:root{
    --bg:#070b17;
    --surface:#111827;
    --surface-2:#1f2937;
    --text:#f8fafc;
    --muted:#94a3b8;
    --primary:#6366f1;
    --secondary:#06b6d4;
    --radius:22px;
    --transition:.45s cubic-bezier(.2,.8,.2,1);
}
```

These variables allow you to quickly change colors, spacing, border radius, and animation timing without modifying the component structure.

---

## Accessibility

This example includes:

- Support for `prefers-reduced-motion`
- Semantic HTML structure
- Keyboard-friendly interaction using `:focus-within`
- Responsive layout for different screen sizes

---

## Browser Support

Tested for modern browsers:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

---

## Technologies Used

- HTML5
- CSS3
- CSS Variables
- CSS Transitions
- CSS Keyframe Animations

---

## Why It Fits EaseMotion CSS

This component follows the EaseMotion CSS philosophy by providing a lightweight, reusable, animation-first UI component built entirely with HTML and CSS. It focuses on smooth motion, clean structure, accessibility, and modern design without relying on JavaScript.

---

## Preview

This example demonstrates a creative portfolio card with a floating popover that appears using a smooth blur entrance animation built entirely with HTML and CSS.
