# Bounce-Pulse Dropdown for Accessible Web Layouts

A modern, responsive dropdown navigation built using pure HTML and CSS. The dropdown uses a smooth bounce entrance followed by a subtle pulse animation to create an engaging user experience while maintaining accessibility and performance.

---

## Features

- Pure HTML5 and CSS3 (No JavaScript)
- Bounce entrance animation
- Subtle pulse effect after opening
- Fully responsive layout
- Keyboard accessible using `:focus-within`
- Easy customization with CSS custom properties
- Lightweight and performant
- Supports `prefers-reduced-motion`

---

## Folder Structure

```
bounce-pulse-dropdown-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Hover over or focus on the **Services** menu.
3. The dropdown will animate with a bounce effect followed by a subtle pulse.

---

## CSS Custom Properties

The following CSS variables can be customized:

```css
:root {
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --surface: #ffffff;
    --text: #1f2937;
    --shadow: 0 14px 32px rgba(0, 0, 0, 0.12);
    --radius: 14px;
    --duration: 0.45s;
}
```

---

## Accessibility

- Supports keyboard navigation using `:focus-within`.
- Includes `prefers-reduced-motion` support for users who prefer reduced animations.
- Uses semantic HTML elements for improved accessibility.

---

## Browser Support

Compatible with all modern browsers

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.