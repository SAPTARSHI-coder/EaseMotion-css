# Glitch-Flicker Tooltip for Accessible Web Layouts

A modern, responsive tooltip component built using pure HTML and CSS. The tooltip features a subtle glitch-flicker animation on hover or keyboard focus while maintaining accessibility, responsiveness, and performance.

---

## Features

- Pure HTML5 and CSS3 (No JavaScript)
- Smooth glitch-flicker tooltip animation
- Fully responsive layout
- Keyboard accessible using `:focus-visible`
- Easy customization with CSS custom properties
- Lightweight and performant
- Supports `prefers-reduced-motion`

---

## Folder Structure

```
glitch-flicker-tooltip-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Hover over or focus on any button.
3. The tooltip appears with a subtle glitch-flicker animation.

---

## CSS Custom Properties

The following CSS variables can be customized:

```css
:root {
    --primary: #6366f1;
    --surface: #ffffff;
    --text: #1f2937;
    --tooltip-bg: #111827;
    --tooltip-text: #ffffff;

    --radius: 10px;
    --duration: 0.4s;

    --shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
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