# Accessible Zoom-In Carousel for Web Layouts

A responsive carousel-style layout built using pure HTML and CSS. Each card smoothly zooms on hover or keyboard focus, providing an engaging interaction while maintaining accessibility and responsive behavior.

---

## Features

- Pure HTML5 and CSS3
- Smooth zoom-in hover animation
- Keyboard accessible with `:focus-visible`
- Responsive card layout
- CSS custom properties for easy customization
- Lightweight and JavaScript-free
- Supports `prefers-reduced-motion`

---

## Folder Structure

```
accessible-zoom-carousel-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Hover over or focus on a card to see the zoom-in animation.
3. Customize colors, spacing, and animation timing using CSS variables.

---

## CSS Custom Properties

```css
:root{
    --primary:#6366f1;
    --background:#f4f6fb;
    --surface:#ffffff;
    --text:#222;
    --radius:16px;
    --duration:.35s;
}
```

---

## Accessibility

- Keyboard navigation using `:focus-visible`
- Supports `prefers-reduced-motion`
- Semantic HTML structure

---

## Browser Support

Compatible with all modern browsers.

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.