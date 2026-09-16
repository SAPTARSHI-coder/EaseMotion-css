# Fade-In Navbar for Accessible Web Layouts

A responsive navigation bar built with pure HTML and CSS featuring a smooth fade-in entrance animation. This example is lightweight, customizable, and suitable for landing pages, dashboards, portfolios, and modern web applications without requiring JavaScript.

---

## Features

- Pure HTML5 and CSS3
- Smooth fade-in entrance animation
- Responsive navigation layout
- Animated hover underline
- CSS custom properties for easy customization
- Lightweight and performant
- Supports `prefers-reduced-motion`
- Keyboard accessible using `:focus-visible`

---

## Folder Structure

```
fade-in-navbar-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. The navigation bar fades into view automatically when the page loads.
3. Hover over or focus on navigation links to see the underline animation.
4. Customize the colors, spacing, and animation timing using the CSS variables.

---

## CSS Custom Properties

```css
:root {
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --background: #f4f7fb;
    --surface: #ffffff;
    --text: #1f2937;
    --muted: #6b7280;

    --radius: 16px;
    --shadow: 0 12px 30px rgba(0, 0, 0, 0.12);

    --transition: 0.3s ease;
    --animation: 0.8s ease;
}
```

---

## Accessibility

- Supports `prefers-reduced-motion` for users who prefer reduced animations.
- Keyboard accessible using `:focus-visible`.
- Built with semantic HTML5 elements.
- Fully responsive across desktop, tablet, and mobile devices.

---

## Browser Support

Compatible with all modern browsers

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.