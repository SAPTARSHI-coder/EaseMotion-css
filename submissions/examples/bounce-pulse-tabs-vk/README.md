# Bounce-Pulse Tabs for Accessible Web Layouts

A modern, responsive tab component built using pure HTML and CSS. The tabs continuously feature a smooth bounce and pulse animation while providing a clean, lightweight, and accessible interface.

---

## Features

- Pure HTML5 and CSS3 (No JavaScript)
- Continuous bounce and pulse animation for all tabs
- Three-tab responsive layout
- Content switching using CSS only
- Keyboard accessible using `:focus-visible`
- Easy customization with CSS custom properties
- Lightweight and performant
- Supports `prefers-reduced-motion`

---

## Folder Structure

```
bounce-pulse-tabs-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Observe the continuous bounce and pulse animation on all tabs.
3. Click any tab to display its corresponding content panel.

---

## CSS Custom Properties

The following CSS variables can be customized:

```css
:root {
    --background: #f4f6fb;
    --surface: #ffffff;
    --text: #222222;

    --radius: 14px;

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

Compatible with all modern browsers

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.