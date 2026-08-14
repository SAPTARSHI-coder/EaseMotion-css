# CSS Horizontal Roll Modal for Interactive Interface Layouts

A **pure CSS Horizontal Roll Modal** designed for **Interactive Interface** layouts. The modal enters with a smooth horizontal rolling animation, requiring **no JavaScript**, while remaining responsive, accessible, and easy to customize through CSS custom properties.

---

## ✨ Features

- 🎨 Pure HTML & CSS implementation
- 🔄 Smooth Horizontal Roll animation
- 📱 Fully responsive layout
- ♿ Keyboard-accessible modal structure
- ⚙️ Easily customizable with CSS variables
- 🚀 Lightweight and reusable
- 🌐 Cross-browser compatible
- 💻 Designed for modern Interactive Interface layouts

---

## 📂 Folder Structure

```text
submissions/
└── examples/
    └── css-horizontal-roll-modal-interactive-interface/
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

The component exposes common settings through CSS variables.

```css
:root{
    --primary:#2563eb;
    --primary-dark:#1d4ed8;
    --duration:.65s;
    --easing:cubic-bezier(.22,1,.36,1);
    --modal-width:650px;
    --radius:18px;
}
```

You can customize:

- Primary colors
- Animation duration
- Animation easing
- Modal width
- Border radius
- Shadows
- Background colors

---

## 📱 Responsive Design

The modal automatically adapts to:

- Desktop
- Laptop
- Tablet
- Mobile devices

Buttons stack vertically on smaller screens to improve usability.

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
- Human-readable and maintainable code
- Responsive and accessible design
- Easy customization using CSS custom properties
- Reusable animation component suitable for modern interactive interfaces

---

## 📄 License

Created for the **EaseMotion CSS** examples library as a reusable Horizontal Roll Modal component for Interactive Interface layouts.
```