# Fade-In Tooltip for Creative Portfolio Layouts

A responsive tooltip component built with pure HTML and CSS. The tooltips smoothly fade into view on hover or keyboard focus, making them suitable for creative portfolios, profile pages, and interactive user interfaces without requiring JavaScript.

---

## Features

- Pure HTML5 and CSS3 (No JavaScript)
- Smooth fade-in tooltip animation
- Responsive layout for desktop, tablet, and mobile devices
- Easy customization using CSS custom properties
- Lightweight and performant
- Supports `prefers-reduced-motion`
- Keyboard accessible using `:focus-visible`

---

## Folder Structure

```
fade-in-tooltip-portfolio-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Hover over or focus on a button to display its tooltip.
3. Customize the tooltip text, colors, spacing, and animation duration to match your project.

---

## CSS Custom Properties

```css
:root {
    --primary: #6366f1;
    --secondary: #4f46e5;
    --background: #f4f6fb;
    --surface: #ffffff;
    --text: #1f2937;

    --tooltip-bg: #111827;
    --tooltip-text: #ffffff;

    --radius: 16px;
    --shadow: 0 12px 30px rgba(0, 0, 0, 0.12);

    --duration: 0.35s;
}
```

---

## Accessibility

- Supports `prefers-reduced-motion` for users who prefer reduced animations.
- Tooltips are accessible using keyboard navigation with `:focus-visible`.
- Built using semantic HTML5 elements.
- Responsive layout adapts across desktop, tablet, and mobile devices.

---

## Browser Support

Compatible with all modern browsers

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.