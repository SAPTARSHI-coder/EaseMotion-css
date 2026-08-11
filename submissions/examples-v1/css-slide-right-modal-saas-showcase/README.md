# CSS Slide-Right Modal for SaaS Showcase Layouts

A **pure CSS Slide-Right Modal** designed for modern **SaaS Showcase** interfaces. The component provides a smooth slide-in animation from the right, responsive layout, keyboard-friendly structure, and customizable CSS variables without requiring any JavaScript frameworks.

---

## ✨ Features

- 🚀 Pure CSS implementation
- 🎨 Modern SaaS-inspired design
- ➡️ Smooth slide-right opening animation
- 📱 Fully responsive
- ♿ Keyboard-accessible (`tabindex`, `role="dialog"`, `aria-modal`)
- 🎛️ Easily customizable using CSS custom properties
- ⚡ Lightweight and easy to integrate
- 🛠 No external libraries required

---

## 📂 Folder Structure

```text
submissions/
└── examples/
    └── css-slide-right-modal-saas-showcase/
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

Use the modal markup:

```html
<a href="#modal" class="open-btn">Launch Modal</a>

<div id="modal" class="modal">
    <div class="modal-overlay">
        <div class="modal-content">
            <!-- Modal Content -->
        </div>
    </div>
</div>
```

---

## 🎨 Customization

Modify the CSS variables in `style.css`:

```css
:root{
    --primary:#4f46e5;
    --duration:.55s;
    --easing:cubic-bezier(.22,1,.36,1);
    --modal-width:620px;
    --radius:18px;
}
```

You can easily customize:

- Animation duration
- Animation easing
- Primary color
- Modal width
- Border radius
- Shadows
- Background colors

---

## 🌐 Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari

---

## 📱 Responsive Design

The modal automatically adapts to:

- Desktop
- Laptop
- Tablet
- Mobile devices

Buttons stack vertically on smaller screens for improved usability.

---

## 🎯 Why it fits EaseMotion CSS

This component follows EaseMotion CSS principles by providing:

- Human-readable CSS
- Pure CSS animation
- Reusable modal component
- Smooth interaction effects
- Zero JavaScript animation dependencies
- Easy customization through CSS variables

---

## 📄 License

Created for the **EaseMotion CSS** examples library as a reusable animation component for modern SaaS interfaces.