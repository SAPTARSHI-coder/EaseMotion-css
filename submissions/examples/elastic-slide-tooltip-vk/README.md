# Elastic-Slide Tooltip for Fintech Dashboard Layouts

A modern, responsive tooltip component built using pure HTML and CSS. The tooltip features a smooth elastic-slide animation with a subtle bounce effect, making it ideal for fintech dashboards, analytics panels, KPI cards, and SaaS interfaces.

---

## Features

- Pure HTML5 and CSS3 (No JavaScript)
- Smooth elastic-slide entrance animation
- Subtle bounce and settling effect
- Responsive fintech dashboard layout
- Glassmorphism-inspired tooltip design
- Keyboard accessible using `:focus-visible`
- Lightweight and performant
- Supports `prefers-reduced-motion`

---

## Folder Structure

```
elastic-slide-tooltip-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Hover over or focus on any information (`ⓘ`) icon.
3. The tooltip slides upward with an elastic motion before settling into place.
4. Customize colors, spacing, animation timing, and shadows using the CSS variables.

---

## CSS Custom Properties

```css
:root{
    --primary:#2563eb;
    --success:#22c55e;
    --danger:#ef4444;
    --bg:#0f172a;
    --card:#1e293b;
    --tooltip:#111827;
    --text:#f8fafc;
    --muted:#94a3b8;

    --radius:18px;

    --shadow:0 16px 35px rgba(0,0,0,.35);
}
```

---

## Accessibility

- Supports keyboard navigation using `:focus-visible`.
- Includes `prefers-reduced-motion` support for users who prefer reduced animations.
- Uses semantic HTML elements for improved accessibility.
- Responsive across desktop, tablet, and mobile devices.

---

## Browser Support

Compatible with all modern browsers.

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.