# Zoom-In Badge for Accessible Web Layouts

A modern, responsive badge component built using pure HTML and CSS. Each badge features a smooth zoom-in animation on hover or keyboard focus while maintaining accessibility, responsiveness, and performance.

---

## Features

- Pure HTML5 and CSS3 (No JavaScript)
- Smooth zoom-in animation
- Fully responsive layout
- Keyboard accessible using `:focus-visible`
- Easy customization with CSS custom properties
- Lightweight and performant
- Supports `prefers-reduced-motion`

---

## Folder Structure

```
zoom-in-badge-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Hover over or focus on any badge.
3. The badge smoothly zooms in and returns to its original size when interaction ends.

---

## CSS Custom Properties

The following CSS variables can be customized:

```css
:root {
    --primary: #6366f1;
    --success: #16a34a;
    --warning: #f59e0b;
    --danger: #ef4444;
    --info: #0ea5e9;
    --secondary: #8b5cf6;

    --text: #ffffff;
    --background: #f4f6fb;

    --radius: 999px;
    --duration: 0.3s;

    --shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}
```

---

## Accessibility

- Supports keyboard navigation using `:focus-visible`.
- Includes `prefers-reduced-motion` support for users who prefer reduced animations.
- Uses semantic HTML elements for improved accessibility.

---

## Browser Support

Compatible with all modern browsers
---

## License

This example is provided as a showcase component for the EaseMotion CSS project.