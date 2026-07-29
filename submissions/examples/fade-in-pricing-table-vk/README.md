# Fade-In Pricing Table for Accessible Web Layouts

A responsive pricing table built with pure HTML and CSS. The pricing cards smoothly fade into view with staggered animations, making them ideal for SaaS websites, landing pages, and product showcases without requiring JavaScript.

---

## Features

- Pure HTML5 and CSS3 (No JavaScript)
- Smooth fade-in pricing card animation
- Staggered entrance effect
- Fully responsive layout
- Easy customization using CSS custom properties
- Lightweight and performant
- Supports `prefers-reduced-motion`
- Keyboard accessible buttons using `:focus-visible`

---

## Folder Structure

```
fade-in-pricing-table-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. The pricing cards automatically fade into view when the page loads.
3. Customize the plans, colors, spacing, and animation timing to match your project.

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

    --radius: 18px;
    --shadow: 0 12px 30px rgba(0, 0, 0, 0.12);

    --duration: 0.7s;
}
```

---

## Accessibility

- Supports `prefers-reduced-motion` for users who prefer reduced animations.
- Interactive buttons support keyboard navigation using `:focus-visible`.
- Built using semantic HTML5 elements.
- Fully responsive across desktop, tablet, and mobile devices.

---

## Browser Support

Compatible with all modern browsers

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.