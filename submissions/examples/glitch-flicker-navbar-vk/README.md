# Glitch-Flicker Navbar for Accessible Web Layouts

A responsive navigation bar built with pure HTML and CSS. Navigation links feature a subtle glitch-flicker hover animation, making it suitable for modern websites, landing pages, dashboards, and accessible web interfaces without requiring JavaScript.

---

## Features

- Pure HTML5 and CSS3 (No JavaScript)
- Subtle glitch-flicker hover animation
- Animated underline effect
- Fully responsive navigation layout
- Easy customization using CSS custom properties
- Lightweight and performant
- Supports `prefers-reduced-motion`
- Keyboard accessible using `:focus-visible`

---

## Folder Structure

```
glitch-flicker-navbar-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Hover over or focus on the navigation links to trigger the glitch-flicker animation.
3. Customize the navigation items, colors, spacing, and animation timing to match your project.

---

## CSS Custom Properties

```css
:root {
    --primary: #6366f1;
    --secondary: #4f46e5;
    --background: #f4f7fb;
    --surface: #ffffff;
    --text: #1f2937;
    --muted: #6b7280;

    --radius: 16px;
    --shadow: 0 12px 30px rgba(0, 0, 0, 0.12);

    --duration: 0.35s;
}
```

---

## Accessibility

- Supports `prefers-reduced-motion` for users who prefer reduced animations.
- Navigation links are keyboard accessible using `:focus-visible`.
- Built with semantic HTML5 elements.
- Fully responsive across desktop, tablet, and mobile devices.

---

## Browser Support

Compatible with all modern browsers

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.