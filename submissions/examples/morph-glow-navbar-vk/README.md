# Morph-Glow Navbar for Fintech Dashboard Layouts

A modern, responsive navigation bar built using pure HTML and CSS. The navbar features smooth morphing glow effects on hover and an illuminated active navigation item, making it ideal for fintech dashboards, analytics platforms, banking portals, and SaaS applications.

---

## Features

- Pure HTML5 and CSS3 (No JavaScript)
- Smooth morph-glow hover animation
- Glowing active navigation item
- Glassmorphism-inspired navbar
- Fully responsive layout
- Keyboard accessible using `:focus-visible`
- Lightweight and performant
- Supports `prefers-reduced-motion`

---

## Folder Structure

```
morph-glow-navbar-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Hover over the navigation items to view the morph-glow animation.
3. The active navigation item remains highlighted for improved navigation.
4. Customize colors, spacing, glow intensity, and border radius using the CSS custom properties.

---

## CSS Custom Properties

```css
:root{
    --bg:#0f172a;
    --surface:#1e293b;
    --primary:#3b82f6;
    --primary-light:#60a5fa;
    --text:#f8fafc;
    --muted:#94a3b8;

    --radius:16px;

    --shadow:0 15px 35px rgba(0,0,0,.35);
}
```

---

## Accessibility

- Supports keyboard navigation using `:focus-visible`.
- Includes `prefers-reduced-motion` support.
- Uses semantic HTML5 elements.
- Responsive across desktop, tablet, and mobile devices.

---

## Browser Support

Compatible with all modern browsers

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.