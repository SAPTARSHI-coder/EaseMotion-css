# Slide-Up Tabs for Accessible Web Layouts

A modern, responsive tab component built using pure HTML and CSS. The tabs feature a smooth slide-up interaction and CSS-only content switching while maintaining accessibility, responsiveness, and performance.

---

## Features

- Pure HTML5 and CSS3 (No JavaScript)
- Smooth slide-up animation on tab hover
- CSS-only tab content switching
- Responsive three-tab layout
- Keyboard accessible using `:focus-visible`
- Easy customization with CSS custom properties
- Lightweight and performant
- Supports `prefers-reduced-motion`

---

## Folder Structure

```
slide-up-tabs-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Hover over any tab to view the slide-up animation.
3. Click a tab to display its corresponding content panel.

---

## CSS Custom Properties

The following CSS variables can be customized:

```css
:root {
    --primary: #4f46e5;
    --background: #f4f6fb;
    --surface: #ffffff;
    --text: #222222;

    --radius: 14px;
    --duration: 0.35s;

    --shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
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