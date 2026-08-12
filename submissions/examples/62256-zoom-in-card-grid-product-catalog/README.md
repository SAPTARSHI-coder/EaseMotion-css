# CSS Zoom-In Card Grid for Product Catalog Layouts

A modern responsive product card grid featuring a smooth **Zoom-In Entrance Animation** built entirely with HTML and CSS for the EaseMotion CSS library.

---

## ✨ Features

- Smooth zoom-in entrance animation
- Responsive CSS Grid layout
- Modern product cards
- Hover lift and image zoom effects
- CSS Custom Properties for easy customization
- Pure HTML & CSS (No JavaScript)
- Accessible with `prefers-reduced-motion`
- Mobile, tablet and desktop responsive

---

## 📂 Folder Structure

```
submissions/
└── examples/
    └── zoom-in-card-grid-product-catalog/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## 🚀 Usage

Open `demo.html` in any modern browser.

Or include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

---

## 🎨 CSS Custom Properties

```css
:root{
  --bg:#08111d;
  --card:#172640;
  --primary:#55d8ff;
  --secondary:#8b5cf6;
  --text:#ffffff;
  --muted:#b8c6de;
  --radius:20px;
}
```

These variables can be modified to match your branding.

---

## 📱 Responsive

- Desktop
- Tablet
- Mobile

Uses CSS Grid with auto-fit columns.

---

## ♿ Accessibility

Supports:

```css
@media (prefers-reduced-motion: reduce)
```

to disable animations for users who prefer reduced motion.

---

## 📜 License

This example follows the EaseMotion CSS repository guidelines and is intended as a reusable UI component.