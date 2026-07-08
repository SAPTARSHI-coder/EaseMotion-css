# CSS 3D Perspective Tilt Modal

A **pure CSS animated modal** featuring a smooth **3D Perspective Tilt** entrance animation designed for **Creative Portfolio** layouts. The component is lightweight, responsive, keyboard accessible, and fully customizable using CSS custom properties.

---

## ✨ Features

- 🎨 Pure CSS 3D Perspective Tilt animation
- 🚀 Zero JavaScript required for animations
- 📱 Fully responsive design
- ♿ Keyboard accessible with visible focus states
- 🎯 Creative Portfolio / Agency inspired UI
- ⚙️ Easily customizable with CSS custom properties
- 🌐 Works in all modern browsers

---

## 📂 Folder Structure

```
submissions/
└── css-3d-perspective-tilt-modal/
    ├── demo.html
    ├── style.css
    └── README.md
```

---

## 🚀 Usage

1. Copy the component folder into your project.
2. Keep `demo.html` and `style.css` in the same directory.
3. Open `demo.html` directly in any modern browser.

No build tools or JavaScript libraries are required.

---

## 🎨 Customization

The component exposes CSS variables to make customization simple.

```css
:root{
    --bg:#0f172a;
    --surface:#1e293b;

    --primary:#7c3aed;
    --secondary:#06b6d4;

    --duration:700ms;
    --easing:cubic-bezier(.22,1,.36,1);

    --tilt:18deg;
    --scale:.82;

    --radius:24px;
    --modal-width:520px;
}
```

You can customize:

- Animation duration
- Animation easing
- Perspective tilt angle
- Initial scale
- Modal width
- Border radius
- Colors
- Typography
- Background gradients

---

## ♿ Accessibility

This component includes:

- Semantic `role="dialog"`
- `aria-modal="true"`
- `aria-labelledby`
- `aria-describedby`
- Keyboard focus indicators
- Large interactive controls
- Responsive layout for mobile devices

---

## 📱 Responsive Design

The layout automatically adapts to smaller screens:

- Buttons stack vertically
- Typography scales appropriately
- Modal width adjusts to the viewport
- Spacing is optimized for touch devices

---

## 🌐 Browser Support

Tested in:

- ✅ Chrome
- ✅ Firefox
- ✅ Edge

Expected to work in:

- Safari

---

## 💡 Why it fits EaseMotion CSS

This component follows the **EaseMotion CSS** philosophy by showcasing a reusable, animation-first UI pattern built entirely with modern CSS. The smooth 3D Perspective Tilt effect demonstrates advanced motion without relying on JavaScript, while remaining readable, lightweight, responsive, and easy to customize.

---

## 📄 License

This example is intended for inclusion in the **EaseMotion CSS** examples library and follows the repository's licensing terms.