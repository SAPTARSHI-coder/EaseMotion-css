# 3D Flip Card Grid for SaaS Showcase Layouts

A modern, responsive 3D Flip Card Grid built using pure HTML and CSS. Each card features a smooth 3D flip animation to reveal additional content, making it ideal for showcasing SaaS features, services, or products while maintaining accessibility and performance.

---

## Features

- Pure HTML5 and CSS3 (No JavaScript)
- Smooth 3D flip card animation
- Responsive card grid layout
- Front and back card faces
- CSS custom properties for easy customization
- Lightweight and performant
- Keyboard accessible using `:focus-within`
- Supports `prefers-reduced-motion`

---

## Folder Structure

```
3d-flip-card-grid-vk/
├── demo.html
├── style.css
└── README.md
```

---

## Usage

1. Open `demo.html` in any modern browser.
2. Hover over a card to view the 3D flip animation.
3. Customize the card content, colors, and layout using the provided CSS custom properties.

---

## CSS Custom Properties

```css
:root{
    --primary:#6366f1;
    --background:#f4f6fb;
    --surface:#ffffff;
    --text:#1f2937;

    --radius:18px;
    --duration:.7s;

    --shadow:0 12px 30px rgba(0,0,0,.12);
}
```

---

## Accessibility

- Supports keyboard interaction using `:focus-within`.
- Includes `prefers-reduced-motion` support for users who prefer reduced animations.
- Uses semantic HTML elements for improved accessibility.

---

## Browser Support

Compatible with all modern browsers.

---

## License

This example is provided as a showcase component for the EaseMotion CSS project.