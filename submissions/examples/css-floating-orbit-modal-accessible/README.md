# CSS Floating Orbit Modal - Accessible Web Layout

A modern, pure CSS modal component featuring a smooth floating animation with orbiting decorative rings. The component is fully responsive, customizable using CSS variables, and includes accessibility-focused enhancements.

---

## ✨ Features

- Pure HTML & CSS
- Smooth floating animation
- Animated orbit rings
- Responsive design
- Keyboard focus styles
- CSS Custom Properties for easy customization
- Supports `prefers-reduced-motion`
- No JavaScript required

---

## 📂 Files

```
css-floating-orbit-modal-accessible/
├── demo.html
├── style.css
└── README.md
```

---

## 🎨 Customization

The component exposes several CSS variables:

```css
:root {
    --bg-color: #0f172a;
    --modal-bg: #ffffff;
    --primary: #4f46e5;
    --text: #1f2937;
    --radius: 18px;
    --duration: 10s;
    --float-distance: 12px;
}
```

You can customize:

- Background colors
- Primary button color
- Modal border radius
- Orbit animation speed
- Floating distance

---

## ♿ Accessibility

This component includes:

- `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby`
- Visible keyboard focus indicators using `:focus-visible`
- Reduced motion support through:

```css
@media (prefers-reduced-motion: reduce)
```

---

## 📱 Responsive

The modal automatically adjusts its size and orbit animations for smaller screens using CSS media queries.

---

## 🚀 Usage

Open `demo.html` in any modern web browser to view the component.

No build tools or JavaScript are required.

---

## 📄 License

This submission follows the licensing terms of the EaseMotion-css repository.