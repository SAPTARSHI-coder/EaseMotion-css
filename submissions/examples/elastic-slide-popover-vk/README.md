# Elastic-Slide Popover for SaaS Showcase Layouts

A modern, responsive Elastic-Slide Popover built using pure HTML and CSS. The popover features a smooth elastic slide animation with a subtle overshoot effect, making it ideal for SaaS dashboards, feature callouts, action menus, and product showcase layouts.

---

## Features

- Pure HTML5 and CSS3 (No JavaScript)
- Smooth elastic slide animation
- Hover and keyboard accessible interactions
- Responsive layout for desktop and mobile
- CSS custom properties for easy customization
- Lightweight and performant
- Supports `:focus-visible`
- Supports `prefers-reduced-motion`

---

## Folder Structure

```
elastic-slide-popover-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Hover over or focus on the trigger button.
3. The popover appears with a smooth elastic slide animation.
4. Customize colors, spacing, animation timing, and shadows using the CSS custom properties.

---

## CSS Custom Properties

```css
:root{
    --primary:#6366f1;
    --background:#f4f6fb;
    --surface:#ffffff;
    --text:#1f2937;

    --radius:16px;
    --duration:.65s;

    --shadow:0 12px 30px rgba(0,0,0,.12);
}
```

---

## Accessibility

- Supports keyboard navigation using `:focus-visible` and `:focus-within`.
- Includes `prefers-reduced-motion` support for users who prefer reduced animations.
- Uses semantic HTML elements for improved accessibility.

---

## Browser Support

Compatible with all modern browsers.

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.