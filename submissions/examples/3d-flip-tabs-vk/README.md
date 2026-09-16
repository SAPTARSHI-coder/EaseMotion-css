# 3D Flip Tabs for SaaS Showcase Layouts

A modern, responsive 3D Flip Tabs component built using pure HTML and CSS. The tabs feature smooth 3D flip animations with CSS-only content switching, making them ideal for SaaS landing pages, dashboards, and product showcase layouts.

---

## Features

- Pure HTML5 and CSS3 (No JavaScript)
- Smooth 3D flip tab animation
- Active tab flip effect
- CSS-only tab switching
- Responsive layout for desktop and mobile
- Keyboard accessible using `:focus-visible`
- Easy customization with CSS custom properties
- Lightweight and performant
- Supports `prefers-reduced-motion`

---

## Folder Structure

```
3d-flip-tabs-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Hover over the tabs to view the 3D flip animation.
3. Click a tab to display its corresponding content.
4. Customize colors, spacing, and animation timing using the provided CSS custom properties.

---

## CSS Custom Properties

```css
:root{
    --primary:#6366f1;
    --background:#f4f6fb;
    --surface:#ffffff;
    --text:#1f2937;

    --radius:16px;
    --duration:.6s;

    --shadow:0 12px 30px rgba(0,0,0,.12);
}
```

---

## Accessibility

- Supports keyboard navigation using `:focus-visible`.
- Includes `prefers-reduced-motion` support for users who prefer reduced animations.
- Uses semantic HTML elements for improved accessibility.

---

## Browser Support

Compatible with all modern browsers.

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.