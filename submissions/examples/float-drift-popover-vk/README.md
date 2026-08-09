# Float-Drift Popover for SaaS Showcase Layouts

A modern, responsive popover component built using pure HTML and CSS. The popover combines a smooth float entrance with a gentle drifting animation, making it ideal for SaaS dashboards, feature highlights, quick actions, and product showcase interfaces.

---

## Features

- Pure HTML5 and CSS3 (No JavaScript)
- Smooth float entrance animation
- Continuous drift animation while visible
- Fully responsive layout
- Keyboard accessible using `:focus-visible` and `:focus-within`
- Easy customization with CSS custom properties
- Lightweight and performant
- Supports `prefers-reduced-motion`

---

## Folder Structure

```
float-drift-popover-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Hover over or focus on the trigger button.
3. The popover appears with a smooth float animation followed by a gentle drifting motion.
4. Customize colors, spacing, timing, and shadows using the CSS custom properties.

---

## CSS Custom Properties

```css
:root{
    --primary:#6366f1;
    --bg:#f4f7fb;
    --surface:#ffffff;
    --text:#1f2937;

    --radius:18px;
    --duration:.5s;

    --shadow:0 14px 35px rgba(0,0,0,.15);
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