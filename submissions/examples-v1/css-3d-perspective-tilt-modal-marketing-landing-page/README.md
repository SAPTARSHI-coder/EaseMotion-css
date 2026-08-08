# CSS 3D Perspective Tilt Modal for Marketing Landing Page Layouts

A **pure CSS 3D Perspective Tilt Modal** designed for **Marketing Landing Page** layouts. The modal features a smooth perspective tilt animation that creates a modern, engaging user experience without requiring JavaScript.

---

## ✨ Features

- 🎨 Pure HTML & CSS implementation
- 🎯 Smooth 3D Perspective Tilt animation
- 📱 Fully responsive design
- ♿ Keyboard-accessible modal
- ⚙️ Customizable using CSS custom properties
- 🚀 Zero JavaScript required
- 🌐 Cross-browser compatible
- 💡 Lightweight and reusable

---

## 📂 Folder Structure

```text
submissions/
└── examples/
    └── css-3d-perspective-tilt-modal-marketing-landing-page/
        ├── demo.html
        ├── style.css
        └── README.md
```

---

## 🚀 Usage

Include the stylesheet:

```html
<link rel="stylesheet" href="style.css">
```

Create a trigger button:

```html
<a href="#modal" class="open-btn">Launch Modal</a>
```

Create the modal:

```html
<div id="modal" class="modal">
    <div class="overlay">
        <div class="modal-box">
            <!-- Modal Content -->
        </div>
    </div>
</div>
```

---

## 🎨 Customization

Modify the CSS variables in `:root`:

```css
:root{
    --primary:#2563eb;
    --primary-dark:#1d4ed8;
    --duration:.7s;
    --easing:cubic-bezier(.22,1,.36,1);
    --tilt:18deg;
    --scale:.88;
    --modal-width:560px;
    --radius:18px;
}
```

You can customize:

- Primary colors
- Animation duration
- Animation easing
- Tilt angle
- Modal scale
- Width
- Border radius
- Shadows

---

## 📱 Responsive Design

The component automatically adapts to:

- Desktop
- Laptop
- Tablet
- Mobile devices

On smaller screens, action buttons stack vertically for improved usability.

---

## 🌐 Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

---

## 🎯 Why it fits EaseMotion CSS

This component follows the EaseMotion CSS philosophy by providing:

- Pure CSS animations with zero JavaScript
- Readable and maintainable code
- Responsive and accessible design
- Easy customization through CSS custom properties
- Reusable animation component suitable for modern marketing landing pages

---

## 📄 License

Created for the **EaseMotion CSS** examples library as a reusable **CSS 3D Perspective Tilt Modal** component for Marketing Landing Page layouts.